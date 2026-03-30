'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, ArrowRight, BookOpen } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  date: string;
  imageUrl: string;
}

export default function LatestArticles({
  searchQuery,
  customTitle,
  customSubtitle,
}: {
  searchQuery?: string;
  customTitle?: string;
  customSubtitle?: string;
} = {}) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `/api/articles?per_page=3`;
        if (searchQuery) {
          url += `&search=${encodeURIComponent(searchQuery)}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch articles. Server responded with: ' + response.status);
        }

        const data = await response.json();

        const formattedArticles: Article[] = data.map((post: any) => {
          let imageUrl =
            'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80';
          if (
            post._embedded &&
            post._embedded['wp:featuredmedia'] &&
            post._embedded['wp:featuredmedia'][0].source_url
          ) {
            imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
          }

          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = post.excerpt.rendered;
          const cleanExcerpt = tempDiv.textContent || tempDiv.innerText || '';

          const dateObj = new Date(post.date);
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });

          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: cleanExcerpt.substring(0, 120) + '...',
            link: post.link,
            date: formattedDate,
            imageUrl,
          };
        });

        setArticles(formattedArticles);
      } catch (err: any) {
        console.error('Error fetching articles:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-96 animate-pulse">
              <div className="h-48 bg-gray-200 w-full"></div>
              <div className="p-6">
                <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded mb-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-16 p-8 bg-red-50 text-red-600 rounded-xl border border-red-200">
        <h3 className="font-bold text-lg mb-2">Error loading articles</h3>
        <p>{error}</p>
        <p className="text-sm mt-2">
          This is likely a CORS issue where the WordPress server needs to be configured to allow access from your local dev server.
        </p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="w-full mt-16 p-8 bg-yellow-50 text-yellow-800 rounded-xl border border-yellow-200">
        <h3 className="font-bold text-lg">No articles found</h3>
        <p className="mt-2">The API returned successfully, but no articles were found in the response array.</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-3">
            <BookOpen className="text-primary" size={28} />
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {customTitle || 'Latest Study Guides & Articles'}
            </h2>
          </div>
          <p className="text-gray-500 mt-2">
            {customSubtitle || 'Expert advice, industry news, and guides to help you navigate your career.'}
          </p>
        </div>
        <a
          href="https://articles.graduateshub.co.za/"
          className="text-primary font-bold hover:text-blue-800 transition-colors hidden sm:flex items-center gap-1 group"
        >
          View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_self"
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.imageUrl}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1 shadow-sm">
                <Calendar size={12} />
                {article.date}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{article.excerpt}</p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-primary group-hover:text-blue-800 transition-colors">
                <span>Read Article</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <a href="https://articles.graduateshub.co.za/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors">
          View All Articles <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
