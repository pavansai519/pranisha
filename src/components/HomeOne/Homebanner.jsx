// Pranisha.jsx
import React, { useEffect, useState } from "react";

export default function Pranisha() {
  const [videoSrc, setVideoSrc] = useState("/logoo.mp4");

  useEffect(() => {
    // Detect WebM support using the HTMLVideoElement API
    const video = document.createElement("video");
    if (video.canPlayType('video/webm; codecs="vp9,vorbis"')) {
      setVideoSrc("/logoo2.webm");
    } else {
      setVideoSrc("/logoo.mp4");
    }
  }, []);

  return (
    <section className="banner-section">
      <video
        className="banner-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type={`video/${videoSrc.endsWith(".webm") ? "webm" : "mp4"}`} />
        Your browser does not support the video tag.
      </video>

      
    </section>
  );
}
