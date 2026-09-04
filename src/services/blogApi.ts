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

export type BlogHeading = {
  id: string;
  title: string;
  level: 2 | 3;
};

export function blogHeadingId(value: string) {
  return value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "article-section";
}

export function extractBlogHeadings(markdown: string): BlogHeading[] {
  return markdown
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim().match(/^(##|###)\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      id: blogHeadingId(match[2]),
      title: match[2].replace(/[*_]/g, ""),
      level: match[1].length as 2 | 3,
    }));
}

export function extractBlogSection(markdown: string, title: string) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const target = title.toLowerCase();
  const start = lines.findIndex((line) => line.replace(/^#+\s*/, "").trim().toLowerCase() === target);
  if (start === -1) return "";

  const content: string[] = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^#{1,3}\s+/.test(lines[index].trim())) break;
    content.push(lines[index]);
  }
  return content.join("\n").trim();
}

export function removeBlogSection(markdown: string, title: string) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const target = title.toLowerCase();
  const start = lines.findIndex((line) => line.replace(/^#+\s*/, "").trim().toLowerCase() === target);
  if (start === -1) return markdown;

  let end = start + 1;
  while (end < lines.length && !/^#{1,3}\s+/.test(lines[end].trim())) end += 1;
  return [...lines.slice(0, start), ...lines.slice(end)].join("\n").trim();
}

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
  let orderedListItems: string[] = [];

  const formatInline = (value: string) => value
    .replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/_(.+?)_/g, "<em>$1</em>");

  const closeList = () => {
    if (listItems.length > 0) {
      html.push(`<ul>${listItems.map(formatInline).join("")}</ul>`);
      listItems = [];
    }
    if (orderedListItems.length > 0) {
      html.push(`<ol>${orderedListItems.map(formatInline).join("")}</ol>`);
      orderedListItems = [];
    }
  };

  const isTableRow = (value: string) => /^\|?\s*[^|]+(?:\|[^|]+)+\s*\|?$/.test(value);
  const isTableDivider = (value: string) => /^\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?$/.test(value);
  const parseTableCells = (value: string) => value.replace(/^\|\s*|\s*\|$/g, "").split("|").map((cell) => cell.trim());

  const addTable = (tableLines: string[]) => {
    const headerCells = parseTableCells(tableLines[0]);
    const bodyLines = tableLines.slice(2);
    const header = `<thead><tr>${headerCells.map((cell) => `<th>${formatInline(cell)}</th>`).join("")}</tr></thead>`;
    const body = bodyLines.map((tableLine) => {
      const cells = parseTableCells(tableLine);
      return `<tr>${cells.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`;
    }).join("");
    html.push(`<div class="blog-table-wrap"><table>${header}<tbody>${body}</tbody></table></div>`);
  };

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      continue;
    }
    const nextLine = lines[lineIndex + 1]?.trim() || "";
    if (isTableRow(trimmed) && isTableDivider(nextLine)) {
      closeList();
      const tableLines = [trimmed, nextLine];
      let tableIndex = lineIndex + 2;
      while (tableIndex < lines.length && isTableRow(lines[tableIndex].trim())) {
        tableLines.push(lines[tableIndex].trim());
        tableIndex += 1;
      }
      addTable(tableLines);
      lineIndex = tableIndex - 1;
      continue;
    }
    const listMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (listMatch) {
      listItems.push(`<li>${listMatch[1]}</li>`);
      continue;
    }
    const orderedListMatch = trimmed.match(/^\d+[.)]\s+(.+)$/);
    if (orderedListMatch) {
      orderedListItems.push(`<li>${orderedListMatch[1]}</li>`);
      continue;
    }
    closeList();
    if (/^###\s+/.test(trimmed)) {
      const title = trimmed.slice(4);
      html.push(`<h3 id="${blogHeadingId(title)}">${formatInline(title)}</h3>`);
    } else if (/^##\s+/.test(trimmed)) {
      const title = trimmed.slice(3);
      html.push(`<h2 id="${blogHeadingId(title)}">${formatInline(title)}</h2>`);
    } else if (/^#\s+/.test(trimmed)) {
      const title = trimmed.slice(2);
      html.push(`<h2 id="${blogHeadingId(title)}">${formatInline(title)}</h2>`);
    }
    else if (/^---+$/.test(trimmed)) html.push("<hr />");
    else html.push(`<p>${formatInline(trimmed)}</p>`);
  }
  closeList();

  return html.join("");
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
  if (typeof tags === "string") {
    return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
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