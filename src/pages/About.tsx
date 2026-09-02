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
                      STRATEGIC INDUSTRIAL CONSULTING &amp; ADVISORY
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                      Strategic Industrial Real Estate Advisory &amp; Asset Solutions in Jaipur
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
                           Strategic Advisory &amp; Sourcing
                          </h6>
                          <p>
                            Providing tailored feasibility analysis and space planning to match your exact manufacturing roadmap.
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
                            Due Diligence &amp; Asset Verification
                          </h6>
                          <p>
                            Comprehensive title clearance, regulatory verification, and direct advisory across Sitapura and key hubs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-trust-stats">
                    <div className="about-trust-stat">
                      <span className="icon"><i className="fas fa-shield-check" /></span>
                      <strong>100% <span>Verified</span></strong>
                      <small>Regulatory Due Diligence</small>
                    </div>
                    <div className="about-trust-stat">
                      <span className="icon"><i className="fas fa-industry" /></span>
                      <strong>5+ <span>Prime Hubs</span></strong>
                      <small>Sitapura &amp; Key Clusters</small>
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
                        <h5 className="title">Consult With Our Advisory Team</h5>
                        <h6>
                          <a href="tel:+91-99500-00550">+91 99500 00550</a>
                        </h6>
                      </div>
                    </div>
                    <div className="renvia-button">
                      <Link to="/contact#consultation-form" className="theme-btn style-one">
                       Request Consultation <i className="far fa-arrow-right" />
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
                    From Sitapura Industrial Area to key regional clusters, we advise enterprises on site acquisition, lease structuring, and asset optimization with complete transparency.
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
                      <p>Industrial Mandates Advised</p>
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
                      <p>Lease Portfolios Managed</p>
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
                      <p>Capital Advisory Volume</p>
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
                      <p>Industrial Area Consulted</p>
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
                      <span className="sub-text">STRATEGIC ASSET ADVISORY</span>
                      <div className="step">01</div>
                      <h3 className="title">Industrial Asset Acquisition &amp; Tenancy Advisory</h3>
                      <p>
                        In-depth portfolio evaluation, due diligence, and strategic advisory for acquiring or leasing manufacturing facilities and logistics hubs across Sitapura and Jaipur.
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
                      <span className="sub-text">FEASIBILITY &amp; VALUATION</span>
                      <div className="step">02</div>
                      <h3 className="title">Industrial Property Valuation &amp; Feasibility Advisory</h3>
                      <p>
                       Expert guidance on market valuations, statutory zoning, infrastructure feasibility, and long-term capital allocation to empower informed decision-making.
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
                      <span className="sub-text">TRANSACTION STRUCTURING</span>
                      <div className="step">03</div>
                      <h3 className="title">Strategic Transaction Management &amp; Structuring</h3>
                      <p>
                        Full-cycle representation, lease negotiation, and transaction structuring designed to maximize operational efficiency and asset value across Jaipur's premier hubs.
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
                      STRATEGIC INDUSTRIAL REAL ESTATE ADVISORS
                    </span>
                    <h2>Empowering Industrial Growth Across Jaipur's Premier Hubs</h2>
                  </div>
                  <p>
                    Manghrani Real Estates is a premier industrial real estate consultancy specializing in strategic asset advisory, corporate leasing, and transaction structuring. With authoritative market knowledge across Sitapura and Jaipur, we align industrial properties with your organizational growth objectives.
                  </p>
                  <div className="check-counter-wrap">
                    <ul className="check-list style-three">
                      <li>Authoritative Advisory across Sitapura &amp; Jaipur's Industrial Clusters</li>
                      <li>Institutional-Grade Due Diligence &amp; Verified Asset Options</li>
                      <li>Strategic Counsel for Asset Acquisition &amp; Capital Investment</li>
                    </ul>
                    <div className="counter-wrap">
                      <div className="renvia-counter-item">
                        <div className="content">
                          <span className="stat-icon"><i className="fas fa-shield-check" /></span>
                          <h4>100% / Verified</h4>
                          <p>(Due Diligence &amp; Compliance)</p>
                        </div>
                      </div>
                      <div className="renvia-counter-item">
                        <div className="content">
                          <span className="stat-icon"><i className="fas fa-industry" /></span>
                          <h4>5+ / Prime Hubs</h4>
                          <p>(Sitapura &amp; Key Clusters)</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
