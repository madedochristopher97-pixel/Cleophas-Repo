import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, BarChart3, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Cleophas Kisambu",
    role: "Founder",
    image: "/About Us Image.png",
    bio: "With over 20 years of experience in audit and corporate finance, Cleophas leads the firm's strategic direction.",
  },
  {
    name: "Sarah Nakato",
    role: "Head of Tax Advisory",
    image: "/Head of Advisory (2).jpg",
    bio: "Sarah brings extensive corporate and international tax expertise to guide our clients through complex landscapes.",
  },
  {
    name: "Rachel Mutemi",
    role: "Lead Corporate Finance",
    image: "/Corporate Finance Image.jpg",
    bio: "An expert in M&A, valuations, and strategic capital restructuring for rapidly growing enterprises.",
  },
  {
    name: "David Ochieng",
    role: "Director of Audit & Assurance",
    image: "/Audit and Assurance Image.jpg",
    bio: "Specializing in compliance and robust financial reporting across diverse institutional sectors.",
  }
];

export default function Team() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative bg-[#004524] text-white py-24 md:py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Our Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[30rem] h-[30rem] text-white" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-sans uppercase tracking-widest">
            <Link to="/">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#aef2c0]">Team</span>
          </nav>
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white"
            >
              The Minds <br/>
              <span className="italic font-light text-[#C9981A]">Behind the Firm.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
            >
              Meet the distinguished professionals dedicated to safeguarding your legacy through uncompromising integrity and financial expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 md:py-32 px-8 bg-[#FBF9F9]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C9981A] font-bold tracking-widest uppercase text-sm font-body">Our Leadership</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#004524] mt-4 mb-4">
              Commitment to <span className="italic font-light text-[#C9981A]">Excellence.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004524]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-[#C9981A] text-[#1B1C1C] rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#C9981A] text-[#1B1C1C] rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl font-bold text-[#004524] mb-2">{member.name}</h3>
                  <div className="text-[#C9981A] font-bold uppercase tracking-widest text-xs mb-4">{member.role}</div>
                  <p className="font-sans text-[#1B1C1C]/70 leading-relaxed text-sm flex-grow">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
