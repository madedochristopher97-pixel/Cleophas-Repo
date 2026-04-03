import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Landmark, Calculator, Shield, BarChart3, BookOpen } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'audit',
      title: 'Audit & Assurance',
      description: 'Beyond compliance, we provide deep insights into your financial health, ensuring transparency and building trust with your stakeholders.',
      icon: <ShieldCheck className="w-8 h-8 text-[#C9981A]" />,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
      link: '/services/audit'
    },
    {
      id: 'tax',
      title: 'Tax Advisory',
      description: 'Strategic tax planning tailored to your unique footprint. We navigate complex regulatory landscapes to optimize your tax position and mitigate risk.',
      icon: <Calculator className="w-8 h-8 text-[#C9981A]" />,
      image: 'https://images.pexels.com/photos/7652017/pexels-photo-7652017.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
      link: '/services/tax'
    },
    {
      id: 'corporate-finance',
      title: 'Corporate Finance',
      description: 'From mergers and acquisitions to capital restructuring, our experts guide you through pivotal transactions to maximize shareholder value.',
      icon: <TrendingUp className="w-8 h-8 text-[#C9981A]" />,
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
      link: '/services/corporate-finance'
    },
    {
      id: 'wealth',
      title: 'Wealth Management',
      description: 'Preserving and growing your legacy across generations. We offer bespoke wealth strategies for high-net-worth individuals and families.',
      icon: <Landmark className="w-8 h-8 text-[#C9981A]" />,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
      link: '/services/wealth-management'
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      description: 'Meticulous record-keeping and financial reporting to ensure accuracy and compliance in your day-to-day operations.',
      icon: <BookOpen className="w-8 h-8 text-[#C9981A]" />,
      image: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
      link: '/services/bookkeeping'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-[#004524] text-[#FBF9F9] py-24 md:py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Expertise that <br />
              <span className="italic font-light text-[#C9981A]">protects your legacy.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
            >
              We offer a comprehensive suite of financial services designed for those who demand precision, strategic foresight, and unwavering integrity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List - Tonal Layering */}
      <section className="py-24 px-8 bg-[#FBF9F9] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-[0.03] pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[50rem] h-[50rem] text-[#004524]" />
        </div>
        <div className="max-w-screen-xl mx-auto space-y-32 relative z-10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="bg-[#F5F3F3] p-4 rounded-2xl inline-block mb-6">
                  {service.icon}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#004524] mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="font-sans text-lg text-[#1B1C1C]/80 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to={service.link} className="group flex items-center font-sans font-semibold text-[#004524] text-lg w-fit">
                  <span className="border-b-2 border-[#C9981A] pb-1 mr-3">Explore Service</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 text-[#C9981A]" />
                </Link>
              </div>
              
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#F5F3F3]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Shield Section */}
      <section className="py-24 px-8 bg-[#F5F3F3]">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-[#004524] rounded-[2rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#FBF9F9] leading-tight mb-6">
                  A partnership built on <span className="italic text-[#C9981A]">uncompromising standards.</span>
                </h3>
                <p className="font-sans text-lg text-[#FBF9F9]/80 leading-relaxed">
                  Our approach is rigorous, our insights are profound, and our commitment to your success is absolute. Discover why industry leaders trust Cleophas & Associates.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="font-serif text-5xl md:text-6xl font-bold text-[#C9981A]">40+</div>
                  <div className="font-sans text-sm tracking-widest uppercase text-[#FBF9F9]/70">Years of Excellence</div>
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-5xl md:text-6xl font-bold text-[#C9981A]">$12B</div>
                  <div className="font-sans text-sm tracking-widest uppercase text-[#FBF9F9]/70">Assets Advised</div>
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-5xl md:text-6xl font-bold text-[#C9981A]">150+</div>
                  <div className="font-sans text-sm tracking-widest uppercase text-[#FBF9F9]/70">Global Partners</div>
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-5xl md:text-6xl font-bold text-[#C9981A]">100%</div>
                  <div className="font-sans text-sm tracking-widest uppercase text-[#FBF9F9]/70">Client Discretion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
