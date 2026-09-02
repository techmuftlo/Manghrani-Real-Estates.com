import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function BlogGrid() {
  const posts = [
    {
      id: 1,
      title: "How to Evaluate a Commercial Real Estate Investment",
      category: "Company Insights",
      img: "/assets/images/innerpage/blog/blog-grid1.jpg",
      tags: ["Investment", "Commercial Property", "Buyer"],
    },
    {
      id: 2,
      title: "The Role of ESG in Modern Property Development",
      category: "Sustainability",
      img: "/assets/images/innerpage/blog/blog-grid2.jpg",
      tags: ["Sustainability", "Property", "Development"],
    },
    {
      id: 3,
      title: "Risk Factors to Consider in Property Development",
      category: "Advisory",
      img: "/assets/images/innerpage/blog/blog-grid3.jpg",
      tags: ["Advisory", "Investment", "Property"],
    },
    {
      id: 4,
      title: "How Urbanization Is Shaping Future Real Estate Investments",
      category: "Market Trends",
      img: "/assets/images/innerpage/blog/blog-grid4.jpg",
      tags: ["Market Trends", "Investment", "Real Estate"],
    },
    {
      id: 5,
      title: "Strategies for Long-Term Portfolio Capital Growth",
      category: "Finance",
      img: "/assets/images/innerpage/blog/blog-grid5.jpg",
      tags: ["Finance", "Investment", "Capital Growth"],
    },
    {
      id: 6,
      title: "Green Building Trends: What Investors Need to Know",
      category: "Architecture",
      img: "/assets/images/innerpage/blog/blog-grid6.jpg",
      tags: ["Architecture", "Green Building", "Property"],
    },
    {
      id: 7,
      title: "Signet Breaks Ground on Foundry Lofts in Midtown",
      category: "Development",
      img: "/assets/images/innerpage/blog/blog-grid7.jpg",
      tags: ["Development", "Industrial Property", "Factory"],
    },
    {
      id: 8,
      title: "Transforming Communities: The Impact of Dedicated Real Estate",
      category: "Community",
      img: "/assets/images/innerpage/blog/blog-grid8.jpg",
      tags: ["Community", "Real Estate", "Development"],
    },
    {
      id: 9,
      title: "Smart Home & Automation Innovations in 2025 Residences",
      category: "Technology",
      img: "/assets/images/innerpage/blog/blog-grid9.jpg",
      tags: ["Technology", "Smart Home", "Innovation"],
    },
  ];

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Blog Grid" breadcrumb="Blog Grid" />

        {/* ====== Start Blog Grid Section ====== */}
        <section className="renvia-blog-grid-sec pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">

              {posts.map((post) => (
                <div
                  key={post.id}
                  className="col-xl-4 col-md-6 col-sm-12"
                >
                  <div className="renvia-blog-post-item style-one mb-30">

                    {/* Image */}
                    <div className="post-thumbnail">
                      <img
                        src={post.img}
                        alt={post.title}
                      />
                    </div>

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
                            {post.category}
                          </Link>
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="title">
                        <Link to="/blog-details">
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
                        to="/blog-details"
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

            {/* Pagination */}
            <div className="theme-pagination text-center mt-30">
              <ul>
                <li>
                  <a
                    href="#prev"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="far fa-arrow-left" />
                  </a>
                </li>

                <li>
                  <a
                    href="#1"
                    className="active"
                    onClick={(e) => e.preventDefault()}
                  >
                    01
                  </a>
                </li>

                <li>
                  <a
                    href="#2"
                    onClick={(e) => e.preventDefault()}
                  >
                    02
                  </a>
                </li>

                <li>
                  <a
                    href="#3"
                    onClick={(e) => e.preventDefault()}
                  >
                    03
                  </a>
                </li>

                <li>
                  <a
                    href="#next"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ====== End Blog Grid Section ====== */}
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}