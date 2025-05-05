'use client';

import { useState, useRef } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const formRef = useRef<any>(null);
  
  const handleSubmit = (e : any) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      formRef.current.reset();
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  // Define animation styles
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
    
    @keyframes pulse-ring {
      0% { transform: scale(0.8); opacity: 0.8; }
      70% { transform: scale(2); opacity: 0; }
      100% { transform: scale(0.8); opacity: 0; }
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
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
    
    .animate-pulse-ring:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(234, 179, 8, 0.6);
      animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
      z-index: -1;
    }
    
    .animate-typing {
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid;
      width: 0;
      animation: typing 3.5s steps(40, end) forwards;
    }
  `;

  return (
    <section className="relative z-10 py-32 overflow-hidden bg-black">
      {/* Add CSS animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        
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
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/2 left-1/5 w-4 h-4 bg-amber-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-orange-400 rounded-full animate-float-slow opacity-60"></div>
      </div>
      
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20 px-4 relative">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
        
        <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-6">
          Contact Us
        </h2>
        
        <p className="text-2xl text-yellow-100 text-center mt-8 max-w-3xl mx-auto opacity-90">
          Let's collaborate on your next revolutionary project
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center bg-yellow-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/20">
            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-yellow-200">Response within 24 hours</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
            
            <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-8 shadow-lg shadow-yellow-900/10 relative overflow-hidden group transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-400/30">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/5 rounded-tr-full"></div>
              
              <h3 className="text-2xl font-bold text-yellow-100 mb-6 flex items-center">
                <MessageSquare className="mr-3 text-yellow-400" />
                <span className="animate-typing">Send us a message</span>
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-yellow-300 mb-2 text-sm" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-yellow-900/20 border border-yellow-500/30 rounded-lg px-4 py-3 text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yellow-300 mb-2 text-sm" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-yellow-900/20 border border-yellow-500/30 rounded-lg px-4 py-3 text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-yellow-300 mb-2 text-sm" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-yellow-900/20 border border-yellow-500/30 rounded-lg px-4 py-3 text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-yellow-300 mb-2 text-sm" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-yellow-900/20 border border-yellow-500/30 rounded-lg px-4 py-3 text-yellow-100 placeholder-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-3 group text-lg font-medium disabled:opacity-70"
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  {formStatus === 'submitting' && (
                    <>
                      <span>Sending...</span>
                      <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <span>Message Sent!</span>
                      <CheckCircle className="h-5 w-5" />
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <div className="mt-4 text-green-400 text-sm text-center animate-pulse">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-8 shadow-lg shadow-yellow-900/10 relative overflow-hidden group transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-400/30">
              <h3 className="text-2xl font-bold text-yellow-100 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="relative mr-4">
                    <div className="bg-yellow-900/50 rounded-full p-3 relative animate-pulse-ring">
                      <Mail className="h-6 w-6 text-yellow-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-medium mb-1">Email Us</p>
                    <p className="text-yellow-100">contact@yourcompany.com</p>
                    <p className="text-yellow-100">support@yourcompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="relative mr-4">
                    <div className="bg-amber-900/50 rounded-full p-3 relative animate-pulse-ring">
                      <Phone className="h-6 w-6 text-amber-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-medium mb-1">Call Us</p>
                    <p className="text-yellow-100">+1 (888) 123-4567</p>
                    <p className="text-yellow-100">+1 (888) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="relative mr-4">
                    <div className="bg-orange-900/50 rounded-full p-3 relative animate-pulse-ring">
                      <MapPin className="h-6 w-6 text-orange-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-medium mb-1">Visit Us</p>
                    <p className="text-yellow-100">123 Innovation Drive</p>
                    <p className="text-yellow-100">Tech Valley, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="relative mr-4">
                    <div className="bg-yellow-900/50 rounded-full p-3 relative animate-pulse-ring">
                      <Clock className="h-6 w-6 text-yellow-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-medium mb-1">Working Hours</p>
                    <p className="text-yellow-100">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-yellow-100">Weekend: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-2 shadow-lg shadow-yellow-900/10 relative overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-400/30">
              <div className="relative w-full h-64 bg-gradient-to-r from-yellow-900/50 to-amber-900/50 flex items-center justify-center rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-900/30">
                  {/* Map grid lines */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-8 h-full">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="border-l border-yellow-300/30 h-full"></div>
                      ))}
                    </div>
                    <div className="grid grid-rows-8 w-full h-full">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="border-t border-yellow-300/30 w-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pulsing location marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-500/20 rounded-full animate-ping"></div>
                      <div className="bg-yellow-500 rounded-full p-2 shadow-lg shadow-yellow-500/50 z-10 relative">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Map location label */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 bg-gradient-to-r from-yellow-600 to-amber-600 px-4 py-2 rounded-full text-white text-sm shadow-lg">
                    Our Headquarters
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg px-4 py-2 text-white text-sm shadow-lg flex items-center group-hover:scale-105 transition-transform">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>View Full Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global presence */}
      <div className="max-w-7xl mx-auto mt-24 px-4">
        <h3 className="text-3xl font-bold text-center text-yellow-100 mb-12">Global Presence</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-md rounded-xl border border-yellow-500/20 p-6 relative overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-400/30 hover:scale-105 group">
              <div className="absolute top-0 right-0 opacity-10 text-8xl font-bold text-yellow-500">
                {index + 1}
              </div>
              
              <div className="bg-yellow-900/50 rounded-full p-3 mb-4 w-fit">
                <MapPin className="h-6 w-6 text-yellow-300" />
              </div>
              
              <h4 className="text-xl font-bold text-yellow-100 mb-2">{region}</h4>
              
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mb-4"></div>
              
              <p className="text-yellow-200 mb-4">Local offices providing dedicated service and support.</p>
              
              <div className="flex items-center text-yellow-300 text-sm gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Locations</span>
                <Send className="h-4 w-4 transform rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-20 px-4">
        <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/20 backdrop-blur-md rounded-xl border border-yellow-500/20 p-12 relative overflow-hidden shadow-xl shadow-yellow-900/10">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-center text-yellow-100 mb-6">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-xl text-yellow-200 text-center max-w-3xl mx-auto mb-8">
              Join forces with our team of experts and elevate your technological capabilities to new heights.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-3 group">
                <span>Schedule a Call</span>
                <Phone className="h-5 w-5" />
              </button>
              
              <button className="px-8 py-4 rounded-full bg-transparent border border-yellow-500 hover:bg-yellow-900/30 transition-all duration-300 flex items-center justify-center gap-3 group">
                <span>Download Brochure</span>
                <Send className="h-5 w-5 transform -rotate-45 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;