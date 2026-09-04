import { Routes, Route } from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import ScrollTop from "../components/ScrollTop";

// Page imports
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
// import ServiceDetails from "../pages/ServiceDetails";
import Projects from "../pages/Projects";
// import ProjectDetails from "../pages/ProjectDetails";
// import Team from "../pages/Team";
// import TeamDetails from "../pages/TeamDetails";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import BlogGrid from "../pages/BlogGrid";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTopOnMount />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />

        {/* Inner Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services.html" element={<Services />} />

        {/* <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/service-details.html" element={<ServiceDetails />} /> */}

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects.html" element={<Projects />} />

        {/* <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/project-details.html" element={<ProjectDetails />} /> */}

        {/* <Route path="/team" element={<Team />} />
        <Route path="/team.html" element={<Team />} />

        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/team-details.html" element={<TeamDetails />} /> */}

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing.html" element={<Pricing />} />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq.html" element={<FAQ />} />

        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-grid.html" element={<BlogGrid />} />

        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details/:slug" element={<BlogDetails />} />
        <Route path="/blog-details.html" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />

        {/* 404 Not Found Catch-All */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/404.html" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* Global Scroll Top Button */}
      <ScrollTop />
    </>
  );
}