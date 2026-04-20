import React, { useEffect, useState } from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentMediaIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const mediaList = project.media || [{ type: "image", url: project.image }];
  const currentMedia = mediaList[currentMediaIndex] || mediaList[0];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

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
          className="absolute top-4 right-4 bg-black-200/80 backdrop-blur hover:bg-black-50 border border-white/10 rounded-full p-2 transition-colors z-[30]"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full h-56 md:h-80 relative bg-black-200 group">
          {currentMedia.type === 'video' ? (
             <video 
             src={currentMedia.url} 
             className="w-full h-full object-contain rounded-t-2xl aspect-video"
             controls
             autoPlay
             loop
           />
          ) : (
            <img 
              src={currentMedia.url} 
              alt={project.title} 
              className="w-full h-full object-contain rounded-t-2xl aspect-video"
            />
          )}

          {/* Carousel Controls */}
          {mediaList.length > 1 && (
            <>
              <button 
                onClick={handlePrev} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-[25]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={handleNext} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-[25]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[25]">
                {mediaList.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={(e) => { e.stopPropagation(); setCurrentMediaIndex(idx); }}
                    className={`w-2 h-2 rounded-full transition-all ${currentMediaIndex === idx ? 'bg-white w-4' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Overlay gradient for smooth blending into content */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black-100 via-transparent to-transparent z-[15] pointer-events-none"></div>
        </div>

        <div className="px-6 pb-10 md:px-10 space-y-6 relative -mt-10 md:-mt-16 z-[20]">
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
            {project.type === "App" ? (
              <>
                {project.iosLink && (
                  <a href={project.iosLink} target="_blank" rel="noreferrer" className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 group">
                    Download iOS App
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.83 3.66-.75 2.15.14 3.65 1.05 4.63 2.58-3.69 2.05-3.05 7.22.42 8.65-.82 1.3-1.63 2.65-2.8 3.68zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.08 4.67-3.74 4.25z"/>
                    </svg>
                  </a>
                )}
                {project.androidLink && (
                  <a href={project.androidLink} target="_blank" rel="noreferrer" className="bg-[#3DDC84] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#34c676] transition-colors flex items-center gap-2 group">
                    Download Android App
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592c.1158-.2018.0468-.4582-.1535-.574-.2026-.1151-.4586-.0461-.574.1558l-2.0227 3.5042c-1.464-.6667-3.2359-1.0366-5.1286-1.0366s-3.6646.3699-5.1286 1.0366l-2.0227-3.5042c-.1154-.2019-.3714-.2709-.574-.1558-.2003.1158-.2693.3722-.1535.574l1.9973 3.4592C2.658 11.2335 0 15.6888 0 20.8643h24c0-5.1755-2.658-9.6308-6.118-11.5429z"/>
                    </svg>
                  </a>
                )}
              </>
            ) : (
              project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 group">
                  Live Site
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )
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
