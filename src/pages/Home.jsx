import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const AnalogClock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const size = 60;
  const center = size / 2;
  const radius = size / 2 - 4;
  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // Angles
  const hourAngle = (hour + minute / 60) * 30;
  const minuteAngle = (minute + second / 60) * 6;
  const secondAngle = second * 6;
  // Hand lengths
  const hourLen = radius * 0.5;
  const minLen = radius * 0.75;
  const secLen = radius * 0.85;
  // Hand positions
  const getHand = (angle, length) => [
    center + length * Math.sin((Math.PI / 180) * angle),
    center - length * Math.cos((Math.PI / 180) * angle),
  ];
  const [hx, hy] = getHand(hourAngle, hourLen);
  const [mx, my] = getHand(minuteAngle, minLen);
  const [sx, sy] = getHand(secondAngle, secLen);
  return (
    <div className="fixed top-10 right-8 z-30 select-none">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="#fff"
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        {/* Hour hand */}
        <line
          x1={center}
          y1={center}
          x2={hx}
          y2={hy}
          stroke="#222"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          x1={center}
          y1={center}
          x2={mx}
          y2={my}
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          x1={center}
          y1={center}
          x2={sx}
          y2={sy}
          stroke="#f87171"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Center dot */}
        <circle cx={center} cy={center} r={2} fill="#222" />
      </svg>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden ">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 w-full h-full bg-cover bg-center grayscale"
        style={{ backgroundImage: "url(/light.webp)" }}
      /> */}
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url(/noise.png)",
        }}
      />
      {/* Analog Clock on the right */}
      <AnalogClock />
      {/* Your content here */}
      <div className="relative z-20 text-center flex flex-col items-center w-fit gap-2 font-bricolage">
        <h1 className="font-bricolage font-bold m-0 text-[32px] md:text-[56px] bg-gradient-to-b from-black/10 to-black bg-clip-text text-transparent">
          I'm Olumide Silas
        </h1>
        <p className="font-light capitalize -mt-2 text-lg">
          Full-Stack Developer & UI/UX Designer
        </p>
        <p className="text-[14px] font-light text-gray-600 max-w-xl mx-auto">
          I create intuitive digital experiences that put users first.
          Specializing in user-centric applications with a focus on
          accessibility and clean code, I bring ideas to life through thoughtful
          design and modern web technologies.
        </p>
        <Link to="/olumide-silas-cv.pdf">
          <button className="bg-gray-900 text-white rounded-full px-8 py-3 text-base font-medium shadow hover:bg-gray-700 transition">
            View Resume
          </button>
        </Link>
        {/* Skill Icons Row */}
        <div className="flex items-center justify-center gap-5 my-4 max-w-[400px] flex-wrap">
          {/* Next.js */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="w-8 h-8"
          />
          {/* TypeScript */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="w-8 h-8"
          />
          {/* ReactJS */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            alt="Javascript"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="ReactJS"
            className="w-8 h-8"
          />
          {/* Vite */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            alt="Vite"
            className="w-8 h-8"
          />
          {/* Tailwindcss */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwindcss"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
            alt="Vercel"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
            alt="Firebase"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
            className="w-8 h-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"
            alt="Solidity"
            className="w-8 h-8"
          />
          {/* Figma */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
            className="w-8 h-8"
          />
        </div>
      </div>
      {/* Social Media Buttons at the bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <a
          href="https://github.com/oxbryte"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#19BBA3] transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/olumide-silas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#19BBA3] transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/olumidesilas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#19BBA3] transition text-2xl"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
