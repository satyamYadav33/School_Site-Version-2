
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-900 p-2 rounded-lg transition-transform group-hover:rotate-12">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-blue-900 tracking-tight leading-none">S.G.N INTERNATIONAL</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">Established 2006</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors relative group ${
                  location.pathname === link.path ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-blue-800 transition-all transform hover:scale-105">
              Portal Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-8 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold py-2 ${
                location.pathname === link.path ? 'text-blue-900' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-blue-900 text-white w-full py-4 rounded-xl font-bold uppercase mt-4">
            Portal Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
