import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  blogMarkdownToHtml,
  extractBlogHeadings,
  extractBlogSection,
  fetchBlogPost,
  fetchSimilarBlogs,
  removeBlogSection,
  type BlogHeading,
  type BlogPost,
} from "../services/blogApi";

function formatDate(value: string) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
}

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [similarPosts, setSimilarPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!slug) {
      setError("This blog post could not be found.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError("");
    Promise.all([fetchBlogPost(slug), fetchSimilarBlogs(slug)])
      .then(([blogPost, relatedPosts]) => {
        setPost(blogPost);
        setSimilarPosts(relatedPosts);
      })
      .catch((requestError: unknown) => {
        setError(requestError instanceof Error ? requestError.message : "Unable to load this blog post right now.");
      })
      .finally(() => setIsLoading(false));
  }, [slug]);

  const headings: BlogHeading[] = post ? extractBlogHeadings(post.content) : [];
  const tableOfContents = headings.filter((heading) => heading.level === 2).length >= 3
    ? headings.filter((heading) => heading.level === 2).slice(0, 8)
    : headings.slice(0, 8);
  const takeaways = post ? extractBlogSection(post.content, "Key Takeaways") : "";
  const articleContent = post ? removeBlogSection(post.content, "Key Takeaways") : "";

  useEffect(() => {
    if (tableOfContents.length === 0) return undefined;

    const updateActiveSection = () => {
      const current = tableOfContents
        .map((heading) => ({ heading, element: document.getElementById(heading.id) }))
        .filter((item): item is { heading: BlogHeading; element: HTMLElement } => Boolean(item.element))
        .filter((item) => item.element.getBoundingClientRect().top <= 180)
        .pop();
      setActiveSection(current?.heading.id || tableOfContents[0].id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [post, tableOfContents.length]);

  return (
    <>
      <Header variant="one" />
      <main>
        {isLoading && <div className="blog-loading-state">Loading blog post...</div>}
        {!isLoading && error && <div className="blog-loading-state text-danger">{error}</div>}
        {!isLoading && !error && post && (
          <>
            <section
              className="blog-article-hero"
              style={{ backgroundImage: `linear-gradient(90deg, rgba(15, 22, 38, 0.86), rgba(15, 22, 38, 0.48)), url('${post.image || "/assets/images/innerpage/bg/page-bg.jpeg"}')` }}
            >
              <div className="container">
                <div className="blog-article-hero-content">
                  <span className="blog-article-kicker">{post.category || "Industry Insights"}</span>
                  <h1>{post.title}</h1>
                  <div className="blog-article-breadcrumb">
                    <Link to="/">Home</Link><span>/</span><Link to="/blog-grid">Blog</Link><span>/</span><strong>{post.title}</strong>
                  </div>
                </div>
              </div>
            </section>

            <section className="blog-article-section">
              <div className="container">
                <div className="blog-article-layout">
                  <article className="blog-article-card">
                    {post.image && (
                      <div className="blog-featured-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                    )}
                    <div className="blog-article-card-body">
                      <div className="blog-article-meta">
                        <span><i className="far fa-user" /> By {post.author}</span>
                        {post.publishedAt && <span><i className="far fa-calendar-alt" /> {formatDate(post.publishedAt)}</span>}
                      </div>
                      {post.excerpt && <p className="blog-introduction">{post.excerpt}</p>}

                      {takeaways && (
                        <section className="blog-takeaways" aria-labelledby="takeaways-title">
                          <div className="blog-takeaways-icon"><i className="far fa-lightbulb" /></div>
                          <div>
                            <span className="blog-section-label">At A Glance</span>
                            <h2 id="takeaways-title">Key Takeaways</h2>
                            <div dangerouslySetInnerHTML={{ __html: blogMarkdownToHtml(takeaways) }} />
                          </div>
                        </section>
                      )}

                      {tableOfContents.length > 0 && (
                        <nav className="blog-table-of-contents" aria-label="Table of contents">
                          <div className="blog-section-label">Read The Article</div>
                          <h2>In This Article</h2>
                          <ol>
                            {tableOfContents.map((heading) => (
                              <li key={heading.id} className={activeSection === heading.id ? "is-active" : ""}>
                                <a href={`#${heading.id}`}>{heading.title}</a>
                              </li>
                            ))}
                          </ol>
                        </nav>
                      )}

                      <div className="blog-article-content" dangerouslySetInnerHTML={{ __html: blogMarkdownToHtml(articleContent) }} />

                      {post.tags.length > 0 && (
                        <div className="blog-article-tags">
                          <span>Topics</span>
                          {post.tags.map((tag) => <Link key={tag} to={`/blog-grid?tag=${encodeURIComponent(tag)}`}>#{tag}</Link>)}
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {similarPosts.length > 0 && (
              <section className="blog-related-section">
                <div className="container">
                  <div className="blog-related-heading">
                    <div>
                      <span className="blog-section-label">Keep Exploring</span>
                      <h2>Related Articles</h2>
                    </div>
                    <Link to="/blog-grid" className="theme-btn style-one">View All Articles <i className="far fa-arrow-right" /></Link>
                  </div>
                  <div className="row">
                    {similarPosts.slice(0, 3).map((similarPost) => (
                      <div className="col-xl-4 col-md-6 col-sm-12" key={similarPost.id}>
                        <article className="blog-related-card">
                          {similarPost.image && <div className="blog-related-image"><img src={similarPost.image} alt={similarPost.title} /></div>}
                          <div className="blog-related-body">
                            <span>{similarPost.category || "Industry Insights"}</span>
                            <h3><Link to={`/blog-details/${similarPost.slug || similarPost.id}`}>{similarPost.title}</Link></h3>
                            {similarPost.excerpt && <p>{similarPost.excerpt}</p>}
                            <Link to={`/blog-details/${similarPost.slug || similarPost.id}`} className="blog-related-link">Read More <i className="far fa-arrow-right" /></Link>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <Footer variant="v1" showTopCta={true} />
    </>
  );
}
