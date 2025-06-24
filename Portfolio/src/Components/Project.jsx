import { Github, ExternalLink } from 'lucide-react';

export const Project=()=>{
     const projects = [
        {
          title: "DreamTrade",
          description: "A comprehensive trading platform with real-time market data, portfolio management, and advanced trading features. Built with modern web technologies for seamless user experience.",
          github: "https://github.com/Rohit-Kalsi-01/DreamTrade",
          live: "https://sensational-froyo-06206b.netlify.app/",
          tech: ["React",  "Tailwind css", ],
          gradient: "from-blue-500 to-purple-600"
        },
        {
          title: "BG Removal",
          description: "An intelligent background removal tool powered by AI technology. Allows users to seamlessly remove backgrounds from images with high precision and quality.",
          github: "https://github.com/Rohit-Kalsi-01/BG-REMOVAL",
          live: "https://bg-removal-gj7z.vercel.app/",
          tech: [ "Image Processing", "React", "Vercel"],
          gradient: "from-green-500 to-teal-600"
        },
        {
          title: "Car Rental Website",
          description: "A full-featured car rental platform with booking system, vehicle catalog, and user management. Features responsive design and intuitive user interface.",
          github: "https://github.com/Rohit-Kalsi-01/CarRentalWebSite",
          live: "https://polite-swan-64c523.netlify.app/",
          tech: ["React", "Responsive Design", "UI/UX"],
          gradient: "from-orange-500 to-red-600"
        }
      ];
    return(
        <>
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}