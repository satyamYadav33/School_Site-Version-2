
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative max-w-4xl mx-auto py-20 px-4">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-16 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Quote size={120} className="text-blue-900" />
        </div>
        
        <div className="flex flex-col items-center text-center">
          <img 
            src={TESTIMONIALS[currentIndex].avatar} 
            alt={TESTIMONIALS[currentIndex].name}
            className="w-20 h-20 rounded-full border-4 border-blue-50 shadow-xl mb-6"
          />
          <p className="text-xl md:text-2xl italic text-slate-700 leading-relaxed mb-8 font-light">
            "{TESTIMONIALS[currentIndex].quote}"
          </p>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-900 uppercase tracking-wide">
              {TESTIMONIALS[currentIndex].name}
            </h4>
            <span className="text-amber-600 font-semibold uppercase text-xs tracking-widest mt-1">
              {TESTIMONIALS[currentIndex].role}
            </span>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-blue-900' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-50 text-blue-900 hover:bg-blue-900 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-50 text-blue-900 hover:bg-blue-900 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
