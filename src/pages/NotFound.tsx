import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Error Page" breadcrumb="404" />

        {/* ====== Start Error Section ====== */}
        <section className="axis-error-sec pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="axis-content-box text-center">
                  <div className="axis-image mb-4">
                    <img
                      src="/assets/images/innerpage/404/404.png"
                      alt="404"
                      style={{ maxWidth: "500px", width: "100%" }}
                    />
                  </div>
                  <h2 className="text-anm mb-3">
                    <span>Oops!</span> Page not found
                  </h2>
                  <p className="mb-4">
                    The page you are looking for might have been removed, had its
                    name changed, or is temporarily unavailable.
                  </p>
                  <div className="axis-button">
                    <Link to="/" className="theme-btn style-one">
                      Back To Home <i className="far fa-arrow-right" />
                    </Link>
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
