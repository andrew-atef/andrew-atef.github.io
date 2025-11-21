import React from "react";
import { ArrowRight, Play } from "lucide-react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../hooks/usePortfolioData";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { personalInfo } = usePortfolioData();
  
  const navItems = [
    { key: "home", label: t("nav.home") },
    { key: "expertise", label: t("nav.expertise") },
    { key: "experience", label: t("nav.experience") },
    { key: "projects", label: t("nav.projects") },
    { key: "blog", label: t("nav.blog") },
  ];

  return (
    <section id="home" className="w-full isolate min-h-screen overflow-hidden relative group">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/images/hero-bg.png" 
          alt="Background" 
          className="w-full h-full object-cover animate-ken-burns opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/50 ring-1 ring-black/30 backdrop-blur-[1px]"></div>
      </div>
      
      <Navbar />

      <div className="z-10 relative">
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mr-auto ml-auto pt-28 pr-6 pb-16 pl-6">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Badge with Float Animation */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-on-scroll delay-100 animate-float hover:bg-white/15 transition-colors duration-300 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-sans">
                {t("hero.available")}
              </span>
              <span className="text-sm font-medium text-white/90 font-sans">
                {t("hero.open_for_opportunities")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-instrument-serif font-normal animate-on-scroll delay-200 drop-shadow-2xl">
              {t("hero.headline_1")}
              <br className="hidden sm:block" />
              {t("hero.headline_2")}
            </h1>

            {/* Description */}
            <p className="sm:text-lg animate-on-scroll delay-300 text-base text-white/80 max-w-2xl mt-6 mr-auto ml-auto font-sans font-light leading-relaxed">
              {t("hero.description_prefix")} <span className="text-white font-medium">{personalInfo.name}</span>, {personalInfo.title}. 
              {t("hero.description_suffix")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-x-3 gap-y-3 items-center justify-center animate-on-scroll delay-400">
              <a href="#projects" className="group inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full pt-3 pr-5 pb-3 pl-5 font-sans transition-all duration-300 hover:scale-105 hover:ring-white/30">
                {t("hero.view_projects")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </a>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-all duration-300 hover:scale-105">
                {t("hero.github_profile")}
                <Play className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Technologies / Footer of Hero */}
          <div className="mx-auto mt-20 max-w-5xl">
            <p className="animate-on-scroll delay-500 text-sm text-white/70 text-center uppercase tracking-widest text-xs mb-8">
              {t("hero.core_technologies")}
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 animate-on-scroll delay-700 text-white/60 items-center">
               {["Laravel", "PHP", "MySQL", "Docker", "Python", ".NET"].map((tech, i) => (
                 <span 
                    key={tech} 
                    className="text-lg font-bold hover:text-white hover:scale-110 transition-all duration-300 cursor-default transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                 >
                    {tech}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;