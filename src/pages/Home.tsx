import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroSlides = [
    {
      bg: "/assets/images/home-one/hero/hero-bg1.jpg",
      title: "Industrial Properties for Sale & Rent in Jaipur",
      desc: "Find the right factory, industrial unit, or commercial property for your business with Manghrani Real Estates. Explore verified industrial properties across Sitapura and other prime industrial locations in Jaipur.",
    },
  ];

  return (
    <>
      <Header variant="one" />

      <main>
        {/* ====== Start Hero Section ====== */}
        <section className="renvia-hero_one">
          <div className="hero-dots" />
          <div className="renvia-avatar-box">
           
            <div className="avatar-list">
              <ul>
                <li>
                  <img
                    src="/assets/images/home-one/gallery/avatar-img1.png"
                    alt="avatar img"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/home-one/gallery/avatar-img2.png"
                    alt="avatar img"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/home-one/gallery/avatar-img3.png"
                    alt="avatar img"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/home-one/gallery/avatar-img4.png"
                    alt="avatar img"
                  />
                </li>
              </ul>
              <div className="text">
                <div className="ratings">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>450+ reviews</p>
              </div>
            </div>
          </div>

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
                  <div className="renvia-ratings-box">
                    <div className="content">
                      <h2>4.9</h2>
                      <div className="renvia-avatar-box">
                        <div className="avatar-list">
                          <ul>
                            <li>
                              <img
                                src="/assets/images/home-one/gallery/avatar-img1.png"
                                alt="avatar image"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/home-one/gallery/avatar-img2.png"
                                alt="avatar image"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/home-one/gallery/avatar-img3.png"
                                alt="avatar image"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/home-one/gallery/avatar-img4.png"
                                alt="avatar image"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="text">
                        <div className="ratings">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>2k+ satisfied customers</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-11">
                <div className="renvia-content-box mt-5 mt-xl-0">
                  <div className="section-title">
                    <span className="sub-title">
                      About Us
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                     Your Reliable Partner for Factory & Industrial Property Solutions
                    </h2>
                  </div>
                  <p>
                    Whether you are looking to buy a factory, rent an industrial unit, sell your existing property, or invest in industrial real estate, our team provides suitable property options and market guidance to simplify the process.
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
                            <h5>Factory Sale & Purchase</h5>
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
                            <h5>Industrial Property Rentals</h5>
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
                      Specializing in factory sales, purchases, and rental services.
                    </li>
                    <li>
                      <img
                        src="/assets/images/home-one/gallery/icon.png"
                        alt="icon"
                      />
                      Strong presence in Sitapura and major industrial locations of Jaipur.
                    </li>
                  </ul>
                  <h6>
                    We help businesses and investors find the right industrial property with reliable market guidance and local expertise.
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

        {/* ====== Start Services Section ====== */}
        <section
          className="renvia-service_one gray-bg pt-115 pb-80"
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
                    What we Offer
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">
                   Industrial Property Solutions for Every Business Need.
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
                          
                          Industrial Factory Sale
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Explore verified industrial factories for sale in Jaipur, offering excellent business and investment opportunities.
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
                          Factory Rent/Lease
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Flexible factory rental and lease options in Jaipur for businesses seeking efficient operations.
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
                         Property Purchase
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Find suitable industrial properties in Jaipur for business expansion, operations, and long-term investment opportunities.
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
                           Property Investment
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Explore promising industrial property investment opportunities in Jaipur with strong potential for long-term business growth.
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
                          Property Consultation
                        </Link>
                      </h4>
                      <Link to="/contact" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <p>
                      Get expert guidance on industrial properties in Jaipur for buying, selling, renting, and investment decisions.
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
                      <h4><Link to="/contact">Industrial Factory Sale</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Explore verified industrial factories for sale in Jaipur, offering excellent business and investment</p>
                    <img src="/assets/images/home-one/services/service-img1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Factory Rent/Lease</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Flexible factory rental and lease options in Jaipur for businesses seeking efficient operations.</p>
                    <img src="/assets/images/home-one/services/service-img2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Property Purchase</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Find suitable industrial properties in Jaipur for business expansion, operations, and long-term investment opportunities.</p>
                    <img src="/assets/images/home-one/services/service-img3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" aria-hidden="true">
                <div className="renvia-service-card style-one mb-40">
                  <div className="content">
                    <div className="title-wrap">
                      <h4><Link to="/contact">Property Investment</Link></h4>
                      <Link to="/contact" className="icon-btn"><i className="far fa-arrow-right" /></Link>
                    </div>
                    <p>Explore promising industrial property investment opportunities in Jaipur with strong potential for long-term business growth.</p>
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
                      Selected Project
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2>
                     Explore Our Latest <br /> Industrial Properties.
                    </h2>
                  </div>
                  <p>
  We help businesses find the right factories and industrial properties across Sitapura and Jaipur’s key industrial locations.
</p>
                  <div className="renvia-button mt-35">
                    <Link to="/projects" className="theme-btn style-one">
                      View All Project <i className="far fa-arrow-right" />
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
                          Phoenix, AZ
                        </span>
                        <span>
                          <Link to="/projects">Apartment</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/project-details">Luxury Apartment</Link>
                      </h4>
                      <p>
                        We stand for more than just property we represent Real
                        estate transparency, innovation, and a client first
                        approach.
                      </p>
                      <Link to="/project-details" className="icon-btn">
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
                          Huntsville, Alabama
                        </span>
                        <span>
                          <Link to="/projects">Apartment</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/project-details">Eden Estate</Link>
                      </h4>
                      <p>
                        We stand for more than just property we represent Real
                        estate transparency, innovation, and a client first
                        approach.
                      </p>
                      <Link to="/project-details" className="icon-btn">
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
                          Hollywood, Florida
                        </span>
                        <span>
                          <Link to="/projects">Apartment</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/project-details">Business Center</Link>
                      </h4>
                      <p>
                        We stand for more than just property we represent Real
                        estate transparency, innovation, and a client first
                        approach.
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
                          New York, NY
                        </span>
                        <span>
                          <Link to="/projects">Apartment</Link>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/project-details">Office Building</Link>
                      </h4>
                      <p>
                        We stand for more than just property we represent Real
                        estate transparency, innovation, and a client first
                        approach.
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
                      Core Features
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                      Your Trusted Partner in Industrial Real Estate
                    </h2>
                  </div>
                  <p>
                    Manghrani Real Estates helps businesses buy, sell, rent, and invest in industrial properties across Jaipur.
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
                            <p>offices worldwide</p>
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
                      <li>Factory Sale, Purchase & Rental Solutions</li>
                      <li>Industrial Property Investment & Consultation</li>
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
                      <h5>Industrial Factory Sale</h5>
                      <p>
                        Verified factory properties for sale across Jaipur and major industrial locations.
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
                      <h5>Factory Rent / Lease</h5>
                      <p>
                        Flexible industrial factory rental and lease options for businesses across Jaipur.
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
                      <h5>Industrial Property Purchase</h5>
                      <p>
                       Find suitable industrial properties matching your business and operational requirements.
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
                      <h5>Property Investment</h5>
                      <p>
                       Explore industrial real estate investment opportunities with reliable market guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Testimonial Section ====== */}
        <section className="renvia-testimonial_one">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="renvia-image mb-5 mb-xl-0">
                  <img
                    src="/assets/images/home-one/testimonial/testimonial-img1.png"
                    alt="testimonial"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div
                  className="renvia-content-box bg_cover"
                  style={{
                    backgroundImage:
                      "url('/assets/images/home-one/testimonial/testimonial-bg.jpg')",
                  }}
                >
                  <div className="section-title mb-30">
                    <span className="sub-title">
                      <img src="/assets/images/line1.png" alt="line" />
                      CLIENT TESTIMONIAL
                    </span>
                    <h2 className="text-anm">
                      Trusted Industrial Real Estate Specialists in Jaipur
                    </h2>
                  </div>
                  <div className="testimonial-slider-wrap">
                    <div className="renvia-testimonial-item style-one mb-30">
                      <div className="testimonial-content">
                        <div className="quote">
                          <img
                            src="/assets/images/home-one/testimonial/quote.png"
                            alt="quote"
                          />
                        </div>
                        <p>
                          “Manghrani Real Estates provides reliable industrial property options and market guidance for buying, selling, renting, and investing in Jaipur.”
                        </p>
                        <div className="author-thumb-item">
                          <div className="author-thumb">
                            <img
                              src="/assets/images/home-one/testimonial/author-img1.png"
                              alt="author image"
                            />
                          </div>
                          <div className="author-info">
                            <h5>Manghrani Real Estates</h5>
                            <span className="position">Industrial Real Estate Specialists</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="renvia-counter-box">
                    <div className="content">
                      <h2>
                        <span className="number">560</span>
                        <span className="symbol">+</span>
                      </h2>
                    <p>
  Industrial property solutions <br /> for businesses and investors
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
                    OUR EXPERTS
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">Worldwide executive leadership</h2>
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
          <span>01</span>
          <small>Our Leadership</small>
        </div>

      </div>


      {/* ================= RIGHT CONTENT ================= */}
      <div className="mre-leadership-content">

        <span className="mre-leadership-label">
          MANGHRANI REAL ESTATES
        </span>

        <h3 className="mre-leadership-title">
          Your Trusted Partner in
          <br />
          <span>Industrial Real Estate</span>
        </h3>

        <p className="mre-leadership-description">
          We provide professional industrial real estate solutions for
          businesses, manufacturers and investors looking for the right
          property in Jaipur's leading industrial locations.
        </p>

        <p className="mre-leadership-description">
          From factory sales and leasing to industrial property investment,
          our team focuses on transparent advice, verified opportunities
          and long-term value for every client.
        </p>


        {/* ================= HIGHLIGHTS ================= */}
        <div className="mre-leadership-highlights">

          <div className="mre-highlight-item">
            <div className="mre-highlight-icon">
              <i className="far fa-building"></i>
            </div>

            <div>
              <strong>Industrial</strong>
              <span>Property Expertise</span>
            </div>
          </div>


          <div className="mre-highlight-item">
            <div className="mre-highlight-icon">
              <i className="far fa-handshake"></i>
            </div>

            <div>
              <strong>Trusted</strong>
              <span>Professional Service</span>
            </div>
          </div>


          <div className="mre-highlight-item">
            <div className="mre-highlight-icon">
              <i className="far fa-map-marker-alt"></i>
            </div>

            <div>
              <strong>Jaipur</strong>
              <span>Local Market Knowledge</span>
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
              Industrial Property Consultants
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
  width:48px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  background:#ff4136;
  color:#ffffff;
  font-size:15px;
  font-weight:700;
}

