import {  Database, Globe } from 'lucide-react';

export const About=()=>{
    
    
    return(
        <>
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      About Me
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-lg text-gray-300 mb-6">
                        I'm a dedicated software engineer with a passion for creating innovative web applications 
                        and solving complex technical challenges. My expertise spans full-stack development with 
                        a focus on modern JavaScript frameworks and cutting-edge technologies.
                      </p>
                      <p className="text-lg text-gray-300 mb-6">
                        From building trading platforms to AI-powered tools, I enjoy working on projects that 
                        push the boundaries of what's possible on the web. I'm always eager to learn new 
                        technologies and contribute to meaningful projects.
                      </p>
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-2 text-blue-400">
                          <Globe size={20} />
                          <span>Full Stack Development</span>
                        </div>
                       
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
                        <p className="text-gray-300 text-sm">Modern React applications with responsive design</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold mb-2 text-green-400">Backend</h3>
                        <p className="text-gray-300 text-sm">Scalable server-side solutions and APIs</p>
                      </div>
                     
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold mb-2 text-purple-400">Problem Solving</h3>
                        <p className="text-gray-300 text-sm">Creative solutions to complex challenges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        </>
    )
}