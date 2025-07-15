const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center grayscale"
        // style={{ backgroundImage: "url(/light.webp)" }}
      />
      <div className="text-center flex flex-col items-center w-fit gap-3 font-bricolage">
        <h1 className="font-bricolage font-bold text-[56px]">
          I'm Olumide Silas
        </h1>
        <p className="font-light capitalize">Full-Stack Developer & UI/UX Designer</p>
        <p className="text-base text-gray-600 max-w-lg mx-auto">
          Turning ideas into intuitive, functional solutions. I specialize in
          crafting user-centric applications, with a strong focus on user
          experience and accessibility. From creating wireframes, prototypes,
          and user flows to designing engaging social media content, I bring
          concepts to life through thoughtful design and clean, efficient
          code—using a wide range of modern web technologies and tools.
        </p>
        <button className="bg-gray-900 text-white rounded-full px-8 py-3 text-base font-medium shadow hover:bg-gray-700 transition mb-10">
          Remix Template
        </button>
      </div>
      <main className="flex flex-wrap justify-center gap-8 mt-2 mb-4 w-full">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-2 w-[320px] flex flex-col items-center">
          <img
            src="https://placehold.co/300x180"
            alt="Project 1"
            className="w-full rounded-xl object-cover shadow"
          />
        </div>
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-2 w-[320px] flex flex-col items-center">
          <img
            src="https://placehold.co/300x180"
            alt="Project 2"
            className="w-full rounded-xl object-cover shadow"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
