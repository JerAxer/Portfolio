import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:mammar.youcef@example.com" className="text-purple-300 hover:text-purple-400 transition-colors">
                        Mkyoucef22@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href="tel:+213551839912" className="text-purple-300 hover:text-purple-400 transition-colors">
                        +213 541002068
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                      <p className="text-purple-300">Béjaïa, Algeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/JerAxer" target="_blank" rel="noopener noreferrer"
                     className="flex-1 h-12 flex items-center justify-center rounded-xl bg-purple-600/20 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/30 transition-all hover:scale-105 group">
                    <Github className="w-5 h-5 text-purple-300 group-hover:text-purple-400" />
                  </a>
                  <a href="https://www.linkedin.com/in/youcef-mammar-kouadri-bba9a01a1/" target="_blank" rel="noopener noreferrer"
                     className="flex-1 h-12 flex items-center justify-center rounded-xl bg-purple-600/20 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/30 transition-all hover:scale-105 group">
                    <Linkedin className="w-5 h-5 text-purple-300 group-hover:text-purple-400" />
                  </a>
                  <a href="https://webflow.com" target="_blank" rel="noopener noreferrer"
                     className="flex-1 h-12 flex items-center justify-center rounded-xl bg-purple-600/20 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/30 transition-all hover:scale-105 group">
                    <Globe className="w-5 h-5 text-purple-300 group-hover:text-purple-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
