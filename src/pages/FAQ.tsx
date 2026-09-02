import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "What industrial advisory services do you provide?",
      answer:
        "We offer comprehensive industrial advisory services across Jaipur, including site selection, acquisition and divestment consulting, corporate lease structuring, asset valuation, and RIICO regulatory due diligence.",
    },
    {
      question: "Do you advise both growing businesses and institutional enterprises?",
      answer:
        "Yes, our advisory practice represents local manufacturing enterprises, logistics operators, high-net-worth investors, and institutional corporations seeking prime industrial assets across Rajasthan.",
    },
    {
      question: "Which industrial corridors and hubs do you cover?",
      answer:
        "Our primary advisory expertise spans Sitapura Industrial Area, Mansarovar Industrial Area, Vishwakarma Industrial Area (VKIA), Bindayaka, and emerging logistical corridors in the greater Jaipur region.",
    },
    {
      question: "Are mandate details and corporate negotiations held confidential?",
      answer:
        "Yes, all client mandates, proprietary investment valuations, and off-market asset negotiations are strictly protected under formal Non-Disclosure Agreements (NDAs).",
    },
    {
      question: "Do you provide RIICO statutory and due diligence verification?",
      answer:
        "Yes, our comprehensive advisory process includes rigorous verification of RIICO lease deeds, land-use zoning permissions, pollution control clearances, and power/water infrastructure sanctioning.",
    },
  ];

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Advisory FAQ" breadcrumb="FAQ" />

        {/* ====== Start FAQ Section ====== */}
        <section className="renvia-faq-sec pt-120 pb-95">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="renvia-content-box mb-5 mb-xl-0">
                  <div className="section-title">
                    <span className="sub-title">
                      STRATEGIC ADVISORY FAQS
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                      Key Answers Concerning Our Advisory Practice
                    </h2>
                  </div>
                  <p className="mb-30">
                    Explore transparent insights into our industrial consulting methodology, statutory due diligence, and engagement models.
                  </p>
                  <div className="renvia-question-box">
                    <div className="content">
                      <div className="renvia-iconic-left-box style-three">
                        <div className="icon">
                          <i className="fas fa-question-circle" />
                        </div>
                        <div className="content">
                          <h4 className="title">Need Tailored Advisory?</h4>
                          <p>Connect with our senior industrial property consultants today.</p>
                        </div>
                      </div>
                      <Link to="/contact#consultation-form" className="theme-btn style-one">
                        Request Advisory <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div className="accordion">
                  {faqs.map((faq, index) => (
                    <div key={index} className="accordion-card style-one mb-25">
                      <div
                        className="accordion-header"
                        onClick={() => toggleFaq(index + 1)}
                        style={{ cursor: "pointer" }}
                      >
                        <h5 className="accordion-title d-flex justify-content-between align-items-center">
                          {faq.question}
                          <i
                            className={`fas ${
                              openFaq === index + 1 ? "fa-minus" : "fa-plus"
                            }`}
                          />
                        </h5>
                      </div>
                      {openFaq === index + 1 && (
                        <div className="accordion-collapse collapse show">
                          <div className="accordion-content">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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
