import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceBookkeeping() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-[#004524] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Bookkeeping Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <BookOpen className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-sans uppercase tracking-widest">
            <Link to="/">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#aef2c0]">Bookkeeping</span>
          </nav>
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Bookkeeping <br/>
              <span className="italic font-light text-[#C9981A]">Services.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
            >
              Meticulous record-keeping and financial reporting to ensure accuracy and compliance in your day-to-day operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 bg-[#FBF9F9]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#004524] mb-6">Accurate Reporting & Compliance</h2>
              <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed mb-6">
                Precise financial records are the backbone of any successful business. Our comprehensive bookkeeping services provide you with a clear, accurate, and up-to-date picture of your financial health, empowering you to make informed decisions and focus on strategic growth rather than administrative tasks.
              </p>
              <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed">
                By maintaining impeccable ledgers and ensuring strict adherence to regulatory standards, we safeguard your business from compliance risks and lay a robust foundation for future scaling, audits, and sound financial planning.
              </p>
            </div>

            <div className="bg-[#F5F3F3] p-10 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-[#004524] mb-8">Our Core Offerings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Daily Ledger Maintenance",
                  "Accounts Payable & Receivable",
                  "Bank & Credit Card Reconciliation",
                  "Month-End & Year-End Closing",
                  "Financial Statement Preparation",
                  "Payroll Processing & Reporting"
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
              <BookOpen className="w-12 h-12 text-[#C9981A] mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Gain Financial Clarity</h3>
              <p className="font-sans text-[#FBF9F9]/80 mb-8 leading-relaxed">
                Speak with our bookkeeping experts today to streamline your financial processes and ensure absolute accuracy.
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
