import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image:
        "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+App",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      image:
        "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Portfolio",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
