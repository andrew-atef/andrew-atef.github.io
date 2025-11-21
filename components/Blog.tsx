import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogArticles';

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="blog" className="max-w-7xl sm:px-6 sm:mt-20 border-white/10 border-t mt-16 mr-auto ml-auto pt-10 pr-4 pl-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl tracking-tight text-white">{t('blog.section_title')}</h2>
        <a href="#blog" className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white transition-colors">
          <span>{t('blog.view_all')}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {BLOG_ARTICLES.map((article, index) => {
          const articleData = t(`blog_articles.${index}`, { returnObjects: true }) as {
            title: string;
            description: string;
            category: string;
          };

          return (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group break- mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] block hover:border-white/30 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9]">
                <img
                  src={article.image}
                  alt={articleData.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} {t('blog.minutes_read')}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                  {articleData?.title}
                </h3>
                <p className="text-sm text-white/70 mt-1 line-clamp-2">
                  {articleData?.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
