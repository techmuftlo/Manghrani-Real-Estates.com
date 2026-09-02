import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero
          title="Privacy Policy"
          breadcrumb="Privacy Policy"
        />

        <section className="renvia-privacy-sec pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="mre-policy-wrapper">

                  <div className="mre-policy-content">

                    <h2>Privacy Policy</h2>

                    <p>
                      At <strong>Manghrani Real Estates</strong>, we value your
                      privacy and are committed to protecting your personal
                      information. This Privacy Policy explains how we collect,
                      use and safeguard the information you provide while using
                      our website and services.
                    </p>

                    <h3>1. Information We Collect</h3>

                    <p>
                      We may collect personal information including your name,
                      phone number, email address, company information and
                      property requirements when you submit enquiries through
                      our website.
                    </p>

                    <h3>2. How We Use Your Information</h3>

                    <ul>
                      <li>Respond to enquiries and property requirements.</li>
                      <li>Provide industrial property information.</li>
                      <li>Schedule consultations and site visits.</li>
                      <li>Improve website performance and user experience.</li>
                      <li>Share important updates and service information.</li>
                    </ul>

                    <h3>3. Property Information</h3>

                    <p>
                      Property details, pricing, specifications and availability
                      displayed on this website are subject to change without
                      prior notice. Users should independently verify all
                      information before making business decisions.
                    </p>

                    <h3>4. Data Protection</h3>

                    <p>
                      We take reasonable measures to protect personal
                      information against unauthorized access, disclosure,
                      misuse or alteration.
                    </p>

                    <h3>5. Cookies</h3>

                    <p>
                      Our website may use cookies to enhance user experience,
                      understand website traffic and improve functionality.
                    </p>

                    <h3>6. Third-Party Services</h3>

                    <p>
                      We may use third-party services such as Google Maps,
                      analytics tools and communication platforms which may
                      collect information according to their own privacy
                      policies.
                    </p>

                    <h3>7. Information Sharing</h3>

                    <p>
                      Manghrani Real Estates does not sell, rent or trade your
                      personal information. Information may only be shared when
                      required by law or for business operations related to your
                      enquiry.
                    </p>

                    <h3>8. Your Rights</h3>

                    <p>
                      You may request access, correction or deletion of your
                      personal information by contacting us.
                    </p>

                    <h3>9. Contact Information</h3>

                    <div className="mre-contact-box">
                      <h4>Manghrani Real Estates</h4>

                      <p>
                        H1-381, RIICO Industrial Area,
                        <br />
                        Sitapura Industrial Area,
                        <br />
                        Sitapura, Jaipur,
                        <br />
                        Rajasthan 303022
                      </p>

                      <p>
                        <strong>Phone:</strong> +91 99500 00550
                      </p>
                    </div>

                    <h3>10. Updates To This Policy</h3>

                    <p>
                      We reserve the right to update this Privacy Policy at any
                      time. Any changes will be reflected on this page.
                    </p>

                    <div className="mre-policy-date">
                      Last Updated : August 2026
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" showTopCta={true} />

      <style>{`
        .mre-policy-wrapper{
          max-width:1000px;
          margin:auto;
        }

        .mre-policy-content{
          background:#fff;
          padding:60px;
          border-radius:20px;
          box-shadow:0 10px 40px rgba(0,0,0,.08);
        }

        .mre-policy-content h2{
          font-size:42px;
          line-height:1.2;
          margin-bottom:25px;
        }

        .mre-policy-content h3{
          font-size:24px;
          margin-top:35px;
          margin-bottom:15px;
        }

        .mre-policy-content p{
          color:#666;
          line-height:1.9;
          margin-bottom:15px;
        }

        .mre-policy-content ul{
          padding-left:20px;
          margin-bottom:20px;
        }

        .mre-policy-content ul li{
          margin-bottom:10px;
          color:#666;
          line-height:1.8;
        }

        .mre-contact-box{
          padding:30px;
          background:#f8f8f8;
          border-radius:15px;
          margin-top:20px;
        }

        .mre-contact-box h4{
          margin-bottom:15px;
        }

        .mre-policy-date{
          margin-top:35px;
          font-weight:600;
        }

        @media(max-width:991px){
          .mre-policy-content{
            padding:40px;
          }
        }

        @media(max-width:767px){
          .mre-policy-content{
            padding:25px;
          }

          .mre-policy-content h2{
            font-size:32px;
          }

          .mre-policy-content h3{
            font-size:20px;
          }
        }
      `}</style>
    </>
  );
}