import React, { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2500); // 2.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loaded ? "preloader--hide" : ""}`}>
      <div className="spark"></div>
      <h2>✨ Happy Diwali ✨</h2>
    </div>
  );
}