.mre-image-badge small{
  color:#ffffff;
  font-size:13px;
  letter-spacing:1.2px;
  text-transform:uppercase;
  font-weight:600;
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
  background:#172337;
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

`}</style>

{/* ====== End Manghrani Leadership Section ====== */}
          </div>
        </section>

        {/* ====== Start Award Section ====== */}
        <section className="renvia-awards_one pt-115 pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title mb-55 text-center text-lg-start">
                  <span className="sub-title">
                    Achievements
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">Company Awards Achievements</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-box float-lg-end mb-55 text-center">
                  <p>
                    We stand for more than just property we represent Real
                    estate transparency, innovation, and a client first approach
                    that puts your success at the center.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="renvia-award-item style-one">
                  <div className="award-title">
                    <h3>Real Estate Superbrand</h3>
                  </div>
                  <div className="award-info">
                    <p>
                      Recognized for exceptional quality in residential and
                      commercial development.
                    </p>
                  </div>
                  <div className="award-thumb-year">
                    <div className="award-thumb">
                      <img
                        src="/assets/images/home-one/gallery/award-img1.png"
                        alt="award"
                      />
                    </div>
                    <div className="award-year">
                      <h3>2022</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="renvia-award-item style-one">
                  <div className="award-title">
                    <h3>Innovative Design Studio</h3>
                  </div>
                  <div className="award-info">
                    <p>
                      Awarded for cutting-edge architecture and eco-conscious
                      materials.
                    </p>
                  </div>
                  <div className="award-thumb-year">
                    <div className="award-thumb">
                      <img
                        src="/assets/images/home-one/gallery/award-img2.png"
                        alt="award"
                      />
                    </div>
                    <div className="award-year">
                      <h3>2023</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="renvia-award-item style-one">
                  <div className="award-title">
                    <h3>Best Real Estate Consultant</h3>
                  </div>
                  <div className="award-info">
                    <p>
                      Excellence in advisory, portfolio management, and client
                      satisfaction.
                    </p>
                  </div>
                  <div className="award-thumb-year">
                    <div className="award-thumb">
                      <img
                        src="/assets/images/home-one/gallery/award-img3.png"
                        alt="award"
                      />
                    </div>
                    <div className="award-year">
                      <h3>2024</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="renvia-award-item style-one">
                  <div className="award-title">
                    <h3>Residential Adviser of the Year</h3>
                  </div>
                  <div className="award-info">
                    <p>
                      National recognition for setting new benchmarks in urban
                      housing.
                    </p>
                  </div>
                  <div className="award-thumb-year">
                    <div className="award-thumb">
                      <img
                        src="/assets/images/home-one/gallery/award-img4.png"
                        alt="award"
                      />
                    </div>
                    <div className="award-year">
                      <h3>2025</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    Our Latest Blog
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">
                    Latest News Update <br /> & Articles
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="renvia-blog-post-item style-one mb-40">
                  <div className="post-thumbnail">
                    <img
                      src="/assets/images/home-one/blog/blog-img1.jpg"
                      alt="blog grid"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-tags">
                      <span>
                        <Link to="/blog-grid">Company insights</Link>
                      </span>
                    </div>
                    <h4 className="title">
                      <Link to="/blog-details">
                        Signet Breaks Ground on Foundry Lofts in Midtown
                        Cleveland
                      </Link>
                    </h4>
                    <Link to="/blog-details" className="read-more style-one">
                      Read Details
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="renvia-blog-post-item style-one mb-40">
                  <div className="post-thumbnail">
                    <img
                      src="/assets/images/home-one/blog/blog-img2.jpg"
                      alt="blog grid"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-tags">
                      <span>
                        <Link to="/blog-grid">Company insights</Link>
                      </span>
                    </div>
                    <h4 className="title">
                      <Link to="/blog-details">
                        Transforming Communities The Impact of a Dedicated Real
                        Estate
                      </Link>
                    </h4>
                    <Link to="/blog-details" className="read-more style-one">
                      Read Details
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="renvia-blog-post-item style-one mb-40">
                  <div className="post-thumbnail">
                    <img
                      src="/assets/images/home-one/blog/blog-img3.jpg"
                      alt="blog grid"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-tags">
                      <span>
                        <Link to="/blog-grid">Company insights</Link>
                      </span>
                    </div>
                    <h4 className="title">
                      <Link to="/blog-details">
                        Sustainable Architecture: The Future of Urban Living
                      </Link>
                    </h4>
                    <Link to="/blog-details" className="read-more style-one">
                      Read Details
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
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
