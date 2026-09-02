import { Link } from "react-router-dom";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PropertyItem {
  id: number;
  city: string;
  title: string;
  image: string;
  href: string;
}

const propertyItems: PropertyItem[] = [
  {
    id: 1,
    city: "Sitapura, Jaipur",
    title: "Industrial Factory",
    image: "/assets/images/offcanvas/project-img1.jpg",
    href: "/project-details",
  },
  {
    id: 2,
    city: "Jaipur, Rajasthan",
    title: "Industrial Property",
    image: "/assets/images/offcanvas/project-img2.jpg",
    href: "/project-details",
  },
];

export default function Offcanvas({
  isOpen,
  onClose,
}: OffcanvasProps) {
  return (
    <>
      {/* =====================================================
          OFFCANVAS
      ====================================================== */}
      <div
        className={`mre-offcanvas ${
          isOpen ? "mre-offcanvas-open" : ""
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mre-offcanvas-inner">

          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="mre-offcanvas-header">
            <Link
              to="/"
              className="mre-offcanvas-logo"
              onClick={onClose}
            >
              <img
                src="/assets/images/innerpage/logo/logo-main.png"
                alt="Manghrani Real Estates"
              />
            </Link>

            <button
              type="button"
              className="mre-close-btn"
              onClick={onClose}
              aria-label="Close"
            >
              <span></span>
              <span></span>
            </button>
          </div>

          {/* =====================================================
              BODY
          ====================================================== */}
          <div className="mre-offcanvas-body">

            {/* =================================================
                ABOUT
            ================================================== */}
            <div className="mre-about-section">

              <h4 className="mre-section-title">
                About Manghrani Real Estates
              </h4>

              <p className="mre-about-text">
                We help businesses find the right industrial
                property for their business needs. Explore
                verified factories, industrial units and
                investment opportunities across Jaipur.
              </p>

            </div>

            {/* =================================================
                POPULAR PROPERTY
            ================================================== */}
            <div className="mre-property-section">

              <h4 className="mre-section-title">
                Popular Properties
              </h4>

              <div className="mre-property-list">

                {propertyItems.map((item) => (
                  <div
                    className="mre-property-item"
                    key={item.id}
                  >
                    <div className="mre-property-image">

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                      {/* Image Dark Overlay */}
                      <div className="mre-property-dark"></div>

                      {/* Property Content */}
                      <div className="mre-property-content">

                        <div className="mre-property-location">
                          <span className="mre-location-icon">
                            <i className="far fa-map-marker-alt"></i>
                          </span>

                          <span>
                            {item.city}
                          </span>
                        </div>

                        <h5 className="mre-property-title">
                          <Link
                            to={item.href}
                            onClick={onClose}
                          >
                            {item.title}
                          </Link>
                        </h5>

                      </div>
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* =================================================
                SERVICES
            ================================================== */}
            <div className="mre-services-section">

              <h4 className="mre-section-title">
                Our Services
              </h4>

              <div className="mre-services-list">

                <Link
                  to="/services"
                  onClick={onClose}
                  className="mre-service-item"
                >
                  <span>
                    Industrial Factory Sale
                  </span>

                  <i className="far fa-arrow-right"></i>
                </Link>

                <Link
                  to="/services"
                  onClick={onClose}
                  className="mre-service-item"
                >
                  <span>
                    Factory Rent / Lease
                  </span>

                  <i className="far fa-arrow-right"></i>
                </Link>

                <Link
                  to="/services"
                  onClick={onClose}
                  className="mre-service-item"
                >
                  <span>
                    Industrial Property Purchase
                  </span>

                  <i className="far fa-arrow-right"></i>
                </Link>

                <Link
                  to="/services"
                  onClick={onClose}
                  className="mre-service-item"
                >
                  <span>
                    Property Investment
                  </span>

                  <i className="far fa-arrow-right"></i>
                </Link>

                <Link
                  to="/services"
                  onClick={onClose}
                  className="mre-service-item"
                >
                  <span>
                    Property Consultation
                  </span>

                  <i className="far fa-arrow-right"></i>
                </Link>

              </div>

            </div>

            {/* =================================================
                CONTACT
            ================================================== */}
            <div className="mre-contact-section">

              <h4 className="mre-section-title">
                Contact Us
              </h4>

              <div className="mre-contact-list">

                {/* Address */}
                <div className="mre-contact-item">

                  <div className="mre-contact-icon">
                    <i className="far fa-map-marker-alt"></i>
                  </div>

                  <div className="mre-contact-content">

                    <span className="mre-contact-label">
                      Office Address
                    </span>

                    <p>
                      H1-381, RIICO Industrial Area,
                      <br />
                      Sitapura Industrial Area,
                      <br />
                      Sitapura, Jaipur,
                      <br />
                      Rajasthan 303022
                    </p>

                  </div>

                </div>

                {/* Phone */}
                <div className="mre-contact-item">

                  <div className="mre-contact-icon">
                    <i className="far fa-phone-alt"></i>
                  </div>

                  <div className="mre-contact-content">

                    <span className="mre-contact-label">
                      Phone
                    </span>

                    <a href="tel:+919950000550">
                      +91 99500 00550
                    </a>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                NEWSLETTER
            ================================================== */}
            <div className="mre-newsletter">

              <h4 className="mre-newsletter-title">
                Newsletter
              </h4>

              <p className="mre-newsletter-text">
                Get the latest property updates
              </p>

              <form
                className="mre-newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="mre-newsletter-input"
                  required
                />

                <button
                  type="submit"
                  className="mre-newsletter-button"
                >
                  Subscribe
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          OVERLAY
      ====================================================== */}
      <div
        className={`mre-overlay ${
          isOpen ? "mre-overlay-show" : ""
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* =====================================================
          CSS
      ====================================================== */}
      <style>{`

        /* =====================================================
           MAIN OFFCANVAS
        ====================================================== */

        .mre-offcanvas {
          position: fixed;
          top: 0;
          right: 0;

          width: 440px;
          max-width: 100%;

          height: 100vh;

          background: #ffffff;

          z-index: 999999;

          opacity: 0;
          visibility: hidden;

          transform: translateX(100%);

          transition:
            transform 0.45s ease,
            opacity 0.35s ease,
            visibility 0.45s ease;

          box-shadow:
            -10px 0 40px rgba(0, 0, 0, 0.12);
        }

        .mre-offcanvas-open {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }


        /* =====================================================
           INNER
        ====================================================== */

        .mre-offcanvas-inner {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;

          background: #ffffff;
        }


        /* =====================================================
           HEADER
        ====================================================== */

        .mre-offcanvas-header {
          width: 100%;

          min-height: 90px;

          padding: 20px 30px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom: 1px solid #eeeeee;

          flex-shrink: 0;
        }


        /* =====================================================
           LOGO
        ====================================================== */

        .mre-offcanvas-logo {
          display: inline-flex;
          align-items: center;

          text-decoration: none;
        }

        .mre-offcanvas-logo img {
          display: block;

          width: auto;
          max-width: 180px;
          max-height: 55px;

          object-fit: contain;
        }


        /* =====================================================
           CLOSE BUTTON
        ====================================================== */

        .mre-close-btn {
          width: 46px;
          height: 46px;

          padding: 0;

          border: 1px solid #e4e4e4;
          border-radius: 50%;

          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .mre-close-btn span {
          position: absolute;

          width: 19px;
          height: 2px;

          background: #101d36;

          border-radius: 2px;

          transition: all 0.3s ease;
        }

        .mre-close-btn span:first-child {
          transform: rotate(45deg);
        }

        .mre-close-btn span:last-child {
          transform: rotate(-45deg);
        }

        .mre-close-btn:hover {
          background: #ff4b4b;
          border-color: #ff4b4b;
        }

        .mre-close-btn:hover span {
          background: #ffffff;
        }


        /* =====================================================
           BODY
        ====================================================== */

        .mre-offcanvas-body {
          flex: 1;

          overflow-y: auto;
          overflow-x: hidden;

          padding: 30px;
        }

        .mre-offcanvas-body::-webkit-scrollbar {
          width: 5px;
        }

        .mre-offcanvas-body::-webkit-scrollbar-track {
          background: #f5f5f5;
        }

        .mre-offcanvas-body::-webkit-scrollbar-thumb {
          background: #d5d5d5;
          border-radius: 20px;
        }


        /* =====================================================
           ABOUT
        ====================================================== */

        .mre-about-section {
          margin-bottom: 48px;
        }

        .mre-section-title {
          position: relative;

          margin: 0 0 20px;

          color: #071a38;

          font-family: inherit;

          font-size: 25px;
          line-height: 1.25;

          font-weight: 700;

          letter-spacing: -0.4px;
        }

        .mre-about-text {
          margin: 0;

          color: #747474;

          font-size: 16px;
          line-height: 1.9;

          font-weight: 400;
        }


        /* =====================================================
           PROPERTY SECTION
        ====================================================== */

        .mre-property-section {
          margin-bottom: 48px;
        }


        /* =====================================================
           PROPERTY LIST
        ====================================================== */

        .mre-property-list {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 24px;
        }


        /* =====================================================
           PROPERTY ITEM
        ====================================================== */

        .mre-property-item {
          width: 100%;
        }


        /* =====================================================
           PROPERTY IMAGE
        ====================================================== */

        .mre-property-image {
          width: 100%;

          height: 220px;

          position: relative;

          overflow: hidden;

          border-radius: 13px;

          background: #172b40;
        }

        .mre-property-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.6s ease;
        }

        .mre-property-item:hover
        .mre-property-image img {
          transform: scale(1.07);
        }


        /* =====================================================
           IMAGE DARK OVERLAY
        ====================================================== */

        .mre-property-dark {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,
              rgba(4, 20, 39, 0.08) 15%,
              rgba(4, 20, 39, 0.82) 100%
            );
        }


        /* =====================================================
           PROPERTY CONTENT
        ====================================================== */

        .mre-property-content {
          position: absolute;

          left: 24px;
          right: 24px;
          bottom: 25px;

          z-index: 2;
        }


        /* =====================================================
           LOCATION
        ====================================================== */

        .mre-property-location {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 12px;

          color: #ffffff;

          font-size: 17px;

          line-height: 1.4;

          font-weight: 400;
        }

        .mre-location-icon {
          width: 19px;
          height: 19px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          color: #ff4b4b;

          font-size: 19px;
        }


        /* =====================================================
           PROPERTY TITLE
        ====================================================== */

        .mre-property-title {
          margin: 0;

          font-size: 25px;

          line-height: 1.25;

          font-weight: 700;

          letter-spacing: -0.5px;
        }

        .mre-property-title a {
          color: #ffffff;

          text-decoration: none;

          transition: color 0.3s ease;
        }

        .mre-property-title a:hover {
          color: #ff4b4b;
        }


        /* =====================================================
           SERVICES
        ====================================================== */

        .mre-services-section {
          margin-bottom: 48px;
        }

        .mre-services-list {
          border-top: 1px solid #eeeeee;
        }

        .mre-service-item {
          min-height: 55px;

          padding: 14px 0;

          display: flex;
          align-items: center;
          justify-content: space-between;

          color: #555555;

          text-decoration: none;

          font-size: 15px;

          border-bottom: 1px solid #eeeeee;

          transition: all 0.3s ease;
        }

        .mre-service-item i {
          color: #ff4b4b;

          font-size: 13px;

          transition:
            transform 0.3s ease;
        }

        .mre-service-item:hover {
          color: #ff4b4b;

          padding-left: 5px;
        }

        .mre-service-item:hover i {
          transform: translateX(5px);
        }


        /* =====================================================
           CONTACT
        ====================================================== */

        .mre-contact-section {
          margin-bottom: 48px;
        }

        .mre-contact-list {
          display: flex;
          flex-direction: column;

          gap: 25px;
        }

        .mre-contact-item {
          display: flex;
          align-items: flex-start;

          gap: 15px;
        }


        /* =====================================================
           CONTACT ICON
        ====================================================== */

        .mre-contact-icon {
          width: 46px;
          height: 46px;

          min-width: 46px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #fff1f1;

          color: #ff4b4b;

          font-size: 16px;
        }


        /* =====================================================
           CONTACT CONTENT
        ====================================================== */

        .mre-contact-content {
          padding-top: 2px;
        }

        .mre-contact-label {
          display: block;

          margin-bottom: 5px;

          color: #999999;

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 1px;

          font-weight: 600;
        }

        .mre-contact-content p {
          margin: 0;

          color: #555555;

          font-size: 14px;

          line-height: 1.7;
        }

        .mre-contact-content a {
          color: #17233b;

          font-size: 15px;

          font-weight: 500;

          text-decoration: none;

          transition: color 0.3s ease;
        }

        .mre-contact-content a:hover {
          color: #ff4b4b;
        }


        /* =====================================================
           NEWSLETTER
        ====================================================== */

        .mre-newsletter {
          width: 100%;

          padding-bottom: 20px;
        }

        .mre-newsletter-title {
          margin: 0 0 6px;

          color: #071a38;

          font-size: 25px;

          line-height: 1.3;

          font-weight: 700;
        }

        .mre-newsletter-text {
          margin: 0 0 20px;

          color: #888888;

          font-size: 16px;

          line-height: 1.5;
        }


        /* =====================================================
           NEWSLETTER FORM
        ====================================================== */

        .mre-newsletter-form {
          width: 100%;

          height: 66px;

          padding: 5px;

          display: flex;
          align-items: center;

          border: 1px solid #dddddd;

          border-radius: 40px;

          background: #ffffff;

          box-sizing: border-box;
        }


        /* =====================================================
           NEWSLETTER INPUT
        ====================================================== */

        .mre-newsletter-input {
          flex: 1;

          min-width: 0;

          height: 100%;

          padding: 0 25px;

          border: none;

          outline: none;

          background: transparent;

          color: #333333;

          font-family: inherit;

          font-size: 16px;
        }

        .mre-newsletter-input::placeholder {
          color: #999999;

          opacity: 1;
        }


        /* =====================================================
           SUBSCRIBE BUTTON
        ====================================================== */

        .mre-newsletter-button {
          height: 56px;

          padding: 0 27px;

          border: none;

          border-radius: 35px;

          background: #ff4b4b;

          color: #ffffff;

          font-family: inherit;

          font-size: 15px;

          font-weight: 700;

          white-space: nowrap;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .mre-newsletter-button:hover {
          background: #e83c3c;

          transform: translateY(-1px);
        }


        /* =====================================================
           OVERLAY
        ====================================================== */

        .mre-overlay {
          position: fixed;

          inset: 0;

          width: 100%;
          height: 100%;

          background: rgba(3, 12, 28, 0.60);

          z-index: 999998;

          opacity: 0;
          visibility: hidden;

          transition:
            opacity 0.35s ease,
            visibility 0.35s ease;

          cursor: pointer;
        }

        .mre-overlay-show {
          opacity: 1;

          visibility: visible;
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 767px) {

          .mre-offcanvas {
            width: 420px;
          }

          .mre-offcanvas-header {
            min-height: 80px;

            padding: 16px 25px;
          }

          .mre-offcanvas-body {
            padding: 28px 25px;
          }

          .mre-section-title {
            font-size: 23px;
          }

          .mre-about-text {
            font-size: 15px;
          }

          .mre-property-image {
            height: 205px;
          }

          .mre-property-title {
            font-size: 23px;
          }

          .mre-property-location {
            font-size: 16px;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 480px) {

          .mre-offcanvas {
            width: 100%;
          }

          .mre-offcanvas-header {
            padding: 15px 20px;

            min-height: 75px;
          }

          .mre-offcanvas-logo img {
            max-width: 155px;
            max-height: 50px;
          }

          .mre-close-btn {
            width: 42px;
            height: 42px;
          }

          .mre-offcanvas-body {
            padding: 25px 20px 35px;
          }

          .mre-about-section {
            margin-bottom: 42px;
          }

          .mre-property-section {
            margin-bottom: 42px;
          }

          .mre-services-section {
            margin-bottom: 42px;
          }

          .mre-contact-section {
            margin-bottom: 42px;
          }

          .mre-section-title {
            font-size: 22px;

            margin-bottom: 17px;
          }

          .mre-about-text {
            font-size: 15px;

            line-height: 1.8;
          }

          .mre-property-list {
            gap: 20px;
          }

          .mre-property-image {
            height: 220px;

            border-radius: 13px;
          }

          .mre-property-content {
            left: 22px;
            right: 22px;
            bottom: 22px;
          }

          .mre-property-location {
            font-size: 16px;

            margin-bottom: 10px;
          }

          .mre-property-title {
            font-size: 23px;
          }

          .mre-newsletter-title {
            font-size: 22px;
          }

          .mre-newsletter-text {
            font-size: 15px;
          }

          .mre-newsletter-form {
            height: 64px;
          }

          .mre-newsletter-input {
            padding-left: 18px;
            padding-right: 8px;

            font-size: 15px;
          }

          .mre-newsletter-button {
            height: 54px;

            padding: 0 22px;

            font-size: 14px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 380px) {

          .mre-offcanvas-body {
            padding-left: 16px;
            padding-right: 16px;
          }

          .mre-offcanvas-header {
            padding-left: 16px;
            padding-right: 16px;
          }

          .mre-property-image {
            height: 190px;
          }

          .mre-property-title {
            font-size: 21px;
          }

          .mre-property-location {
            font-size: 15px;
          }

          .mre-newsletter-button {
            padding: 0 17px;
          }

        }

      `}</style>
    </>
  );
}