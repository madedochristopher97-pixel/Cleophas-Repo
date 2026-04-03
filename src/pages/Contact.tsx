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
      <section className="bg-[#ffffff] py-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <header className="mb-6">
                <h2 className="font-serif text-3xl md:text-4xl text-[#111928] mb-4 font-bold">Complete our inquiry form:</h2>
                <p className="text-[#4b5563] font-sans text-sm leading-relaxed">
                  Please take a few moments to answer some important questions about your needs, so that we can best serve you. Upon completion of this form, a team member will be in contact with you.
                </p>
              </header>
              <form className="grid grid-cols-1 gap-y-6 form-sans">
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">First name<span className="text-red-500">*</span></label>
                  <input type="text" className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] focus:ring-1 focus:ring-[#C9981A] outline-none rounded-md p-3 w-full transition-all" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">Last name<span className="text-red-500">*</span></label>
                  <input type="text" className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] focus:ring-1 focus:ring-[#C9981A] outline-none rounded-md p-3 w-full transition-all" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">Have you worked with us before?<span className="text-red-500">*</span></label>
                  <div className="flex flex-col space-y-2 mt-1">
                    <label className="flex items-center space-x-3 cursor-pointer"><input type="radio" name="worked_before" value="Yes" className="w-4 h-4 text-[#004524]" /><span>Yes</span></label>
                    <label className="flex items-center space-x-3 cursor-pointer"><input type="radio" name="worked_before" value="No" className="w-4 h-4 text-[#004524]" /><span>No</span></label>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">What best describes you or your industry?<span className="text-red-500">*</span></label>
                  <select className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full appearance-none transition-all">
                    <option>Please Select</option>
                    <option>Agriculture</option>
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c] leading-tight">If you selected "Other" to the question "What services are you looking for?" please describe the services you are interested in.</label>
                  <input type="text" className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full transition-all" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">Who prepares your taxes, and which tax year was last filed?<span className="text-red-500">*</span></label>
                  <textarea className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full resize-y transition-all" rows={3}></textarea>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">How urgent is your timeline? (1- Not urgent at all, 5- Extremely urgent)<span className="text-red-500">*</span></label>
                  <select className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full appearance-none transition-all">
                    <option>Please Select</option>
                    <option>1 - Not urgent at all</option>
                    <option>2 - Slightly urgent</option>
                    <option>3 - Moderately urgent</option>
                    <option>4 - Very urgent</option>
                    <option>5 - Extremely urgent</option>
                  </select>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">How did you hear about us?<span className="text-red-500">*</span></label>
                  <div className="flex flex-col space-y-2 mt-1">
                    <label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-[#004524] rounded border-gray-300" /><span>Referral</span></label>
                    <label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-[#004524] rounded border-gray-300" /><span>Web search</span></label>
                    <label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-[#004524] rounded border-gray-300" /><span>Industry Association</span></label>
                    <label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-[#004524] rounded border-gray-300" /><span>Other</span></label>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c] leading-tight">If you were referred by a person or industry association, who should we thank?</label>
                  <input type="text" className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full transition-all" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">Any additional questions or comments?</label>
                  <textarea className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full resize-y transition-all" rows={3}></textarea>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">Phone number<span className="text-red-500">*</span></label>
                  <input type="tel" className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full transition-all" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-[#1b1c1c]">Email<span className="text-red-500">*</span></label>
                  <input type="email" className="bg-[#f8fafc] border border-gray-200 focus:border-[#C9981A] outline-none rounded-md p-3 w-full transition-all" />
                </div>
                
                <div className="border border-gray-200 w-64 h-20 bg-gray-50 flex items-center px-4 space-x-4 mt-2 rounded shadow-sm">
                  <input type="checkbox" className="w-7 h-7 border-gray-300 rounded focus:ring-[#004524]" />
                  <span className="text-sm text-gray-700 font-medium">I'm not a robot</span>
                  <div className="ml-auto flex flex-col items-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-70" />
                    <span className="text-[10px] text-gray-400 mt-1">reCAPTCHA</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="bg-[#5C944A] text-white px-10 py-3 font-semibold rounded-md shadow hover:bg-[#4d7e3e] hover:-translate-y-0.5 transition-all duration-300 font-sans" type="button">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right: Get in Touch Directly */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-24 h-max"
            >
              <div className="relative bg-[#fbf9f9] p-8 md:p-12 rounded-2xl shadow-sm border border-[#c0c9bf]/30 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-8 p-4 bg-[#004524] rounded-full inline-flex items-center justify-center">
                  <ShieldCheck className="text-[#ffdfa0] w-10 h-10" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#004524] mb-10 font-bold">Get in Touch Directly</h2>
                <div className="space-y-8 w-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors mb-3 md:mb-0 shrink-0">
                      <MapPin className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Office</p>
                      <p className="text-base md:text-lg font-medium font-sans text-[#1b1c1c]">SDA Building 2nd flr Riverside Drive</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors mb-3 md:mb-0 shrink-0">
                      <Mail className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Email</p>
                      <p className="text-base md:text-lg font-medium font-sans text-[#1b1c1c]">info@cleophasandassociates.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors mb-3 md:mb-0 shrink-0">
                      <Phone className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Phone</p>
                      <p className="text-base md:text-lg font-medium font-sans text-[#1b1c1c]">0714023691</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 group">
                    <div className="w-12 h-12 rounded-lg bg-[#e9e8e7] flex items-center justify-center group-hover:bg-[#aef2c0] transition-colors mb-3 md:mb-0 shrink-0">
                      <Clock className="text-[#004524] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-[#404941] mb-1 font-sans">Hours</p>
                      <p className="text-base md:text-lg font-medium font-sans text-[#1b1c1c]">Mon–Fri, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#c0c9bf]/30 w-full flex items-center gap-6 justify-center md:justify-start">
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
