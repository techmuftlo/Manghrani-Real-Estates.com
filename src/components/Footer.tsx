import { useState } from "react";
import { Link } from "react-router-dom";

export interface FooterProps {
  variant?: "v1" | "v2" | "v3";
  showCta?: boolean;
  showTopCta?: boolean;
}

export default function Footer({
  variant = "v1",
  showCta = true,
  showTopCta,
}: FooterProps) {
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const shouldShowCta = showTopCta !== undefined ? showTopCta : showCta;

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");
    setIsNewsletterSubmitting(true);
    setNewsletterStatus("");

    try {
      const response = await fetch("https://crm.muftlo.in/api/forms/submit/form-tvir6w7ka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email-address": email }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message || "Unable to subscribe right now.");
      }

      form.reset();
      setNewsletterStatus("Thank you for subscribing.");
    } catch (error) {
      setNewsletterStatus(error instanceof Error ? error.message : "Unable to subscribe right now.");
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const getFooterClass = () => {
    switch (variant) {
      case "v2":
        return "main-footer footer-v2 pt-80";
      case "v3":
        return "main-footer footer-v3 pt-80";
      case "v1":
      default:
        return "main-footer footer-v1 pt-80";
    }
  };

  return (
    <footer className={getFooterClass()}>
      <div className="container">
        {/* Footer Top CTA */}
        {shouldShowCta && (
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title text-white mb-55 text-center text-lg-start">
                  <h2>Strategic Industrial Real Estate Advisory in Jaipur</h2>
                  <p>
                    Partner with our industrial real estate specialists for site acquisition, corporate leasing, and strategic asset advisory across Rajasthan.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="renvia-button text-lg-end mb-60 text-center">
                  <Link to="/contact#consultation-form" className="theme-btn style-one">
                    Request Consultation <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Widget Area */}
        <div className="footer-widget-area pt-80 pb-30">
          <div className="row">
            {/* About Widget */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about-widget mb-40">
                <div className="widget-content">
                  <div className="footer-logo mb-30">
                    <Link to="/">
                      <img
                        src="/assets/images/home-one/logo/logo-white.png"
                        alt="Brand Logo"
                        style={{
                          maxWidth: "160px",
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Link>
                  </div>
                  <p>
                    Manghrani Real Estates is a premier industrial real estate consultancy delivering strategic advisory, corporate leasing, and transaction structuring across Jaipur.
                  </p>
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
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-nav-widget mb-40 ms-0 ms-lg-5">
                <div className="widget-content">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="line-wrap">
                    <span />
                    <span />
                    <span />
                  </div>
                  <ul className="widget-nav">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Advisory Services</Link>
                    </li>
                    <li>
                      <Link to="/projects">Curated Portfolios</Link>
                    </li>
                    
                    <li>
                      <Link to="/contact">Contact Advisory</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Advisory Practice */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-nav-widget mb-40">
                <div className="widget-content">
                  <h4 className="widget-title">Services</h4>
                  <div className="line-wrap">
                    <span />
                    <span />
                    <span />
                  </div>
                  <ul className="widget-nav">
                    <li>
                      <Link to="/services">Industrial Acquisition Advisory</Link>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-newsletter-widget mb-40">
                <div className="widget-content">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="line-wrap">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>
                    Subscribe for quarterly industrial market insights, RIICO policy briefings, and valuation reports.
                  </p>
                  <form onSubmit={handleNewsletterSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter your email"
                        name="email"
                        required
                      />
                      <button className="submit-btn" type="submit" disabled={isNewsletterSubmitting} aria-label="Subscribe to newsletter">
                        <i className="far fa-paper-plane" />
                      </button>
                    </div>
                    {newsletterStatus && <p className="newsletter-status" role="status">{newsletterStatus}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Copyright Area */}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text text-lg-start text-center">
                <p>&copy; {new Date().getFullYear()} Manghrani Real Estates | Designed & Developed by <a href="https://muftlo.com" target="_blank" rel="noopener noreferrer">Muftlo</a></p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-link text-lg-end text-center">
                <Link to="/about">Terms &amp; Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}