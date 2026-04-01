import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Mail, Linkedin, Twitter, Facebook, Shield, Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased flex flex-col">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#FBF9F9]/85 dark:bg-[#1B1C1C]/85 backdrop-blur-md shadow-sm dark:shadow-none">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex-1">
            <Link to="/" className="inline-block">
              <img
                src="https://lh3.googleusercontent.com/d/1eqklTamB7K-tHoChzisJR6GcFc-B1dOl"
                alt="Cleophas & Associates Logo"
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <Link
              to="/services"
              className={`font-medium transition-colors border-b-2 pb-1 ${path === '/services' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold border-[#C9981A]' : 'text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 hover:text-[#004524] dark:hover:text-[#FBF9F9] border-transparent'}`}
            >
              Services
            </Link>
            <Link
              to="/insights"
              className={`font-medium transition-colors border-b-2 pb-1 ${path === '/insights' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold border-[#C9981A]' : 'text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 hover:text-[#004524] dark:hover:text-[#FBF9F9] border-transparent'}`}
            >
              Our Work
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors border-b-2 pb-1 ${path === '/about' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold border-[#C9981A]' : 'text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 hover:text-[#004524] dark:hover:text-[#FBF9F9] border-transparent'}`}
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className={`font-medium transition-colors border-b-2 pb-1 ${path === '/careers' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold border-[#C9981A]' : 'text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 hover:text-[#004524] dark:hover:text-[#FBF9F9] border-transparent'}`}
            >
              Team
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <Link to="/contact" className="bg-[#C9981A] text-[#261A00] px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-300 inline-block text-center">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1B1C1C] dark:text-[#FBF9F9] hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors p-2 relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#FBF9F9] dark:bg-[#1B1C1C] pt-28 px-8 pb-8 overflow-y-auto flex flex-col md:hidden transition-all duration-300">
            <div className="flex flex-col space-y-4 text-center text-lg">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium transition-colors py-3 border-b border-[#C0C9BF]/20 ${path === '/' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold' : 'text-[#1B1C1C]/80 dark:text-[#FBF9F9]/80 hover:text-[#004524] dark:hover:text-[#FBF9F9]'}`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium transition-colors py-3 border-b border-[#C0C9BF]/20 ${path === '/services' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold' : 'text-[#1B1C1C]/80 dark:text-[#FBF9F9]/80 hover:text-[#004524] dark:hover:text-[#FBF9F9]'}`}
              >
                Services
              </Link>
              <Link
                to="/insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium transition-colors py-3 border-b border-[#C0C9BF]/20 ${path === '/insights' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold' : 'text-[#1B1C1C]/80 dark:text-[#FBF9F9]/80 hover:text-[#004524] dark:hover:text-[#FBF9F9]'}`}
              >
                Our Work
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium transition-colors py-3 border-b border-[#C0C9BF]/20 ${path === '/about' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold' : 'text-[#1B1C1C]/80 dark:text-[#FBF9F9]/80 hover:text-[#004524] dark:hover:text-[#FBF9F9]'}`}
              >
                About Us
              </Link>
              <Link
                to="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium transition-colors py-3 border-b border-[#C0C9BF]/20 ${path === '/careers' ? 'text-[#004524] dark:text-[#AEF2C0] font-bold' : 'text-[#1B1C1C]/80 dark:text-[#FBF9F9]/80 hover:text-[#004524] dark:hover:text-[#FBF9F9]'}`}
              >
                Team
              </Link>
              <div className="pt-6 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#C9981A] text-[#261A00] px-6 py-3.5 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-300 block text-center w-full"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#F5F3F3] dark:bg-[#1B1C1C] pt-24 pb-12 px-8 border-t border-[#C0C9BF]/15 mt-auto relative overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-[0.03] pointer-events-none -translate-x-1/4 translate-y-1/4">
          <Shield className="w-[60rem] h-[60rem] text-[#004524] dark:text-[#AEF2C0]" />
        </div>
        <div className="max-w-screen-2xl mx-auto relative z-10">

          {/* Newsletter Card */}
          <div className="bg-[#004524] rounded-[2rem] overflow-hidden shadow-2xl mb-24 flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
              <div className="w-12 h-1 bg-[#C9981A] mb-8"></div>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#FBF9F9] mb-4">
                Subscribe To Our <br />
                <span className="italic font-light text-[#C9981A]">Newsletters.</span>
              </h3>
              <p className="font-sans text-[#FBF9F9]/80 text-lg mb-8 max-w-md leading-relaxed">
                Receive tax, audit, and industry-specific news right to your inbox. Tailored insights for your business growth.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-[#FBF9F9]/10 border-b-2 border-[#C9981A]/50 focus:border-[#C9981A] text-white placeholder:text-white/50 px-4 py-3 outline-none font-sans transition-colors"
                />
                <button className="bg-[#C9981A] text-[#261A00] px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="md:w-2/5 lg:w-1/2 relative min-h-[300px]">
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Newsletter Subscription"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Col 1: Brand & Contact */}
            <div className="space-y-6">
              <div className="inline-block mb-4">
                <img
                  src="https://lh3.googleusercontent.com/d/1eqklTamB7K-tHoChzisJR6GcFc-B1dOl"
                  alt="Cleophas & Associates Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="font-sans text-[#1B1C1C]/80 dark:text-[#FBF9F9]/80 space-y-2 text-sm font-medium">
                <p>123 Financial District</p>
                <p>Suite 400</p>
                <p>Nairobi, Kenya 00100</p>
                <p className="pt-4">+254 (0) 700 000 000</p>
                <p>info@cleophas.com</p>
              </div>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-[#004524] dark:text-[#AEF2C0] hover:text-[#C9981A] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-[#004524] dark:text-[#AEF2C0] hover:text-[#C9981A] transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-[#004524] dark:text-[#AEF2C0] hover:text-[#C9981A] transition-colors"><Facebook size={20} /></a>
              </div>
            </div>

            {/* Col 2: Explore */}
            <div>
              <h4 className="font-serif font-bold text-xl text-[#004524] dark:text-[#FBF9F9] mb-6">Explore</h4>
              <ul className="space-y-3 font-sans text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 font-medium">
                <li><Link to="/" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Services</Link></li>
                <li><Link to="/insights" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Our Work</Link></li>
                <li><Link to="/careers" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Team</Link></li>
                <li><Link to="/contact" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3: Industries */}
            <div>
              <h4 className="font-serif font-bold text-xl text-[#004524] dark:text-[#FBF9F9] mb-6">Industries</h4>
              <ul className="space-y-3 font-sans text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 font-medium">
                <li><a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Real Estate & Construction</a></li>
                <li><a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Technology & Telecom</a></li>
                <li><a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Nonprofit & NGO</a></li>
              </ul>
            </div>

            {/* Col 4: Services */}
            <div>
              <h4 className="font-serif font-bold text-xl text-[#004524] dark:text-[#FBF9F9] mb-6">Services</h4>
              <ul className="space-y-3 font-sans text-[#1B1C1C]/70 dark:text-[#FBF9F9]/70 font-medium">
                <li><Link to="/services/audit" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Audit & Assurance</Link></li>
                <li><Link to="/services/tax" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Tax Advisory</Link></li>
                <li><Link to="/services/corporate-finance" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Corporate Finance</Link></li>
                <li><Link to="/services/wealth-management" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Wealth Management</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#C0C9BF]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm font-medium text-[#1B1C1C]/60 dark:text-[#FBF9F9]/60">
              © 2026 Cleophas & Associates. All Rights Reserved.
            </p>
            <div className="flex space-x-6 font-sans text-sm font-medium text-[#1B1C1C]/60 dark:text-[#FBF9F9]/60">
              <a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Accessibility</a>
              <a href="#" className="hover:text-[#004524] dark:hover:text-[#AEF2C0] transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <p className="font-sans text-xs text-[#1B1C1C]/40 dark:text-[#FBF9F9]/40 italic">
              Cleophas & Associates is a network of independent accounting and consulting firms. The information contained herein is of a general nature and is not intended to address the circumstances of any particular individual or entity.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
