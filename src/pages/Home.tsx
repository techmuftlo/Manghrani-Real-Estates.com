import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import { fetchTenantBlogs, type BlogPost } from "../services/blogApi";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isBlogsLoading, setIsBlogsLoading] = useState(true);
  const heroSlides = [
    {
      bg: "/assets/images/home-one/hero/hero-bg1.jpg",
      title: "Strategic Industrial Real Estate Advisory & Asset Solutions in Jaipur",
      desc: "Delivering bespoke industrial real estate advisory, asset acquisition, corporate leasing, and transaction structuring across Sitapura and Jaipur's premier manufacturing corridors.",
    },
  ];

  useEffect(() => {
    fetchTenantBlogs()
      .then((posts) => setBlogPosts(posts.slice(0, 3)))
      .catch(() => setBlogPosts([]))
      .finally(() => setIsBlogsLoading(false));
  }, []);

  useLayoutEffect(() => {
    document.querySelectorAll<HTMLImageElement>("main img").forEach((image) => {
      image.fetchPriority = "high";
    });
  }, []);

  return (
    <>
      <link rel="preload" as="image" href={heroSlides[0].bg} fetchPriority="high" />
      <Header variant="one" />

      <main>
        {/* ====== Start Hero Section ====== */}
        <section className="renvia-hero_one">
          <div className="hero-dots" />

          <div className="hero-slider">
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: `url('${heroSlides[0].bg}')`,
                }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-10">
                    <div className="hero-content">
                    
                      <h1 className="text-anm">
                        {heroSlides[0].title}
                      </h1>
                      <p>{heroSlides[0].desc}</p>
                      <div className="hero-button-group">
                        <Link
                          to="/projects"
                          className="theme-btn style-one"
                        >
                          View Projects
                          <i className="far fa-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="theme-btn style-one"
                        >
                          Contact Us
                          <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ====== Start About Section ====== */}
        <section className="renvia-about_one pt-100 pb-120">
          <div className="shape">
            <img src="/assets/images/home-one/about/shape.png" alt="shape" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-11">
                <div className="renvia-image-box">
                  <div className="renvia-image image_one">
                    <img
                      src="/assets/images/home-one/about/about-img1.png"
                      alt="about image"
                    />
                  </div>
                  <div className="renvia-image image_two">
                    <img
                      src="/assets/images/home-one/about/about-img2.png"
                      alt="about image"
                    />
                  </div>
                  <div className="renvia-image image_three">
                    <img
                      src="/assets/images/home-one/about/circle-img.png"
                      alt="about image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-11">
                <div className="renvia-content-box mt-5 mt-xl-0">
                  <div className="section-title">
                    <span className="sub-title">
                      STRATEGIC INDUSTRIAL CONSULTING
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                     Strategic Advisory for High-Performance Industrial &amp; Manufacturing Assets
                    </h2>
                  </div>
                  <p>
                    Manghrani Real Estates delivers institutional-grade consulting, asset acquisition due diligence, and corporate leasing solutions tailored for industrial enterprises, manufacturers, and institutional investors.
                  </p>
                  <div className="renvia-features-list">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="renvia-iconic-left-box style-one mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/home-one/icon/icon1.png"
                              alt="icon"
                            />
                          </div>
                          <div className="content">
                            <h5>Industrial Acquisition &amp; Asset Advisory</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="renvia-iconic-left-box style-one mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/home-one/icon/icon2.png"
                              alt="icon"
                            />
                          </div>
                          <div className="content">
                            <h5>Corporate Leasing &amp; Tenancy Strategy</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="check-list style-one">
                    <li>
                      <img
                        src="/assets/images/home-one/gallery/icon.png"
                        alt="icon"
                      />
                      Strategic site selection, asset valuation, and transaction structuring.
                    </li>
                    <li>
                      <img
                        src="/assets/images/home-one/gallery/icon.png"
                        alt="icon"
                      />
                      Authoritative presence across Sitapura and Jaipur's premier industrial corridors.
                    </li>
                  </ul>
                  <h6>
                    We advise leading enterprises and institutional investors with data-driven market intelligence, regulatory clarity, and trusted fiduciary representation.
                  </h6>
                  <div className="renvia-button">
                    <Link to="/about" className="theme-btn style-one">
                      Know More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Service Section ====== */}
        <section
          className="renvia-service_one bg_cover pt-120 pb-80"
          style={{
            backgroundImage:
              "url('/assets/images/home-one/bg/service-bg.jpg')",
          }}
        >
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-8 col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">
                    <img src="/assets/images/line1.png" alt="line" />
                    OUR ADVISORY PRACTICE
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">
                   Comprehensive Industrial Advisory &amp; Strategic Asset Solutions
                  </h2>
                </div>
              </div>
            </div>
            <div className="service-slider-viewport">
              <div className="service-slider">
              <div className="col-lg-3 col-md-6">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4>
                        <Link to="/contact">
                          
                          Industrial Acquisition &amp; Divestment Advisory
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Strategic advisory and rigorous due diligence for acquiring or divesting prime manufacturing facilities across Jaipur.
                    </p>
                    <img
                      src="/assets/images/home-one/services/service-img1.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4>
                        <Link to="/contact">
                          Corporate Lease &amp; Tenancy Advisory
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Customized tenancy structuring, lease negotiation, and space optimization for scalable industrial operations.
                    </p>
                    <img
                      src="/assets/images/home-one/services/service-img2.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4>
                        <Link to="/contact">
                         Industrial Asset Procurement
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      End-to-end guidance in sourcing, evaluating, and securing high-performance industrial land and facilities.
                    </p>
                    <img
                      src="/assets/images/home-one/services/service-img3.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4>
                        <Link to="/contact">
                           Industrial Investment Advisory
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Data-backed investment advisory, risk assessment, and capital allocation for high-yield industrial real estate in Jaipur.
                    </p>
                    <img
                      src="/assets/images/home-one/services/service-img4.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>
               <div className="col-lg-3 col-md-6">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4>
                        <Link to="/contact">
                          Strategic Valuation Consulting
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      In-depth consultation on statutory zoning, property valuations, infrastructure feasibility, and expansion planning.
                    </p>
                    <img
                      src="/assets/images/home-one/services/service-img5.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Industrial Acquisition &amp; Divestment Advisory</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Strategic advisory and rigorous due diligence for acquiring or divesting prime manufacturing facilities across Jaipur.</p>
                    <img src="/assets/images/home-one/services/service-img1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Corporate Lease &amp; Tenancy Advisory</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Customized tenancy structuring, lease negotiation, and space optimization for scalable industrial operations.</p>
                    <img src="/assets/images/home-one/services/service-img2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Industrial Asset Procurement</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>End-to-end guidance in sourcing, evaluating, and securing high-performance industrial land and facilities.</p>
                    <img src="/assets/images/home-one/services/service-img3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Industrial Investment Advisory</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Data-backed investment advisory, risk assessment, and capital allocation for high-yield industrial real estate in Jaipur.</p>
                    <img src="/assets/images/home-one/services/service-img4.png" alt="" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Project Section ====== */}
        <section className="renvia-project_one pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 project-sticky-column">
                <div className="renvia-content-box">
                  <div className="section-title">
                    <span className="sub-title">
                      CURATED PORTFOLIO
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2>
                     Explore Strategic Industrial Portfolios &amp; <br /> Asset Case Studies
                    </h2>
                  </div>
                  <p>
  Delivering bespoke advisory and structured property solutions across Sitapura and Jaipur’s most prominent industrial zones.
