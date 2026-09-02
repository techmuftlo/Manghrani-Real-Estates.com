import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function BlogDetails() {
  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Blog Details" breadcrumb="Blog Details" />

        {/* ====== Start Blog Details Section ====== */}
        <section className="renvia-blog-details-sec pt-120 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 col-md-12">
                <div className="blog-details-wrapper">

                  {/* ====== Blog Post ====== */}
                  <div className="blog-post-main">
                    <div className="blog-post-item">

                      {/* Main Image */}
                      <div className="post-thumbnail">
                        <img
                          src="/assets/images/innerpage/blog/blog-single1.jpg"
                          alt="Industrial Real Estate"
                          className="img-fluid w-100"
                        />
                      </div>

                      {/* Content */}
                      <div className="post-content">

                        {/* Author Only */}
                        <div className="post-meta">
                          <span>
                            <i className="far fa-user" /> By{" "}
                            <Link to="/about">Admin</Link>
                          </span>
                        </div>

                        {/* Title */}
                        <h1 className="title">
                          How Urbanization & Smart Tech Are Shaping Modern Real
                          Estate
                        </h1>

                        <p>
                          Urban development in major economic hubs is undergoing
                          a seismic transformation. The convergence of
                          sustainable architecture, modular construction, and
                          smart home automation enables developers to deliver
                          spaces that maximize both lifestyle quality and
                          long-term capital appreciation.
                        </p>

                        <p>
                          Investors seeking resilient yields are increasingly
                          focusing on mixed-use assets and transit-oriented
                          corridors that offer high footfall and lower vacancy
                          risks across changing market cycles.
                        </p>

                        {/* Quote */}
                        <blockquote>
                          <div className="content">
                            <p>
                              “Sustainable developments with strong ESG
                              compliance are not only better for the environment,
                              they consistently command superior asset
                              valuations and tenant retention over a 10-year
                              horizon.”
                            </p>

                            <h5>
                              Martin & Michiel, Lead Strategists
                            </h5>
                          </div>
                        </blockquote>

                        <p>
                          Our in-house design and project management teams
                          evaluate zoning trends, infrastructure expansions, and
                          demographic shifts to ensure each development exceeds
                          market standards.
                        </p>

                        {/* Two Images */}
                        <div className="row my-4">
                          <div className="col-md-6 mb-4 mb-md-0">
                            <div className="axis-image">
                              <img
                                src="/assets/images/innerpage/blog/blog-single2.jpg"
                                alt="Industrial property interior"
                                className="img-fluid rounded w-100"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="axis-image">
                              <img
                                src="/assets/images/innerpage/blog/blog-single3.jpg"
                                alt="Industrial property exterior"
                                className="img-fluid rounded w-100"
                              />
                            </div>
                          </div>
                        </div>

                        <p>
                          By integrating renewable power solutions, high-grade
                          soundproofing, and concierge technology, modern
                          developments offer unparalleled residential luxury
                          while minimizing operating costs.
                        </p>

                        <p>
                          For businesses and investors, selecting the right
                          industrial property requires careful evaluation of
                          location, connectivity, infrastructure, property
                          condition, and future growth potential.
                        </p>

                      </div>
                    </div>

                    {/* ====== Tags & Share ====== */}
                    <div className="entry-footer mt-30">

                      <div className="tag-links">
                        <span>Tag:</span>

                        <Link to="/blog-grid?tag=Factory">
                          Factory
                        </Link>

                        <Link to="/blog-grid?tag=Industrial%20Property">
                          Industrial Property
                        </Link>

                        <Link to="/blog-grid?tag=Sale%20%2F%20Rent">
                          Sale / Rent
                        </Link>

                        <Link to="/blog-grid?tag=Investment">
                          Investment
                        </Link>
                      </div>

                      <div className="social-share">
                        <span>Share:</span>

                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Facebook"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>

                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram" />
                        </a>

                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>

                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== End Blog Details Section ====== */}
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}