// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import PageHero from "../components/PageHero";

// export default function ServiceDetails() {
//   return (
//     <>
//       <Header variant="one" />

//       <main>
//         <PageHero title="Service Details" breadcrumb="Service Details" />

//         {/* ====== Start Service Details Section ====== */}
//         <section className="renvia-service-details-sec pt-120 pb-80">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-8">
//                 <div className="service-details-wrapper">
//                   <div className="service-item-main">
//                     <div className="service-image">
//                       <img
//                         src="/assets/images/innerpage/service/service-single1.jpg"
//                         alt="service single"
//                       />
//                     </div>
//                     <div className="service-content">
//                       <h3>About the service</h3>
//                       <p>
//                         At Renvia, with over 25 years of experience serving
//                         clients globally (established since 1995), we understand
//                         the power of exceptional real estate design and
//                         development in creating enduring value and community
//                         well-being.
//                       </p>
//                       <p>
//                         We delve deep to understand your target market,
//                         financial objectives, and municipal criteria. This
//                         comprehensive research forms the foundation for crafting
//                         strategic site plans, architectural excellence, and
//                         turnkey construction delivery.
//                       </p>
//                       <div className="row mb-40">
//                         <div className="col-lg-5">
//                           <div className="renvia-image mb-20">
//                             <img
//                               src="/assets/images/innerpage/service/service-single2.jpg"
//                               alt="service details"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-7">
//                           <div className="content-box mb-20">
//                             <h4>How We Can Help</h4>
//                             <p>
//                               Our multidisciplinary team transforms vision into
//                               reality, ensuring quality control across all
//                               milestones.
//                             </p>
//                             <ul className="check-list style-one">
//                               <li>
//                                 <i className="fas fa-shield-check" />
//                                 Comprehensive Feasibility & ROI Analysis
//                               </li>
//                               <li>
//                                 <i className="fas fa-shield-check" />
//                                 Enhanced Architectural Aesthetics & Planning
//                               </li>
//                               <li>
//                                 <i className="fas fa-shield-check" />
//                                 Sustainable, Green-Certified Construction
//                               </li>
//                               <li>
//                                 <i className="fas fa-shield-check" />
//                                 On-Time & Within-Budget Project Execution
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <h4>Services offered</h4>
//                       <p>
//                         Our full-cycle capabilities span schematic design,
//                         environmental clearance, contractor oversight, and
//                         post-occupancy property management.
//                       </p>
//                       <div className="row mt-50 justify-content-center">
//                         <div className="col-lg-4 col-md-6">
//                           <div className="renvia-iconic-box style-one mb-40">
//                             <div className="icon">
//                               <img
//                                 src="/assets/images/innerpage/icon/icon1.png"
//                                 alt="icon"
//                               />
//                             </div>
//                             <div className="content">
//                               <h5 className="title">Conceptual Design</h5>
//                               <p>
//                                 Tailored architectural modeling and spatial
//                                 planning.
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="renvia-iconic-box style-one mb-40">
//                             <div className="icon">
//                               <img
//                                 src="/assets/images/innerpage/icon/icon2.png"
//                                 alt="icon"
//                               />
//                             </div>
//                             <div className="content">
//                               <h5 className="title">Schematic Design</h5>
//                               <p>
//                                 Structural blueprints and MEP engineering
//                                 layouts.
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                           <div className="renvia-iconic-box style-one mb-40">
//                             <div className="icon">
//                               <img
//                                 src="/assets/images/innerpage/icon/icon3.png"
//                                 alt="icon"
//                               />
//                             </div>
//                             <div className="content">
//                               <h5 className="title">24/7 Advisory</h5>
//                               <p>
//                                 Dedicated project managers answering every
//                                 query.
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="col-xl-4">
//                 <div className="sidebar-widget-area">
//                   <div className="sidebar-widget sidebar-search-widget mb-30">
//                     <div className="widget-content">
//                       <form onSubmit={(e) => e.preventDefault()}>
//                         <div className="form-group">
//                           <input
//                             type="search"
//                             className="form_control"
//                             placeholder="Enter Keyword"
//                             name="search"
//                             required
//                           />
//                           <button className="search-btn" type="submit">
//                             <i className="far fa-search" />
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>

//                   <div className="sidebar-widget sidebar-nav-widget mb-30">
//                     <h4 className="widget-title">Categories</h4>
//                     <div className="widget-content">
//                       <ul>
//                         <li>
//                           <Link to="/services">
//                             Real Estate Development
//                             <span>
//                               <i className="far fa-arrow-right" />
//                             </span>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/services">
//                             Construction Management
//                             <span>
//                               <i className="far fa-arrow-right" />
//                             </span>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/services">
//                             Architecture & Design
//                             <span>
//                               <i className="far fa-arrow-right" />
//                             </span>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/services">
//                             Project Management
//                             <span>
//                               <i className="far fa-arrow-right" />
//                             </span>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="/services">
//                             Commercial Properties
//                             <span>
//                               <i className="far fa-arrow-right" />
//                             </span>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="sidebar-widget sidebar-contact-info-widget mb-40">
//                     <div className="widget-content">
//                       <h4>Need Any Help?</h4>
//                       <p>Call us 24/7 for consultation and project estimates</p>
//                       <div className="renvia-info-item style-two item_one mb-20">
//                         <div className="icon">
//                           <i className="far fa-phone-alt" />
//                         </div>
//                         <div className="content">
//                           <span>Call Us</span>
//                           <h5>
//                             <a href="tel:+2869852156">+286 985 2156</a>
//                           </h5>
//                         </div>
//                       </div>
//                       <div className="renvia-info-item style-two item_two mb-20">
//                         <div className="icon">
//                           <i className="far fa-envelope" />
//                         </div>
//                         <div className="content">
//                           <span>Mail Us</span>
//                           <h5>
//                             <a href="mailto:info@renvia.com">info@renvia.com</a>
//                           </h5>
//                         </div>
//                       </div>
//                       <div className="renvia-info-item style-two item_three">
//                         <div className="icon">
//                           <i className="far fa-map-marker-alt" />
//                         </div>
//                         <div className="content">
//                           <span>Office Address</span>
//                           <h5>125 Berlin, Germany</h5>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer variant="v1" showTopCta={true} />
//     </>
//   );
// }