</p>
                  <div className="renvia-button mt-35">
                    <Link to="/projects" className="theme-btn style-one">
                      View All Projects <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="renvia-proiect-list">
                  <div className="renvia-project-item style-one mb-30">
                    <div className="project-content">
                      <div className="project-meta">
                        <span className="location">
                          <i className="far fa-map-marker-alt" />
                          Sitapura Industrial Area, Jaipur
                        </span>
                        <span>
                          <Link to="/projects">Industrial Complex</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/projects">Manufacturing &amp; Logistics Facility</Link>
                      </h4>
                      <p>
                        Comprehensive industrial facility evaluated for heavy manufacturing and integrated supply-chain operations.
                      </p>
                      <Link to="/projects" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="project-thumbnail">
                      <img
                        src="/assets/images/home-one/project/project-img1.png"
                        alt="project image"
                      />
                    </div>
                  </div>

                  <div className="renvia-project-item style-one mb-30">
                    <div className="project-content">
                      <div className="project-meta">
                        <span className="location">
                          <i className="far fa-map-marker-alt" />
                          Sitapura Phase III, Jaipur
                        </span>
                        <span>
                          <Link to="/projects">Industrial Park</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/projects">Prime Industrial Park</Link>
                      </h4>
                      <p>
                        High-capacity industrial warehouse and assembly unit structured for long-term operational tenancy.
                      </p>
                      <Link to="/projects" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="project-thumbnail">
                      <img
                        src="/assets/images/home-one/project/project-img2.png"
                        alt="project image"
                      />
                    </div>
                  </div>

                  <div className="renvia-project-item style-one mb-30">
                    <div className="project-content">
                      <div className="project-meta">
                        <span className="location">
                          <i className="far fa-map-marker-alt" />
                          Mansarovar Industrial Area, Jaipur
                        </span>
                        <span>
                          <Link to="/projects">Commercial Logistics</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/projects">Corporate Industrial Hub</Link>
                      </h4>
                      <p>
                        Strategically located commercial and industrial center designed for corporate headquarters and distribution.
                      </p>
                      <Link to="/project-details" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="project-thumbnail">
                      <img
                        src="/assets/images/home-one/project/project-img3.png"
                        alt="project image"
                      />
                    </div>
                  </div>

                  <div className="renvia-project-item style-one mb-30">
                    <div className="project-content">
                      <div className="project-meta">
                        <span className="location">
                          <i className="far fa-map-marker-alt" />
                          Vishwakarma Industrial Area, Jaipur
                        </span>
                        <span>
                          <Link to="/projects">Manufacturing Facility</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/projects">Engineered Production Complex</Link>
                      </h4>
                      <p>
                        Verified industrial real estate asset with robust power, water, and statutory clearances in place.
                      </p>
                      <Link to="/project-details" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="project-thumbnail">
                      <img
                        src="/assets/images/home-one/project/project-img4.png"
                        alt="project image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Intro Video Section ====== */}
        <section
          className="renvia-intro_one bg_cover"
          style={{
            backgroundImage:
              "url('/assets/images/home-one/bg/intro-bg1.jpg')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="play-button text-center">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="video-popup"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "inline-block",
                    }}
                    aria-label="Play video"
                  >
                    <i className="fas fa-play" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Feature Section ====== */}
        <section className="renvia-feature_one pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="renvia-image mb-5 mb-xl-0">
                  <img
                    src="/assets/images/home-one/gallery/feature-img1.png"
                    alt="feature image"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div className="renvia-content-box">
                  <div className="section-title">
                    <span className="sub-title">
                      OUR ADVISORY FRAMEWORK
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                      Data-Driven Advisory Rooted in Deep Industrial Expertise
                    </h2>
                  </div>
                  <p>
                    Manghrani Real Estates delivers institutional-grade consulting, asset evaluation, and transaction management across Jaipur's industrial landscape.
                  </p>
                  <div className="counter-wrap">
                    <div className="row">
                      <div className="col-4">
                        <div className="renvia-counter-item mb-20">
                          <div className="content">
                            <h2>
                              <span className="counter">80</span>
                              <span className="symbol">+</span>
                            </h2>
                            <p>industry partners</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="renvia-counter-item mb-20">
                          <div className="content">
                            <h2>
                              <span className="counter">1.5</span>
                              <span className="symbol">k+</span>
                            </h2>
                            <p>satisfied clients</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="renvia-counter-item mb-20">
                          <div className="content">
                            <h2>
                              <span className="counter">95</span>
                              <span className="symbol">%</span>
                            </h2>
                            <p>success rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-check-wrap">
                    <div className="renvia-button">
                      <Link to="/about" className="theme-btn style-one">
                        Learn More <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <ul className="check-list style-three">
                      <li>Industrial Asset Acquisition &amp; Corporate Leasing Advisory</li>
                      <li>Strategic Investment Consulting &amp; Regulatory Feasibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="renvia-features-items pt-115">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="renvia-feature-item style-one mb-40">
                    <div className="icon">
                      <img
                        src="/assets/images/home-one/icon/icon3.png"
                        alt="icon"
                      />
                      <div className="sm-icon">
                        <img
                          src="/assets/images/home-one/icon/icon7.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5>Asset Acquisition Advisory</h5>
                      <p>
                        In-depth market valuation and strategic guidance for acquiring verified industrial facilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="renvia-feature-item style-one mb-40">
                    <div className="icon">
                      <img
                        src="/assets/images/home-one/icon/icon4.png"
                        alt="icon"
                      />
                      <div className="sm-icon">
                        <img
                          src="/assets/images/home-one/icon/icon8.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5>Industrial Tenancy Advisory</h5>
                      <p>
                        Strategic space planning and lease negotiations tailored to manufacturing operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="renvia-feature-item style-one mb-40">
                    <div className="icon">
                      <img
                        src="/assets/images/home-one/icon/icon5.png"
                        alt="icon"
                      />
                      <div className="sm-icon">
                        <img
                          src="/assets/images/home-one/icon/icon9.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5>Site Selection &amp; Sourcing</h5>
                      <p>
                       Data-backed location analysis and asset sourcing for operational scalability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="renvia-feature-item style-one mb-40">
                    <div className="icon">
                      <img
                        src="/assets/images/home-one/icon/icon6.png"
                        alt="icon"
                      />
                      <div className="sm-icon">
                        <img
                          src="/assets/images/home-one/icon/icon10.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5>Investment &amp; Capital Strategy</h5>
                      <p>
                       Expert portfolio advisory focused on long-term capital appreciation and operational yield.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Team Section ====== */}
        <section className="renvia-team-sec pt-120 pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-45">
                  <span className="sub-title">
                    <img src="/assets/images/line1.png" alt="line" />
                    SENIOR ADVISORY LEADERSHIP
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">Specialized Industrial Real Estate Advisory Leadership</h2>
                </div>
              </div>
            </div>
            {/* ====== Start Manghrani Leadership Section ====== */}

