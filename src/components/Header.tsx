import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import profileImage from 'figma:asset/b47cc05724a147de53c3b78cacf6c96532e1c27b.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Perfil */}
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="Akel Ramirez Campo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#018790] shadow-lg"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900">
                Akel Ramirez Campo
              </h1>
              <p className="text-sm text-gray-600">Programador Web</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-700 hover:text-[#018790] transition-colors">
              Sobre Mí
            </a>
            <a href="#skills" className="text-gray-700 hover:text-[#018790] transition-colors">
              Habilidades
            </a>
            <a href="#projects" className="text-gray-700 hover:text-[#018790] transition-colors">
              Proyectos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#018790] transition-colors">
              Contacto
            </a>
          </nav>

          {/* Redes Sociales Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/akelramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#005461] text-white rounded-full hover:bg-[#018790] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/akel-ramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#018790] text-white rounded-full hover:bg-[#00B7B5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:akel.ramirez@gmail.com"
              className="p-2 bg-[#00B7B5] text-white rounded-full hover:bg-[#018790] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-3 mb-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-[#018790] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mí
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-[#018790] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Habilidades
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-[#018790] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#018790] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>

            <div className="flex gap-3 pt-3 border-t border-gray-200">
              <a
                href="https://github.com/akelramirez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#005461] text-white rounded-full hover:bg-[#018790] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akel-ramirez/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#018790] text-white rounded-full hover:bg-[#00B7B5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:akel.ramirez@gmail.com"
                className="p-2 bg-[#00B7B5] text-white rounded-full hover:bg-[#018790] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}