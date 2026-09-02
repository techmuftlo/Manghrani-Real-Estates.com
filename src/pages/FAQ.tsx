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
      question: "What services do you offer?",
      answer:
        "We combine global reach with local expertise, offering data-backed strategy, end-to-end development support, and a long-standing reputation for integrity and performance. We're not just advisors.",
    },
    {
      question: "Do you work with individual investors or only institutions?",
      answer:
        "We combine global reach with local expertise, offering data-backed strategy, end-to-end development support, and a long-standing reputation for integrity and performance. We work with individual property buyers and major fund managers.",
    },
    {
      question: "What types of projects do you typically handle?",
      answer:
        "We handle residential towers, luxury private villas, master-planned commercial complexes, industrial logistical facilities, and urban regeneration projects.",
    },
    {
      question: "Is my information confidential?",
      answer:
        "Yes, all client records, investment amounts, and strategic negotiations are protected by strict non-disclosure policies and enterprise security protocols.",
    },
    {
      question: "Do you handle legal and regulatory requirements?",
      answer:
        "Our comprehensive development management service includes municipal zoning clearance, environmental compliance, and deed verification.",
    },
  ];

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="FAQ" breadcrumb="FAQ" />

        {/* ====== Start FAQ Section ====== */}
        <section className="renvia-faq-sec pt-120 pb-95">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="renvia-content-box mb-5 mb-xl-0">
                  <div className="section-title">
                    <span className="sub-title">
                      Frequently Asked Questions
                      <img src="/assets/images/line2.png" alt="line" />
                    </span>
                    <h2 className="text-anm">
                      Key Questions Answered About Our Real Estate
                    </h2>
                  </div>
                  <p className="mb-30">
                    Get straight answers about our development process,
                    investment models, and quality assurances.
                  </p>
                  <div className="renvia-question-box">
                    <div className="content">
                      <div className="renvia-iconic-left-box style-three">
                        <div className="icon">
                          <i className="fas fa-question-circle" />
                        </div>
                        <div className="content">
                          <h4 className="title">Still Have Questions?</h4>
                          <p>Get the answers you need, quickly!</p>
                        </div>
                      </div>
                      <Link to="/contact" className="theme-btn style-one">
                        Contact Us <i className="far fa-arrow-right" />
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
