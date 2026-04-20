'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/data/blog';

const categoryColors = {
  'Orientation': 'bg-blue-100 text-blue-700',
  'Méthodologie': 'bg-purple-100 text-purple-700',
  'Conseils': 'bg-green-100 text-green-700',
  'Bien-être': 'bg-pink-100 text-pink-700',
  'Actualités': 'bg-amber-100 text-amber-700',
};

export default function BlogPage() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const categories = [...new Set(BLOG_ARTICLES.map(a => a.category))];
  const filteredArticles = currentFilter === 'all'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === currentFilter);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#fef2f2] pt-14 pb-10 md:pt-20 md:pb-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#991b1b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#991b1b]"></span>
              </span>
              <span className="text-sm font-semibold text-slate-700">Ressources &amp; actualit&eacute;s</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-5">
              Blog &amp; <span className="blog-gradient-text">Conseils</span> CRFPA
            </h1>
            <div className="w-12 h-1 bg-[#991b1b] mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              Guides pratiques, <strong className="text-gray-900">conseils m&eacute;thodologiques</strong> et actualit&eacute;s pour maximiser vos chances de r&eacute;ussite &agrave; l&rsquo;<strong className="text-gray-900">examen du barreau</strong>.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
              <div className="blog-stat flex items-center gap-3">
                <div className="w-11 h-11 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#991b1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6V7.5Z" /></svg>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">{BLOG_ARTICLES.length}</div>
                  <div className="text-xs font-medium text-gray-500">Articles</div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200/60 hidden sm:block"></div>
              <div className="blog-stat flex items-center gap-3">
                <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" /></svg>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">{categories.length}</div>
                  <div className="text-xs font-medium text-gray-500">Cat&eacute;gories</div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200/60 hidden sm:block"></div>
              <div className="blog-stat flex items-center gap-3">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">~10 min</div>
                  <div className="text-xs font-medium text-gray-500">Lecture moyenne</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCurrentFilter('all')}
              className={`cat-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                currentFilter === 'all'
                  ? 'bg-[#b91c1c] text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCurrentFilter(cat)}
                className={`cat-btn px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  currentFilter === cat
                    ? 'bg-[#b91c1c] text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((a) => {
              const date = new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
              const colorClass = categoryColors[a.category] || 'bg-gray-100 text-gray-700';
              return (
                <Link
                  key={a.id}
                  href={`/blog/${a.slug}`}
                  className="blog-card lift bg-white rounded-2xl border border-gray-200 overflow-hidden group"
                >
                  <article>
                    <div className="h-2 bg-[#991b1b]"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 ${colorClass} text-xs font-bold rounded-full`}>{a.category}</span>
                        <span className="text-xs text-gray-400">{date}</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#991b1b] transition-colors">{a.title}</h2>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{a.summary}</p>
                      {a.readingTime && (
                        <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {a.readingTime} min de lecture
                        </div>
                      )}
                      <div className="mt-4 flex items-center gap-1 text-[#991b1b] text-sm font-semibold">
                        Lire l&apos;article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
