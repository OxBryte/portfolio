import { FaCode, FaDatabase, FaMobile, FaCloud } from 'react-icons/fa'

const About = () => {
  const skills = [
    { name: 'React', icon: FaCode, level: 90 },
    { name: 'JavaScript', icon: FaCode, level: 85 },
    { name: 'Node.js', icon: FaCode, level: 80 },
    { name: 'Python', icon: FaCode, level: 75 },
    { name: 'SQL', icon: FaDatabase, level: 85 },
    { name: 'MongoDB', icon: FaDatabase, level: 80 },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <p className="text-gray-600 mb-4">
          I'm a passionate full-stack developer with a love for creating beautiful, 
          functional, and user-friendly applications. With several years of experience 
          in web development, I specialize in modern JavaScript frameworks and 
          cutting-edge technologies.
        </p>
        <p className="text-gray-600">
          When I'm not coding, you can find me exploring new technologies, 
          contributing to open-source projects, or sharing knowledge with the 
          developer community.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.name} className="flex items-center space-x-4">
                <Icon className="w-6 h-6 text-blue-600" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
