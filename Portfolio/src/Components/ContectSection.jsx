import {  Mail, Linkedin,X,Download} from 'lucide-react';

export const Contantt=()=>{
    return(
        <>
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm actively seeking new opportunities as a software engineer. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
            <div className="flex sm:flex-nowrap flex-wrap gap-4 sm:gap-0 sm:justify-center space-x-6 mb-8">
              <a
                href="mailto:rohit.singh@example.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                ml-6 px-6 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href="https://linkedin.com/in/rohit-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-400/10"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
                <a
                href="https://x.com/RohitSingh30197?t=TG6SykIBRfZebTp4S3shSg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-600 hover:border-blue-400  px-8 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-300 hover:bg-blue-400/10"
              >
                <X size={20} />
                <span>Twitter</span>
              </a>
                <a
                href="https://drive.google.com/file/d/1pCv0L4vCJhdmwHfXlriKSgUD14JcC3Es/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-400/10"
              >
               <Download size={20} />
                <span>Resume</span>
              </a>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Ready to contribute</h3>
              <p className="text-gray-400">
                Full-stack developer with proven experience in React, JavaScript, and modern web technologies. 
                Passionate about creating exceptional user experiences and solving complex technical challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}