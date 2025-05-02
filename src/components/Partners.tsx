'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Globe, Zap, Award, Shield } from 'lucide-react';

// Add CSS animation keyframes and styles
const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);
  const rowRef = useRef<any>(null);
  
  const partners = [
    {
      company: "TechVision",
      logo: "/api/placeholder/150/60",
      specialty: "AI Solutions",
      year: "Since 2018",
      logoColor: "#3B82F6",
      icon: <Zap className="h-5 w-5" />
    },
    {
      company: "GlobalNet",
      logo: "/api/placeholder/150/60",
      specialty: "Cloud Infrastructure",
      year: "Since 2015",
      logoColor: "#10B981",
      icon: <Globe className="h-5 w-5" />
    },
    {
      company: "SecureData",
      logo: "/api/placeholder/150/60",
      specialty: "Cybersecurity",
      year: "Since 2017",
      logoColor: "#6366F1",
      icon: <Shield className="h-5 w-5" />
    },
    {
      company: "InnovateLabs",
      logo: "/api/placeholder/150/60",
      specialty: "R&D Partnership",
      year: "Since 2019",
      logoColor: "#EC4899",
      icon: <Award className="h-5 w-5" />
    },
    {
      company: "MediaForce",
      logo: "/api/placeholder/150/60",
      specialty: "Digital Content",
      year: "Since 2016",
      logoColor: "#F59E0B",
      icon: <Zap className="h-5 w-5" />
    },
    {
      company: "DataStream",
      logo: "/api/placeholder/150/60",
      specialty: "Big Data Analytics",
      year: "Since 2020",
      logoColor: "#8B5CF6",
      icon: <Globe className="h-5 w-5" />
    },
    {
      company: "NexusLink",
      logo: "/api/placeholder/150/60",
      specialty: "Telecommunications",
      year: "Since 2014",
      logoColor: "#EF4444",
      icon: <Shield className="h-5 w-5" />
    },
    {
      company: "FutureWave",
      logo: "/api/placeholder/150/60",
      specialty: "Emerging Tech",
      year: "Since 2021",
      logoColor: "#06B6D4",
      icon: <Award className="h-5 w-5" />
    },
    {
      company: "QuantumEdge",
      logo: "/api/placeholder/150/60",
      specialty: "Advanced Computing",
      year: "Since 2019",
      logoColor: "#14B8A6",
      icon: <Zap className="h-5 w-5" />
    },
    {
      company: "VisionaryTech",
      logo: "/api/placeholder/150/60",
      specialty: "AR/VR Solutions",
      year: "Since 2017",
      logoColor: "#F472B6",
      icon: <Globe className="h-5 w-5" />
    }
  ];
  
  // Triple the array for continuous scrolling
  const allPartners = [...partners, ...partners, ...partners];
  
  useEffect(() => {
    const startAnimation = () => {
      if (rowRef.current) {
        rowRef.current.style.animationPlayState = 'running';
      }
    };
    
    const stopAnimation = () => {
      if (rowRef.current) {
        rowRef.current.style.animationPlayState = 'paused';
      }
    };
    
    if (isPaused) {
      stopAnimation();
    } else {
      startAnimation();
    }
    
    return () => {
      startAnimation();
    };
  }, [isPaused]);

  // Define animation styles
  const animationStyles = `
    @keyframes scrollLeft {
      from { transform: translateX(0); }
      to { transform: translateX(-33.333%); }
    }
    
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
    
    .animate-scroll-left {
      animation: scrollLeft 60s linear infinite;
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
  `;

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
      
      <div className="max-w-7xl mx-auto mb-20 px-4 relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
        
        <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-blue-100 via-blue-300 to-indigo-200 bg-clip-text text-transparent mb-6">
          Our Partners
        </h2>
        
        <p className="text-2xl text-blue-100 text-center mt-8 max-w-3xl mx-auto opacity-90">
          Collaborating with industry leaders to deliver exceptional solutions
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">10+ Years of Partnership Excellence</span>
          </div>
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">25+ Global Partners</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Single row - moves left */}
        <div className="relative py-4 overflow-hidden w-full">
          <div 
            ref={rowRef}
            className="flex animate-scroll-left"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              width: `${allPartners.length * 380}px` // Card width + margin
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allPartners.map((partner, index) => (
              <div 
                key={`partner-${index}`}
                className="flex-shrink-0 w-96 mx-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-900/10 h-48 group transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-400/40 hover:scale-105"
              >
                <div className="flex justify-between items-start p-6">
                  <div className="bg-gradient-to-br from-gray-900 to-blue-900/50 h-16 w-40 rounded-lg flex items-center justify-center shadow-inner border border-blue-500/30 group-hover:border-blue-400/50 transition-all">
                    <div 
                      className="h-10 w-36 flex items-center justify-center"
                      style={{ color: partner.logoColor }}
                    >
                      <span className="text-2xl font-bold tracking-tight">{partner.company}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-900/60 to-blue-900/30 p-2 rounded-full text-blue-200 group-hover:bg-gradient-to-br group-hover:from-blue-800/80 group-hover:to-blue-800/50 transition-all">
                    {partner.icon}
                  </div>
                </div>
                
                <div className="px-6 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: partner.logoColor }}></div>
                    <p className="text-blue-200">{partner.specialty}</p>
                  </div>
                  <p className="text-blue-100/80 text-sm">{partner.year}</p>
                </div>
                
                <div className="px-6 pt-2 pb-4 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-blue-300/20 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-blue-300 text-sm gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient overlays to create fade effect at the edges */}
      <div className="absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-36 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="mt-20 flex justify-center">
        <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3 group text-lg font-medium">
          <span>Become Our Partner</span>
          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Stats section */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
            <div className="bg-blue-900/50 rounded-full p-4 mb-4">
              <Globe className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-4xl font-bold text-blue-100 mb-2">25+</h3>
            <p className="text-blue-300 text-center">Countries Worldwide</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
            <div className="bg-indigo-900/50 rounded-full p-4 mb-4">
              <Zap className="h-8 w-8 text-indigo-300" />
            </div>
            <h3 className="text-4xl font-bold text-blue-100 mb-2">150+</h3>
            <p className="text-blue-300 text-center">Joint Projects</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 flex flex-col items-center">
            <div className="bg-purple-900/50 rounded-full p-4 mb-4">
              <Award className="h-8 w-8 text-purple-300" />
            </div>
            <h3 className="text-4xl font-bold text-blue-100 mb-2">10+</h3>
            <p className="text-blue-300 text-center">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;