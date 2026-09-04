export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function blogMarkdownToHtml(markdown: string) {
  const lines = escapeHtml(markdown).replace(/\r/g, "").split("\n");
  const html: string[] = [];
  let listItems: string[] = [];

  const closeList = () => {
    if (listItems.length > 0) {
      html.push(`<ul>${listItems.join("")}</ul>`);
      listItems = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      continue;
    }
    const listMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (listMatch) {
      listItems.push(`<li>${listMatch[1]}</li>`);
      continue;
    }
    closeList();
    if (/^###\s+/.test(trimmed)) html.push(`<h3>${trimmed.slice(4)}</h3>`);
    else if (/^##\s+/.test(trimmed)) html.push(`<h2>${trimmed.slice(3)}</h2>`);
    else if (/^#\s+/.test(trimmed)) html.push(`<h2>${trimmed.slice(2)}</h2>`);
    else if (/^---+$/.test(trimmed)) html.push("<hr />");
    else html.push(`<p>${trimmed}</p>`);
  }
  closeList();

  return html.join("")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

const API_BASE_URL = "https://crm.muftlo.in/api/public/blogs";
const API_ORIGIN = "https://crm.muftlo.in";

function getTenantDomain() {
  return import.meta.env.VITE_TENANT_DOMAIN || window.location.hostname;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? value as Record<string, unknown> : {};
}

function getString(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    if (typeof record[key] === "string" && record[key]) {
      return record[key];
    }
  }
  return "";
}

function getMediaUrl(record: Record<string, unknown>) {
  const value = getString(record, ["image", "image_url", "featured_image", "featuredImage", "cover_image", "coverImage", "thumbnail"]);
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return `${API_ORIGIN}/${value.replace(/^\/+/, "")}`;
}

function getTags(record: Record<string, unknown>) {
  const tags = record.tags;
  if (Array.isArray(tags)) {
    return tags.map((tag) => typeof tag === "string" ? tag : getString(asRecord(tag), ["name", "title"])).filter(Boolean);
  }
  return [];
}

export function normalizeBlogPost(value: unknown, index = 0): BlogPost {
  const record = asRecord(value);
  const category = getString(record, ["category", "category_name", "type"]);
  return {
    id: String(record.id ?? record._id ?? index),
    slug: getString(record, ["slug", "url_slug", "permalink"]),
    title: getString(record, ["title", "name"]) || "Untitled Blog Post",
    category,
    image: getMediaUrl(record),
    tags: getTags(record),
    excerpt: getString(record, ["excerpt", "summary", "short_description", "description"]),
    content: getString(record, ["content", "body", "html_content", "description"]),
    author: getString(record, ["author", "author_name", "created_by"]) || "Manghrani Advisory",
    publishedAt: getString(record, ["published_at", "publishedAt", "created_at", "date"]),
  };
}

async function request(path = "") {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: "application/json",
      "x-tenant-domain": getTenantDomain(),
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load blog posts right now.");
  }

  return response.json() as Promise<unknown>;
}

function getList(value: unknown) {
  if (Array.isArray(value)) return value;
  const record = asRecord(value);
  for (const key of ["blogs", "posts", "data", "items", "results"]) {
    if (Array.isArray(record[key])) return record[key];
  }
  return [];
}

function getSingle(value: unknown) {
  const record = asRecord(value);
  return record.blog || record.post || record.data || value;
}

export async function fetchTenantBlogs() {
  const data = await request();
  return getList(data).map((post, index) => normalizeBlogPost(post, index));
}

export async function fetchBlogPost(slug: string) {
  const data = await request(`/${encodeURIComponent(slug)}`);
  return normalizeBlogPost(getSingle(data));
}

export async function fetchSimilarBlogs(slug: string) {
  const data = await request(`/${encodeURIComponent(slug)}/similar`);
  return getList(data).map((post, index) => normalizeBlogPost(post, index));
}