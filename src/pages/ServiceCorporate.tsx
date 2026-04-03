import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, TrendingUp, CheckCircle2, ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCorporate() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-[#004524] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Corporate Finance" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <BarChart3 className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-sans uppercase tracking-widest">
            <Link to="/">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#aef2c0]">Corporate Finance</span>
          </nav>
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Corporate <br/>
              <span className="italic font-light text-[#C9981A]">Finance.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
            >
              From mergers and acquisitions to capital restructuring, our experts guide you through pivotal transactions to maximize shareholder value.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 bg-[#FBF9F9]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#004524] mb-6">Strategic Growth & Capital Advisory</h2>
              <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed mb-6">
                Major corporate transactions define the trajectory of a business. Whether you are acquiring a competitor, divesting a non-core asset, or seeking capital to fuel expansion, the stakes are exceptionally high. Our corporate finance team acts as your strategic partner, bringing rigorous analysis, market intelligence, and negotiation expertise to the table.
              </p>
              <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed">
                We manage the complexities of the deal lifecycle from origination to execution. Our goal is to ensure that every transaction aligns with your long-term strategic vision and delivers measurable, sustainable value to your shareholders.
              </p>
            </div>

            <div className="bg-[#F5F3F3] p-10 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-[#004524] mb-8">Our Core Offerings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Mergers & Acquisitions (M&A) Advisory",
                  "Valuation & Financial Modeling",
                  "Capital Raising (Debt & Equity)",
                  "Due Diligence (Financial & Tax)",
                  "Corporate Restructuring & Turnaround",
                  "Project Finance & Infrastructure"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9981A] shrink-0 mt-0.5" />
                    <span className="font-sans text-[#1B1C1C]/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#004524] rounded-2xl p-10 text-white sticky top-32 shadow-2xl">
              <TrendingUp className="w-12 h-12 text-[#C9981A] mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Execute with Confidence</h3>
              <p className="font-sans text-[#FBF9F9]/80 mb-8 leading-relaxed">
                Connect with our corporate finance partners to discuss your strategic objectives and upcoming transactions.
              </p>
              <Link to="/contact" className="bg-[#C9981A] text-[#261A00] px-6 py-4 rounded-md font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 w-full">
                Book a Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
