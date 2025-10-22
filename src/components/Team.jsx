import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer1.jsx";
import Circle from "./Circle.jsx";
import { Helmet } from "react-helmet-async";
import Sindhu from "../../src/assets/images/Team/Sinduja.webp"
import Praneetha from "../../src/assets/images/Team/Praneetha.webp"
import Akshay from "../../src/assets/images/Team/Akshay.webp"
import Aparna from "../../src/assets/images/Team/Aparna.webp"
import Avinash from "../../src/assets/images/Team/Avinash.webp"
import Fatima from "../../src/assets/images/Team/Fatima.webp"
import Priya from "../../src/assets/images/Team/Priya.webp"
import Ramu from "../../src/assets/images/Team/Ramu.webp"
import Reshma from "../../src/assets/images/Team/Reshma.webp"
import Bindhu from "../../src/assets/images/Team/Bindhu.webp"
import Uttej from "../../src/assets/images/Team/Uttej.webp"
import Vamsi from "../../src/assets/images/Team/Vamsi.webp"
import Pavan from "../../src/assets/images/Team/Pavan.webp"



const collaborators = [
  {
    name: "Praneetha Devireddy",
    role: "founder & ceo ",
    img: Praneetha,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Akshay hanuman",
    role: "Graphic Designer & Video Editor",
    img: Akshay,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "vamsikrishna sirasani",
    role: "digital marketer",
    img: Vamsi,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "uttej dega",
    role: "Graphic Designer & Video Editor",
    img: Uttej,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Pavansai prathi",
    role: "fullstack developer",
    img: Pavan,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "avinash reddy",
    role: "fullstack developer",
    img: Avinash,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "sindhuja palamakula",
    role: " jr digital marketer",
    img: Sindhu,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "fatima",
    role: "fullstack developer(intern)",
    img: Fatima,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Daripaalli Aparna",
    role: "fullstack developer(intern)",
    img: Aparna,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "lakshmi priya",
    role: "fullstack developer(intern)",
    img: Priya,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Bindu Sai Basuthakar ",
    role: "jr digital marketer(intern)",
    img: Bindhu,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "reshma",
    role: "fullstack developer(intern)",
    img: Reshma,
    socials: { linkdin: "#", instagram: "#", facebook: "#" },
  },
  {
    name: "Ramu kurella",
    role: "fullstack developer(intern)",
    img: Ramu,
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
            {/* <div className="socials">
              <a href={member.socials.linkdin} aria-label="linkdin">
                <FaLinkedin/>
              </a>
              <a href={member.socials.instagram} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={member.socials.facebook} aria-label="Facebook">
                <FaFacebook />
              </a>
            </div> */}
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
