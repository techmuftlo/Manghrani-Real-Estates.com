import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { blogMarkdownToHtml, fetchBlogPost, fetchSimilarBlogs, type BlogPost } from "../services/blogApi";

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

  return (
    <>
      <Header variant="one" />
      <main>
        <PageHero title={post?.title || "Blog Details"} breadcrumb="Blog Details" />
        <section className="renvia-blog-details-sec pt-120 pb-70">
          <div className="container">
            {isLoading && <p className="text-center">Loading blog post...</p>}
            {!isLoading && error && <p className="text-center text-danger">{error}</p>}
            {!isLoading && !error && post && (
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11 col-md-12">
                  <article className="blog-details-wrapper">
                    {post.image && (
                      <div className="post-thumbnail">
                        <img src={post.image} alt={post.title} className="img-fluid w-100" />
                      </div>
                    )}
                    <div className="post-content mt-30">
                      <div className="post-meta">
                        <span><i className="far fa-user" /> By {post.author}</span>
                        {post.publishedAt && <span className="ms-3">{formatDate(post.publishedAt)}</span>}
                      </div>
                      <h1 className="title">{post.title}</h1>
                      {post.category && <p className="mb-3"><strong>{post.category}</strong></p>}
                      {post.excerpt && <p>{post.excerpt}</p>}
                      {post.content && (
                        <div dangerouslySetInnerHTML={{ __html: blogMarkdownToHtml(post.content) }} />
                      )}
                      {post.tags.length > 0 && (
                        <div className="tag-links mt-30">
                          <span>Tags:</span>
                          {post.tags.map((tag) => (
                            <Link key={tag} to={`/blog-grid?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            )}

            {!isLoading && !error && similarPosts.length > 0 && (
              <div className="row mt-60">
                <div className="col-lg-12"><h3 className="mb-30">Similar Blogs</h3></div>
                {similarPosts.map((similarPost) => (
                  <div className="col-xl-4 col-md-6 col-sm-12" key={similarPost.id}>
                    <div className="renvia-blog-post-item style-one mb-30">
                      {similarPost.image && (
                        <div className="post-thumbnail">
                          <img src={similarPost.image} alt={similarPost.title} />
                        </div>
                      )}
                      <div className="post-content">
                        {similarPost.category && <div className="post-tags"><span>{similarPost.category}</span></div>}
                        <h4 className="title">
                          <Link to={`/blog-details/${similarPost.slug || similarPost.id}`}>{similarPost.title}</Link>
                        </h4>
                        {similarPost.excerpt && <p>{similarPost.excerpt}</p>}
                        <Link to={`/blog-details/${similarPost.slug || similarPost.id}`} className="read-more style-one">
                          Read Details <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer variant="v1" showTopCta={true} />
    </>
  );
}
