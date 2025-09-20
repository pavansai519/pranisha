import React from "react";
import { Link } from "react-router-dom";
import '../components/HomeOne/'

const PageBanner = ({ title, breadcrumb }) => {
  return (
    <section className="page-banner">
      <div className="container">
        <h1 className="banner-title">{title}</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="divider"> &gt;&gt; </span>
          <span className="current">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
