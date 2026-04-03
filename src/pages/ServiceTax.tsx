import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calculator, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceTax() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-[#004524] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/7652017/pexels-photo-7652017.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Tax Advisory" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-sans uppercase tracking-widest">
            <Link to="/">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#aef2c0]">Tax Advisory</span>
          </nav>
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Tax <br/>
              <span className="italic font-light text-[#C9981A]">Advisory.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
            >
              Strategic tax planning tailored to your unique footprint. We navigate complex regulatory landscapes to optimize your tax position and mitigate risk.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 bg-[#FBF9F9]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#004524] mb-6">Navigating the Tax Landscape</h2>
              <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed mb-6">
                Taxation is one of the most significant variables in any business strategy. Our tax advisory services are designed to demystify complex tax codes, ensuring that your organization remains compliant while strategically minimizing liabilities. We view tax planning not as an annual event, but as a continuous, proactive strategy integrated into your broader financial goals.
              </p>
              <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed">
                Whether you are navigating cross-border transactions, restructuring your corporate entity, or seeking clarity on local tax obligations, our experts provide the foresight needed to make informed, tax-efficient decisions.
              </p>
            </div>

            <div className="bg-[#F5F3F3] p-10 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-[#004524] mb-8">Our Core Offerings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Corporate Tax Planning & Compliance",
                  "International Tax & Transfer Pricing",
                  "Mergers & Acquisitions Tax Structuring",
                  "Indirect Taxes (VAT, Customs)",
                  "Tax Dispute Resolution & Audit Defense",
                  "Executive Compensation & Expatriate Tax"
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
              <Calculator className="w-12 h-12 text-[#C9981A] mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Optimize Your Position</h3>
              <p className="font-sans text-[#FBF9F9]/80 mb-8 leading-relaxed">
                Connect with our tax specialists to explore strategies that protect your bottom line and ensure absolute compliance.
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
