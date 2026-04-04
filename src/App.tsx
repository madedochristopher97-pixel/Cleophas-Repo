import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceAudit from './pages/ServiceAudit';
import ServiceTax from './pages/ServiceTax';
import ServiceCorporate from './pages/ServiceCorporate';
import ServiceWealth from './pages/ServiceWealth';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServiceBookkeeping from './pages/ServiceBookkeeping';
import ScrollToTop from './components/ScrollToTop';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/audit" element={<ServiceAudit />} />
          <Route path="/services/tax" element={<ServiceTax />} />
          <Route path="/services/corporate-finance" element={<ServiceCorporate />} />
          <Route path="/services/wealth-management" element={<ServiceWealth />} />
          <Route path="/services/bookkeeping" element={<ServiceBookkeeping />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
