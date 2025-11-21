import React from "react";
import { MessageCircle, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { personalInfo } = usePortfolioData();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const navItems = [
    { key: "home", label: t("nav.home") },
    { key: "expertise", label: t("nav.expertise") },
    { key: "experience", label: t("nav.experience") },
    { key: "projects", label: t("nav.projects") },
    { key: "blog", label: t("nav.blog") },
  ];

  const getLink = (key: string) => {
    return isHome ? `#${key}` : `/#${key}`;
  };

  return (
    <header className="z-50 xl:top-4 relative w-full transition-all duration-500 ease-out transform translate-y-0 opacity-100">
      <div className="mr-6 ml-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={isHome ? "#home" : "/"} className="inline-flex items-center justify-center text-white font-bold text-xl font-sans tracking-tight h-[40px] hover:scale-105 transition-transform duration-300">
            ANDREW ATEF
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur hover:ring-white/20 transition-all duration-300">
              {navItems.map((item) => (
                <a 
                  key={item.key}
                  href={getLink(item.key)}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-full font-sans transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200 font-sans transition-all duration-300 hover:scale-105 active:scale-95">
                {t("experience.whatsapp")}
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur active:scale-90 transition-transform" aria-label="Toggle menu">
            <Menu className="h-5 w-5 text-white/90" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
