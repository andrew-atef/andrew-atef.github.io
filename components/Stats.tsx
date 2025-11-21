import React from "react";
import { Star, Zap, Brain, TrendingUp, Code, Database, Server, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const Stats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="sm:p-8 bg-zinc-900/80 border-zinc-800 border rounded-3xl p-6 mt-8 mx-4 sm:mx-8 max-w-7xl lg:mx-auto backdrop-blur-sm transition-colors hover:border-zinc-700/50">
      <div className="flex items-center gap-2 text-sm text-zinc-400 animate-on-scroll delay-100">
        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
        <span className="font-normal font-geist">{t("stats.technical_proficiency")}</span>
      </div>
      <div className="mt-2 animate-on-scroll delay-200">
        <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white font-geist font-medium tracking-tighter">
          {t("stats.impact")}
        </h2>
        <p className="mt-1 text-sm sm:text-base text-zinc-400 font-normal font-geist">
          {t("stats.impact_desc")}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Metrics card */}
        <article className="group sm:p-6 flex flex-col min-h-[320px] bg-zinc-800/50 border-zinc-800 border rounded-2xl p-5 backdrop-blur-lg justify-between animate-on-scroll delay-300 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/20 hover:bg-zinc-800">
          <div className="space-y-5">
            <div className="flex items-end gap-2">
              <span className="text-5xl sm:text-6xl text-white font-geist font-medium tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left">
                3.48
              </span>
              <span className="text-zinc-400 text-base font-normal font-geist mb-2">{t("stats.gpa_label")}</span>
            </div>
            <p className="text-sm text-zinc-300 font-geist group-hover:text-white transition-colors">
              {t("stats.graduated_with")} <span className="font-medium text-white font-geist text-emerald-400">{t("stats.honors")}</span> {t("stats.university")}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white font-geist bg-white/5 px-2 py-1 rounded border border-white/5">{t("stats.backend_specialist")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                <Code className="h-3 w-3 text-zinc-300 group-hover:text-white" />
              </div>
              <div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 -ml-2 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors delay-75">
                <Database className="h-3 w-3 text-zinc-300 group-hover:text-white" />
              </div>
              <div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 -ml-2 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors delay-100">
                <Server className="h-3 w-3 text-zinc-300 group-hover:text-white" />
              </div>
              <span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full bg-white text-zinc-900 text-xs font-normal font-geist shadow-lg">
                {t("stats.full_stack")}
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-500">
              <TrendingUp className="h-4 w-4 animate-pulse" />
              <span className="text-xs text-zinc-400 font-normal font-geist group-hover:text-emerald-400 transition-colors">
                {t("stats.clean_code")}
              </span>
            </div>
          </div>
        </article>

        {/* Stack Column */}
        <div className="grid grid-rows-[auto_1fr] gap-4">
          <article className="group flex bg-zinc-800/50 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center justify-between animate-on-scroll delay-400 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:border-zinc-700">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 flex bg-zinc-700 border-zinc-600 border rounded-md items-center justify-center text-white font-bold text-xs group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors duration-300">
                PHP
              </div>
              <div>
                <p className="text-sm font-medium tracking-tight leading-tight text-white font-geist">
                  {t("stats.laravel_expert")}
                </p>
                <p className="text-xs text-zinc-400 font-geist group-hover:text-zinc-300">{t("stats.advanced_architecture")}</p>
              </div>
            </div>
          </article>

          <article className="group sm:p-6 flex flex-col min-h-[200px] bg-zinc-800/50 border-zinc-800 border rounded-2xl p-5 backdrop-blur-lg justify-between animate-on-scroll delay-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/20 hover:bg-zinc-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-orange-500/50 group-hover:text-orange-500 transition-colors duration-500">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-current" style={{ transitionDelay: `${i * 50}ms` }} />)}
                </div>
            </div>
            <p className="text-2xl sm:text-3xl text-right leading-snug text-white font-geist font-medium tracking-tighter group-hover:scale-[1.02] transition-transform duration-300 origin-right">
              {t("stats.optimized_apis")}
            </p>
          </article>
        </div>

        <div className="grid grid-rows-[1fr_auto] gap-4">
          <article className="group flex flex-col min-h-[200px] bg-zinc-800/50 border-zinc-800 border rounded-2xl p-6 backdrop-blur-lg justify-between animate-on-scroll delay-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/20 hover:bg-zinc-800">
            <p className="text-2xl sm:text-3xl text-center leading-snug text-white font-geist font-medium tracking-tighter group-hover:scale-[1.02] transition-transform duration-300">
              {t("stats.automating_workflows")}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors">
               <div className="flex gap-2">
                   <Brain className="text-purple-400 h-5 w-5 group-hover:animate-bounce" />
                   <Zap className="text-yellow-400 h-5 w-5 group-hover:animate-pulse" />
               </div>
               <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">n8n • OpenAI • Gemini</span>
            </div>
          </article>
        </div>
        
        <div className="grid grid-rows-[auto_1fr] gap-4">
           <article className="group flex gap-3 bg-zinc-800/50 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center animate-on-scroll delay-500 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:border-zinc-700">
                <div className="h-9 w-9 flex bg-blue-900/50 border-blue-800 border rounded-md items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                    <ShieldCheck className="h-5 w-5 text-blue-200 group-hover:text-white" />
                </div>
                <div>
                    <p className="text-sm font-medium tracking-tight leading-tight text-white font-geist">
                       {t("stats.secure_systems")}
                    </p>
                    <p className="text-xs text-zinc-400 font-geist group-hover:text-zinc-300">{t("stats.payment_integration")}</p>
                </div>
            </article>

            <article className="group flex bg-zinc-800/50 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center justify-between animate-on-scroll delay-700 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:border-zinc-700">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex bg-green-900/50 border-green-800 border rounded-md items-center justify-center group-hover:bg-green-600 group-hover:border-green-500 transition-colors duration-300">
                         <span className="text-white font-bold">D</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium tracking-tight leading-tight text-white font-geist">
                            {t("stats.devops")}
                        </p>
                        <p className="text-xs text-zinc-400 font-geist group-hover:text-zinc-300">{t("stats.docker_cicd")}</p>
                    </div>
                </div>
            </article>
            
            {/* Decoration box */}
             <article className="bg-zinc-800/30 border-zinc-800 border rounded-2xl p-4 backdrop-blur-sm flex items-center justify-center animate-on-scroll delay-[800ms] group hover:bg-emerald-900/20 hover:border-emerald-900/50 transition-all duration-500 cursor-pointer">
                <span className="text-zinc-500 text-sm group-hover:text-emerald-400 transition-colors">{t("stats.available_for_hire")}</span>
             </article>
        </div>

      </div>
    </section>
  );
};

export default Stats;