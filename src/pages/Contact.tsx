import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Contact Us" breadcrumb="Contact Us" />

        {/* ====== Start Contact Info Section ====== */}
        <section className="renvia-contact-info-sec pt-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-50">
                  <h2>Connect With Our Advisory Team</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="renvia-info-left-box mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <h5>Advisory Office</h5>
                    <p>H1-381, RIICO Industrial Area, Sitapura Industrial Area, Sitapura, Jaipur, Rajasthan 303022</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="renvia-info-left-box mb-40">
                  <div className="icon">
                    <i className="far fa-phone-alt" />
                  </div>
                  <div className="content">
                    <h5>Direct Advisory Line</h5>
                    <p>
                      Direct: <a href="tel:+919950000550">+91 99500 00550</a>
                    </p>
                    <p>Industrial Real Estate &amp; Investment Advisors</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="renvia-info-left-box mb-40">
                  <div className="icon">
                    <i className="far fa-clock" />
                  </div>
                  <div className="content">
                    <h5>Consultation Hours</h5>
                    <p>10:00 - 19:00</p>
                    <p>Monday - Saturday</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Start Contact Form Section ====== */}
        <section id="consultation-form" className="renvia-contact_three pt-80 pb-120">
          <div className="container">
            <div className="contact-wrapper">
              <h3 className="text-center mb-4">Request a Strategic Consultation</h3>
              {formSent && (
                <div className="alert alert-success mb-4 text-center">
                  Thank you! Your advisory inquiry has been submitted successfully. A senior consultant will contact you promptly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="d-block mb-1">
                        <i className="far fa-user me-2" />
                        
                      </label>
                      <input
                        type="text"
                        className="form_control w-100"
                        placeholder="Your Name "
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="d-block mb-1">
                        <i className="far fa-envelope me-2" />
                        
                      </label>
                      <input
                        type="email"
                        className="form_control w-100"
                        placeholder=" Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="d-block mb-1">
                        <i className="far fa-phone me-2" />
                        
                      </label>
                      <input
                        type="text"
                        className="form_control w-100"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="d-block mb-1">
                        <i className="far fa-edit me-2" />
                        
                      </label>
                      <input
                        type="text"
                        className="form_control w-100"
                        placeholder="Advisory Requirement "
                        name="subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-4">
                      <label className="d-block mb-1">
                        <i className="far fa-pen me-2" />
                        
                      </label>
                      <textarea
                        className="form_control w-100"
                        placeholder="Describe your operational requirements, preferred area, or asset parameters..."
                        name="message"
                        rows={5}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text-center">
                      <button type="submit" className="theme-btn style-one">
                        Submit Advisory Request <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ====== Start Map Section ====== */}
        <section className="contact-map-sec pb-120">
          <div className="container">
            <div className="map-box">
              <iframe
                title="contact map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.922338001854!2d75.8427451!3d26.7787454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc969bd535c2f%3A0xea8dc2fb3cd19ef0!2sManghrani%20Real%20Estates!5e0!3m2!1sen!2sin!4v1788179361737!5m2!1sen!2sin"
                     loading="lazy"
                style={{ width: "100%", height: "450px", border: 0, borderRadius: "10px" }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}
