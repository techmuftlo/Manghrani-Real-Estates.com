// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import PageHero from "../components/PageHero";

// export default function Team() {
//   const teamMembers = [
//     {
//       name: "Leslie Alexander",
//       role: "Director Of Architecture",
//       img: "/assets/images/innerpage/team/team-img1.jpg",
//     },
//     {
//       name: "Dianne Russell",
//       role: "Executive Assistant",
//       img: "/assets/images/innerpage/team/team-img2.jpg",
//     },
//     {
//       name: "Ralph Edwards",
//       role: "Development Manager",
//       img: "/assets/images/innerpage/team/team-img3.jpg",
//     },
//     {
//       name: "Jenny Wilson",
//       role: "Director Of Architecture",
//       img: "/assets/images/innerpage/team/team-img4.jpg",
//     },
//     {
//       name: "Albert Flores",
//       role: "Senior Real Estate Advisor",
//       img: "/assets/images/innerpage/team/team-img5.jpg",
//     },
//     {
//       name: "Bessie Cooper",
//       role: "Development Manager",
//       img: "/assets/images/innerpage/team/team-img6.jpg",
//     },
//   ];

//   return (
//     <>
//       <Header variant="one" />

//       <main>
//         <PageHero title="Team" breadcrumb="Team" />

//         {/* ====== Start Team Section ====== */}
//         <section className="renvia-team-sec pt-120 pb-90">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-xl-6 col-lg-10">
//                 <div className="section-title text-center mb-50">
//                   <span className="sub-title">
//                     <img src="/assets/images/line1.png" alt="line" />
//                     Expert Team
//                     <img src="/assets/images/line2.png" alt="line" />
//                   </span>
//                   <h2 className="text-anm">Meet the leadership team</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               {teamMembers.map((member, index) => (
//                 <div key={index} className="col-xl-4 col-md-6 col-sm-12">
//                   <div className="renvia-team-item style-two mb-30">
//                     <div className="member-image">
//                       <img src={member.img} alt={member.name} />
//                       <div className="social-box">
//                         <a
//                           href="https://facebook.com"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fab fa-facebook-f" />
//                         </a>
//                         <a
//                           href="https://twitter.com"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fab fa-twitter" />
//                         </a>
//                         <a
//                           href="https://linkedin.com"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fab fa-linkedin-in" />
//                         </a>
//                         <a
//                           href="https://youtube.com"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fab fa-youtube" />
//                         </a>
//                       </div>
//                       <div className="hover-content">
//                         <div className="member-info">
//                           <span className="position">{member.role}</span>
//                           <h4 className="title">
//                             <Link to="/team-details">{member.name}</Link>
//                           </h4>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====== Start Clients Section ====== */}
//         <section className="renvia-clients-sec pb-120">
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
