import { Code, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Ant Design', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Spring Boot', '.NET Core', 'Node.js', 'REST API', 'ASP.NET Core']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Entity Framework']
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Webflow', 'Maven']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'Spring Boot', '.NET Core', 'TypeScript', 'PostgreSQL',
                'Docker', 'Git', 'Tailwind CSS', 'REST API', 'MySQL',
                'Node.js', 'Ant Design', 'Entity Framework', 'Postman', 'Webflow'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 bg-purple-600/10 border border-purple-500/30 rounded-xl text-purple-300 text-sm font-medium hover:bg-purple-600/20 hover:border-purple-500/50 hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
