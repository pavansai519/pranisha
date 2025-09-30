import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer.jsx";



const collaborators = [
  {
    name: "Jordan Jonson",
    role: "CEO of Okai",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: { twitter: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Steven Morrison",
    role: "Full-stack Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    socials: { twitter: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Melanie Robinson",
    role: "SEO & Marketing",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: { twitter: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "David White",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
    socials: { twitter: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Sophia Lee",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    socials: { twitter: "#", instagram: "#", facebook: "#" },
  },
];

function Team() {
  return (
    <>
    <Header/>
    <section className="team-section">
      <h2 className="section-title">Our Full Team</h2>
      <div className="team-grid">
        {collaborators.map((member, i) => (
          <div className="team-card" key={i}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="socials">
              <a href={member.socials.twitter} aria-label="Twitter">
                <FaTwitter />
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
    <Footer/>
    </>
  );
}

export default Team;
