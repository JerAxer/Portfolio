import { GraduationCap, BookOpen, Award } from 'lucide-react';

const education = [
  {
    degree: "Master's Degree (M2)",
    field: 'Advanced Information Systems',
    institution: 'Université Abderrahmane Mira de Béjaïa',
    location: 'Béjaïa, Algeria',
    icon: Award,
    gradient: 'from-purple-600 to-purple-700'
  },
  {
    degree: 'Engineering Degree',
    field: 'Software Systems Engineering',
    institution: 'Université Abderrahmane Mira de Béjaïa',
    location: 'Béjaïa, Algeria',
    duration: '5 years',
    icon: GraduationCap,
    gradient: 'from-purple-700 to-purple-800'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-gray-900 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-lg text-purple-300 mb-4 font-semibold">{edu.field}</p>

                  <div className="flex items-start gap-2 text-gray-400 mb-2">
                    <BookOpen className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{edu.institution}</p>
                  </div>

                  <p className="text-sm text-gray-500">{edu.location}</p>

                  {edu.duration && (
                    <div className="mt-auto pt-4">
                      <span className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium">
                        {edu.duration}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
