import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer1.jsx";
import Circle from "./Circle.jsx";
import { Helmet } from "react-helmet-async";
import Sindhu from "../../src/assets/images/Team/Sindhu.png"



const collaborators = [
  {
    name: "Jordan Jonson",
    role: "CEO of Okai",
    img: Sindhu,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Steven Morrison",
    role: "Full-stack Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Melanie Robinson",
    role: "SEO & Marketing",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "David White",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Sophia Lee",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
];

function Team() {
  return (
    <>
     <Helmet>
            <title>Team | Pranishaa - Let's Build Something Amazing</title>
            <meta
              name="description"
              content="Get in touch with Pranishaa for digital marketing, branding, and web development solutions. We're here to turn your ideas into impact."
            />
            <meta
              name="keywords"
              content="Contact Pranishaa, Digital Marketing Agency, Branding, Web Design, SEO Help"
            />
            <meta property="og:title" content="Contact Pranishaa" />
            <meta property="og:description" content="Reach out to Pranishaa for expert marketing, branding, and design services that drive business success." />
            <meta property="og:image" content="https://pranishaa.com/images/og-contact.jpg" />
            <meta property="og:url" content="https://pranishaa.com/contact" />
          </Helmet>
    <Header/>
    <section className="team-section">
      <h2 className="section-title">Meet the Minds Behind Our Success</h2>
      <div className="team-grid">
        {collaborators.map((member, i) => (
          <div className="team-card" key={i}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="socials">
              <a href={member.socials.linkdin} aria-label="linkdin">
                <FaLinkedin/>
              </a>
              <a href={member.socials.instagram} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={member.socials.facebook} aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Circle/>
    <Footer/>
    </>
  );
}

export default Team;
