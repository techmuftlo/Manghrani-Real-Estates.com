import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter Plan",
      desc: "For small developments and exploratory property consultations",
      priceMonth: 0,
      priceYear: 0,
      popular: false,
      features: [
        { text: "Unlimited Products Updates", included: true },
        { text: "Custom Infrastructure", included: true },
        { text: "Custom Permission", included: true },
        { text: "Custom Design & Review", included: true },
        { text: "Dedicated Account Manager", included: false },
        { text: "24/7 Priority Support", included: false },
      ],
    },
    {
      name: "Business Plan",
      desc: "Ideal for growing portfolios and ongoing developments",
      priceMonth: 86,
      priceYear: 828,
      popular: true,
      features: [
        { text: "Unlimited Products Updates", included: true },
        { text: "Custom Infrastructure", included: true },
        { text: "Custom Permission", included: true },
        { text: "Custom Design & Review", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "24/7 Priority Support", included: false },
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "Full-scale advisory and turnkey development oversight",
      priceMonth: 95,
      priceYear: 1188,
      popular: false,
      features: [
        { text: "Unlimited Products Updates", included: true },
        { text: "Custom Infrastructure", included: true },
        { text: "Custom Permission", included: true },
        { text: "Custom Design & Review", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "24/7 Priority Support", included: true },
      ],
    },
  ];

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Pricing" breadcrumb="Pricing" />

        {/* ====== Start Pricing Section ====== */}
        <section className="renvia-pricing-sec pt-115 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center mb-45">
                  <span className="sub-title">
                    <img src="/assets/images/line1.png" alt="line" />
                    OUR Pricing
                    <img src="/assets/images/line2.png" alt="line" />
                  </span>
                  <h2 className="text-anm">Choose Your Suits Package</h2>
                </div>
                {/* Switch Monthly/Yearly */}
                <div className="theme-switch-box justify-content-center mb-55 d-flex align-items-center gap-3">
                  <span
                    className={`left ${!isYearly ? "fw-bold text-dark" : "text-muted"}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsYearly(false)}
                  >
                    Monthly
                  </span>
                  <label className="switch" htmlFor="pricingBox">
                    <input
                      type="checkbox"
                      id="pricingBox"
                      checked={isYearly}
                      onChange={(e) => setIsYearly(e.target.checked)}
                    />
                    <span className="slider round" />
                  </label>
                  <span
                    className={`right ${isYearly ? "fw-bold text-dark" : "text-muted"}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsYearly(true)}
                  >
                    Yearly (Save 20%)
                  </span>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {plans.map((plan, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className={`renvia-pricing-item style-one mb-40 ${
                      plan.popular ? "popular-plan" : ""
                    }`}
                  >
                    {plan.popular && <div className="popular">Popular</div>}
                    <div className="pricing-header mb-35">
                      <span className="plan">{plan.name}</span>
                      <div className="price">
                        ${isYearly ? plan.priceYear : plan.priceMonth}
                        <span>/{isYearly ? "Per Year" : "Per Month"}</span>
                      </div>
                      <p>{plan.desc}</p>
                    </div>
                    <div className="pricing-button mb-40">
                      <Link to="/contact" className="theme-btn style-one">
                        Join This Plan <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="pricing-body">
                      <ul className="check-list style-one">
                        {plan.features.map((feat, fidx) => (
                          <li
                            key={fidx}
                            className={feat.included ? "check" : "uncheck"}
                          >
                            <i
                              className={
                                feat.included
                                  ? "fas fa-badge-check"
                                  : "fas fa-times text-muted"
                              }
                            />
                            {feat.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== Start Clients Section ====== */}
        <section className="renvia-clients-sec pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-30">
                  <h3>We take great pride in working with top-tier clientele.</h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                <img
                  src="/assets/images/innerpage/clients/client-img1.png"
                  alt="client"
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                <img
                  src="/assets/images/innerpage/clients/client-img2.png"
                  alt="client"
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                <img
                  src="/assets/images/innerpage/clients/client-img3.png"
                  alt="client"
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                <img
                  src="/assets/images/innerpage/clients/client-img4.png"
                  alt="client"
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                <img
                  src="/assets/images/innerpage/clients/client-img5.png"
                  alt="client"
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
                <img
                  src="/assets/images/innerpage/clients/client-img6.png"
                  alt="client"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}
