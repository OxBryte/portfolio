const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center grayscale"
        // style={{ backgroundImage: "url(/light.webp)" }}
      />
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url(/noise.png)",
          // opacity: 0.25, // Adjust for more/less noise
          // mixBlendMode: "overlay",
        }}
      />
      {/* Your content here */}
      <div className="relative z-10 text-center flex flex-col items-center w-fit gap-2 font-bricolage">
        <h1 className="font-bricolage font-bold m-0 text-[56px]">
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

        {/* <button className="bg-gray-900 text-white rounded-full px-8 py-3 text-base font-medium shadow hover:bg-gray-700 transition mb-10">
          Remix Template
        </button> */}
        {/* Skill Icons Row */}
        <div className="flex items-center justify-center gap-5 mb-10">
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
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="ReactJS"
            className="w-8 h-8"
          />
          {/* Vite */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"
            alt="Vite"
            className="w-8 h-8"
          />
          {/* Chakra UI */}
          <img
            src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg"
            alt="Chakra UI"
            className="w-8 h-8"
          />
          {/* Tailwindcss */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwindcss"
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
    </div>
  );
};

export default Home;
