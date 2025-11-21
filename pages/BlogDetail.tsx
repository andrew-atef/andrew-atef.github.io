import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, MessageCircle } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogArticles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePortfolioData } from '../hooks/usePortfolioData';
import ReactMarkdown from 'react-markdown';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const { personalInfo } = usePortfolioData();
  
  const articleIndex = BLOG_ARTICLES.findIndex(article => article.slug === slug);
  const article = BLOG_ARTICLES[articleIndex];
  const currentLang = i18n.language;

  if (!article || articleIndex === -1) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/" className="text-indigo-400 hover:text-indigo-300">
              {t('blog.back_to_home')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const articleData = t(`blog_articles.${articleIndex}`, { returnObjects: true }) as {
    title: string;
    description: string;
    category: string;
    content: string;
  };

  const siteUrl = window.location.origin;
  const articleUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = `${siteUrl}${article.image}`;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": articleData.title,
    "image": [imageUrl],
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": personalInfo.name,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Andrew Atef",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/portfolio.png`
      }
    },
    "description": articleData.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col">
      <Helmet>
        <title>{articleData.title} | {personalInfo.name}</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content={`${article.tags.join(', ')}, ${articleData.category}, ${personalInfo.name}`} />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={personalInfo.name} />
        <meta property="article:section" content={articleData.category} />
        <meta property="article:tag" content={article.tags.join(', ')} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={articleUrl} />
        <meta property="twitter:title" content={articleData.title} />
        <meta property="twitter:description" content={articleData.description} />
        <meta property="twitter:image" content={imageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] overflow-hidden mt-8 md:mt-12 rounded-3xl mx-auto max-w-7xl">
          <img
            src={article.image}
            alt={articleData.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#09090b]"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-12 pt-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 w-fit transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('blog.back_to_home')}
            </Link>
            
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-600/80 text-white w-fit mb-4">
              {articleData.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {articleData.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} {t('blog.minutes_read')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-strong:font-bold prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
            <ReactMarkdown>
              {articleData.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Section */}
          <div className="mt-16 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
            <div className="relative p-8 rounded-2xl bg-[#09090b] border border-white/10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-4 border-[#09090b] ring-2 ring-white/20 shadow-xl">
                <img 
                  src="/images/portfolio.png" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-center md:text-start">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <span className="hidden md:inline-block text-white/30">•</span>
                  <span className="text-indigo-400 font-medium text-sm">
                    {t('personal_info.title')}
                  </span>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed max-w-2xl">
                  {t('hero.description_suffix')}
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a 
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('blog.chat_whatsapp')}
                  </a>
                  <Link 
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    {t('projects.featured_work')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
