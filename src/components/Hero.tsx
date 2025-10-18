import { Download, Mail, Github, Linkedin, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-purple-900/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            MAMMAR KOUADRI Youcef
          </h1>

          <p className="text-2xl md:text-3xl text-purple-300 mb-4 font-light">
            Software Engineer & Full-Stack Developer
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building reliable, intelligent, and scalable applications with passion and precision
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Contact Me
            </button>

        
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/JerAxer" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5 text-purple-300" />
            </a>
            <a href="https://www.linkedin.com/in/youcef-mammar-kouadri-bba9a01a1/" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5 text-purple-300" />
            </a>
            <a href="https://webflow.com" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
              <Globe className="w-5 h-5 text-purple-300" />
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
}
