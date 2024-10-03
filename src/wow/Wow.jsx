import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


const TopCoursesCategories = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Cursor follows mouse movement across the whole document
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // smooth movement
      });
    };

    // Cursor scaling effect on hover anywhere on the page
    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2.5 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      // Clean up event listeners
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <div
        id="box"
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          
          zIndex: 1000,
          pointerEvents: "none", // So it doesn't interfere with other elements
        }}
        className="bg-purple-600"
      ></div>

      
    </div>
  );
};

export default TopCoursesCategories;
