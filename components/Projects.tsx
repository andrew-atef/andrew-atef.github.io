import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../hooks/usePortfolioData";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects, personalInfo } = usePortfolioData();

  return (
    <section
      className="overflow-hidden lg:py-24 bg-zinc-950 pt-16 pb-16 relative group/section"
      id="projects"
    >
      {/* Background Image Overlay with Animation */}
      <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-[20s] ease-in-out group-hover/section:scale-110">
          <img src="/images/projects-bg.avif" className="w-full h-full object-cover" alt="bg" />
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none z-0 absolute inset-0">
        <div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
        <div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll font-medium text-white/70 font-geist bg-white/5 rounded-full px-3 py-1.5 gap-2 items-center hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-1.5 w-1.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            {t("projects.featured_work")}
          </div>
          <h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll text-white delay-100">
            {t("projects.headline")}
          </h2>
          <p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll delay-200">
            {t("projects.description")}
          </p>
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {projects.map((project, index) => (
             <div 
                key={index} 
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900/50 ring-1 ring-white/10 backdrop-blur-md transition-all duration-500 hover:ring-white/30 animate-on-scroll hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2" 
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
             >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>
                  
                  {/* Tags overlay */}
                   <div className="absolute bottom-3 left-4 flex flex-wrap gap-2 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur border border-white/10 shadow-sm">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                     <h3 className="text-xl font-medium tracking-tight text-white font-geist leading-tight group-hover:text-indigo-200 transition-colors">{project.title}</h3>
                     {project.link && (
                       <a href={project.link} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-all ring-1 ring-white/5 hover:scale-110" title={t("projects.view_demo")}>
                         <ExternalLink className="h-4 w-4" />
                       </a>
                     )}
                  </div>
                  
                  <p className="mt-3 text-sm text-zinc-400 font-geist line-clamp-3 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4 mt-auto group-hover:border-white/10 transition-colors">
                    {project.details.map((detail, i) => (
                       <div key={i} className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                         <div className="h-1 w-1 rounded-full bg-zinc-500 group-hover:bg-indigo-400 transition-colors"></div>
                         {detail}
                       </div>
                    ))}
                  </div>
                </div>
             </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap animate-on-scroll delay-500 mt-16 gap-3 justify-center">
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-6 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition-all hover:scale-105"
          >
            <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
            {t("projects.github")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;