import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none"
      style={{
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(30,41,59,0.15)",
        border: "2px solid #1e293b",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.08s cubic-bezier(.4,0,.2,1)",
        mixBlendMode: "multiply",
      }}
    />
  );
};

export default CustomCursor;
