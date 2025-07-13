import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a passionate developer creating amazing web experiences
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              Creating responsive and interactive user interfaces with modern technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-600">
              Building robust server-side applications and APIs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Full Stack Solutions</h3>
            <p className="text-gray-600">
              End-to-end development from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
