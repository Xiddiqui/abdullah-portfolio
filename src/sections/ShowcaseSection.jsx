import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import ProjectModal from "../components/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase card
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index % 3), // stagger per row
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex flex-col items-center justify-center relative">
      <div className="w-full max-w-7xl mx-auto z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62e0ff] via-[#52aeff] to-[#6d45ce]">Projects</span>
          </h2>
          <p className="text-blue-50 md:text-xl max-w-2xl mx-auto font-light">
            A selection of my recent work, showcasing interactive experiences, robust platforms, and cutting-edge design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => setSelectedProject(project)}
              className="card card-border rounded-3xl overflow-hidden cursor-pointer group flex flex-col h-full bg-black-200/50 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(109,69,206,0.15)]"
            >
              <div className="glow"></div>
              <div className="relative w-full h-64 overflow-hidden bg-black-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Tag overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags?.slice(0, 2).map((tag, i) => (
                    <span key={i} className="bg-black/80 backdrop-blur-md text-white-50 text-xs px-3 py-1.5 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                  {project.tags?.length > 2 && (
                    <span className="bg-black/80 backdrop-blur-md text-white-50 text-xs px-3 py-1.5 rounded-full border border-white/10">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col z-10 relative bg-black-100 backdrop-blur-sm border-t border-black-50/50">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#62e0ff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-blue-50 mb-8 flex-1 text-base md:text-lg font-light leading-relaxed">
                  {project.shortDesc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold tracking-widest uppercase text-white-50 group-hover:text-white transition-colors duration-300">
                    View Details
                  </span>
                  <div className="size-10 rounded-full bg-black-200 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#62e0ff] group-hover:to-[#6d45ce] transition-all duration-300">
                    <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </div>
  );
};

export default AppShowcase;
