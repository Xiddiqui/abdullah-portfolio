import React, { useEffect } from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-5 md:p-10 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-black-100 border border-black-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative no-scrollbar shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-black-200/80 backdrop-blur hover:bg-black-50 border border-white/10 rounded-full p-2 transition-colors z-10"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full h-56 md:h-80 relative bg-black-200">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-t-2xl aspect-video"
          />
          {/* Overlay gradient for smooth blending into content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent"></div>
        </div>

        <div className="px-6 pb-10 md:px-10 space-y-6 relative -mt-10 md:-mt-16 z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">{project.title}</h2>
            <p className="text-blue-50 text-xl md:text-2xl font-light">{project.shortDesc}</p>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            {project.tags?.map((tag, index) => (
              <span key={index} className="bg-black-200 text-white-50 px-4 py-1.5 rounded-full text-sm border border-black-50 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-white-50/90 leading-relaxed md:text-lg">
            {project.longDesc}
          </p>

          <div className="flex flex-wrap gap-4 pt-6 md:pt-8 border-t border-black-50">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 group">
                Live Site
                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-black-200 text-white font-semibold px-8 py-3 rounded-xl hover:bg-black-50 transition-colors flex items-center gap-2 border border-black-50 group">
                GitHub
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
