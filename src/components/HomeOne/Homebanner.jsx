// Pranisha.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props (optional):
 *  - poster: high-res poster shown after video loads (optional)
 *  - placeholder: low-res poster shown instantly (recommended)
 *  - mp4: path to mp4 video (default '/logoo.mp4')
 *  - webm: path to webm video (default '/logoo2.webm')
 *  - lazyDelay: ms delay before calling play() after load (default 300)
 */
export default function Pranisha({
  poster = "/poster-high.jpg",
  placeholder = "/poster-low.jpg",
  mp4 = "/logoo.mp4",
  webm = "/logoo2.webm",
  lazyDelay = 300,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);       // when we should start loading video
  const [isReady, setIsReady] = useState(false);         // when the video has enough data (loadeddata)
  const [useWebm, setUseWebm] = useState(false);         // whether webm is supported
  const [showVideo, setShowVideo] = useState(false);     // controls fade-in
  const [isLoading, setIsLoading] = useState(false);     // loading state

  // detect webm support once on mount
  useEffect(() => {
    const v = document.createElement("video");
    const can = v.canPlayType('video/webm; codecs="vp9,vorbis"') ||
                v.canPlayType('video/webm; codecs="vp8,vorbis"') ||
                v.canPlayType("video/webm");
    setUseWebm(Boolean(can && can !== "no"));
  }, []);

  // setup IntersectionObserver -> start loading when visible
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
      { root: null, rootMargin: "200px", threshold: 0.1 } // start a bit earlier
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // when we should load the video, set sources and load
  useEffect(() => {
    if (!isInView || !videoRef.current) return;

    const videoEl = videoRef.current;

    // avoid duplicate init
    if (videoEl.dataset.initiated) return;
    videoEl.dataset.initiated = "1";

    setIsLoading(true);

    // create sources dynamically (helps bundlers and easier to control loading)
    const sourceWebm = document.createElement("source");
    const sourceMp4 = document.createElement("source");

    if (useWebm) {
      sourceWebm.src = webm;
      sourceWebm.type = "video/webm";
      videoEl.appendChild(sourceWebm);

      sourceMp4.src = mp4;
      sourceMp4.type = "video/mp4";
      videoEl.appendChild(sourceMp4);
    } else {
      sourceMp4.src = mp4;
      sourceMp4.type = "video/mp4";
      videoEl.appendChild(sourceMp4);
    }

    // prefer light preload for mobile; set preload to 'auto' for smoother playback on desktop
    // we'll call load() explicitly to start fetching only now
    videoEl.preload = "auto";
    videoEl.load();

    // When enough data is loaded to play at least a frame
    const onLoaded = () => {
      setIsReady(true);
      // small delay to reduce startup jank
      setTimeout(async () => {
        try {
          // set muted to ensure autoplay works cross-browser
          videoEl.muted = true;
          await videoEl.play();
        } catch (err) {
          // autoplay blocked — keep poster visible; user can tap to play
          // console.warn("Autoplay prevented:", err);
        } finally {
          // show the video (fade in)
          setShowVideo(true);
          setIsLoading(false);
        }
      }, lazyDelay);
    };

    const onError = () => {
      setIsLoading(false);
      // If video fails, we still keep the poster/placeholder
    };

    videoEl.addEventListener("loadeddata", onLoaded);
    videoEl.addEventListener("error", onError);

    return () => {
      videoEl.removeEventListener("loadeddata", onLoaded);
      videoEl.removeEventListener("error", onError);
    };
  }, [isInView, useWebm, mp4, webm, lazyDelay]);

  // click fallback — if autoplay blocked, allow user tap to play
  const handleClick = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        v.muted = true;
        await v.play();
        setShowVideo(true);
      } catch (e) {
        // still blocked
      }
    } else {
      v.pause();
      v.currentTime = 0;
      setShowVideo(false);
    }
  };

  return (
    <section
      className="banner-section"
      ref={containerRef}
      aria-label="Hero banner"
      onClick={handleClick}
    >
      {/* Low-res placeholder (shown instantly) */}
      <img
        className={`banner-placeholder ${showVideo ? "hidden" : "visible"}`}
        src={placeholder}
        alt="banner placeholder"
        aria-hidden={showVideo}
        loading="eager"
      />

      {/* High-res poster sits behind the video to avoid white flash */}
      <div
        className={`banner-poster ${showVideo ? "hidden" : "visible"}`}
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden={showVideo}
      />

      {/* Actual video element (initially transparent) */}
      <video
        ref={videoRef}
        className={`banner-video ${showVideo ? "visible" : "hidden"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="none" /* we'll switch to auto when loading */
        poster={poster}
        // keep attributes friendly for mobile browsers
      >
        {/* sources appended dynamically on intersection */}
        
      </video>

      {/* optional loading indicator */}
      {isLoading && (
        <div className="banner-loader" aria-hidden>
          <div className="dot" />
        </div>
      )}
    </section>
  );
}
