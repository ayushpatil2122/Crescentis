'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Code, Database, Lightbulb, BarChart, Users } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const teamMembers = [
    {
      name: "ARYAN FULSUNGE",
      position: "Founder",
      image: "/api/placeholder/150/150",
      color: "#3B82F6"
    },
    {
      name: "ANIRUDDH SINGH",
      position: "Chief Executive Officer",
      image: "/api/placeholder/150/150", 
      color: "#10B981"
    },
    {
      name: "TUSHAR DHURWE",
      position: "Chief of Operations",
      image: "/api/placeholder/150/150",
      color: "#8B5CF6"
    },
    {
      name: "NIHAR JOSHI",
      position: "Project Manager",
      image: "/api/placeholder/150/150",
      color: "#EC4899"
    },
    {
      name: "RUPESH JAHAGIRDAR",
      position: "Marketing Head",
      image: "/api/placeholder/150/150",
      color: "#F59E0B"
    }
  ];
  
  const companyValues = [
    {
      title: "Data-Driven Execution",
      description: "We transform insights into strategic actions",
      icon: <BarChart className="h-8 w-8" />,
      color: "#3B82F6"
    },
    {
      title: "Creative Innovation",
      description: "Where imagination meets technical excellence",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "#8B5CF6"
    },
    {
      title: "Technical Excellence",
      description: "Pushing boundaries with cutting-edge solutions",
      icon: <Code className="h-8 w-8" />,
      color: "#10B981"
    },
    {
      title: "Client Partnership",
      description: "Growing together through meaningful collaboration",
      icon: <Users className="h-8 w-8" />,
      color: "#EC4899"
    }
  ];
  
  // Define animation styles
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes pulse {
      0% { opacity: 0.4; }
      50% { opacity: 0.7; }
      100% { opacity: 0.4; }
    }
    
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 0.8s ease-out forwards;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse 4s ease-in-out infinite;
    }
    
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

  return (
    <section className="relative z-10 py-32 overflow-hidden bg-black">
      {/* Add CSS animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        
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
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-float opacity-60 delay-200"></div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-purple-400 rounded-full animate-float opacity-60 delay-400"></div>
      </div>
      
      <div className="max-w-7xl mx-auto mb-20 px-4 relative">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-blue-100 via-blue-300 to-indigo-200 bg-clip-text text-transparent mb-6">
            About Us
          </h2>
          
          <p className="text-2xl text-blue-100 text-center mt-8 max-w-3xl mx-auto opacity-90">
            A modern, growth-focused digital agency backed by Midnight Solutions Pvt. Ltd.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-200">Creative Thinking</span>
            </div>
            <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
              <div className="w-3 h-3 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-200">Data-Driven Execution</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content - Now centered with mission/vision/approach card */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Vision, Mission, Approach Card - Centered */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
            
            {/* Content box */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-indigo-900/20 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-900/10 p-8">
              {/* Tabs */}
              <div className="flex mb-8 bg-blue-900/30 rounded-full p-1">
                {['mission', 'vision', 'approach'].map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-2 px-4 rounded-full text-center capitalize transition-all ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
                        : 'text-blue-200 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Tab content */}
              <div className="min-h-48">
                {activeTab === 'mission' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-blue-100 mb-4">Our Mission</h3>
                    <p className="text-blue-200 mb-4">
                      We blend creative thinking with data-driven execution — helping brands scale, connect, and perform across platforms.
                    </p>
                    <p className="text-blue-200 mb-4">
                      At Midnight Solutions, we believe that exceptional digital experiences come from the perfect balance of analytical insight and creative innovation.
                    </p>
                    <p className="text-blue-200">
                      Our mission is to empower businesses with strategic digital solutions that drive meaningful growth and lasting impact in an ever-evolving digital landscape.
                    </p>
                  </div>
                )}
                
                {activeTab === 'vision' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-blue-100 mb-4">Our Vision</h3>
                    <p className="text-blue-200 mb-4">
                      To be the catalyst that transforms how brands connect with their audiences in the digital age, setting new standards for innovation and performance.
                    </p>
                    <p className="text-blue-200 mb-4">
                      We envision a world where technology enhances human connection rather than replacing it, where data informs rather than dictates, and where creativity flourishes within strategic frameworks.
                    </p>
                    <p className="text-blue-200">
                      Through our work, we aim to build a future where digital experiences are seamless, intuitive, and genuinely impactful.
                    </p>
                  </div>
                )}
                
                {activeTab === 'approach' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-blue-100 mb-4">Our Approach</h3>
                    <p className="text-blue-200 mb-4">
                      We combine strategic insight, technical expertise, and creative innovation to deliver solutions that drive measurable results and create lasting value.
                    </p>
                    <p className="text-blue-200 mb-4">
                      Our collaborative process begins with deep understanding, moves through strategic planning and creative development, and concludes with meticulous execution and continuous optimization.
                    </p>
                    <p className="text-blue-200">
                      Every project is approached with a growth mindset, where challenges become opportunities and every engagement is a chance to exceed expectations.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team members section */}
      <div className="max-w-7xl mx-auto mt-24 px-4">
        <h3 className="text-3xl font-bold text-center text-blue-100 mb-12">Meet Our Leadership</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-blue-900/30 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-900/10 group hover:shadow-blue-500/30 hover:border-blue-400/40 hover:scale-105 transition-all duration-500 animate-fade-in delay-${index * 100}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                
                {/* Color accent at top */}
                <div 
                  className="absolute top-0 left-0 w-full h-1.5"
                  style={{ backgroundColor: member.color }}
                ></div>
              </div>
              
              <div className="p-4">
                <h4 className="text-lg font-bold text-blue-100">{member.name}</h4>
                <p className="text-blue-300 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Values section */}
      <div className="max-w-7xl mx-auto mt-24 px-4">
        <h3 className="text-3xl font-bold text-center text-blue-100 mb-12">Our Core Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((value, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 group hover:shadow-blue-500/30 hover:border-blue-400/40 transition-all duration-500 animate-fade-in delay-${index * 100}`}
            >
              <div 
                className="bg-gradient-to-br from-blue-900/60 to-blue-900/30 p-4 rounded-full text-blue-200 inline-block group-hover:scale-110 transition-all duration-500 mb-4"
                style={{ color: value.color }}
              >
                {value.icon}
              </div>
              
              <h4 className="text-xl font-bold text-blue-100 mb-2">{value.title}</h4>
              <p className="text-blue-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="max-w-4xl mx-auto mt-24 px-4 text-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
          
          {/* Content box */}
          <div className="relative bg-gradient-to-br from-blue-900/40 to-indigo-900/20 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-900/10 p-8">
            <h3 className="text-3xl font-bold text-blue-100 mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-blue-200 mb-8">
              Let's collaborate to create innovative solutions that drive growth and connect with your audience.
            </p>
            
            <div className="flex justify-center">
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3 group text-lg font-medium">
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Midnight Solutions credit */}
      <div className="max-w-7xl mx-auto mt-24 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Database className="h-4 w-4 text-blue-400" />
          <p className="text-blue-400 text-sm">Backed by Midnight Solutions Pvt. Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default About;