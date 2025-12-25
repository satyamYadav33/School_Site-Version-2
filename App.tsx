
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Mock Pages for remaining links
const Academics = () => (
  <div className="pt-32 px-10 min-h-screen text-center">
    <h1 className="text-6xl font-serif text-blue-900">Academics</h1>
    <p className="mt-10 text-slate-500">Our CBSE curriculum focus on practical, hands-on learning.</p>
  </div>
);

const Gallery = () => (
  <div className="pt-32 px-10 min-h-screen text-center">
    <h1 className="text-6xl font-serif text-blue-900">Campus Gallery</h1>
    <p className="mt-10 text-slate-500">Glimpses of our vibrant student life and world-class facilities.</p>
  </div>
);

const Footer = () => (
  <footer className="bg-blue-950 py-12 px-6 lg:px-20 text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h2 className="text-2xl font-serif font-bold italic mb-2">S.G.N International School</h2>
        <p className="text-slate-400 text-sm">Empowering Minds Since 2006</p>
      </div>
      <div className="flex gap-8 text-sm font-bold uppercase tracking-wider text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Facebook</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
      <div className="text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} S.G.N International School. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
