import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import VideoModal from "../components/VideoModal";

export default function ProjectDetails() {
  const [activeMediaTab, setActiveMediaTab] = useState<"photos" | "video" | "plans" | "map">("photos");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Asset Advisory Details" breadcrumb="Project Details" />

        {/* ====== Start Project Details Section ====== */}
        <section className="renvia-project-details-sec pt-120">
          <div className="container">
            <div className="project-details-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-main">
                    <div className="project-thumbnail mb-40">
                      <img
                        src="/assets/images/innerpage/project/project-single1.jpg"
                        alt="project single"
                      />
                    </div>
                    <div className="project-content">
                      {/* Meta stats */}
                      <div className="project-meta-list">
                        <div className="renvia-info-item style-three mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/innerpage/icon/icon4.png"
                              alt="icon"
                            />
                          </div>
                          <div className="info">
                            <span>Status</span>
                            <h6>Completed</h6>
                          </div>
                        </div>
                        <div className="renvia-info-item style-three mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/innerpage/icon/icon5.png"
                              alt="icon"
                            />
                          </div>
                          <div className="info">
                            <span>Project Type</span>
                            <h6>Industrial Complex</h6>
                          </div>
                        </div>
                        <div className="renvia-info-item style-three mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/innerpage/icon/icon6.png"
                              alt="icon"
                            />
                          </div>
                          <div className="info">
                            <span>Project Area</span>
                            <h6>200,000 sqft</h6>
                          </div>
                        </div>
                        <div className="renvia-info-item style-three mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/innerpage/icon/icon7.png"
                              alt="icon"
                            />
                          </div>
                          <div className="info">
                            <span>Unit Size</span>
                            <h6>10,000 - 50,000 Sqft</h6>
                          </div>
                        </div>
                        <div className="renvia-info-item style-three mb-30">
                          <div className="icon">
                            <img
                              src="/assets/images/innerpage/icon/icon8.png"
                              alt="icon"
                            />
                          </div>
                          <div className="info">
                            <span>Advisory Scope</span>
                            <h6>Acquisition &amp; Lease</h6>
                          </div>
                        </div>
                      </div>

                      <div className="location">
                        <i className="far fa-map-marker-alt" /> Sitapura Industrial Area, Jaipur
                      </div>
                      <h3 className="title">Industrial Logistics &amp; Manufacturing Facility</h3>
                      <p>
                        Comprehensive industrial facility evaluated for heavy manufacturing, warehousing, and corporate operations. Strategically situated within Sitapura Industrial Area with high connectivity to transport corridors.
                      </p>
                      <p>
                        Benefits from verified RIICO zoning clearances, robust high-tension power connectivity, dedicated freight access, and wide industrial road frontages.
                      </p>

                      <div className="content-box">
                        <div className="row">
                          <div className="col-xl-8">
                            <h3>Asset Advisory Overview</h3>
                            <p>
                              Evaluated with institutional due diligence, this property offers premier infrastructure for manufacturing enterprises, pharmaceutical hubs, and logistics aggregators.
                            </p>
                            <h3>Features &amp; Infrastructure</h3>
                            <div className="features-amenities-list mb-5 mb-xl-0">
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>ID NO.</h6>
                                  <p>#IND-1253</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Type</h6>
                                  <p>Industrial Facility</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Bays</h6>
                                  <p>4 High-Bay Units</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Dock Levelers</h6>
                                  <p>6 Dedicated</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Plot Area</h6>
                                  <p>25,000 Sqft</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Purpose</h6>
                                  <p>Acquisition / Lease Advisory</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Wi-Fi</h6>
                                  <p>Yes</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Smart Home</h6>
                                  <p>Yes</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="icon">
                                  <img
                                    src="/assets/images/innerpage/icon/icon9.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="info">
                                  <h6>Parking</h6>
                                  <p>Yes</p>
                                </div>
                              </div>
                              <div className="renvia-info-item style-four">
                                <div className="info">
                                  <h6>Build Year</h6>
                                  <p>2025</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4">
                            <div className="project-info-box mb-5 mb-xl-0">
                              <h5>Project Information</h5>
                              <ul>
                                <li>
                                  Project Category:
                                  <span>Rubix Tower</span>
                                </li>
                                <li>
                                  Clients:<span>David Malan</span>
                                </li>
                                <li>
                                  Property Area:
                                  <span>250,000 sq. ft.</span>
                                </li>
                                <li>
                                  Project Date:<span>25 June, 2025</span>
                                </li>
                                <li>
                                  Avenue End Date:<span>08 July, 2025</span>
                                </li>
                                <li>
                                  Locations:
                                  <span>New York – 4648 Rocky, USA</span>
                                </li>
                                <li>
                                  Price:<span>$10 Million</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Property Media Tabs */}
                      <div className="property-media-box mt-70">
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <h3 className="mb-30">Property Media</h3>
                          </div>
                          <div className="col-lg-7">
                            <div className="property-tabs mb-40">
                              <ul className="nav nav-tabs">
                                <li>
                                  <button
                                    type="button"
                                    className={`nav-link ${
                                      activeMediaTab === "photos" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveMediaTab("photos")}
                                  >
                                    Photos
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className={`nav-link ${
                                      activeMediaTab === "video" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveMediaTab("video")}
                                  >
                                    Property Video
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className={`nav-link ${
                                      activeMediaTab === "plans" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveMediaTab("plans")}
                                  >
                                    Plans
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className={`nav-link ${
                                      activeMediaTab === "map" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveMediaTab("map")}
                                  >
                                    Map
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="tab-content">
                          {activeMediaTab === "photos" && (
                            <div className="tab-pane fade show active">
                              <div className="row">
                                <div className="col-lg-8">
                                  <div className="renvia-image mb-30">
                                    <img
                                      src="/assets/images/innerpage/project/project-single2.jpg"
                                      alt="project view"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="renvia-image mb-30">
                                    <img
                                      src="/assets/images/innerpage/project/project-single3.jpg"
                                      alt="interior"
                                    />
                                  </div>
                                  <div className="renvia-image mb-30">
                                    <img
                                      src="/assets/images/innerpage/project/project-single4.jpg"
                                      alt="living area"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeMediaTab === "video" && (
                            <div className="tab-pane fade show active">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="renvia-image video-image mb-30 p-r">
                                    <img
                                      src="/assets/images/innerpage/project/project-single5.jpg"
                                      alt="video thumbnail"
                                    />
                                    <div className="play-button text-center">
                                      <button
                                        type="button"
                                        className="video-popup border-0 bg-transparent"
                                        onClick={() => setIsVideoOpen(true)}
                                      >
                                        <i className="fas fa-play" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeMediaTab === "plans" && (
                            <div className="tab-pane fade show active">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="renvia-image mb-30">
                                    <img
                                      src="/assets/images/innerpage/project/project-single6.jpg"
                                      alt="floor plan"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeMediaTab === "map" && (
                            <div className="tab-pane fade show active">
                              <div className="map-box mb-30">
                                <iframe
                                  title="project location"
                                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
                                  loading="lazy"
                                  style={{ width: "100%", height: "350px", border: 0 }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Contact Section ====== */}
        <section className="renvia-contact_two pb-120 pt-60">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-30">
                    <h3>Request Advisory Details &amp; Consultation</h3>
                  </div>
                </div>
              </div>
              {formSent && (
                <div className="alert alert-success mb-4 text-center">
                  Thank you! Your advisory inquiry regarding this asset has been received. Our senior advisor will reach out shortly.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name*"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
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
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Subject*"
                        name="subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        className="form_control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text-center">
                      <button type="submit" className="theme-btn style-one">
                        Send A Request <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" showTopCta={true} />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="pPl3ZZdTP3g"
      />
    </>
  );
}
