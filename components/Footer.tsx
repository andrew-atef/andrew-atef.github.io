import React from "react";
import { Mail, Calendar, Linkedin, Github, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../hooks/usePortfolioData";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { personalInfo } = usePortfolioData();

  return (
    <footer className="max-w-7xl sm:px-6 sm:mt-10 mt-8 mr-auto mb-16 ml-auto pr-4 pl-4">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
        </div>

        <div className="relative">
          <h2 className="text-[16vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter font-geist">
            <span className="block">{t("footer.ready_to_build")}</span>
            <span className="block text-white/60">{t("footer.something_extraordinary")}</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="">
              <p className="text-sm text-white/60 font-geist">{t("footer.get_started")}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-white font-geist hover:text-white/80 transition-colors"
              >
                <Mail className="w-5 h-5 stroke-[1.5] flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </a>
            </div>

            {/* Call */}
            <div className="">
              <p className="text-sm text-white/60 font-geist">{t("footer.schedule_call")}</p>
              <a
                href="https://www.linkedin.com/in/andrew-atef-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:bg-white/90 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full mt-2 pt-3 pr-5 pb-3 pl-5 transition-colors duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span className="font-geist">{t("footer.book_meeting")}</span>
              </a>
            </div>

            {/* Social */}
            <div className="">
              <p className="text-sm text-white/60 font-geist">{t("footer.follow_along")}</p>
              <div className="flex flex-wrap gap-3 mt-2 items-center">
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10"></div>

          <div className="mt-6 flex justify-center">
            {/* Menu */}
            <div className="text-center">
              <p className="text-sm text-white/60 font-geist">{t("footer.explore")}</p>
              <div className="mt-3 flex gap-6 text-sm">
                <a href="#home" className="font-medium tracking-tight hover:underline font-geist text-white/80 hover:text-white">
                  {t("nav.home")}
                </a>
                <a href="#experience" className="font-medium tracking-tight hover:underline font-geist text-white/80 hover:text-white">
                  {t("nav.experience")}
                </a>
                <a href="#projects" className="font-medium tracking-tight hover:underline font-geist text-white/80 hover:text-white">
                  {t("nav.projects")}
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/70 font-geist">
            © <span id="year">{new Date().getFullYear()}</span> {personalInfo.name} — {t("footer.crafted_with_care")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
