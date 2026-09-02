import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function CounterValue({ target }: { target: number }) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const counterElement = counterRef.current;
    if (!counterElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1800;
        const startTime = performance.now();
        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setValue(Math.max(1, Math.floor(progress * target)));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(counterElement);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={counterRef}>{value}</span>;
}

export default function About() {
  return (
    <>
      <Header variant="one" />

      <main>
        {/* Page Hero */}
        <PageHero title="About Us" breadcrumb="About Us" />

        {/* ====== Start About Section ====== */}
        <section className="renvia-about_three pt-115 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="renvia-content-box mb-5 mb-xl-0">
                  <div className="section-title mb-45">
                    <span className="sub-title">
                      INDUSTRIAL REAL ESTATE SPECIALISTS
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                      Industrial Properties for Sale & Rent in Jaipur
                    </h2>
                  </div>
                  <div className="features-box-wrap">
                    <div className="renvia-image">
                      <img
                        src="/assets/images/innerpage/about/about-img1.png"
                        alt="about image"
                      />
                    </div>
                    <div className="features-list">
                      <div className="renvia-iconic-left-box style-two mb-25">
                        <div className="content">
                          <h6 className="title">
                            <span className="icon">
                              <img
                                src="/assets/images/innerpage/about/icon1.png"
                                alt="icon"
                              />
                            </span>
                           Industrial Expertise 
                          </h6>
                          <p>
                            Finding the right factory or warehouse tailored strictly to your operational requirements.
                          </p>
                        </div>
                      </div>
                      <div className="renvia-iconic-left-box style-two">
                        <div className="content">
                          <h6 className="title">
                            <span className="icon">
                              <img
                                src="/assets/images/innerpage/about/icon2.png"
                                alt="icon"
                              />
                            </span>
                            Verified Properties
                          </h6>
                          <p>
                            Direct deal options across prime industrial locations like Sitapura Industrial Area, Jaipur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-trust-stats">
                    <div className="about-trust-stat">
                      <span className="icon"><i className="fas fa-shield-check" /></span>
                      <strong>100% <span>Verified</span></strong>
                      <small>Industrial Properties</small>
                    </div>
                    <div className="about-trust-stat">
                      <span className="icon"><i className="fas fa-industry" /></span>
                      <strong>5+ <span>Prime Hubs</span></strong>
                      <small>Sitapura &amp; More</small>
                    </div>
                  </div>
                  <div className="renvia-button-wrap mt-40">
                    <div className="renvia-support-box">
                      <div className="thumb">
                        <img
                          src="/assets/images/innerpage/about/support.png"
                          alt="support"
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">Call Us For Any Inquiry</h5>
                        <h6>
                          <a href="tel:+91-99500-00550">+91 99500 00550</a>
                        </h6>
                      </div>
                    </div>
                    <div className="renvia-button">
                      <Link to="/contact" className="theme-btn style-one">
                       Contact Us <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="renvia-text-box">
                  <p>
                    We bring decades of industrial real estate expertise, strategic advisory, and verified property solutions. As Jaipur's trusted specialists, we deliver tailored spaces that align with your manufacturing and business long-term vision.
                  </p>
                  <p>
                    From Sitapura Industrial Area to major manufacturing hubs across Jaipur, we help businesses find, buy, or rent industrial units, factories, and commercial land efficiently.
                  </p>
                  <div className="renvia-image mt-55">
                    <img
                      src="/assets/images/innerpage/about/about-img2.png"
                      alt="about image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Counter Section ====== */}
        <section
          className="renvia-counter-sec bg_cover pt-70 pb-30"
          style={{
            backgroundImage:
              "url('/assets/images/innerpage/bg/counter-bg.png')",
          }}
        >
          <div className="container">
            <div className="counter-wrapper text-white">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 item-border">
                  <div className="renvia-counter-item style-one text-center mb-40">
                    <div className="content">
                      <h2>
                        <span className="counter"><CounterValue target={50} /></span>
                        <span className="symbol">+</span>
                      </h2>
                      <p>Industrial Properties Sold</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item-border">
                  <div className="renvia-counter-item style-one text-center mb-40">
                    <div className="content">
                      <h2>
                        <span className="counter"><CounterValue target={30} /></span>
                        <span className="symbol">+</span>
                      </h2>
                      <p>Active Rental Units</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item-border">
                  <div className="renvia-counter-item style-one text-center mb-40">
                    <div className="content">
                      <h2>
                        <span className="counter">₹<CounterValue target={150} /></span>Cr
                        <span className="symbol">+</span>
                      </h2>
                      <p>Property Transactions</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item-border">
                  <div className="renvia-counter-item style-one text-center mb-40">
                    <div className="content">
                      <h2>
                        <span className="counter"><CounterValue target={10} /></span>Lakh
                        <span className="symbol">+</span>
                      </h2>
                      <p>Sq. Ft. Handled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Work / Process Section ====== */}
        <section className="renvia-work-sec pt-120 pb-120">
          <div className="container">
            <div className="work-wrapper">
              <div className="renvia-work-item mb-60">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
                    <div className="content mb-5 mb-xl-0">
                      <span className="sub-text">INDUSTRIAL SOLUTIONS</span>
                      <div className="step">01</div>
                      <h3 className="title">Industrial Factory Sale & Rent in Jaipur</h3>
                      <p>
                        Explore verified industrial properties, manufacturing units, and warehouses across prime locations like Sitapura Industrial Area. We provide end-to-end guidance for buying, renting, or investing in commercial real estate.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-8">
                    <div className="thumbnail">
                      <img
                        src="/assets/images/innerpage/gallery/work-img1.png"
                        alt="work image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="renvia-work-item mb-60">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
                    <div className="content mb-5 mb-xl-0">
                      <span className="sub-text">INDUSTRIAL SPECIALISTS</span>
                      <div className="step">02</div>
                      <h3 className="title">Industrial Property Consultation</h3>
                      <p>
                       Whether you are looking to buy a factory, rent an industrial unit, sell your existing property, or invest in industrial real estate, Manghrani Real Estates provides property options and market guidance to make the process easier.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-8">
                    <div className="thumbnail">
                      <img
                        src="/assets/images/innerpage/gallery/work-img2.png"
                        alt="work image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="renvia-work-item mb-60">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
                    <div className="content mb-5 mb-xl-0">
                      <span className="sub-text">INDUSTRIAL SPECIALISTS</span>
                      <div className="step">03</div>
                      <h3 className="title">Industrial Property Sale & Rent</h3>
                      <p>
                        Find the right factory, industrial unit, or commercial property for your business with Manghrani Real Estates. Explore verified industrial properties across Sitapura and other prime industrial locations in Jaipur.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-8">
                    <div className="thumbnail">
                      <img
                        src="/assets/images/innerpage/gallery/work-img3.png"
                        alt="work image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Choose Section ====== */}
        <section
          className="renvia-choose-sec gray-bg pt-120 pb-120"
          style={{
            backgroundImage:
              "url('/assets/images/home-three/bg/choose-bg.jpg')",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="renvia-image mb-5 mb-xl-0">
                  <img
                    src="/assets/images/innerpage/gallery/choose-img1.png"
                    alt="choose"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="renvia-content-box">
                  <div className="section-title">
                    <span className="sub-title">
                      <img src="/assets/images/line1.png" alt="line" />
                      INDUSTRIAL REAL ESTATE SPECIALISTS.
                    </span>
                    <h2>Industrial Properties & Manufacturing Hubs in Jaipur</h2>
                  </div>
                  <p>
                    Manghrani Real Estates is an industrial real estate company specializing in the sale, purchase, and rental of factories and industrial properties. With a strong presence in Sitapura Industrial Area and major locations, we help businesses find suitable properties based on their operational and investment requirements.
                  </p>
                  <div className="check-counter-wrap">
                    <ul className="check-list style-three">
                      <li>Industrial Property Expertise across Sitapura & Jaipur</li>
                      <li>Multiple Verified Factory Options for Sale & Rent</li>
                      <li>Reliable Guidance for Property Purchase & Investment</li>
                    </ul>
                    <div className="counter-wrap">
                      <div className="renvia-counter-item">
                        <div className="content">
                          <span className="stat-icon"><i className="fas fa-shield-check" /></span>
                          <h4>100% / Verified</h4>
                          <p>(Industrial Properties)</p>
                        </div>
                      </div>
                      <div className="renvia-counter-item">
                        <div className="content">
                          <span className="stat-icon"><i className="fas fa-industry" /></span>
                          <h4>5+ / Prime Hubs</h4>
                          <p>(Sitapura & More)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clients Logos */}
            <div className="clients-wrapper pt-120">
              <div className="row justify-content-center align-items-center">
                <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                  <img
                    src="/assets/images/innerpage/clients/client-img1.png"
                    alt="client"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                  <img
                    src="/assets/images/innerpage/clients/client-img2.png"
                    alt="client"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                  <img
                    src="/assets/images/innerpage/clients/client-img3.png"
                    alt="client"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                  <img
                    src="/assets/images/innerpage/clients/client-img4.png"
                    alt="client"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                  <img
                    src="/assets/images/innerpage/clients/client-img5.png"
                    alt="client"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                  <img
                    src="/assets/images/innerpage/clients/client-img6.png"
                    alt="client"
                  />
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
