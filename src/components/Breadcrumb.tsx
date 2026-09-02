import { Link } from "react-router-dom";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Offcanvas({ isOpen, onClose }: OffcanvasProps) {
  return (
    <>
      <div className={`renvia-offcanvas-panel ${isOpen ? "panel-on" : ""}`}>
        <div className="offcanvas-panel-inner">
          <div className="panel-header d-flex justify-content-between align-items-center">
            <Link to="/" className="brand-logo" onClick={onClose}>
              <img
                src="/assets/images/innerpage/logo/logo-main.png"
                alt="Brand Logo"
              />
            </Link>
            <div className="panel-close-btn" onClick={onClose} style={{ cursor: "pointer" }}>
              <i className="far fa-times" />
            </div>
          </div>
          <div className="offcanvas-body">
            {/* Panel Box */}
            <div className="panel-box mb-40">
              <h4 className="panel-widget-title mb-10">Manghrani Advisory</h4>
              <p>
                Strategic industrial real estate advisory, corporate tenancy structuring, and verified asset solutions across Jaipur.
              </p>
            </div>
            {/* Panel Box */}
            <div className="panel-box mb-40">
              <h4 className="panel-widget-title mb-20">Curated Portfolios</h4>
              {/* Renvia Project Item */}
              <div className="renvia-project-item mb-20">
                <div className="project-thumbnail">
                  <img
                    src="/assets/images/offcanvas/project-img1.jpg"
                    alt="project image"
                  />
                  <div className="hover-content">
                    <div className="project-content">
                      <span className="location">
                        <i className="far fa-map-marker-alt" />
                        Sitapura Industrial Area, Jaipur
                      </span>
                      <h4 className="title">
                        <Link to="/project-details" onClick={onClose}>
                          Industrial Logistics Complex
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* Renvia Project Item */}
              <div className="renvia-project-item">
                <div className="project-thumbnail">
                  <img
                    src="/assets/images/offcanvas/project-img2.jpg"
                    alt="project image"
                  />
                  <div className="hover-content">
                    <div className="project-content">
                      <span className="location">
                        <i className="far fa-map-marker-alt" />
                        VKIA, Jaipur
                      </span>
                      <h4 className="title">
                        <Link to="/project-details" onClick={onClose}>
                          Manufacturing &amp; Engineering Facility
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Panel Box */}
          <div className="panel-box">
            <h4>Market Intelligence</h4>
            <p className="mb-15">Get quarterly industrial market reports</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="email"
                  className="form_control"
                  placeholder="Email address"
                  name="email"
                />
                <button type="submit" className="theme-btn style-one">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="offcanvas__overlay active"
          onClick={onClose}
          style={{ cursor: "pointer", display: "block" }}
        />
      )}
    </>
  );
}
