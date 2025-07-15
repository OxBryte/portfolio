import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };
    const handleDown = () => setIsActive(true);
    const handleUp = () => setIsActive(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed z-[9999] transition-all duration-150 ease-out`}
        style={{
          width: isActive ? 48 : 36,
          height: isActive ? 48 : 36,
          marginLeft: isActive ? -24 : -18,
          marginTop: isActive ? -24 : -18,
          borderRadius: "50%",
          border: `2.5px solid #19BBA3`,
          background: "rgba(25, 187, 163, 0.08)",
          boxShadow: "0 2px 12px 0 rgba(25, 187, 163, 0.15)",
          transition: "all 0.15s cubic-bezier(.4,0,.2,1)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999]"
        style={{
          width: 10,
          height: 10,
          marginLeft: -5,
          marginTop: -5,
          borderRadius: "50%",
          background: "#19BBA3",
          boxShadow: "0 1px 4px 0 rgba(25, 187, 163, 0.18)",
        }}
      />
    </>
  );
};

export default CustomCursor;
