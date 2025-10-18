import { GraduationCap, Code2, Sparkles } from 'lucide-react';
import youcefImage from '../Assests/image.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl shadow-purple-500/30">
                <img 
                  src={youcefImage} 
                  alt="MAMMAR KOUADRI Youcef"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Passionate Developer</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate software engineer with a Master's degree in Advanced Information Systems from Université Abderrahmane Mira de Béjaïa. I love solving complex problems through elegant code and clean design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Academic Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  With 5 years of engineering education and a Master's degree, I bring both theoretical knowledge and practical expertise to every project.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  From modern React frontends to robust Spring Boot and .NET backends, I create end-to-end solutions that scale.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {['React', 'Spring Boot', '.NET Core', 'PostgreSQL', 'TypeScript', 'Docker'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-purple-600/10 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium hover:bg-purple-600/20 hover:border-purple-500/50 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
