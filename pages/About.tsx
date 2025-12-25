
import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import { History, Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Introduction */}
      <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-blue-950 mb-6 italic">Since 2006</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              A journey of thousand miles that started with a simple vision: to create a home away from home for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <History size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Our History</h3>
                  <p className="text-slate-600">Founded in 2006, S.G.N International School was born out of a desire to provide quality CBSE education in a supportive environment.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Eye size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600">To be a globally recognized center of learning where every student flourishes academically, emotionally, and socially.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600">Providing hands-on practical education that empowers students to solve real-world problems with confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://picsum.photos/seed/schoolfront/600/800" alt="School" className="rounded-[4rem] shadow-2xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-900/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Dynamic Slider as requested) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-blue-950 italic mb-4">Voice of S.G.N</h2>
            <p className="text-slate-500 uppercase tracking-widest font-bold text-xs">Testimonials from our community</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-blue-950 text-center mb-16">Our Inspiring Educators</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-none">
                <div className="relative overflow-hidden rounded-3xl mb-4">
                  <img src={`https://picsum.photos/seed/teacher${i}/400/500`} alt="Teacher" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold text-blue-950">Dr. Sarah Johnson</h4>
                <p className="text-slate-500 text-sm">Head of Sciences</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
