import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Globe, 
  ArrowRight, 
  Users, 
  Map,
  Shield
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. PAGE HERO */}
      <section className="bg-[#004524] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Office meeting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-sans uppercase tracking-widest">
            <a href="/">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#aef2c0]">Contact</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
              >
                Get in <br/>
                <span className="italic font-light text-[#C9981A]">Touch.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
              >
                Whether you need an audit, tax advice, or just want to understand your options — we're here to help.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT SPLIT */}
      <section className="bg-[#ffffff] py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <header>
                <h2 className="font-serif text-4xl text-[#004524] mb-4 font-bold">Send Us a Message</h2>
                <p className="text-[#404941] font-medium font-sans text-lg">Please fill out the form below and our specialized team will get back to you.</p>
              </header>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#404941] font-sans">Full Name</label>
                  <input className="bg-[#e9e8e7] border-b-2 border-[#004524] border-t-0 border-x-0 focus:ring-0 focus:border-[#C9981A] transition-colors p-4 font-sans outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#404941] font-sans">Company Name</label>
                  <input className="bg-[#e9e8e7] border-b-2 border-[#004524] border-t-0 border-x-0 focus:ring-0 focus:border-[#C9981A] transition-colors p-4 font-sans outline-none" placeholder="Acme Corp" type="text" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#404941] font-sans">Email</label>
                  <input className="bg-[#e9e8e7] border-b-2 border-[#004524] border-t-0 border-x-0 focus:ring-0 focus:border-[#C9981A] transition-colors p-4 font-sans outline-none" placeholder="john@company.com" type="email" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#404941] font-sans">Phone</label>
                  <input className="bg-[#e9e8e7] border-b-2 border-[#004524] border-t-0 border-x-0 focus:ring-0 focus:border-[#C9981A] transition-colors p-4 font-sans outline-none" placeholder="+254 700 000 000" type="tel" />
                </div>
                <div className="flex flex-col space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#404941] font-sans">Service</label>
                  <select className="bg-[#e9e8e7] border-b-2 border-[#004524] border-t-0 border-x-0 focus:ring-0 focus:border-[#C9981A] transition-colors p-4 appearance-none font-sans outline-none">
                    <option>Select a service</option>
                    <option>Audit & Assurance</option>
                    <option>Tax Advisory</option>
                    <option>Business Strategy</option>
                    <option>Risk Management</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#404941] font-sans">Message</label>
                  <textarea className="bg-[#e9e8e7] border-b-2 border-[#004524] border-t-0 border-x-0 focus:ring-0 focus:border-[#C9981A] transition-colors p-4 resize-none font-sans outline-none" placeholder="How can we assist your legacy?" rows={4}></textarea>
                </div>
                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <button className="bg-[#fdc74a] text-[#715300] px-10 py-4 font-bold rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 font-sans" type="button">
                    Send Message
                  </button>
                  <p className="text-xs text-[#404941] max-w-xs italic leading-relaxed font-sans">
                    We'll respond within 24 hours. Your information is kept confidential.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Right: Get in Touch Directly */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Background Decorative Element */}
              <div className="absolute -inset-10 bg-[#f5f3f3] rounded-full opacity-50 blur-3xl pointer-events-none"></div>
              <div className="relative bg-[#fbf9f9] p-12 rounded-xl shadow-sm border border-[#c0c9bf]/15 flex flex-col items-center text-center md:items-start md:text-left h-full">
                <div className="mb-8 p-4 bg-[#004524] rounded-full inline-flex items-center justify-center">
                  <ShieldCheck className="text-[#ffdfa0] w-10 h-10" />
                </div>
                <h2 className="font-serif text-4xl text-[#004524] mb-12 font-bold">Get in Touch Directly</h2>
                <div className="space-y-10 w-full">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors">
                      <MapPin className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Office</p>
                      <p className="text-lg font-medium font-sans text-[#1b1c1c]">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors">
                      <Mail className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Email</p>
                      <p className="text-lg font-medium font-sans text-[#1b1c1c]">info@cleophasassociates.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors">
                      <Phone className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Phone</p>
                      <p className="text-lg font-medium font-sans text-[#1b1c1c]">+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors">
                      <Clock className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Hours</p>
                      <p className="text-lg font-medium font-sans text-[#1b1c1c]">Mon–Fri, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 pt-8 border-t border-[#c0c9bf]/30 w-full flex items-center gap-6 justify-center md:justify-start">
                  <a className="text-[#004524] hover:text-[#C9981A] transition-colors" href="#">
                    <Globe className="w-8 h-8" />
                  </a>
                  <a className="text-[#004524] hover:text-[#C9981A] transition-colors font-bold text-lg font-sans" href="#">LinkedIn</a>
                  <a className="text-[#004524] hover:text-[#C9981A] transition-colors font-bold text-lg font-sans" href="#">Twitter</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. QUICK FAQ STRIP */}
      <section className="bg-[#f5f3f3] py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#C9981A] font-bold text-sm uppercase tracking-widest mb-4 block font-sans">Knowledge Base</span>
              <h2 className="font-serif text-5xl text-[#004524] font-bold">Common Questions</h2>
            </div>
            <a className="text-[#004524] font-bold border-b-2 border-[#C9981A] pb-1 inline-flex items-center gap-2 group font-sans" href="#">
              View All FAQ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fbf9f9] p-10 rounded-xl shadow-sm border-l-4 border-[#C9981A] flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#004524] mb-4 leading-snug font-bold">How long does an audit take?</h3>
                <p className="text-[#404941] leading-relaxed font-sans">Typically, a full audit cycle spans between 2 to 6 weeks, depending on the complexity and volume of the accounts.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#c0c9bf]/20 flex items-center gap-2 text-[#004524]">
                <Clock className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-sans">Timeline Expert</span>
              </div>
            </div>
            <div className="bg-[#fbf9f9] p-10 rounded-xl shadow-sm border-l-4 border-[#C9981A] flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#004524] mb-4 leading-snug font-bold">Do you work with small businesses?</h3>
                <p className="text-[#404941] leading-relaxed font-sans">Yes. We pride ourselves on scalability, supporting entities from ambitious startups to multinational corporations with equal integrity.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#c0c9bf]/20 flex items-center gap-2 text-[#004524]">
                <Users className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-sans">Client Focus</span>
              </div>
            </div>
            <div className="bg-[#fbf9f9] p-10 rounded-xl shadow-sm border-l-4 border-[#C9981A] flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#004524] mb-4 leading-snug font-bold">Are services available outside Nairobi?</h3>
                <p className="text-[#404941] leading-relaxed font-sans">Yes. We maintain a strong presence across Kenya and provide robust remote advisory services for regional clients.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#c0c9bf]/20 flex items-center gap-2 text-[#004524]">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-sans">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Shield / Map Section */}
      <section className="py-24 bg-[#004524] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Nairobi city skyline aerial view" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH6CpkXF_88bGs1DYYhgdAnpw8Wlh4PDzl5ztP4ZIQPoT0tvnwhOA4HRQFH-2tRLzLguN8ffeRtv7oMeCe1TSW_EpE9fpnMzgXY-4PM4-NMECWi-KrTc8O03nTr_POy6nnlyxVXawd7ojMKXQs1BKMOXwNg2LGsO0e51mw-1zwgugNijywjhyu9nOG51Ym5OAA9rAOiLYCjqUSVIHLd-FuY6Sx9QnjuId0vYBuuoaL7JUgpxIlACCDNZ-mvDqKRrXI5LqJjXJEkElt"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-[#004524]/80"></div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 font-bold">Visit Our Offices</h2>
            <p className="text-[#92d5a5] text-xl mb-12 font-sans leading-relaxed">Experience professional hospitality at our Nairobi headquarters. We're situated in the heart of the commercial district, ready to host your next strategy session.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#fdc74a] text-[#715300] font-bold rounded-xl flex items-center gap-2 font-sans hover:bg-[#fdc74a]/90 transition-colors">
                <Map className="w-5 h-5" /> Get Directions
              </button>
              <button className="px-8 py-4 border-2 border-[#aef2c0] text-[#aef2c0] font-bold rounded-xl hover:bg-[#aef2c0]/10 transition-colors font-sans">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
