import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'E-MONETIQUE',
    description:
      'Comprehensive card, cheque, and role management system developed for E-MONETIQUE. Built with ASP.NET Core and Entity Framework, featuring secure authentication, role-based access control, and real-time transaction processing for financial operations.',
    technologies: ['ASP.NET Core', 'Entity Framework Core', 'Razor', 'SQL Server', 'C#'],
    gradient: 'from-purple-600 to-purple-700',
  },
  {
    title: 'RH-EVAL Platform',
    description:
      'Annual employee evaluation web application designed for HR departments. Includes performance tracking, goal setting, feedback workflows, and analytical reporting to streamline employee assessments and productivity analysis.',
    technologies: ['React', 'Spring Boot', 'SQL server', 'REST API', 'JWT'],
    gradient: 'from-purple-700 to-purple-800',
  },
  {
    title: 'CFAO Assessments',
    description:
      'Mobile application developed for CFAO to digitalize field assessments and performance tracking. The app allows users to complete evaluations, manage reports, and synchronize data in real time with cloud-based storage. Designed for scalability, offline access, and seamless synchronization with MongoDB Atlas.',
    technologies: ['React Native', 'Express.js', 'MongoDB', 'Expo', 'Realm'],
    gradient: 'from-purple-500 to-purple-600',
  },
  {
  title: 'NAJAH School Website',
  description:
    'A full-featured web application developed for a private school in Bouira (Najah School). The platform includes student management, parent and teacher management, and course scheduling. Parents can log in to view their children’s classes, progress, and resources in real time.',
  technologies: ['React', 'Express.js', 'MongoDB'],
  gradient: 'from-purple-500 to-purple-600',
},
{
  title: 'NAJAH Mobile App',
  description:
    'Mobile version of the Najah School platform, currently in development. It will allow parents, students, and teachers to stay connected on the go, with notifications, attendance tracking, and course access.',
  technologies: ['React Native', 'Express.js', 'MongoDB'],
  gradient: 'from-purple-500 to-purple-600',
},
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-20 h-20 text-white/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-600/10 border border-purple-500/30 rounded-lg text-purple-300 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium hover:bg-purple-600/30 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 group/btn">
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </button>
                    <button className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
