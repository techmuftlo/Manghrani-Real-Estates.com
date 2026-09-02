import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Projects() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");

  const projectsList = [
    {
      id: 1,
      title: "Apartment Building",
      location: "New York, NY",
      type: "Factory",
      img: "/assets/images/innerpage/project/project-img1.png",
    },
    {
      id: 2,
      title: "Eden Estate",
      location: "Miami, FL",
      type: "Factory",
      img: "/assets/images/innerpage/project/project-img2.png",
    },
    {
      id: 3,
      title: "Vista at Council Square",
      location: "Chicago, IL",
      type: "Factory",
      img: "/assets/images/innerpage/project/project-img3.png",
    },
    {
      id: 4,
      title: "Office Building",
      location: "San Francisco, CA",
      type: "Factory",
      img: "/assets/images/innerpage/project/project-img4.png",
    },
    {
      id: 5,
      title: "Luxury Apartment",
      location: "Los Angeles, CA",
      type: "apartment",
      status: "ready",
      img: "/assets/images/innerpage/project/project-img5.jpg",
    },
    {
      id: 6,
      title: "Skyline Heights",
      location: "Austin, TX",
      type: "apartment",
      status: "ongoing",
      img: "/assets/images/innerpage/project/project-img6.jpg",
    },
  ];

  const filteredProjects = projectsList.filter((p) => {
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    if (filterType !== "all" && p.type !== filterType) return false;
    if (filterLocation !== "all" && !p.location.toLowerCase().includes(filterLocation.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Header variant="one" />

      <main>
        <PageHero title="Projects" breadcrumb="Projects" />

        <section className="renvia-projects-sec pt-120 pb-120">
          <div className="container">
           {/* Filter */}
<div className="projects-item-filter mb-50">
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="row align-items-end justify-content-center">

      {/* Property Type */}
      <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">
        <div className="form-group">
          <label className="form-label text-muted small">
            Property Type
          </label>

          <select
            className="form-select form-control"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Factory">Factory</option>
            <option value="Sale/Rent">Sale / Rent</option>
            <option value="Investment">Investment</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">
        <div className="form-group">
          <label className="form-label text-muted small">
            Location
          </label>

          <select
            className="form-select form-control"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="all">All Locations</option>
            <option value="sitapura">Sitapura</option>
            <option value="mansarovar">Mansarovar</option>
            <option value="vishwakarma">Vishwakarma Industrial Area</option>
            <option value="jaipur">Jaipur</option>
          </select>
        </div>
      </div>

      {/* Reset */}
      <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">
        <div className="renvia-button text-center mb-0">
          <button
            type="button"
            className="theme-btn style-one"
            onClick={() => {
              setFilterStatus("all");
              setFilterType("all");
              setFilterLocation("all");
            }}
          >
            Reset
          </button>
        </div>
      </div>

    </div>
  </form>
</div>

            {/* Projects Grid */}
            <div className="projects-wrapper">
              <div className="row">
                {filteredProjects.map((proj) => (
                  <div key={proj.id} className="col-lg-6">
                    <div className="renvia-project-item style-four mb-40">
                      <div className="project-thumbnail">
                        <img src={proj.img} alt={proj.title} />
                        <div className="location">
                          <i className="far fa-map-marker-alt" /> {proj.location}
                        </div>
                        <div className="hover-content">
                          <Link
                            to="/project-details"
                            className="icon-btn"
                          >
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link to="/project-details">{proj.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="theme-pagination text-center mt-30">
              <ul>
                <li>
                  <a href="#prev" onClick={(e) => e.preventDefault()}>
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#1" className="active" onClick={(e) => e.preventDefault()}>
                    01
                  </a>
                </li>
                <li>
                  <a href="#2" onClick={(e) => e.preventDefault()}>
                    02
                  </a>
                </li>
                <li>
                  <a href="#3" onClick={(e) => e.preventDefault()}>
                    03
                  </a>
                </li>
                <li>
                  <a href="#next" onClick={(e) => e.preventDefault()}>
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="v1" showTopCta={true} />
    </>
  );
}
