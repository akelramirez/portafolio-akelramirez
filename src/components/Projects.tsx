
import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener proyectos');
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Cargando proyectos...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={project.image_url || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#018790] transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                    )}
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