<div className="row">
  <div className="col-12">

    <div className="mre-leadership-card">

      {/* ================= LEFT IMAGE ================= */}
      <div className="mre-leadership-image">

        <img
          src="/assets/images/home-one/team/team-img1.png"
          alt="Manghrani Real Estates"
        />

        <div className="mre-image-overlay"></div>

       <div className="mre-image-badge">
  <span className="mre-founder-name">Rahul Manghrani</span>
  <span className="mre-founder-designation">Founder</span>
</div>

      </div>


      {/* ================= RIGHT CONTENT ================= */}
      <div className="mre-leadership-content">

        <span className="mre-leadership-label">
          STRATEGIC REAL ESTATE CONSULTANCY
        </span>

        <h3 className="mre-leadership-title">
          Empowering Enterprises Through
          <br />
          <span>Strategic Industrial Advisory</span>
        </h3>

        <p className="mre-leadership-description">
          We deliver specialized advisory services to industrialists,
          institutional investors, and corporate leaders seeking high-potential
          manufacturing facilities and logistics hubs in Jaipur.
        </p>

        <p className="mre-leadership-description">
          From structured asset acquisitions to corporate lease negotiations,
          our team focuses on transparent counsel, verified opportunities,
          and long-term asset value for every client.
        </p>


        {/* ================= HIGHLIGHTS ================= */}
        <div className="mre-leadership-highlights">

          <div className="mre-highlight-item">
            <div className="mre-highlight-icon">
              <i className="far fa-building"></i>
            </div>

            <div>
              <strong>Strategic</strong>
              <span>Asset Consultation</span>
            </div>
          </div>


          <div className="mre-highlight-item">
            <div className="mre-highlight-icon">
              <i className="far fa-handshake"></i>
            </div>

            <div>
              <strong>Trusted</strong>
              <span>Fiduciary Advisory</span>
            </div>
          </div>


          <div className="mre-highlight-item">
            <div className="mre-highlight-icon">
              <i className="far fa-map-marker-alt"></i>
            </div>

            <div>
              <strong>Jaipur</strong>
              <span>Deep Market Intelligence</span>
            </div>
          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mre-leadership-bottom">

          <div className="mre-leadership-company">

            <h4>
              Manghrani Real Estates
            </h4>

            <span>
              Industrial Real Estate &amp; Investment Advisors
            </span>

          </div>


          <div className="mre-leadership-social">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>

            <a
              href="https://wa.me/919950000550"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
