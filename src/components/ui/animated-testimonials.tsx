'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

export const AnimatedTestimonials = ({ testimonials }: { testimonials  : any}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('right');
  const intervalRef = useRef <any>(null);
  
  // Animation styles
  const animationStyles = `
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes float-delayed {
      0% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes float-slow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes pulse-glow {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }
    
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float-delayed 6s ease-in-out infinite;
      animation-delay: 2s;
    }
    
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
      animation-delay: 1s;
    }
    
    .animate-pulse-glow {
      animation: pulse-glow 4s ease-in-out infinite;
    }
  `;

  // Auto-advance the testimonials
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          if (direction === 'right') {
            return (prevIndex + 1) % testimonials.length;
          } else {
            return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
          }
        });
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length, direction]);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="relative z-10 py-32 overflow-hidden bg-black">
      {/* Add CSS animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-l border-blue-500/20 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-t border-blue-500/20 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-indigo-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-400 rounded-full animate-float-slow opacity-60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
        
        <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-blue-100 via-blue-300 to-indigo-200 bg-clip-text text-transparent mb-6">
          Client Testimonials
        </h2>
        
        <p className="text-2xl text-blue-100 text-center mt-8 max-w-3xl mx-auto opacity-90">
          Hear from our satisfied clients about their experiences
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">Trusted by Industry Leaders</span>
          </div>
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">95% Client Satisfaction</span>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div 
          className="mt-16 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial : any, index : any) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 absolute top-0 left-0'
                }`}
              >
                {index === activeIndex && (
                  <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-900/10 p-8 transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-400/40">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-70 blur"></div>
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/50 relative">
                          <img 
                            src={testimonial.src} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="relative mb-8">
                      <Quote className="absolute -top-4 -left-2 h-8 w-8 text-blue-500/40" />
                      <p className="text-blue-100 text-xl leading-relaxed text-center px-8">
                        {testimonial.quote}
                      </p>
                      <Quote className="absolute -bottom-4 -right-2 h-8 w-8 text-blue-500/40 transform rotate-180" />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-blue-100">{testimonial.name}</h4>
                      <p className="text-blue-300 mt-1">{testimonial.designation}</p>
                    </div>
                    
                    <div className="absolute bottom-6 left-8 flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400/60 animate-pulse-glow" style={{ animationDelay: `${i * 0.7}s` }}></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_ : any, index : any) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-blue-500/30 hover:bg-blue-500/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button 
              onClick={handlePrev}
              className="bg-blue-900/40 hover:bg-blue-800/60 backdrop-blur-md text-blue-100 w-12 h-12 rounded-full flex items-center justify-center border border-blue-500/30 transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={handleNext}
              className="bg-blue-900/40 hover:bg-blue-800/60 backdrop-blur-md text-blue-100 w-12 h-12 rounded-full flex items-center justify-center border border-blue-500/30 transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="max-w-6xl mx-auto mt-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
              <div className="bg-blue-900/50 rounded-full p-3 mb-4">
                <Star className="h-6 w-6 text-blue-300 fill-blue-300" />
              </div>
              <h3 className="text-3xl font-bold text-blue-100 mb-2">500+</h3>
              <p className="text-blue-300 text-center">Happy Clients</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
              <div className="bg-indigo-900/50 rounded-full p-3 mb-4">
                <Star className="h-6 w-6 text-indigo-300 fill-indigo-300" />
              </div>
              <h3 className="text-3xl font-bold text-blue-100 mb-2">95%</h3>
              <p className="text-blue-300 text-center">Client Retention</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
              <div className="bg-purple-900/50 rounded-full p-3 mb-4">
                <Star className="h-6 w-6 text-purple-300 fill-purple-300" />
              </div>
              <h3 className="text-3xl font-bold text-blue-100 mb-2">250+</h3>
              <p className="text-blue-300 text-center">Completed Projects</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
              <div className="bg-teal-900/50 rounded-full p-3 mb-4">
                <Star className="h-6 w-6 text-teal-300 fill-teal-300" />
              </div>
              <h3 className="text-3xl font-bold text-blue-100 mb-2">4.9</h3>
              <p className="text-blue-300 text-center">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlays for edge effects */}
      <div className="absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-36 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};