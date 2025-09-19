import React from 'react';
import { Link } from 'react-router-dom';

// Import Client Logos
import ClientImg from '../../assets/images/resource/Mana-Vantillu-Logo.png';
import ClientImg1 from '../../assets/images/resource/Lazaro-Logo.png';
import ClientImg2 from '../../assets/images/resource/Fizaah-Travels.png';
import ClientImg3 from '../../assets/images/resource/Signature-India-Logo.png';
import ClientImg4 from '../../assets/images/resource/Subbahya-Gari-Hotel.png';
import ClientImg5 from '../../assets/images/resource/Top-of-The-World-Sky-Lounge-Logo.png';
import ClientImg6 from '../../assets/images/resource/Euro-Kids-Malkajgiri-Hyd-Logo.png';

const clientLogos = [
  ClientImg, ClientImg1, ClientImg2,
  ClientImg3, ClientImg4, ClientImg5, ClientImg6
];

const repeatedClientLogos = [...clientLogos, ...clientLogos]; // Duplicate for seamless scroll

function ClientsHomeOne({ className }) {
  return (
    <section className={`clients-section ${className || ''}`}>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">We serve a diverse range of clients from various industries and backgrounds</span>
          <h2>Our Clients</h2>
        </div>

        <div className="sponsors-outer">
          <div className="clients-carousel continuous-carousel">
            <div className="scroll-track">
              {repeatedClientLogos.map((logo, index) => (
                <div className="slide-item" key={index}>
                  <Link to="/#">
                    <img src={logo} alt={`Client ${index + 1}`} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsHomeOne;
