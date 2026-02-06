import { Code2, Rocket, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-[#F4F4F4]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005461] text-white rounded-full mb-4">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">
                Código limpio, mantenible y bien documentado
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-[#F4F4F4]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#018790] text-white rounded-full mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">
                Siempre explorando nuevas tecnologías
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-[#F4F4F4]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00B7B5] text-white rounded-full mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creatividad</h3>
              <p className="text-gray-600">
                Soluciones creativas a problemas complejos
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Con formación en Administración de Empresas, he descubierto mi verdadera pasión en la 
            programación web. Actualmente estoy en un proceso de aprendizaje intensivo, dominando 
            tecnologías fundamentales como HTML, CSS y JavaScript, además de explorar lenguajes como 
            Java y Python. Mi background empresarial me da una perspectiva única para entender las 
            necesidades del negocio y traducirlas en soluciones tecnológicas efectivas.
          </p>
        </div>
      </div>
    </section>
  );
}