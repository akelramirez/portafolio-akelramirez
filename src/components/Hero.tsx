import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F4F4F4] via-white to-[#F4F4F4] pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              ¡Hola! Soy Akel
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#005461] via-[#018790] to-[#00B7B5] mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Desarrollador Web en Formación
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Administrador de Empresas en transición al desarrollo web. Apasionado por la programación
            y el aprendizaje continuo de nuevas tecnologías. Combinando habilidades empresariales con
            conocimientos técnicos para crear soluciones web innovadoras.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-[#005461] via-[#018790] to-[#00B7B5] text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-[#005461] border-2 border-[#005461] rounded-lg hover:bg-[#005461] hover:text-white transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}