const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center grayscale"
      style={{ backgroundImage: "url(/light.webp)" }}
    >
      <header className="text-center font-bricolage">
        <div className="flex items-center justify-center gap-2 text-[2.5rem] font-normal text-gray-900 font-serif mb-1">
          <span>I'm</span>
          <span className="italic font-medium mx-1">Hanzo</span>
          <span className="inline-flex items-center mx-1">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Hanzo"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            />
          </span>
          <span>,</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-[2.5rem] font-normal text-gray-900 font-serif mb-1">
          <span>a Product</span>
          <span className="inline-flex items-center mx-1">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64"
              alt="Product"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            />
          </span>
          <span className="italic font-medium mx-1">Designer</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-[2.5rem] font-normal text-gray-900 font-serif mb-1">
          <span>based in Tokyo</span>
          <span className="inline-flex items-center mx-1">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64"
              alt="Tokyo"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            />
          </span>
        </div>
        <p className="mt-6 mb-8 text-base text-gray-600 max-w-lg mx-auto">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands
        </p>
        <button className="bg-gray-900 text-white rounded-full px-8 py-3 text-base font-medium shadow hover:bg-gray-700 transition mb-10">
          Remix Template
        </button>
      </header>
      <main className="flex flex-wrap justify-center gap-8 mt-2 mb-4 w-full">
        <div className="bg-white rounded-2xl shadow-lg p-2 w-[320px] flex flex-col items-center">
          <img
            src="https://placehold.co/300x180"
            alt="Project 1"
            className="w-full rounded-xl object-cover shadow"
          />
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-2 w-[320px] flex flex-col items-center">
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
