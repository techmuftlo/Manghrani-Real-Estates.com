import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Services() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const servicesList = [
    {
      title: "Industrial Acquisition ",
      img: "/assets/images/home-one/services/service-img1.png",
      desc: "Strategic advisory and rigorous due diligence for acquiring or divesting prime manufacturing facilities across Jaipur.",
    },
    {
      title: "Corporate Lease & Tenancy Advisory",
      img: "/assets/images/home-one/services/service-img2.png",
      desc: "Customized tenancy structuring, lease negotiation, and space optimization for scalable industrial operations.",
    },
    {
      title: "Industrial Asset Procurement",
      img: "/assets/images/home-one/services/service-img3.png",
      desc: "End-to-end guidance in sourcing, evaluating, and securing high-performance industrial land and facilities.",
    },
    {
      title: "Industrial Investment ",
      img: "/assets/images/home-one/services/service-img4.png",
      desc: "Data-backed investment advisory, risk assessment, and capital allocation for high-yield industrial real estate in Jaipur.",
    },
    {
      title: "Strategic Valuation Consulting",
      img: "/assets/images/home-one/services/service-img5.png",
      desc: "In-depth consultation on statutory zoning, property valuations, infrastructure feasibility, and expansion planning.",
    },
  ];

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Advisory Services" breadcrumb="Services" />

        {/* ====== Start Service Section ====== */}
        <section className="renvia-service_one gray-bg pt-120 pb-80">
          <div className="container">
            <div className="row">
              {servicesList.map((srv, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 col-sm-12">
                  <div className="renvia-service-card style-one mb-40">
                    <div className="content">
                      <div className="title-wrap">
                        <h4>
                          <Link to="/contact">{srv.title}</Link>
                        </h4>
                        <Link to="/contact" className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                      <p>{srv.desc}</p>
                      <img src={srv.img} alt={srv.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== Start CTA Section ====== */}
        <section
          className="renvia-cta_one bg_cover pt-105 pb-115"
          style={{
            backgroundImage:
              "url('/assets/images/innerpage/bg/cta-bg1.png')",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="renvia-content-box mb-4 mb-xl-0 text-white text-center text-lg-start">
                  <h2 className="text-anm">
                    Schedule a Strategic Advisory Session
                  </h2>
                  <p>
                    Partner with our industrial real estate consultants to unlock strategic value and operational efficiency for your enterprise.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="renvia-button text-center text-lg-end">
                  <a href="#consultation-form" className="theme-btn style-one">
                    Request Consultation <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Contact Section ====== */}
        <section id="consultation-form" className="renvia-contact_two pt-120 pb-120 p-r z-1">
          <div className="contact-map">
            <img src="/assets/images/innerpage/bg/map.png" alt="map" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="renvia-content-box mb-5 mb-xl-0">
                  <div className="section-title">
                    <span className="sub-title">
                      STRATEGIC ADVISORY
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">Request a Strategic Consultation</h2>
                  </div>
                  <p>
                    Engage with our senior industrial property advisors to evaluate your operational requirements, asset valuations, and expansion strategies.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="renvia-info-item style-one mb-40">
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Location</h5>
                          <p>H1-381, RIICO Industrial Area, Sitapura Industrial Area, Sitapura, Jaipur, Rajasthan 303022</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="renvia-info-item style-one mb-40">
                        <div className="icon">
                          <i className="far fa-phone-alt" />
                        </div>
                        <div className="content">
                          <h5>Phone</h5>
                          <p>
                            <a href="tel:+256214203215">+91 99500 00550</a>
                          </p>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="renvia-info-item style-one mb-40">
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <p>
                            <a href="mailto:info@company.com">
                              info@company.com
                            </a>
                          </p>
                          <p>
                            <a href="mailto:renvia.info@gmail.com">
                              renvia.info@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="renvia-info-item style-one mb-40">
                        <div className="icon">
                          <i className="far fa-share-alt" />
                        </div>
                        <div className="content">
                          <h5>Social</h5>
                          <div className="social-box">
                            <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              href="https://twitter.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              href="https://instagram.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="map-box mt-5 mt-xl-0">
                    <iframe
                      title="office-map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.922338001854!2d75.8427451!3d26.7787454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc969bd535c2f%3A0xea8dc2fb3cd19ef0!2sManghrani%20Real%20Estates!5e0!3m2!1sen!2sin!4v1788179361737!5m2!1sen!2sin"
                      width="600"
                      height="450"
                     
                      loading="lazy"
                      style={{ width: "100%", height: "250px", border: 0 }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-10">
                <div className="contact-form-wrapper">
                  <h4>Send Us message</h4>
                  {formSubmitted && (
                    <div className="alert alert-success mt-3 mb-3">
                      Thank you! Your request has been sent successfully.
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Full Name*</label>
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name*"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email Address*</label>
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address*"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Company Name*</label>
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Company Name*"
                            name="cname"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Message*</label>
                          <textarea
                            name="message"
                            placeholder="Write Your Message Here"
                            rows={4}
                            className="form_control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="theme-btn style-one"
                          >
                            Send A Request
                            <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}
