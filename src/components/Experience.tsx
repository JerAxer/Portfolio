import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Banque Nationale de l'Habitat (BNH)",
    role: "Full-Stack Developer",
    description : "Developed multiple internal enterprise applications including RH-EVAL (employee evaluation system), Consolidation (data processing platform), and E-Monétique (financial card and cheque management). Focused on building efficient, maintainable, and secure web solutions.",
    technologies : ["React", "Spring Boot", "Razor", "C# .NET", "Python Tkinter","SQL SERVER"],
    period : "March 2024 – September 2025"
  },

  {
    company: "BREEDGITAL (IMMAR R&C)",
    role: "Full-Stack Developer",
    description: "Developing a mobile application for CFAO assessments, focusing on performance, UX, and seamless backend integration.",
    technologies: ["Expo", "React Native", "MongoDB", "Express.js"],
    period: "September 2025 – Present"
  },
{
  company: "Innovexa",
  role: "CEO & Full-Stack Developer",
  description: "Founded Innovexa and led development of custom web and mobile applications for private schools, healthcare professionals, and other clients. Managed full project lifecycle from design to deployment.",
  technologies: ["Based on client requirements (React, Spring Boot, Node.js, Flutter, etc.)"],
  period: "2022 – Present"
}

];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-8 top-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

                <div className="md:ml-20 bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-purple-300 font-semibold text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-600/10 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
