import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: mouse.current.x, y: mouse.current.y });

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const smooth = 0.2; // adjust for more/less trailing
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * smooth;
      pos.current.y += (mouse.current.y - pos.current.y) * smooth;
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();

    // Hover triggers
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    // 👇 Target portfolio tiles
    const tiles = document.querySelectorAll(".ps-tile");
    tiles.forEach((tile) => {
      tile.addEventListener("mouseenter", handleEnter);
      tile.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      tiles.forEach((tile) => {
        tile.removeEventListener("mouseenter", handleEnter);
        tile.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className={`cursor-ring ${hovering ? "hovering" : ""}`}>
      {hovering && <span className="cursor-label">View</span>}
    </div>
  );
}
