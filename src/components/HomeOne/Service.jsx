import React from "react";
import './pranisha-okai.css'
 
 
function ServiceHomeOne({ className }) {
  return (
    <section className={`services-section-four ${className || ""}`}>
      <div className="auto-container">
 
 
 
{/*  IT Services */}
        <div className="service-itemm right-box">
          <div className="content">
            <h5 className="service-title">IT Services</h5>
            <p>
              Transform your business with IT solutions like chatbots,
              automation, and data-driven decision-making tools.
            </p>
          </div>
          <div className="float-box">
            <span className="short">IT</span>
          </div>
        </div>
 
       
 
        {/* Branding */}
        <div className="service-itemm left-box">
          <div className="float-box">
            <span className="short">BR</span>
          </div>
          <div className="content">
            <h5 className="service-title">Branding</h5>
            <p>
              Build a strong, memorable identity with professional logo design,
              visuals, and brand strategy tailored to your business.
            </p>
          </div>
        </div>
 
         {/*  Digital Marketing */}
        <div className="service-itemm right-box">
          <div className="content">
            <h5 className="service-title">Digital Marketing</h5>
            <p>
              Drive growth with targeted digital marketing strategies including
              SEO, social media, and paid advertising.
            </p>
          </div>
          <div className="float-box">
            <span className="short">DM</span>
          </div>
        </div>
 
        {/*  Events */}
        <div className="service-itemm left-box">
          <div className="float-box">
            <span className="short">EV</span>
          </div>
          <div className="content">
            <h5 className="service-title">Events</h5>
            <p>
              Plan and execute successful events with our comprehensive event
              management services.
            </p>
          </div>
        </div>
 
        {/* PR Media */}
        <div className="service-itemm right-box">
          <div className="content">
            <h5 className="service-title">PR Media</h5>
            <p>
              Elevate your brand's visibility with our PR media services,
              including press releases, media outreach, and reputation management.
            </p>
          </div>
          <div className="float-box">
            <span className="short">PR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default ServiceHomeOne;