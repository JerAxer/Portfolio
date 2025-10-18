import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 relative border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Designed and built with
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
            by <span className="text-purple-400 font-semibold">Youcef MAMMAR KOUADRI</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
