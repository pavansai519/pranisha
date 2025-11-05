import React, { useEffect, useState } from 'react';
import './Services.css';
import Header from "./HomeOne/Header.jsx";
import Footer from "./HomeOne/Footer2.jsx";
import PageBanner from "./PageBanner.jsx";
import { Helmet } from "react-helmet-async";
import Si from "../../src/assets/images/service-clients/s&i.jpg";
import Pop from "../../src/assets/images/service-clients/pop.png"
import Tiny from "../../src/assets/images/service-clients/tiny.png"
import Coelate from "../../src/assets/images/service-clients/Coelate.png";
import Mld from "../../src/assets/images/service-clients/Mld.png";
import Acroplans from "../../src/assets/images/service-clients/Acroplans.png";
import Catalyst from "../../src/assets/images/service-clients/Catalyst.jpg";
import Delacacy from "../../src/assets/images/service-clients/Delicacy.png"


const DigitalMarketing = () => {
  const [activeSection, setActiveSection] = useState('WordPress Website');
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openSection, setOpenSection] = useState('WordPress Website');
           
  /***********wordpress***************/

  const clients = [
    {
      img: Si,
      name: "Solutions and innovations",
      URL:"https://solutionsandinnovations.com/",

      desc: "The Solutions & Innovations website is built on WordPress using the Astra theme and Elementor Pro page builder, ensuring a flexible, responsive, and customizable design. Key plugins such as Slider Revolution, Contact Form 7, Elementor Header & Footer Builder, WP Job Openings, Yoast SEO, Smush, and Wordfence Security enhance its functionality, performance, and protection. Supported by GSAP and Swiper libraries for smooth animations, the site delivers a modern, tech-centric look with dark blue and teal tones, animated digital graphics, and clean typography. Its sleek, professional design reflects cybersecurity, IT consulting, and digital protection services, emphasizing security, reliability, and technological innovation.",
    },
    {
      img: Pop,
      name: "Portraits by pacchu",
      URL:"https://portraitsbypacchu.com/",
      desc: "Portraits by Pacchu is a luxury photography studio based in Virginia, USA, led by award-winning photographer Prashanthi Muthyala, specializing in newborn, maternity, family, cake-smash, headshot, and “mommy & me” sessions. The website, built on WordPress using HTML, CSS, and JavaScript, features large, optimized photo galleries and a responsive design for seamless viewing across devices. Its elegant, polished, and high-end design includes intuitive navigation through Home, About, Services, Studio, Reviews, Contact, and Book Now pages. The site emphasizes a warm, professional, and trust-building tone, highlighting a premium photography experience focused on memory-making, artistry, and client satisfaction, enhanced by high-quality visuals, clear typography, and an organized layout.",
    },
    
   
  ];

  const [current, setCurrent] = useState(0);

  const nextClient = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };

             /***********wix***************/

  const clients4 = [
    {
      img: Acroplans,
      name: "Acroplans",
      URL:"https://solutionsandinnovations.com/",

      desc: "Acroplans is a professional business solutions website built on Wix, offering services in AI, SAP Business & Financial Analytics, Cloud Technology, and HR Solutions. The site emphasizes expertise, trust, and a global presence with locations in the USA and India, positioning Acroplans as a premium consultancy and IT services provider.The website leverages Wix’s drag-and-drop builder along with HTML, CSS, and JavaScript via Wix templates, providing responsive design, SEO tools, contact forms, newsletter signup, and possible CRM and analytics integrations to enhance functionality and user engagement.",
    },
    {
      img: Catalyst,
      name: "Catalyst",
      URL:"https://portraitsbypacchu.com/",
      desc: "Catalyst Classes is a Hyderabad-based coaching institute offering programs for IGCSE, IB, CBSE, ICSE, SAT/IELTS, IIT-JEE, and NEET students, focusing on experienced faculty, personalized attention, and exam readiness. The website is built on the Wix platform, leveraging HTML, CSS, and JavaScript with responsive design and Wix’s built-in CMS for course listings, learning resources, event information, and enquiry/registration functions. Its clean, modern, and student-centric design features intuitive navigation through menus like About Us, Our Courses, Learning Resources, and Contact, highlighting student achievements, popular programs, and institute strengths. The tone is professional yet friendly, emphasizing quality education, results-driven approach, and personalized learning, with high-quality visuals, clear typography, and a trustworthy color palette.",
    },
    
   
  ];

  const [current4, setCurrent4] = useState(0);

  const nextClient4 = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient4 = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };
           /***********magento***************/

   const clients1 = [
    {
      img: Si,
      name: "idel Display",
      URL:"https://solutionsandinnovations.com/",

      desc: "DL Displays specializes in creating high-quality, customized retail display solutions that enhance brand presence and streamline merchandising operations. Serving as both manufacturer and supplier, the company focuses on fast turnaround, innovation, and seamless global service. The website is built on the Magento platform, using PHP, HTML, CSS, and JavaScript, with e-commerce and ERP integrations to simplify the supply chain. Its design is professional and product-focused, featuring intuitive navigation, organized retail-ready catalogues, and a tone that emphasizes reliability, speed, and client-focused solutions.",
    },
    
   
  ];

  const [current1, setCurrent1] = useState(0);

  const nextClient1 = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient1 = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };
 
 
           /***********shofiy***************/

 const clients2 = [
    {
      img: Tiny,
      name: "Tiny Twig",
      URL:"https://solutionsandinnovations.com/",

      desc: "Tiny Twig India is a Shopify-based e-commerce store with a footer noting “Powered by Omni Themes,” likely inspired by the playful kids/lifestyle “Tiny” theme by Slash Themes. The store focuses on organic baby clothing and uses apps like TinySEO Speed Image Optimizer for image compression, lazy loading, and SEO improvements, along with typical Shopify essentials such as SEO/metadata optimization, responsive layouts, product collections and filters, newsletter subscriptions, and possibly reviews, shipping calculators, and cookie/consent tools. The visual identity is clean, bright, and organic, featuring soft pastels and high-quality organic cotton imagery, while the layout provides an intuitive menu and categorized collections like “Baby Tops” and “Organic Baby Girl Clothing.” The tone is friendly and reassuring, emphasizing premium, sustainable, and safe products with trust signals such as “100% organic cotton” and “machine washable.",
    },
    {
      img: Pop,
      name: "Portraits by pacchu",
      URL:"https://portraitsbypacchu.com/",
      desc: "Gas City Vapes is an online vape store dedicated to providing a safe, satisfying, and high-quality vaping experience. The store emphasizes authentic products, extensive inventory, competitive pricing, fast shipping across Canada, and expert customer support. Built on the Shopify platform using React.js, HTML, CSS, JavaScript, and MySQL, the website features a responsive design optimized for all devices, ensuring a smooth and convenient shopping experience. Its modern, clean design and intuitive navigation reinforce a customer-focused and trustworthy brand identity.",
    },
    
   
  ];

  const [current2, setCurrent2] = useState(0);

  const nextClient2 = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient2 = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };

             /************react**************/

  const clients3 = [
    {
      img: Coelate,
      name: "coelate",
      URL:"https://solutionsandinnovations.com/",

      desc: "Coelate is a digital IT consultancy that turns complex IT challenges into growth opportunities and competitive advantage. Its experienced team collaborates with clients to develop customized strategies aligned with business goals, focusing on long-term partnerships and leveraging cutting-edge technologies. The website, built using React JS, HTML, CSS, JavaScript, and Bootstrap, integrates CMS-based websites, WhatsApp communication, enquiry management, webinars, and career application modules. The design is modern, clean, and professional, emphasizing innovation, efficiency, and enhanced digital customer experiences.",
    },
    {
      img: Mld,
      name: "Mahalakshmi Dental Lab",
      URL:"https://portraitsbypacchu.com/",
      desc: "Mahalakshmi Dental Clinic is a professional dental practice offering a wide range of services, from routine check-ups to advanced treatments, with a strong focus on patient comfort and satisfaction. The website is hosted on Netlify and built using HTML, CSS, and JavaScript, featuring a responsive design for optimal performance across devices. The design is clean, professional, and healthcare-focused, with intuitive navigation highlighting treatments, services, and patient support. High-quality images, clear typography, and an organized layout convey trust and credibility, while the tone remains caring, reassuring, and patient-centric.",
    },
    
   
  ];

  const [current3, setCurrent3] = useState(0);

  const nextClient3 = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient3 = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };
             /************app development**************/

  const clients5 = [
    {
      img: Delacacy,
      name: "Delicacy",
      URL:"https://solutionsandinnovations.com/",
      desc: "Delicacy Sweets is a comprehensive online marketplace specializing in Indian sweets, snacks, and beverages, providing authentic brands across multiple states. The website includes buyer and seller zones, product catalogues, cart and order management, and multi-state inventory and shipping features, all delivered through a responsive and user-friendly interface. Built using HTML, CSS, and JavaScript with a backend likely powered by PHP/MySQL, the platform supports both customers and sellers efficiently, with seller onboarding and account management integrated into the site. Currently, the business is developing a mobile app to further enhance accessibility and e-commerce capabilities. The design is vibrant and intuitive, with a customer-focused tone that emphasizes trust, variety, and a seamless marketplace experience.",
    },
     
  ];

  const [current5, setCurrent5] = useState(0);

  const nextClient5 = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
  };

  const prevClient5 = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
  };

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);
  
      const elements = document.querySelectorAll('.content-item, .content-section');
      elements.forEach(el => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    // Switch whole section
    const scrollToSection = (sectionId) => {
      setHighlightedItem(null);
      setOpenSection(sectionId);
      setActiveSection(sectionId);
    };


  return (
    <>
    <Helmet>
        <title>IT Development | Web, Mobile & eCommerce Solutions</title>
        <meta
          name="description"
          content="Explore our IT development services including WordPress, Magento, Shopify, ReactJS, and Mobile App development. We build scalable, secure, and creative digital solutions."
        />
        <meta
          name="keywords"
          content="Web Development, WordPress, Magento, Shopify, ReactJS, Mobile App Development, IT Solutions, Pranishaa"
        />
        <meta property="og:title" content="IT Development | Pranishaa" />
        <meta
          property="og:description"
          content="Pranishaa offers custom IT development services across web, eCommerce, and mobile platforms. Build your digital success with us."
        />
        <meta property="og:image" content="https://pranishaa.com/images/og-development.jpg" />
        <meta property="og:url" content="https://pranishaa.com/it-development" />
      </Helmet>

      <Header />
      <PageBanner title="IT Development" breadcrumb="IT Development" />

      <div className="branding-page">
        <div className="branding-container">
          {/* ==== SIDEBAR NAVIGATION ==== */}
          <aside className="services-sidebar">
            <h3>Our Services</h3>
            <nav className="services-nav">
              <ul>
                {/* WordPress Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'WordPress Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('WordPress Website')}
                  >
                    <i className="fab fa-wordpress"></i>
                    <span>WordPress Website</span>
                  </button>
                  {openSection === 'WordPress Website' && (
                    <ul className="sub-nav">
                      <li>Custom Design</li>
                      <li>Responsive Design</li>
                      <li>Custom Development</li>
                      <li>eCommerce Solutions</li>
                    </ul>
                  )}
                </li>

                 {/* Wix Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Wix Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Wix Website')}
                  >
                    <i className="fab fa-wix"></i>
                    <span>Wix Website</span>
                  </button>
                  {openSection === 'Wix Website' && (
                    <ul className="sub-nav">
                      <li>Custom Design</li>
                      <li>Responsive Design</li>
                      <li>Custom Development</li>
                      <li>eCommerce Solutions</li>
                    </ul>
                  )}
                </li>

                {/* Magento Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Magento Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Magento Website')}
                  >
                    <i className="fab fa-magento"></i>
                    <span>Magento Website</span>
                  </button>
                  {openSection === 'Magento Website' && (
                    <ul className="sub-nav">
                      <li>Custom Development</li>
                      <li>Responsive Design</li>
                      <li>API & Extension Integration</li>
                      <li>Performance Optimization</li>
                    </ul>
                  )}
                </li>

                {/* Shopify Website */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Shopify Website' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Shopify Website')}
                  >
                    <i className="fab fa-shopify"></i>
                    <span>Shopify Website</span>
                  </button>
                  {openSection === 'Shopify Website' && (
                    <ul className="sub-nav">
                      <li>Custom Themes</li>
                      <li>Store Setup</li>
                      <li>App Integration</li>
                      <li>Maintenance & Support</li>
                    </ul>
                  )}
                </li>

                {/* ReactJS Development */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'ReactJS Development' ? 'active' : ''}`}
                    onClick={() => scrollToSection('ReactJS Development')}
                  >
                    <i className="fab fa-react"></i>
                    <span>ReactJS Development</span>
                  </button>
                  {openSection === 'ReactJS Development' && (
                    <ul className="sub-nav">
                      <li>Web Development</li>
                      <li>Component Development</li>
                      <li>UI/UX Design</li>
                      <li>API Integration</li>
                    </ul>
                  )}
                </li>

                {/* Mobile App Development */}
                <li>
                  <button
                    className={`nav-items ${activeSection === 'Mobile App Development' ? 'active' : ''}`}
                    onClick={() => scrollToSection('Mobile App Development')}
                  >
                    <i className="fas fa-mobile-alt"></i>
                    <span>Mobile App Development</span>
                  </button>
                  {openSection === 'Mobile App Development' && (
                    <ul className="sub-nav">
                      <li>Native App Development</li>
                      <li>Cross-Platform Development</li>
                      <li>Backend Integration</li>
                      <li>Maintenance & Support</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          {/* ==== MAIN CONTENT SECTIONS ==== */}
          <main className="services-content">
            {/* WORDPRESS WEBSITE */}
            {openSection === 'WordPress Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>WordPress Website</h2>
                  <p>Build custom, SEO-friendly WordPress websites designed to deliver fast performance, strong branding, and effortless content management capabilities.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-pencil-ruler"></i></div><h3>Custom Design</h3><p>We design tailored WordPress layouts that reflect your brand identity, ensuring high usability, better engagement, and a memorable user journey.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-laptop"></i></div><h3>Responsive Design</h3><p>Your website adapts perfectly across mobile, tablet, and desktop screens with smooth navigation and visually rich layouts optimized for every device.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-code"></i></div><h3>Custom Development</h3><p>We integrate advanced plugins, optimize databases, and use clean code to create robust, scalable, and easily manageable WordPress websites.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-shopping-cart"></i></div><h3>eCommerce Solutions</h3><p>Our WooCommerce integration enables easy product management, secure payment systems, and flexible customization options for better online sales.</p></div>
                </div>


                
                 <div className="clients-section">
                      <h2 className="clients-title">Clients That We Work With</h2>

                      {/* Prev arrow ABOVE card */}
                      <button className="arrow prev" onClick={prevClient}>❮</button>

                      <div className="clients-slider-wrapper">
                        <div className="clients-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {clients.map((client, index) => (
                              <div key={index} className="client-card">
                                <a
                                  href={client.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="client-link"
                                >
                                  <img src={client.img} alt={client.name} className="client-image" />
                                  <div className="client-info">
                                    <h3>{client.name}</h3>
                                    <p>{client.desc}</p>
                                  </div>
                                </a>
                              </div>
                            ))}

                        </div>
                      </div>

                      {/* Next arrow BELOW card */}
                      <button className="arrow next" onClick={nextClient}>❯</button>
                    </div>




              </section>
            )}
             {/* Wix WEBSITE */}
            {openSection === 'Wix Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Wix Website</h2>
                  <p>Build custom, SEO-friendly WordPress websites designed to deliver fast performance, strong branding, and effortless content management capabilities.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-pencil-ruler"></i></div><h3>Custom Design</h3><p>We design tailored WordPress layouts that reflect your brand identity, ensuring high usability, better engagement, and a memorable user journey.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-laptop"></i></div><h3>Responsive Design</h3><p>Your website adapts perfectly across mobile, tablet, and desktop screens with smooth navigation and visually rich layouts optimized for every device.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-code"></i></div><h3>Custom Development</h3><p>We integrate advanced plugins, optimize databases, and use clean code to create robust, scalable, and easily manageable WordPress websites.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-shopping-cart"></i></div><h3>eCommerce Solutions</h3><p>Our WooCommerce integration enables easy product management, secure payment systems, and flexible customization options for better online sales.</p></div>
                </div>


                
                 <div className="clients-section">
                      <h2 className="clients-title">Clients That We Work With</h2>

                      {/* Prev arrow ABOVE card */}
                      <button className="arrow prev" onClick={prevClient}>❮</button>

                      <div className="clients-slider-wrapper">
                        <div className="clients-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {clients4.map((clients4, index) => (
                              <div key={index} className="client-card">
                                <a
                                  href={clients4.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="client-link"
                                >
                                  <img src={clients4.img} alt={clients4.name} className="client-image" />
                                  <div className="client-info">
                                    <h3>{clients4.name}</h3>
                                    <p>{clients4.desc}</p>
                                  </div>
                                </a>
                              </div>
                            ))}

                        </div>
                      </div>

                      {/* Next arrow BELOW card */}
                      <button className="arrow next" onClick={nextClient}>❯</button>
                    </div>




              </section>
            )}

            {/* MAGENTO WEBSITE */}
            {openSection === 'Magento Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Magento Website</h2>
                  <p>Empower your eCommerce business with high-performance, scalable, and feature-rich Magento solutions crafted for enterprise-grade growth.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-cogs"></i></div><h3>Custom Development</h3><p>We deliver tailor-made Magento stores that ensure flexibility, scalability, and flawless functionality aligned with your business model.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-mobile"></i></div><h3>Responsive Design</h3><p>Your Magento website looks amazing across all screen sizes with lightning-fast performance and a superior shopping experience.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-plug"></i></div><h3>API & Extension Integration</h3><p>Seamlessly integrate CRMs, ERPs, payment gateways, and third-party extensions for a fully functional eCommerce ecosystem.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-rocket"></i></div><h3>Performance Optimization</h3><p>We optimize load speed, server response time, and SEO metrics to deliver top-tier performance and conversion efficiency.</p></div>
                </div>
                <div className="clients-section">
                      <h2 className="clients-title">Clients That We Work With</h2>

                      {/* Prev arrow ABOVE card */}
                      <button className="arrow prev" onClick={prevClient}>❮</button>

                      <div className="clients-slider-wrapper">
                        <div className="clients-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {clients1.map((clients1, index) => (
                              <div key={index} className="client-card">
                                <a
                                  href={clients1.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="client-link"
                                >
                                  <img src={clients1.img} alt={clients1.name} className="client-image" />
                                  <div className="client-info">
                                    <h3>{clients1.name}</h3>
                                    <p>{clients1.desc}</p>
                                  </div>
                                </a>
                              </div>
                            ))}

                        </div>
                      </div>

                      {/* Next arrow BELOW card */}
                    </div>


              </section>
            )}

            {/* SHOPIFY WEBSITE */}
            {openSection === 'Shopify Website' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Shopify Website</h2>
                  <p>Launch and manage a beautiful, high-converting Shopify store with custom designs, automation tools, and ongoing support from our experts.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-paint-brush"></i></div><h3>Custom Themes</h3><p>We design visually engaging and conversion-oriented Shopify themes that highlight your brand’s essence and enhance customer experience.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-store"></i></div><h3>Store Setup</h3><p>We configure everything from product listings to payment gateways, ensuring a seamless setup for fast and efficient store launches.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-th-large"></i></div><h3>App Integration</h3><p>Enhance your store’s functionality with app integrations for analytics, CRM, marketing automation, and inventory management.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-life-ring"></i></div><h3>Maintenance & Support</h3><p>Get continuous performance monitoring, troubleshooting, and upgrades to keep your Shopify store secure and up-to-date.</p></div>
                </div>
                <div className="clients-section">
                      <h2 className="clients-title">Clients That We Work With</h2>

                      {/* Prev arrow ABOVE card */}
                      <button className="arrow prev" onClick={prevClient}>❮</button>

                      <div className="clients-slider-wrapper">
                        <div className="clients-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {clients2.map((clients2, index) => (
                              <div key={index} className="client-card">
                                <a
                                  href={clients2.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="client-link"
                                >
                                  <img src={clients2.img} alt={clients2.name} className="client-image" />
                                  <div className="client-info">
                                    <h3>{clients2.name}</h3>
                                    <p>{clients2.desc}</p>
                                  </div>
                                </a>
                              </div>
                            ))}

                        </div>
                      </div>

                      {/* Next arrow BELOW card */}
                      <button className="arrow next" onClick={nextClient}>❯</button>
                    </div>

              </section>
            )}

            {/* REACTJS DEVELOPMENT */}
            {openSection === 'ReactJS Development' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>ReactJS Development</h2>
                  <p>We develop dynamic, fast, and scalable web applications using ReactJS — built with clean architecture and modular design for long-term growth.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-bolt"></i></div><h3>Web Development</h3><p>We craft responsive and high-performance single-page applications with real-time updates and seamless user navigation.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-puzzle-piece"></i></div><h3>Component Development</h3><p>Our team builds reusable, modular React components for faster delivery, scalability, and easier future enhancements.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-layer-group"></i></div><h3>UI/UX Design</h3><p>Delivering modern interfaces that prioritize simplicity, performance, and engagement through interactive and user-friendly designs.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-network-wired"></i></div><h3>API Integration</h3><p>Integrate RESTful or GraphQL APIs for seamless data flow and dynamic, high-performing user experiences.</p></div>
                </div>
                <div className="clients-section">
                      <h2 className="clients-title">Clients That We Work With</h2>

                      {/* Prev arrow ABOVE card */}
                      <button className="arrow prev" onClick={prevClient}>❮</button>

                      <div className="clients-slider-wrapper">
                        <div className="clients-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {clients3.map((clients3, index) => (
                              <div key={index} className="client-card">
                                <a
                                  href={clients3.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="client-link"
                                >
                                  <img src={clients3.img} alt={clients3.name} className="client-image" />
                                  <div className="client-info">
                                    <h3>{clients3.name}</h3>
                                    <p>{clients3.desc}</p>
                                  </div>
                                </a>
                              </div>
                            ))}

                        </div>
                      </div>

                      {/* Next arrow BELOW card */}
                      <button className="arrow next" onClick={nextClient}>❯</button>
                    </div>


              </section>
            )}

            {/* MOBILE APP DEVELOPMENT */}
            {openSection === 'Mobile App Development' && (
              <section className="content-section">
                <div className="section-header">
                  <h2>Mobile App Development</h2>
                  <p>We create mobile apps that combine performance, design, and functionality — driving engagement and delivering measurable results for your business.</p>
                </div>
                <div className="content-grid">
                  <div className="content-item"><div className="item-icon"><i className="fas fa-mobile"></i></div><h3>Native App Development</h3><p>Developed specifically for iOS and Android, our native apps deliver top-tier performance, advanced UI elements, and reliability.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-sync"></i></div><h3>Cross-Platform Development</h3><p>We use React Native and Flutter to build apps that work flawlessly across multiple devices with consistent performance.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-cloud"></i></div><h3>Backend Integration</h3><p>Robust backend architecture powered by AWS, Firebase, and Node.js ensures reliable data management and app scalability.</p></div>
                  <div className="content-item"><div className="item-icon"><i className="fas fa-tools"></i></div><h3>Maintenance & Support</h3><p>Our dedicated team monitors app performance, releases updates, and fixes bugs to keep your app running smoothly and securely.</p></div>
                </div>
                <div className="clients-section">
                      <h2 className="clients-title">Clients That We Work With</h2>

                      {/* Prev arrow ABOVE card */}
                      <button className="arrow prev" onClick={prevClient}>❮</button>

                      <div className="clients-slider-wrapper">
                        <div className="clients-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {clients5.map((clients5, index) => (
                              <div key={index} className="client-card">
                                <a
                                  href={clients5.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="client-link"
                                >
                                  <img src={clients5.img} alt={clients5.name} className="client-image" />
                                  <div className="client-info">
                                    <h3>{clients5.name}</h3>
                                    <p>{clients5.desc}</p>
                                  </div>
                                </a>
                              </div>
                            ))}

                        </div>
                      </div>

                    </div>

              </section>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DigitalMarketing;
