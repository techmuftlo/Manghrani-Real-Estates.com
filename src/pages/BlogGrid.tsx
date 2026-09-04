import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { fetchTenantBlogs, type BlogPost } from "../services/blogApi";

export default function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTenantBlogs()
      .then(setPosts)
      .catch((requestError: unknown) => {
        setError(requestError instanceof Error ? requestError.message : "Unable to load blog posts right now.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Blog Grid" breadcrumb="Blog Grid" />

        {/* ====== Start Blog Grid Section ====== */}
        <section className="renvia-blog-grid-sec pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-start blog-grid-list">

              {isLoading && <p className="text-center">Loading blog posts...</p>}
              {!isLoading && error && <p className="text-center text-danger">{error}</p>}
              {!isLoading && !error && posts.length === 0 && <p className="text-center">No blog posts are available yet.</p>}

              {!isLoading && !error && posts.map((post) => (
                <div
                  key={post.id}
                  className="col-xl-4 col-md-6 col-sm-12"
                >
                  <div className="renvia-blog-post-item style-one mb-30">

                    {/* Image */}
                    {post.image && (
                      <div className="post-thumbnail">
                        <img src={post.image} alt={post.title} />
                      </div>
                    )}

                    {/* Content */}
                    <div className="post-content">

                      {/* Category */}
                      <div className="post-tags">
                        <span>
                          <Link
                            to={`/blog-grid?category=${encodeURIComponent(
                              post.category
                            )}`}
                          >
                            {post.category || "Insights"}
                          </Link>
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="title">
                        <Link to={`/blog-details/${post.slug || post.id}`}>
                          {post.title}
                        </Link>
                      </h4>

                      {/* ====== Tags ====== */}
                      <div className="blog-card-tags">
                        {post.tags.map((tag) => (
                          <Link
                            key={tag}
                            to={`/blog-grid?tag=${encodeURIComponent(tag)}`}
                            className="blog-tag"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>

                      {/* Read More */}
                      <Link
                        to={`/blog-details/${post.slug || post.id}`}
                        className="read-more style-one"
                      >
                        Read Details
                        <i className="far fa-arrow-right" />
                      </Link>

                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>
        {/* ====== End Blog Grid Section ====== */}
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}