</div>


{/* ====== Manghrani Leadership CSS ====== */}

<style>{`

/* =====================================================
   MANGHRANI LEADERSHIP
===================================================== */

.mre-leadership-card{
  width:100%;
  display:flex;
  align-items:stretch;
  background:#ffffff;

  border-radius:24px;
  overflow:hidden;

  margin-bottom:40px;
}


/* =====================================================
   IMAGE
===================================================== */

.mre-leadership-image{
  width:42%;
  min-height:560px;
  position:relative;
  overflow:hidden;
  background:#172337;
}

.mre-leadership-image img{
  width:100%;
  height:100%;
  min-height:560px;
  display:block;
  object-fit:cover;
  object-position:100% 25%;
  transition:transform .7s ease;
}

.mre-leadership-card:hover .mre-leadership-image img{
  transform:scale(1.04);
}


/* =====================================================
   IMAGE OVERLAY
===================================================== */

.mre-image-overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(
    to top,
    rgba(8,18,32,.72),
    rgba(8,18,32,.05) 65%
  );
  pointer-events:none;
}


/* =====================================================
   IMAGE BADGE
===================================================== */

.mre-image-badge{
  position:absolute;
  left:30px;
  bottom:30px;
  display:flex;
  align-items:center;
  gap:12px;
  z-index:2;
}

.mre-image-badge span{

  color:#ffffff;
 
}

.mre-image-badge small{
  color:#ffffff;
  font-size:13px;
  letter-spacing:1.2px;
  text-transform:uppercase;
  font-weight:600;
}
  .mre-image-badge {
  display: flex;
  flex-direction: column;
  align-items: center; /* center text */
  gap: 2px;
}

.mre-founder-name {
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
}

.mre-founder-designation {
  display: block;
  font-size: 13px;
  font-weight: 500;
  opacity: 0.8;
  line-height: 1.2;
}


/* =====================================================
   CONTENT
===================================================== */

.mre-leadership-content{
  width:58%;
  padding:58px 60px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}


/* =====================================================
   LABEL
===================================================== */

.mre-leadership-label{
  display:inline-block;
  color:#ff4136;
  font-size:13px;
  font-weight:700;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:16px;
}


/* =====================================================
   TITLE
===================================================== */

.mre-leadership-title{
  margin:0 0 24px;
  color:#1c1c25;
  font-size:42px;
  line-height:1.2;
  font-weight:550;
  letter-spacing:-.6px;
}

.mre-leadership-title span{
  color:#1c1c25;
}


/* =====================================================
   DESCRIPTION
===================================================== */

.mre-leadership-description{
  margin:0 0 15px;
  color:#6f7480;
  font-size:15px;
  line-height:1.9;
  max-width:680px;
}


/* =====================================================
   HIGHLIGHTS
===================================================== */

.mre-leadership-highlights{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
  margin-top:25px;
  margin-bottom:30px;
}

.mre-highlight-item{
  display:flex;
  align-items:center;
  gap:10px;
  padding:14px 10px;
  border:1px solid #eeeae2;
  border-radius:12px;
  background:#faf9f6;
  transition:all .3s ease;
}

.mre-highlight-item:hover{
  border-color:#c6a15b;
  transform:translateY(-3px);
}

.mre-highlight-icon{
  width:38px;
  height:38px;
  min-width:38px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  background:#f2eadb;
  color:#ff4136;
  font-size:14px;
}

.mre-highlight-item strong{
  display:block;
  color:#172337;
  font-size:13px;
  font-weight:700;
  line-height:1.3;
}

.mre-highlight-item span{
  display:block;
  color:#858994;
  font-size:11px;
  line-height:1.4;
  margin-top:2px;
}


/* =====================================================
   BOTTOM
===================================================== */

.mre-leadership-bottom{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  padding-top:25px;
  border-top:1px solid #e9e5dc;
}


/* =====================================================
   COMPANY
===================================================== */

.mre-leadership-company h4{
  margin:0 0 5px;
  color:#172337;
  font-size:20px;
  font-weight:700;
}

.mre-leadership-company span{
  color:#6f7480;
  font-size:13px;
  font-weight:500;
}


/* =====================================================
   SOCIAL
===================================================== */

.mre-leadership-social{
  display:flex;
  align-items:center;
  gap:8px;
}

.mre-leadership-social a{
  width:38px;
  height:38px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid #e5e1d9;
  border-radius:50%;
  background:#ffffff;
  color:#172337;
  font-size:13px;
  text-decoration:none;
  transition:all .3s ease;
}

.mre-leadership-social a:hover{
  background:#ff4136;
  border-color:#172337;
  color:#ffffff;
  transform:translateY(-3px);
}


/* =====================================================
   LARGE TABLET
===================================================== */

@media(max-width:1199px){

  .mre-leadership-content{
    padding:45px 40px;
  }

  .mre-leadership-title{
    font-size:36px;
  }

  .mre-leadership-highlights{
    grid-template-columns:1fr;
  }

  .mre-highlight-item{
    padding:12px;
  }

}


/* =====================================================
   TABLET
===================================================== */

@media(max-width:991px){

  .mre-leadership-card{
    flex-direction:column;
  }

  .mre-leadership-image{
    width:100%;
    min-height:480px;
  }

  .mre-leadership-image img{
    min-height:480px;
    object-position:72% 25%;
  }

  .mre-leadership-content{
    width:100%;
    padding:45px 40px;
  }

  .mre-leadership-highlights{
    grid-template-columns:repeat(3,1fr);
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media(max-width:767px){

  .mre-leadership-card{
    border-radius:18px;
  }

  .mre-leadership-image{
    min-height:380px;
  }

  .mre-leadership-image img{
    min-height:380px;
    object-position:72% 20%;
  }

  .mre-image-badge{
    left:20px;
    bottom:20px;
  }

  .mre-leadership-content{
    padding:35px 25px;
  }

  .mre-leadership-label{
    font-size:11px;
    letter-spacing:1.5px;
  }

  .mre-leadership-title{
    font-size:30px;
    line-height:1.25;
  }

  .mre-leadership-description{
    font-size:14px;
    line-height:1.8;
  }

  .mre-leadership-highlights{
    grid-template-columns:1fr;
    gap:10px;
  }

  .mre-leadership-bottom{
    flex-direction:column;
    align-items:flex-start;
  }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media(max-width:480px){

  .mre-leadership-image{
    min-height:320px;
  }

  .mre-leadership-image img{
    min-height:320px;
    object-position:72% 20%;
  }

  .mre-leadership-content{
    padding:30px 20px;
  }

  .mre-leadership-title{
    font-size:27px;
  }

  .mre-leadership-company h4{
    font-size:18px;
  }

}

@media(max-width:767px){
  .renvia-about_one .renvia-content-box,
  .renvia-feature_one .renvia-content-box {
    margin-top: 25px !important;
  }

  .renvia-features-items {
    padding-top: 30px !important;
  }

  .section-title {
    margin-bottom: 25px !important;
  }
}

`}</style>

