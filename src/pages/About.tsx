import React from 'react';
import { Shield, Target, Handshake, Lightbulb, ChevronRight, CheckCircle2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section className="relative bg-[#004524] text-[#FBF9F9] py-24 md:py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80" 
            alt="Office building" 
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
          <nav className="flex items-center space-x-2 text-[#aef2c0]/80 text-sm font-medium tracking-wide mb-8 uppercase">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span className="text-[#aef2c0]">About</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Who We <br/>
              <span className="italic font-light text-[#C9981A]">Are.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl font-sans max-w-2xl text-[#FBF9F9]/80 leading-relaxed">
              A trusted audit and advisory firm dedicated to financial clarity, compliance, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                  src="/About Us Image.webp"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-fixed rounded-xl -z-10 hidden md:block"></div>
            </div>
            <div className="lg:col-span-7">
              <span className="inline-block text-secondary font-bold tracking-widest uppercase text-sm mb-4 border-b-2 border-secondary-container pb-1">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface mb-8 leading-tight" style={{ textWrap: 'balance' }}>
                Built on Integrity. Driven by Purpose.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-xl">
                <p>
                  Cleophas & Associates was founded with a clear purpose — to make financial expertise accessible to businesses that need it most. We believe every business, regardless of size, deserves a trusted financial partner.
                </p>
                <p>
                  Our team brings deep expertise in audit, tax, and advisory, combined with a genuine commitment to our clients' long-term success. We operate at the intersection of traditional wisdom and modern innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission Statement */}
      <section className="bg-surface-container-low py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Shield className="w-[40rem] h-[40rem] text-primary" />
        </div>
        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="flex flex-col items-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center mb-8 shadow-sm">
              <Target size={32} />
            </div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Mission</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface mb-10 leading-tight">
              Transparency. Compliance. Growth.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed italic font-light">
              "To provide high-quality audit, tax, and advisory services that enhance transparency, ensure compliance, and support informed decision-making. We are committed to delivering value through professionalism, ethical standards, and client-focused solutions that drive long-term success."
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Vision Statement */}
      <section className="bg-primary text-on-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-[40rem] h-[40rem] text-white" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-secondary-fixed font-bold tracking-widest uppercase text-sm mb-6 block">Our Vision</span>
            <h2 className="font-serif text-4xl md:text-6xl font-light italic mb-10 leading-tight text-primary-fixed">
              "To be a leading audit and advisory firm recognized globally for excellence, integrity, and innovation."
            </h2>
            <div className="h-px w-24 bg-secondary-fixed mb-10"></div>
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-surface-variant">
              We are building a firm that empowers African businesses with world-class financial solutions — today and into the future.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Core Values */}
      <section className="bg-surface-container-lowest py-24 md:py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                What We Stand For
              </h2>
            </div>
            <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mb-6 mx-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Card */}
            <div className="p-8 bg-surface rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10">
              <CheckCircle2 className="text-secondary w-10 h-10 mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Integrity</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We uphold the highest ethical standards in every engagement, ensuring absolute trust.
              </p>
            </div>
            {/* Value Card */}
            <div className="p-8 bg-surface rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10">
              <Target className="text-secondary w-10 h-10 mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Accuracy</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Precision in every figure, every report, and every strategic recommendation we deliver.
              </p>
            </div>
            {/* Value Card */}
            <div className="p-8 bg-surface rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10">
              <Handshake className="text-secondary w-10 h-10 mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Partnership</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We grow with our clients, not just for them, building long-term symbiotic relationships.
              </p>
            </div>
            {/* Value Card */}
            <div className="p-8 bg-surface rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10">
              <Lightbulb className="text-secondary w-10 h-10 mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We use modern tools and forward-thinking to solve complex financial challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="container mx-auto px-8 mb-24">
        <div className="bg-secondary-container rounded-full p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Let's work together.
            </h2>
            <p className="text-lg md:text-xl text-on-secondary-container mb-12 font-medium">
              Explore our services or get in touch to start a conversation about your legacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/insights" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all active:scale-95 inline-block text-center">
                Our Work
              </Link>
              <Link to="/contact" className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all active:scale-95 inline-block text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
