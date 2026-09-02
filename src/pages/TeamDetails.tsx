// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import PageHero from "../components/PageHero";

// export default function TeamDetails() {
//   return (
//     <>
//       <Header variant="one" />

//       <main>
//         <PageHero title="Team Details" breadcrumb="Team Details" />

//         {/* ====== Start Team Details Section ====== */}
//         <section className="renvia-team-details-sec pt-120">
//           <div className="container">
//             <div className="team-details-wrapper">
//               <div className="renvia-team-main">
//                 <div className="row">
//                   <div className="col-xl-5">
//                     <div className="member-image mb-5 mb-xl-0">
//                       <img
//                         src="/assets/images/innerpage/team/team-single1.jpg"
//                         alt="member"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-xl-7">
//                     <div className="member-info">
//                       <div className="title-social-wrap mb-10">
//                         <div className="title-wrap mb-20">
//                           <h4 className="title">Dianne Russell</h4>
//                           <span className="position">Executive Assistant</span>
//                         </div>
//                         <div className="social-box mb-20">
//                           <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <i className="fab fa-facebook-f" />
//                           </a>
//                           <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <i className="fab fa-twitter" />
//                           </a>
//                           <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <i className="fab fa-instagram" />
//                           </a>
//                           <a
//                             href="https://linkedin.com"
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <i className="fab fa-linkedin-in" />
//                           </a>
//                         </div>
//                       </div>
//                       <p>
//                         With over 20 years of real estate management and
//                         strategic advisory experience, Dianne coordinates
//                         high-stakes transactions, joint-venture partnerships,
//                         and executive operations across major metropolitan
//                         markets.
//                       </p>
//                       <div className="member-info-list mb-40">
//                         <div className="row g-xl-0">
//                           <div className="col-md-6 item-border">
//                             <div className="renvia-member-info-box">
//                               <div className="icon">
//                                 <i className="far fa-user" />
//                               </div>
//                               <div className="content">
//                                 <span>Experience</span>
//                                 <h4>More Than 20 Years</h4>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-6 item-border">
//                             <div className="renvia-member-info-box">
//                               <div className="icon">
//                                 <i className="far fa-phone" />
//                               </div>
//                               <div className="content">
//                                 <span>Phone Number</span>
//                                 <h4>
//                                   <a href="tel:+2568569575625">
//                                     +(256) 85695-75625
//                                   </a>
//                                 </h4>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-6 item-border">
//                             <div className="renvia-member-info-box">
//                               <div className="icon">
//                                 <i className="far fa-envelope" />
//                               </div>
//                               <div className="content">
//                                 <span>Email Address</span>
//                                 <h4>
//                                   <a href="mailto:dianne@renvia.com">
//                                     dianne@renvia.com
//                                   </a>
//                                 </h4>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-6 item-border">
//                             <div className="renvia-member-info-box">
//                               <div className="icon">
//                                 <i className="far fa-map-marker-alt" />
//                               </div>
//                               <div className="content">
//                                 <span>Location</span>
//                                 <h4>New York, NY</h4>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <Link to="/contact" className="theme-btn style-one">
//                         Contact Me <i className="far fa-arrow-right" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* About Me & Skills */}
//               <div className="row mt-90 align-items-center">
//                 <div className="col-lg-7">
//                   <div className="renvia-content-box pe-xl-5 mb-5 mb-xl-0">
//                     <h3 className="mb-15">About Me</h3>
//                     <p className="mb-25">
//                       Throughout two decades in the property development and
//                       asset management arena, I have guided multidisciplinary
//                       teams through complex master-planned developments, urban
//                       regeneration projects, and capital allocation frameworks.
//                     </p>
//                     <p className="mb-25">
//                       My approach prioritizes clear communication, robust
//                       compliance, and long-term value creation for institutional
//                       partners and residential communities alike.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-lg-5">
//                   <div className="renvia-skill-list">
//                     <h3 className="mb-15">Professional Skills</h3>
//                     <p className="mb-25">
//                       Core competencies honed through decades of high-level
//                       execution in the property industry:
//                     </p>
//                     <div className="renvia-skill-item mb-25">
//                       <div className="progress-title">
//                         <h6>
//                           Real Estate Strategy <span>90%</span>
//                         </h6>
//                       </div>
//                       <div className="progress">
//                         <div
//                           className="progress-bar"
//                           style={{ width: "90%" }}
//                         />
//                       </div>
//                     </div>
//                     <div className="renvia-skill-item mb-25">
//                       <div className="progress-title">
//                         <h6>
//                           Project Feasibility & Planning <span>85%</span>
//                         </h6>
//                       </div>
//                       <div className="progress">
//                         <div
//                           className="progress-bar"
//                           style={{ width: "85%" }}
//                         />
//                       </div>
//                     </div>
//                     <div className="renvia-skill-item mb-25">
//                       <div className="progress-title">
//                         <h6>
//                           Contract & Operations Oversight <span>95%</span>
//                         </h6>
//                       </div>
//                       <div className="progress">
//                         <div
//                           className="progress-bar"
//                           style={{ width: "95%" }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ====== Start Clients Section ====== */}
//         <section className="renvia-clients-sec pt-90 pb-120">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="section-title mb-30 text-center">
//                   <h3>We take great pride in working with top-tier clientele.</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-center align-items-center">
//               <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
//                 <img
//                   src="/assets/images/innerpage/clients/client-img1.png"
//                   alt="client"
//                 />
//               </div>
//               <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
//                 <img
//                   src="/assets/images/innerpage/clients/client-img2.png"
//                   alt="client"
//                 />
//               </div>
//               <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
//                 <img
//                   src="/assets/images/innerpage/clients/client-img3.png"
//                   alt="client"
//                 />
//               </div>
//               <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
//                 <img
//                   src="/assets/images/innerpage/clients/client-img4.png"
//                   alt="client"
//                 />
//               </div>
//               <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
//                 <img
//                   src="/assets/images/innerpage/clients/client-img5.png"
//                   alt="client"
//                 />
//               </div>
//               <div className="col-6 col-md-4 col-lg-2 mb-30 text-center">
//                 <img
//                   src="/assets/images/innerpage/clients/client-img6.png"
//                   alt="client"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer variant="v1" showTopCta={true} />
//     </>
//   );
// }
