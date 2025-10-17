// Pranisha.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Pranisha({
  mp4 = "/logoo.mp4",
  webm = "/logoo2.webm",
  lazyDelay = 300,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [useWebm, setUseWebm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ detect webm support once
  useEffect(() => {
    const v = document.createElement("video");
    const can =
      v.canPlayType('video/webm; codecs="vp9,vorbis"') ||
      v.canPlayType('video/webm; codecs="vp8,vorbis"') ||
      v.canPlayType("video/webm");
    setUseWebm(Boolean(can && can !== "no"));
  }, []);

  // ✅ start loading when in view
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.1 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // ✅ load and play video when visible
  useEffect(() => {
    if (!isInView || !videoRef.current) return;

    const videoEl = videoRef.current;
    if (videoEl.dataset.initiated) return;
    videoEl.dataset.initiated = "1";

    setIsLoading(true);

    const source = document.createElement("source");
    if (useWebm) {
      source.src = webm;
      source.type = "video/webm";
    } else {
      source.src = mp4;
      source.type = "video/mp4";
    }
    videoEl.appendChild(source);

    videoEl.preload = "auto";
    videoEl.load();

    const onLoaded = async () => {
      setTimeout(async () => {
        try {
          videoEl.muted = true;
          await videoEl.play();
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        } finally {
          setShowVideo(true);
          setIsLoading(false);
        }
      }, lazyDelay);
    };

    const onError = () => setIsLoading(false);

    videoEl.addEventListener("loadeddata", onLoaded);
    videoEl.addEventListener("error", onError);

    return () => {
      videoEl.removeEventListener("loadeddata", onLoaded);
      videoEl.removeEventListener("error", onError);
    };
  }, [isInView, useWebm, mp4, webm, lazyDelay]);

  return (
    <section
      className="banner-section"
      ref={containerRef}
      aria-label="Hero banner"
    >
      {/* 🎬 Video only (no poster or placeholder) */}
      <video
        ref={videoRef}
        className={`banner-video ${showVideo ? "visible" : "hidden"}`}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* optional loader */}
      {isLoading && (
        <div className="banner-loader" aria-hidden>
          <div className="dot" />
        </div>
      )}
    </section>
  );
}
