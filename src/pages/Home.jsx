import "./Home.css";

const Home = () => {
  return (
    <div className="home-center">
      <header className="home-header">
        <div className="home-title">
          <span>I'm </span>
          <span className="home-title-italic">Hanzo</span>
          <span className="home-title-img">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Hanzo"
            />
          </span>
          <span>,</span>
        </div>
        <div className="home-title">
          <span>a Product </span>
          <span className="home-title-img">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64"
              alt="Product"
            />
          </span>
          <span className="home-title-italic"> Designer</span>
        </div>
        <div className="home-title">
          <span>based in Tokyo </span>
          <span className="home-title-img">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64"
              alt="Tokyo"
            />
          </span>
        </div>
        <p className="home-subheadline">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands
        </p>
        <button className="home-btn">Remix Template</button>
      </header>
      <main className="home-cards">
        <div className="home-card">
          <img
            src="https://placehold.co/300x180"
            alt="Project 1"
            className="home-card-img"
          />
        </div>
        <div className="home-card">
          <img
            src="https://placehold.co/300x180"
            alt="Project 2"
            className="home-card-img"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
