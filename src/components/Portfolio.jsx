import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import Header from './HomeOne/Header.jsx';
import Footer from './HomeOne/Footer.jsx';
import PageBanner from './PageBanner.jsx';




const projects = [
  {
    image: "https://picsum.photos/seed/startup/900/700",
    title: "NextGen Startup",
    tagline: "Scaling ideas into impactful products",
    description:
      "We built a modern platform for NextGen, combining bold branding with responsive design. Their customer engagement grew by 60% in just 3 months.",
  },
  {
    image: "https://picsum.photos/seed/ecommerce/900/700",
    title: "E-Commerce Leader",
    tagline: "Redefining the online shopping experience",
    description:
      "We optimized the UI/UX for a leading e-commerce client. The streamlined checkout increased conversions by 35% and cut cart abandonment significantly.",
  },
  {
    image: "https://picsum.photos/seed/finance/900/700",
    title: "FinTech Innovator",
    tagline: "Designing trust through user-centric dashboards",
    description:
      "For a rising fintech brand, we created a secure, intuitive dashboard with real-time analytics. Active users increased by 50% within the first quarter.",
  },
];

function AllProjects() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true, offset: 120 });
  }, []);

  return (
    <>
    <Header />
    <PageBanner title="Portfolio" breadcrumb="Portfolio" />
   <section className="all-projects-page">
  <div className="container">
    <h2 className="page-title" data-aos="fade-up">
      Client Success Stories
    </h2>

    {projects.map((project, index) => (
      <div
        key={index}
        className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
      >
        {/* Image */}
        <div
          className="project-image"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img src={project.image} alt={project.title} />
        </div>

        {/* Content */}
        <div
          className="project-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>{project.title}</h3>
          <h4 className="tagline">{project.tagline}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


    <Footer />
    </>
  );
}

export default AllProjects;
