import React from "react";
import { Check, Download, Calendar, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../hooks/usePortfolioData";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { experience, personalInfo } = usePortfolioData();

  return (
    <section id="experience" className="max-w-7xl sm:px-6 sm:mt-20 mt-14 px-4 mx-auto">
      <div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:ring-white/20">
        <div className="flex items-end justify-between p-6 border-b border-white/10 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">
            {t("experience.title")}
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1K-JQBFlEZGhsZch-oa18BCU7VfsXQdBc/view?usp=sharing"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>{t("experience.download_cv")}</span>
            </a>
          </div>
        </div>

        {experience.map((job, index) => (
          <div 
            key={index} 
            className="group p-6 sm:p-8 border-b border-white/10 last:border-0 animate-on-scroll transition-colors duration-300 hover:bg-white/[0.03]"
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1">
                <div className="text-3xl sm:text-4xl font-medium tracking-tight text-white/40 tabular-nums group-hover:text-emerald-400/80 transition-colors duration-300">
                  {index + 1}
                </div>
              </div>
              <div className="md:col-span-8">
                <h4 className="text-white font-semibold text-lg mb-2 md:hidden group-hover:text-emerald-300 transition-colors">
                    {job.company}
                </h4>
                <ul className="space-y-3">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 group-hover:text-white transition-colors duration-300">
                      <div className="mt-0.5 p-0.5 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      </div>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/60 group-hover:border-white/20 group-hover:text-white/80 transition-colors">
                        {job.type}
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/60 group-hover:border-white/20 group-hover:text-white/80 transition-colors">
                        {job.period}
                    </span>
                </div>
              </div>
              <div className="md:col-span-3 md:text-right">
                <h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {job.role}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-medium uppercase tracking-wider">{job.company}</p>
                <p className="text-xs text-neutral-500 mt-1">{job.period}</p>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-white/10 bg-white/[0.02] animate-on-scroll delay-500">
          <p className="text-sm text-neutral-300">
            {t("experience.need_solution")}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/andrew-atef-dev"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-600 hover:bg-emerald-500 transition-all hover:scale-105 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/30"
            >
              <Calendar className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>{t("experience.book_call")}</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>{t("experience.send_email")}</span>
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-[#25D366]/10 hover:bg-[#25D366]/20 ring-1 ring-[#25D366]/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/10"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{t("experience.whatsapp")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;