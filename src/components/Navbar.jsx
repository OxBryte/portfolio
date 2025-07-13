import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', name: 'Home', icon: FaHome },
    { path: '/about', name: 'About', icon: FaUser },
    { path: '/projects', name: 'Projects', icon: FaProjectDiagram },
    { path: '/contact', name: 'Contact', icon: FaEnvelope },
  ]

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