{/* ====== End Manghrani Leadership Section ====== */}
          </div>
        </section>

        

        {/* ====== Start Blog Section ====== */}
        <section className="renvia-blog-sec pt-115 pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-5">
                  <span className="sub-title">
                    <img src="/assets/images/line1.png" alt="line" />
                    INDUSTRY INSIGHTS &amp; ADVISORY
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">
                    Strategic Market Insights &amp; <br /> Industrial Intelligence
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {isBlogsLoading && <p className="text-center">Loading blog posts...</p>}
              {!isBlogsLoading && blogPosts.length === 0 && (
                <p className="text-center">No blog posts are available yet.</p>
              )}
              {!isBlogsLoading && blogPosts.map((post) => (
                <div className="col-xl-4 col-md-6 col-sm-12" key={post.id}>
                  <div className="renvia-blog-post-item style-one mb-40">
                    {post.image && (
                      <div className="post-thumbnail">
                        <img src={post.image} alt={post.title} />
                      </div>
                    )}
                    <div className="post-content">
                      <div className="post-tags">
                        <span>
                          <Link to={`/blog-grid?category=${encodeURIComponent(post.category)}`}>
                            {post.category || "Insights"}
                          </Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to={`/blog-details/${post.slug || post.id}`}>{post.title}</Link>
                      </h4>
                      <Link to={`/blog-details/${post.slug || post.id}`} className="read-more style-one">
                        Read Details <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        videoUrl="https://www.youtube.com/watch?v=pPl3ZZdTP3g"
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
}
