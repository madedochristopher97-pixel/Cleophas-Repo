import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ClipboardCheck, 
  Briefcase, 
  Heart, 
  ShoppingBasket, 
  Hotel, 
  Users, 
  HeartPulse, 
  Building, 
  GraduationCap, 
  Rocket, 
  Factory, 
  Quote, 
  ArrowRight,
  Shield,
  BarChart3
} from 'lucide-react';

export default function Insights() {
  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <section className="relative bg-[#004524] text-[#FBF9F9] py-24 md:py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Data and charts" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <BarChart3 className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <nav className="flex mb-8 text-[#aef2c0]/80 font-sans text-sm uppercase tracking-widest">
            <span>Home</span>
            <span className="mx-3 opacity-50">/</span>
            <span className="text-[#aef2c0]">Track Record</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1]"
              >
                Our Track <br/>
                <span className="italic font-light text-[#C9981A]">Record.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed"
              >
                Numbers don't lie. We are the custodians of legacy for Nairobi's leading enterprises, delivering clarity through rigorous financial oversight.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS DASHBOARD */}
      <section className="-mt-16 px-8 mb-24 relative z-10">
        <div className="max-w-screen-xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none z-0">
            <Shield className="w-[60rem] h-[60rem] text-primary" />
          </div>
          <div className="bg-[#1b5e38] rounded-xl grid grid-cols-2 md:grid-cols-4 shadow-2xl overflow-hidden relative z-10">
            <div className="p-8 md:p-12 text-center border-r border-white/10 flex flex-col items-center">
              <Building2 className="text-[#ffdfa0] w-10 h-10 mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#ffdfa0] mb-2">50+</div>
              <div className="text-white/80 font-sans text-sm uppercase tracking-wider">Businesses Served</div>
            </div>
            <div className="p-8 md:p-12 text-center md:border-r border-white/10 flex flex-col items-center">
              <ClipboardCheck className="text-[#ffdfa0] w-10 h-10 mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#ffdfa0] mb-2">200+</div>
              <div className="text-white/80 font-sans text-sm uppercase tracking-wider">Audits Completed</div>
            </div>
            <div className="p-8 md:p-12 text-center border-r border-white/10 flex flex-col items-center">
              <Briefcase className="text-[#ffdfa0] w-10 h-10 mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#ffdfa0] mb-2">8</div>
              <div className="text-white/80 font-sans text-sm uppercase tracking-wider">Industries Covered</div>
            </div>
            <div className="p-8 md:p-12 text-center flex flex-col items-center">
              <Heart className="text-[#ffdfa0] w-10 h-10 mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#ffdfa0] mb-2">98%</div>
              <div className="text-white/80 font-sans text-sm uppercase tracking-wider">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="bg-[#fbf9f9] px-8 mb-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#004524]">Featured Engagements</h2>
            <p className="text-[#404941] max-w-md font-sans text-lg">Selected case studies demonstrating our commitment to accuracy and regulatory excellence across diverse sectors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#ffffff] rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img alt="Retail audit" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#004524] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Audit & Assurance
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-[#004524] mb-3">SME Statutory Audit</h3>
                <p className="text-[#404941] mb-6 leading-relaxed">Full statutory audit for a mid-size retail business navigating multi-channel expansion.</p>
                <div className="mt-auto pt-6 border-t border-[#c0c9bf]/20 flex items-center justify-between">
                  <span className="text-xs font-sans text-[#404941] uppercase tracking-widest font-bold">Outcome</span>
                  <div className="bg-[#ffdfa0] text-[#261a00] font-bold px-4 py-1.5 rounded-full text-sm">
                    40% Accuracy Improvement
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#ffffff] rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img alt="Hospitality compliance" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#004524] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Tax Advisory
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-[#004524] mb-3">Tax Compliance Overhaul</h3>
                <p className="text-[#404941] mb-6 leading-relaxed">KRA compliance restructure for a leading hospitality group with regional operations.</p>
                <div className="mt-auto pt-6 border-t border-[#c0c9bf]/20 flex items-center justify-between">
                  <span className="text-xs font-sans text-[#404941] uppercase tracking-widest font-bold">Outcome</span>
                  <div className="bg-[#ffdfa0] text-[#261a00] font-bold px-4 py-1.5 rounded-full text-sm">
                    3 Years Resolved
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#ffffff] rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img alt="NGO financial advisory" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#004524] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Financial Consulting
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-[#004524] mb-3">NGO Financial Advisory</h3>
                <p className="text-[#404941] mb-6 leading-relaxed">Financial systems setup and internal control design for an international NGO HQ.</p>
                <div className="mt-auto pt-6 border-t border-[#c0c9bf]/20 flex items-center justify-between">
                  <span className="text-xs font-sans text-[#404941] uppercase tracking-widest font-bold">Outcome</span>
                  <div className="bg-[#ffdfa0] text-[#261a00] font-bold px-4 py-1.5 rounded-full text-sm">
                    Zero Audit Findings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS COVERED */}
      <section className="bg-[#f5f3f3] py-24 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#004524] mb-4">Industries We've Served</h2>
            <div className="h-1 w-20 bg-[#C9981A] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Retail */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <ShoppingBasket className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Retail</span>
            </div>
            {/* Hospitality */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <Hotel className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Hospitality</span>
            </div>
            {/* NGOs */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <Users className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">NGOs</span>
            </div>
            {/* Healthcare */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <HeartPulse className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Healthcare</span>
            </div>
            {/* Real Estate */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <Building className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Real Estate</span>
            </div>
            {/* Education */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <GraduationCap className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Education</span>
            </div>
            {/* Tech Startups */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <Rocket className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Tech Startups</span>
            </div>
            {/* Manufacturing */}
            <div className="bg-[#fbf9f9] group hover:bg-[#004524] transition-colors duration-300 p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <Factory className="text-[#004524] group-hover:text-[#ffdfa0] w-10 h-10 mb-4 transition-colors" />
              <span className="font-sans font-bold text-[#004524] group-hover:text-white uppercase tracking-widest text-sm transition-colors">Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#fbf9f9] py-32 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-5xl font-serif font-bold text-[#004524] mb-6">What Our Clients Say</h2>
              <p className="text-[#404941] leading-relaxed text-lg">Hear from the business leaders who trust us with their financial integrity and growth strategy.</p>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              <div className="bg-[#e9e8e7] p-10 rounded-xl relative">
                <Quote className="text-[#C9981A] w-16 h-16 absolute -top-6 -left-4 opacity-30 fill-current" />
                <p className="text-[#1b1c1c] italic mb-8 relative z-10 text-lg leading-relaxed">"Cleophas & Associates transformed our financial reporting. Their attention to detail during the KRA audit saved us millions in potential penalties."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b5e38]/20 overflow-hidden">
                    <img alt="Client 1" src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=800" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-[#004524]">James Mwangi</div>
                    <div className="text-xs font-sans uppercase text-[#404941] tracking-wider">CEO, Retail Group Ltd.</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#e9e8e7] p-10 rounded-xl relative">
                <Quote className="text-[#C9981A] w-16 h-16 absolute -top-6 -left-4 opacity-30 fill-current" />
                <p className="text-[#1b1c1c] italic mb-8 relative z-10 text-lg leading-relaxed">"A partner in every sense. Their advisory on NGO systems compliance was instrumental in securing our latest round of international funding."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b5e38]/20 overflow-hidden">
                    <img alt="Client 2" src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-[#004524]">Sarah Otieno</div>
                    <div className="text-xs font-sans uppercase text-[#404941] tracking-wider">Director, Africa Clean Water NGO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-screen-xl mx-auto bg-[#fdc74a] rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#004524] mb-6">Ready to add your business to this list?</h2>
              <p className="text-[#715300] text-lg mb-10 leading-relaxed">Let's talk about how we can bring clarity, compliance, and strategic financial foresight to your organization.</p>
              <Link to="/contact" className="bg-[#004524] text-[#ffffff] px-10 py-4 rounded-md font-bold text-lg hover:bg-[#004524]/90 transition-all flex items-center gap-3 w-fit">
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden md:block h-full min-h-[400px]">
              <img alt="Office meeting" className="w-full h-full object-cover" src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
