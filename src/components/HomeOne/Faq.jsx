import React, { useState } from 'react';
import FaqImg from '../../assets/images/resource/faq.jpg';

const faqs = [
  { id: 1, question: "Is my technology allowed on tech?", answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable." },
  { id: 2, question: "How to soft launch your business?", answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable." },
  { id: 3, question: "How to turn visitors into contributors?", answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable." },
  { id: 4, question: "How can I find my solutions?", answer: "With over four decades of experience providing solutions, Everything you need to start selling." }
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
