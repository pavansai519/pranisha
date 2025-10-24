import React from "react";
import "./pranisha-okai.css";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaMicrophone, FaChartLine, FaBirthdayCake } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdOutlineBrush, MdEvent } from "react-icons/md";
 
const services = [
  {
    icon: <FaLaptopCode />,
    title: "IT Solutions",
    desc: "Transform your business with IT solutions like chatbots, automation, and data-driven decision-making tools.",
    link: "/itdevelopment",
    color: "#ffa324",
  },
  {
    icon: <GiBrain />,
    title: "Artificial Intelligence",
    desc: "Leverage AI technologies to optimize business processes and deliver smarter solutions.",
    link: "/ai",
    color: "#ffa324",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    desc: "Drive growth with targeted digital marketing strategies including SEO, social media, and paid advertising.",
    link: "/digitalmarketing",
    color: "#ffa324",
  },
  {
    icon: <MdOutlineBrush />,
    title: "Branding",
    desc: "Build a strong, memorable identity with professional logo design, visuals, and brand strategy tailored to your business.",
    link: "/branding",
    color: "#ffa324",
  },
  {
    icon: <FaMicrophone />,
    title: "PR & Media",
    desc: "Elevate your brand's visibility with our PR media services, including press releases, media outreach, and reputation management.",
    link: "/pr-media",
    color: "#ffa324",
  },
  {
    icon: <MdEvent />,
    title: "Events",
    desc: "Plan and execute successful events with our comprehensive event management services.",
    link: "/events",
    color: "#ffa324",
  },
];
 
function ServiceHomeOne() {
  return (
    <section className="expertise-section">
      <div className="auto-container">
        <div className="expertise-header" data-aos="fade-up">
          {/* <h2>Our Services</h2> */}
          {/* <p>
            We bring innovation, strategy, and creativity together <br />
            to shape the digital future.
          </p> */}
        </div>
 
        <div className="expertise-grid">
          {services.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="expertise-card"
              style={{ textDecoration: "none" }}
            >
              <div
                className="icon"
                style={{ color: item.color, textShadow: `0 0 20px ${item.color}` }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="learn-btn-wrapper">
                <Link
                  to={item.link}
                  className="learn-btn"
                  // style={{ boxShadow: `0 0 10px ${item.color}` }}
                >
                  Learn More
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default ServiceHomeOne;