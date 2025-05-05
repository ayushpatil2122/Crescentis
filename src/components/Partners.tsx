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
      logoColor: "#F59E0B",
      icon: <Zap className="h-5 w-5" />
    },
    {
      company: "GlobalNet",
      logo: "/api/placeholder/150/60",
      specialty: "Cloud Infrastructure",
      year: "Since 2015",
      logoColor: "#FBBF24",
      icon: <Globe className="h-5 w-5" />
    },
    {
      company: "SecureData",
      logo: "/api/placeholder/150/60",
      specialty: "Cybersecurity",
      year: "Since 2017",
      logoColor: "#F59E0B",
      icon: <Shield className="h-5 w-5" />
    },
    {
      company: "InnovateLabs",
      logo: "/api/placeholder/150/60",
      specialty: "R&D Partnership",
      year: "Since 2019",
      logoColor: "#FCD34D",
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
      logoColor: "#FBBF24",
      icon: <Globe className="h-5 w-5" />
    },
    {
      company: "NexusLink",
      logo: "/api/placeholder/150/60",
      specialty: "Telecommunications",
      year: "Since 2014",
      logoColor: "#F59E0B",
      icon: <Shield className="h-5 w-5" />
    },
    {
      company: "FutureWave",
      logo: "/api/placeholder/150/60",
      specialty: "Emerging Tech",
      year: "Since 2021",
      logoColor: "#FBBF24",
      icon: <Award className="h-5 w-5" />
    },
    {
      company: "QuantumEdge",
      logo: "/api/placeholder/150/60",
      specialty: "Advanced Computing",
      year: "Since 2019",
      logoColor: "#F59E0B",
      icon: <Zap className="h-5 w-5" />
    },
    {
      company: "VisionaryTech",
      logo: "/api/placeholder/150/60",
      specialty: "AR/VR Solutions",
      year: "Since 2017",
      logoColor: "#FBBF24",
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
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-l border-yellow-500/20 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-t border-yellow-500/20 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-amber-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-yellow-400 rounded-full animate-float-slow opacity-60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto mb-20 px-4 relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
        
        <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-6">
          Our Partners
        </h2>
        
        <p className="text-2xl text-yellow-100 text-center mt-8 max-w-3xl mx-auto opacity-90">
          Collaborating with industry leaders to deliver exceptional solutions
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center bg-yellow-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/20">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-yellow-200">10+ Years of Partnership Excellence</span>
          </div>
          <div className="flex items-center bg-yellow-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/20">
            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-yellow-200">25+ Global Partners</span>
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
                className="flex-shrink-0 w-96 mx-4 bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 overflow-hidden shadow-lg shadow-yellow-900/10 h-48 group transition-all duration-500 hover:shadow-yellow-500/30 hover:border-yellow-400/40 hover:scale-105"
              >
                <div className="flex justify-between items-start p-6">
                  <div className="bg-gradient-to-br from-gray-900 to-yellow-900/50 h-16 w-40 rounded-lg flex items-center justify-center shadow-inner border border-yellow-500/30 group-hover:border-yellow-400/50 transition-all">
                    <div 
                      className="h-10 w-36 flex items-center justify-center"
                      style={{ color: partner.logoColor }}
                    >
                      <span className="text-2xl font-bold tracking-tight">{partner.company}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-900/60 to-yellow-900/30 p-2 rounded-full text-yellow-200 group-hover:bg-gradient-to-br group-hover:from-yellow-800/80 group-hover:to-yellow-800/50 transition-all">
                    {partner.icon}
                  </div>
                </div>
                
                <div className="px-6 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: partner.logoColor }}></div>
                    <p className="text-yellow-200">{partner.specialty}</p>
                  </div>
                  <p className="text-yellow-100/80 text-sm">{partner.year}</p>
                </div>
                
                <div className="px-6 pt-2 pb-4 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-yellow-300/20 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-yellow-300 text-sm gap-1 group-hover:translate-x-1 transition-transform">
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
        <button className="px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-3 group text-lg font-medium">
          <span>Become Our Partner</span>
          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Stats section */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-6 flex flex-col items-center">
            <div className="bg-yellow-900/50 rounded-full p-4 mb-4">
              <Globe className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-4xl font-bold text-yellow-100 mb-2">25+</h3>
            <p className="text-yellow-300 text-center">Countries Worldwide</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-6 flex flex-col items-center">
            <div className="bg-amber-900/50 rounded-full p-4 mb-4">
              <Zap className="h-8 w-8 text-amber-300" />
            </div>
            <h3 className="text-4xl font-bold text-yellow-100 mb-2">150+</h3>
            <p className="text-yellow-300 text-center">Joint Projects</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-6 flex flex-col items-center">
            <div className="bg-yellow-900/50 rounded-full p-4 mb-4">
              <Award className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-4xl font-bold text-yellow-100 mb-2">10+</h3>
            <p className="text-yellow-300 text-center">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;