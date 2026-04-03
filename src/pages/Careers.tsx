import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Shield, BarChart3, ShieldCheck, Briefcase, Users, TrendingUp } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Audit Manager",
    department: "Audit & Assurance",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Lead complex audit engagements for multinational clients, ensuring compliance with IFRS and local regulations."
  },
  {
    id: 2,
    title: "Tax Advisory Consultant",
    department: "Tax Services",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Provide strategic tax planning and compliance services to corporate clients, navigating complex tax landscapes."
  },
  {
    id: 3,
    title: "Corporate Finance Analyst",
    department: "Advisory",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Support M&A transactions, financial modeling, and valuation exercises for high-growth enterprises."
  }
];

export default function Careers() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* PAGE HERO */}
      <section className="relative bg-primary text-on-primary py-24 md:py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Team working" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Shield & Bar Graph Decorative Elements */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[30rem] h-[30rem] text-white" />
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 mb-8 text-[#AEF2C0]/80 font-medium tracking-tight uppercase text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#AEF2C0]">Careers</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] tracking-tight max-w-4xl"
              >
                Build a Legacy of <br/>
                <span className="italic font-light text-[#C9981A]">Excellence.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
              >
                Join a collective of strategic minds dedicated to the preservation and growth of institutional wealth across the continent.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#004524 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-screen-xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Why Choose <br className="hidden md:block" />
              <span className="italic font-light text-[#C9981A]">Cleophas & Associates?</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              We offer more than a job; we offer a platform to shape the financial future of leading enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-2xl shadow-sm border-t-4 border-transparent hover:border-[#C9981A] transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Unwavering Integrity</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Work in an environment where ethical standards are the foundation of every decision and strategy.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-2xl shadow-sm border-t-4 border-transparent hover:border-[#C9981A] transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Accelerated Growth</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Engage with complex, high-stakes projects that will rapidly advance your professional expertise.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-2xl shadow-sm border-t-4 border-transparent hover:border-[#C9981A] transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Collaborative Brilliance</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Join a multidisciplinary team of top-tier professionals who support and challenge each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-24 md:py-32 bg-surface relative">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
                Current <span className="italic font-light text-[#C9981A]">Openings.</span>
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xl">
                Discover opportunities to bring your expertise to our growing team.
              </p>
            </div>
            <div className="bg-surface-container-lowest px-6 py-4 rounded-xl shadow-sm border-l-4 border-[#C9981A]">
              <p className="text-sm font-medium flex items-center gap-2 text-primary">
                <Briefcase className="w-5 h-5 text-[#C9981A]" />
                {jobOpenings.length} Open Positions
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md hover:border-[#C9981A]/50 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-wider rounded-full">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-wider rounded-full">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 font-serif group-hover:text-[#C9981A] transition-colors">{job.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1B5E38] transition-colors w-full md:w-auto">
                    Apply Now
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GENERAL APPLICATION CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <Shield className="w-[60rem] h-[60rem] text-white" />
        </div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Don't see a perfect fit?
          </h2>
          <p className="text-[#AEF2C0] text-xl mb-10 leading-relaxed">
            We are always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9981A] text-[#261A00] px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all">
            Submit General Application
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
