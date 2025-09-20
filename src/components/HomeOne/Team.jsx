import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

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

function TeamSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const start = page * itemsPerPage;
  const visibleMembers = collaborators.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(collaborators.length / itemsPerPage);

  return (
    <section className="team-section">
      <h2 className="section-title">Meet the Team</h2>
      <div className="team-grid">
        {visibleMembers.map((member, i) => (
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

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={page === idx ? "active" : ""}
            onClick={() => setPage(idx)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          disabled={page === totalPages - 1}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default TeamSection;
