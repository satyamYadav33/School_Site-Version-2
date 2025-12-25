
import React from 'react';
import Hero3D from '../components/Hero3D';
import { SCHOOL_STATS } from '../constants';
import { ArrowRight, Trophy, BookOpen, Users, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center px-6 lg:px-20 gap-10 overflow-hidden">
        <div className="flex-1 z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-widest mb-6">
            Empowering Minds Since 2006
          </span>
          <h1 className="text-5xl lg:text-8xl font-serif font-bold text-blue-950 mb-8 leading-tight">
            Nurturing <span className="text-amber-600 italic underline decoration-blue-900/10">Excellence</span> In Every Child.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            S.G.N International School blends traditional values with modern learning. With over 3000 students and world-class facilities, we prepare leaders for tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-900 text-white rounded-full font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
              Inquire Now <ArrowRight size={18} />
            </Link>
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold uppercase tracking-wide flex items-center gap-2 border-2 border-slate-100 hover:bg-slate-50 transition-all">
              Watch Campus Tour <Play size={18} fill="currentColor" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <Hero3D />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-950 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {SCHOOL_STATS.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl lg:text-5xl font-serif font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-24 px-6 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-blue-950 mb-6">Where Learning <br/> Meets Adventure.</h2>
              <p className="text-slate-600">Our campus is designed to foster growth through both academic rigor and physical development.</p>
            </div>
            <Link to="/gallery" className="text-blue-900 font-bold uppercase text-sm flex items-center gap-2 border-b-2 border-blue-900 pb-1">
              Explore Campus <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Sports Grounds</h3>
              <p className="text-slate-600 mb-6">Massive grounds for professional football, cricket, and athletic events to build team spirit.</p>
              <img src="https://picsum.photos/seed/sports/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Sports" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Practical Curriculum</h3>
              <p className="text-slate-600 mb-6">CBSE affiliated learning modules focused on hands-on practical experiments and projects.</p>
              <img src="https://picsum.photos/seed/lab/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Learning" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Prayer Ground</h3>
              <p className="text-slate-600 mb-6">A dedicated space for morning assemblies, spiritual growth, and cultural performances.</p>
              <img src="https://picsum.photos/seed/prayer/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Community" />
            </div>
          </div>
        </div>
      </section>

      {/* Swings and Small Kids Section */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <img src="https://picsum.photos/seed/kids/800/600" className="rounded-[3rem] shadow-2xl relative z-10" alt="Kids Ground" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-amber-400 rounded-[3rem] -z-10" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-blue-950 mb-8 italic">Small Steps, <br/> Big Dreams.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We contain a special small grass ground designed specifically for our youngest learners. Equipped with modern swings and safe playing items, it's where their social and physical journey begins in a secure environment.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold">1</div>
                <span className="font-semibold text-blue-950">Safety-first specialized turf</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                <span className="font-semibold text-blue-950">Modern educational play equipment</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">3</div>
                <span className="font-semibold text-blue-950">Continuous expert supervision</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
