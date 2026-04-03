import React, { useState, useEffect } from 'react';
import { ShieldCheck, Wallet, BarChart3, TrendingUp, ArrowRight, ChevronRight, Quote, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote: "Cleophas & Associates transformed our approach to fiscal responsibility. Their advisory isn't just about numbers; it's about our future legacy.",
    name: "Soweto Investment Group",
    title: "Managing Director"
  },
  {
    quote: "Their attention to detail during the KRA audit saved us millions in potential penalties. A true partner in every sense.",
    name: "James Mwangi",
    title: "CEO, Retail Group Ltd."
  },
  {
    quote: "Their advisory on NGO systems compliance was instrumental in securing our latest round of international funding.",
    name: "Sarah Otieno",
    title: "Director, Africa Clean Water NGO"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[921px] flex items-center pt-20 relative overflow-hidden bg-primary">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://lh3.googleusercontent.com/d/18FzvcAy52Ss157r3TCPLilR-LH_WUOZQ)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0, 69, 36, 0.5), rgba(0, 45, 20, 0.7))'
          }}
        />
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[50rem] h-[50rem] text-white" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Financial Clarity. <br/>
              <span className="italic font-light text-[#C9981A]">Built on Trust.</span>
            </h1>
            <p className="text-xl text-white/80 font-body mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Audit, Tax & Advisory services that empower your business to grow with confidence through tailored financial stewardship.
            </p>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <Link to="/contact" className="bg-[#C9981A] text-[#261A00] px-8 py-4 rounded-md font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all flex items-center gap-2">
                Book a Consultation
                <ArrowRight size={20} />
              </Link>
              <Link to="/insights" className="text-on-primary font-bold border-b-2 border-[#C9981A] pb-1 flex items-center gap-2 group">
                View Our Work
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="bg-surface-container-lowest py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[60rem] h-[60rem] text-primary" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-[0.03] pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[50rem] h-[50rem] text-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-16 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Core <br className="hidden md:block" />
              <span className="italic font-light text-[#C9981A]">Expertise.</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl font-body mx-auto">Integrated solutions designed to navigate the complexities of modern corporate finance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Card 1 - Large (Audit & Assurance) */}
            <div className="md:col-span-2 md:row-span-2 group p-10 bg-surface border-l-4 border-transparent hover:border-[#C9981A] hover:bg-surface-container-low transition-all duration-300 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col items-start">
                <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4 font-serif">Audit & Assurance</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg font-body max-w-md mb-8 flex-grow">Providing rigorous independent assessment to ensure transparency and stakeholder trust across all your financial operations.</p>
                <Link to="/services/audit" className="inline-flex items-center text-primary font-bold hover:text-[#C9981A] transition-colors mt-auto">
                  Explore Service <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
              <div className="absolute -bottom-12 -right-12 text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                <ShieldCheck size={240} />
              </div>
            </div>

            {/* Card 2 - Top Right (Tax Advisory) */}
            <div className="md:col-span-1 md:row-span-1 group p-8 bg-surface border-l-4 border-transparent hover:border-[#C9981A] hover:bg-surface-container-low transition-all duration-300 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wallet className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Tax Advisory</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm font-body mb-6 flex-grow">Strategic tax planning and compliance tailored to local and global mandates.</p>
                <Link to="/services/tax" className="inline-flex items-center text-primary font-bold hover:text-[#C9981A] transition-colors text-sm mt-auto">
                  Explore Service <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 3 - Middle Right (Business Accounting) */}
            <div className="md:col-span-1 md:row-span-1 group p-8 bg-surface border-l-4 border-transparent hover:border-[#C9981A] hover:bg-surface-container-low transition-all duration-300 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Business Accounting</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm font-body mb-6 flex-grow">Comprehensive financial management to keep your operations agile and informed.</p>
                <Link to="/services" className="inline-flex items-center text-primary font-bold hover:text-[#C9981A] transition-colors text-sm mt-auto">
                  Explore Service <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 4 - Corporate Finance */}
            <div className="md:col-span-2 md:row-span-1 group p-8 md:p-10 bg-surface border-l-4 border-transparent hover:border-[#C9981A] hover:bg-surface-container-low transition-all duration-300 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10 w-full">
                <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-3 font-serif">Corporate Finance</h3>
                  <p className="text-on-surface-variant leading-relaxed text-base font-body max-w-xl">High-level advisory for mergers, acquisitions, and long-term capital structural growth to ensure your legacy endures.</p>
                </div>
                <Link to="/services/corporate-finance" className="shrink-0 text-primary font-bold hover:text-[#C9981A] transition-colors relative z-10 flex items-center gap-2 mt-4 md:mt-0">
                  Explore Service <ArrowRight size={20} />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            </div>

            {/* Card 5 - Bookkeeping */}
            <div className="md:col-span-1 md:row-span-1 group p-8 bg-surface border-l-4 border-transparent hover:border-[#C9981A] hover:bg-surface-container-low transition-all duration-300 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Bookkeeping</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm font-body mb-6 flex-grow">Meticulous record-keeping and financial reporting for operational accuracy.</p>
                <Link to="/services" className="inline-flex items-center text-primary font-bold hover:text-[#C9981A] transition-colors text-sm mt-auto">
                  Explore Service <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="bg-[#FBF7EE] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#004524 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Decorative Bar Chart */}
        <div className="absolute bottom-0 left-0 opacity-[0.03] pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[40rem] h-[40rem] text-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#C9981A] font-bold tracking-widest uppercase text-sm font-body">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4">
              A Legacy of <br className="hidden md:block" />
              <span className="italic font-light text-[#C9981A]">Excellence.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="text-6xl font-serif text-[#C9981A] font-bold mb-4 tracking-tight">50+</div>
              <div className="text-xl font-bold text-primary mb-2 font-body">Clients Served</div>
              <p className="text-on-surface-variant text-sm font-body">From ambitious startups to multinational corporations.</p>
            </div>
            <div className="p-8 border-x border-outline-variant/30">
              <div className="text-6xl font-serif text-[#C9981A] font-bold mb-4 tracking-tight">98%</div>
              <div className="text-xl font-bold text-primary mb-2 font-body">Compliance Rate</div>
              <p className="text-on-surface-variant text-sm font-body">Flawless execution in regulatory and fiscal reporting.</p>
            </div>
            <div className="p-8">
              <div className="text-6xl font-serif text-[#C9981A] font-bold mb-4 tracking-tight">10+</div>
              <div className="text-xl font-bold text-primary mb-2 font-body">Years Combined Experience</div>
              <p className="text-on-surface-variant text-sm font-body">Seasoned expertise rooted in the African financial landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-24 bg-surface relative overflow-hidden border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#C9981A] font-bold tracking-widest uppercase text-sm font-body">Our Partners</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-4 mb-4">
              Trusted by <span className="italic font-light text-[#C9981A]">Industry Leaders.</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body">We're proud to have collaborated with distinguished organizations driving growth across diverse industries.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center">
            <div className="flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 border border-outline-variant/10 aspect-video w-full">
              <img src="/regilicia_logo_1775210853133.png" alt="Regilicia Investments Ltd" className="w-full h-full object-contain pointer-events-none" />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 border border-outline-variant/10 aspect-video w-full">
              <img src="/tradewings_logo_1775210867365.png" alt="Tradewings Business Enterprise" className="w-full h-full object-contain pointer-events-none" />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 border border-outline-variant/10 aspect-video w-full">
              <img src="/shastala_logo_1775210882004.png" alt="Shastala Enterprises" className="w-full h-full object-contain pointer-events-none" />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 border border-outline-variant/10 aspect-video w-full">
              <img src="/mountain_top_logo_1775210896518.png" alt="Mountain Top Enterprises" className="w-full h-full object-contain pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Shield / Testimonial Hybrid */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8">
          <div className="relative bg-primary rounded-xl p-12 overflow-hidden shadow-xl min-h-[400px] flex items-center justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Quote size={120} className="text-surface fill-current rotate-180" />
            </div>
            <div className="absolute bottom-0 left-0 opacity-[0.08] pointer-events-none -translate-x-1/4 translate-y-1/4">
              <Shield className="w-[30rem] h-[30rem] text-white" />
            </div>
            <div className="relative z-10 flex flex-col gap-12 items-center justify-center text-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-2xl font-serif text-on-primary italic mb-6 leading-relaxed max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <h4 className="text-secondary-fixed font-bold text-xl font-body">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-primary-fixed/60 font-body text-sm uppercase tracking-widest">{testimonials[currentTestimonial].title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
