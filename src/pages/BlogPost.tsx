import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, Shield, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8">
        <h1 className="text-4xl font-serif font-bold text-[#004524] mb-4">Article Not Found</h1>
        <p className="text-on-surface-variant mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="text-[#004524] font-medium flex items-center gap-2 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

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
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px]">{post.category}</span>
          </nav>
          <div className="mb-6">
            <span className="bg-[#C9981A] text-[#261A00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 max-w-4xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[#aef2c0]/80 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-on-surface text-lg leading-relaxed mb-6 font-body"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Share & Back */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-outline-variant/20">
            <Link
              to="/blog"
              className="text-[#004524] font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> All Articles
            </Link>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-on-surface-variant hover:text-[#004524] transition-colors text-sm"
            >
              <Share2 className="w-4 h-4" /> Share Article
            </button>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-container-high py-16 md:py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#004524] mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(related => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-[#C9981A] text-xs font-bold uppercase tracking-widest">{related.category}</span>
                  <h3 className="text-lg font-serif font-bold text-[#004524] mt-3 mb-2 group-hover:text-[#1b5e38] transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">{related.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[#004524] text-sm font-medium group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#004524] py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Need Expert Advice on This Topic?
          </h2>
          <p className="text-[#aef2c0]/80 text-lg mb-8">
            Our team of specialists is ready to help your business navigate these challenges.
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
