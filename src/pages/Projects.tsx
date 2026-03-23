import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projets';
  }, []);

  return (
    <section className="px-6 max-w-6xl mx-auto">
      <div>
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Projets.
          </h1>
          <p className="text-xl text-[#a1a1aa] font-medium max-w-2xl mx-auto">
            Une sélection de mes réalisations techniques, allant de l'infrastructure système au déploiement de services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bento-card ${project.color} ${project.textColor} flex flex-col justify-between relative overflow-hidden group ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex justify-between items-start relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${project.textColor === 'text-white' ? 'bg-white/10' : 'bg-white/30 backdrop-blur-md'}`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${project.textColor === 'text-white' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#111111] text-white hover:bg-[#222222]'}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${project.textColor === 'text-white' ? 'bg-white/10' : 'bg-[#111111]/10'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-extrabold mb-3">
                  {project.title}
                </h3>
                <p className={`font-medium line-clamp-2 ${project.textColor === 'text-white' ? 'text-[#a1a1aa]' : 'text-[#111111]/80'}`}>
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
