import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from "./Offcanvas";

export interface HeaderProps {
  variant?: "one" | "two" | "three" | "four";
}

export default function Header({ variant = "four" }: HeaderProps) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getHeaderClass = () => {
    switch (variant) {
      case "one":
        return "header-area header-one";
      case "two":
        return "header-area header-two";
      case "three":
        return "header-area header-three";
      case "four":
      default:
        return "header-area header-four";
    }
  };

  const getLogoSrc = () => {
    switch (variant) {
      case "two":
        return "/assets/images/home-two/logo/logo-white.png";
      case "four":
        return "/assets/images/innerpage/logo/logo-white.png";
      case "one":
      case "three":
      default:
        return "/assets/images/home-one/logo/logo-main.png";
    }
  };

  const isHomeActive =
    location.pathname === "/" || location.pathname === "/index.html";

  return (
    <>
      <header className={`${getHeaderClass()} sticky`}>
        <div className={variant === "three" ? "" : "container-fluid"}>
          <div className="header-navigation">
            <div className={variant === "three" ? "container-fluid" : ""}>
              <div className="primary-menu">

                {/* Site Branding */}
                <div className="site-branding">
                  <Link to="/" className="brand-logo">
                    <img src={getLogoSrc()} alt="Brand Logo" />
                  </Link>
                </div>

                {/* Main Menu */}
                <div
                  className={`theme-nav-menu ${
                    isMobileMenuOpen ? "menu-on" : ""
                  }`}
                >

                  {/* Menu Top */}
                  <div className="theme-menu-top d-block d-xl-none">
                    <div className="site-branding">
                      <Link to="/" className="brand-logo">
                        <img
                          src="/assets/images/home-one/logo/logo-main.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Main Nav */}
                  <nav className="main-menu">
                    <ul>

                      {/* Home */}
                      <li
                        className={`menu-item ${
                          isHomeActive ? "active" : ""
                        }`}
                      >
                        <Link to="/">Home</Link>
                      </li>

                      {/* About */}
                      <li
                        className={`menu-item ${
                          location.pathname === "/about" ? "active" : ""
                        }`}
                      >
                        <Link to="/about">About</Link>
                      </li>

                      {/* Services */}
                      <li
                        className={`menu-item ${
                          location.pathname === "/services" ||
                          location.pathname === "/service-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link to="/services">Services</Link>
                      </li>

                      {/* Projects */}
                      <li
                        className={`menu-item ${
                          location.pathname === "/projects" ||
                          location.pathname === "/project-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link to="/projects">Projects</Link>
                      </li>

                     

                      {/* Blog */}
                      <li
                        className={`menu-item ${
                          location.pathname === "/blog-grid" ||
                          location.pathname === "/blog-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link to="/blog-grid">Blog</Link>
                      </li>

                      {/* Contact */}
                      <li
                        className={`menu-item ${
                          location.pathname === "/contact" ? "active" : ""
                        }`}
                      >
                        <Link to="/contact">Contact</Link>
                      </li>

                    </ul>
                  </nav>

                  {/* Nav Button */}
                  <div className="theme-nav-button mt-20 d-block d-md-none">
                    <Link to="/contact" className="theme-btn style-one">
                      {variant === "four" ? "Get In Touch" : "Get Started"}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>

                  {/* Menu Bottom */}
                  <div className="theme-menu-bottom mt-50 d-block d-xl-none">
                    <h5>Follow Us</h5>

                    <ul className="social-link">
                      <li>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Header Nav Right */}
                <div className="nav-right-item">

                  <div className="nav-button d-none d-md-block">
                    <Link to="/contact" className="theme-btn style-one">
                      {variant === "four" ? "Get In Touch" : "Get Started"}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>

                  <div
                    className="offcanvas-toggle"
                    onClick={() => setIsOffcanvasOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-th" />
                  </div>

                  <div
                    className={`navbar-toggler ${
                      isMobileMenuOpen ? "active" : ""
                    }`}
                    onClick={() =>
                      setIsMobileMenuOpen(!isMobileMenuOpen)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <span />
                    <span />
                    <span />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Drawer */}
      <Offcanvas
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />
    </>
  );
}