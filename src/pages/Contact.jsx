import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">hello@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
