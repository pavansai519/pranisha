import React, { useState } from 'react';
import FaqImg from '../../assets/images/home/faq.png';

const faqs = [
  { id: 1, question: "1. What digital marketing services does Pranishaa offer?", answer: "Pranishaa provides services like SEO, Google Ads (PPC), social media marketing, email campaigns, lead generation, and content marketing to help businesses grow online." },
  { id: 2, question: "2. Can Pranishaa help improve my website’s Google ranking?", answer: "Yes, their SEO experts use advanced strategies to optimize your website and improve its visibility on search engines like Google." },
  { id: 3, question: "3. Does Pranishaa handle social media accounts for businesses?", answer: "Absolutely. They manage and grow your brand’s presence on platforms like Instagram, Facebook, and LinkedIn through creative content and targeted advertising." },
  { id: 4, question: "4. Can I get a custom digital strategy for my business?", answer: "Yes, Pranishaa offers tailored digital marketing plans based on your business goals, audience, and industry." }
];

function FaqHomeOne({ className }) {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className={`faqs-section style-two overflow-hidden ${className || ''}`}>
      <div className="auto-container">
        <div className="row">
          {/* FAQ Column */}
          <div className="faq-column col-xl-6 col-lg-12 col-md-12 order-4">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Questions & Answers</span>
                <h2>See Frequently Asked Questions</h2>
              </div>

              {/* Accordion List */}
              <ul className="accordion-box wow fadeInRight">
                {faqs.map((faq) => (
                  <li key={faq.id} className="accordion block">
                    <div className={activeKey === faq.id ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(faq.id)}>
                      {faq.question} <i className="icon fa fa-angle-down"></i>
                    </div>
                    <div className={activeKey === faq.id ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-12 col-md-12 mb-xl-0">
            <div className="inner-column">
              <figure className="image"><img src={FaqImg} alt="FAQ" /></figure>
              <div className="info-box">
                <div className="inner">
                  <span className="icon flaticon-business-063-diamond"></span>
                  <h3 className="title">Trusted IT Solution<br /> & Service Business Agency</h3>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default FaqHomeOne;
