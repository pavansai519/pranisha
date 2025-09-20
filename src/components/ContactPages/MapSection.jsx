import React from "react";

function MapSection({ width = "100%", height = "400px" }) {
  return (
    <section className="map-section">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2385.3570934235727!2d78.38010377336795!3d17.48397299460441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20Floor%2C%20Sri%20Sri%20Dwarkamai%2C%20Gokul%20plots%20Venkata%20Ramana%20Colony%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!5e1!3m2!1sen!2sin!4v1753252587946!5m2!1sen!2sin"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
  );
}

export default MapSection;
