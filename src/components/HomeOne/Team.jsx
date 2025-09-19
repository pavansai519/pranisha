import React, { useState } from "react";
 
const teamMembers = [
  { name: "Monica", role: "UI/UX Designer", img: "https://pixy-project.vercel.app/api/media/file/team-1.jpg", socials: [{ href: "https://instagram.com/", title: "Instagram", iconClass: "fab fa-instagram" }] },
  { name: "Avinash", role: "Developer", img:"https://pixy-project.vercel.app/api/media/file/team-1.jpg", socials: [{ href: "https://instagram.com/", title: "Instagram", iconClass: "fab fa-instagram" }] },
  { name: "James", role: "Web Developer", img: "https://pixy-project.vercel.app/api/media/file/team-3.jpg", socials: [{ href: "https://instagram.com/", title: "Instagram", iconClass: "fab fa-instagram" }] },
  { name: "Spunky", role: "Paw giver", img: "https://pixy-project.vercel.app/api/media/file/team-8.jpg", socials: [{ href: "https://instagram.com/", title: "Instagram", iconClass: "fab fa-instagram" }] },
  { name: "Avinash", role: "Developer", img:"https://pixy-project.vercel.app/api/media/file/team-1.jpg", socials: [{ href: "https://instagram.com/", title: "Instagram", iconClass: "fab fa-instagram" }] },
  { name: "Avinash", role: "Developer", img: "https://pixy-project.vercel.app/api/media/file/team-1.jpg", socials: [{ href: "https://instagram.com/", title: "Instagram", iconClass: "fab fa-instagram" }] },
 
  ];
 
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
 
export default function TeamSection() {
  // Each "slide" contains 8 members (2 rows × 4 per row)
  const slides = chunkArray(teamMembers, 8);
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
 
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="mil-head1 mil-mb60 mil-up">
          Meet Our <span className="mil-a1">Team</span>
        </h2>
 
        <div className="team-carousel">
          <div className="team-grid">
            {slides[currentSlide].map((m, idx) => (
              <div className="mil-team-card-wrapper" key={idx}>
                <div className="mil-team-card mil-mb30 mil-768-mb-15 mil-up">
                  <div className="mil-hover-frame">
                    <div className="img-wrap">
                      <img alt={m.name} src={m.img} loading="lazy" className="mil-scale-img" />
                    </div>
                  </div>
                  <div className="mil-hover-overlay">
                    <div className="mil-descr">
                      <h4 className="mil-head4 mil-m4 mil-mb20">{m.name}</h4>
                      <ul className="mil-social mil-mb20">
                        {m.socials.map((s, i) => (
                          <li key={i}>
                            <a href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}>
                              <i className={s.iconClass} aria-hidden />
                              <span className="sr-only">{s.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <p className="mil-stylized mil-m2">{m.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          {/* Navigation Dots */}
          <div className="carousel-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
 
          {/* Optional Arrows */}
          <button className="prev-arrow" onClick={prevSlide}>‹</button>
          <button className="next-arrow" onClick={nextSlide}>›</button>
        </div>
      </div>
 
     
    </section>
  );
}
 
 