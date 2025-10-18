import React from "react";
import './pranisha-okai.css'
import { Link } from 'react-router-dom';

function ServiceHomeOne({ className }) {
  return (
    <section className={`services-section-four ${className || ""}`}>
      <div className="auto-container">

        {/* IT Services */}
        <div className="service-itemm right-box">
          <div className="content">
            <h5 className="service-title">IT Services</h5>
            <p>Transform your business with IT solutions like chatbots, <br/>automation, and data-driven decision-making tools.</p>
          </div>
          <Link to="/Itdevelopment" className="float-box">
            <span className="short">IT</span>
          </Link>
        </div>
        
         {/* AI */}
        <div className="service-itemm left-box">
          <Link to="/ai" className="float-box">
            <span className="short">AI</span>
          </Link>
          <div className="content">
            <h5 className="service-title">Artificial Intelligence</h5>
            <p>Utilize advanced AI technologies to streamline operations, enhance efficiency, and create intelligent, data-driven business solutions.</p>
          </div>
        </div>


        

        {/* Digital Marketing */}
        <div className="service-itemm right-box">
          <div className="content">
            <h5 className="service-title">Digital Marketing</h5>
            <p>Boost business growth with data-driven digital marketing strategies <br/> focused on SEO, social media, and paid campaigns.</p>
          </div>
          <Link to="/digitalmarketing" className="float-box">
            <span className="short">DM</span>
          </Link>
        </div>

        {/* Branding */}
        <div className="service-itemm left-box">
          <Link to="/branding" className="float-box">
            <span className="short">BR</span>
          </Link>
          <div className="content">
            <h5 className="service-title">Branding</h5>
            <p>Build a strong, memorable identity with professional logo design, visuals, captivating visuals and brand strategy tailored to your business.</p>
          </div>
        </div>

        {/* PR Media */}
        <div className="service-itemm right-box">
          <div className="content">
            <h5 className="service-title">PR Media</h5>
            <p>Elevate your brand's visibility with our PR media services, including <br/>press releases, media outreach, and reputation management.</p>
          </div>
          <Link to="/pr-media" className="float-box">
            <span className="short">PR</span>
          </Link>
        </div>

       

        {/* Events */}
        <div className="service-itemm left-box">
          <Link to="/events" className="float-box">
            <span className="short">EV</span>
          </Link>
          <div className="content">
            <h5 className="service-title">Events</h5>
            <p>Plan, manage, and execute unforgettable events with <br/>seamless coordination,and expert end-to-end services.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
export default ServiceHomeOne;
