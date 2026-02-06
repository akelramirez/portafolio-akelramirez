import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#005461] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Akel Ramirez Campo</h3>
              <p className="text-gray-300">
                Programador Web creando experiencias digitales excepcionales.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#00B7B5] transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-[#00B7B5] transition-colors">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-[#00B7B5] transition-colors">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[#00B7B5] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sígueme</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/akelramirez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#018790] rounded-full hover:bg-[#00B7B5] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akel-ramirez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#018790] rounded-full hover:bg-[#00B7B5] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:akel.ramirez@gmail.com"
                  className="p-2 bg-[#018790] rounded-full hover:bg-[#00B7B5] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#018790] pt-8 text-center">
            <p className="text-gray-300 flex items-center justify-center gap-2">
              © {currentYear} Akel Ramirez Campo. Hecho con 
              <Heart className="w-4 h-4 text-[#00B7B5] fill-current" /> 
              y mucho café ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}