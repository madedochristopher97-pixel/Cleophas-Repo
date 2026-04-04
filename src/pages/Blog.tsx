import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Search, Shield } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const categories = ['All', 'Tax Advisory', 'Audit & Assurance', 'Corporate Finance', 'Wealth Management', 'Bookkeeping'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-[#004524] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-sans uppercase tracking-widest">
            <a href="/">Home</a>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-3xl">
            Insights & <span className="italic text-[#C9981A]">Perspectives</span>
          </h1>
          <p className="text-xl text-[#aef2c0]/90 max-w-2xl font-body leading-relaxed">
            Expert analysis on tax, audit, corporate finance, and wealth management — tailored for the Kenyan business landscape.
          </p>
        </div>
      </section>

      {/* FILTERS & SEARCH */}
      <section className="bg-surface border-b border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#004524] text-white'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-[#004524]/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-[#004524]/30 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-on-surface-variant text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
                className="mt-4 text-[#004524] font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-48px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  {/* Category bar */}
                  <div className="bg-[#004524] px-6 py-3">
                    <span className="text-[#C9981A] text-xs font-bold uppercase tracking-widest">{post.category}</span>
                  </div>
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#004524] mb-3 group-hover:text-[#1b5e38] transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-[#004524] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all group-hover:text-[#C9981A]"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#004524] py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Need Expert Advice on These Topics?
          </h2>
          <p className="text-[#aef2c0]/80 text-lg mb-8 leading-relaxed">
            Our team is ready to provide tailored guidance for your specific business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C9981A] text-[#261A00] px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Book a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
