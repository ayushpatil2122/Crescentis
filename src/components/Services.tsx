export default function Services() {
  return (
    <section className="relative z-10 py-32 px-4 bg-black overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-6xl md:text-7xl font-bold mb-24 text-center bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
          OUR SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Digital Marketing Card */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 backdrop-blur-md p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 group">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-800/60 to-amber-800/60 rounded-2xl flex items-center justify-center border border-yellow-500/30 shadow-lg shadow-yellow-500/10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <path d="M12 8v-2"></path>
                  <path d="M12 18v-2"></path>
                  <path d="M16 12h2"></path>
                  <path d="M6 12h2"></path>
                  <path d="M15.7 15.7l1.4 1.4"></path>
                  <path d="M6.9 6.9l1.4 1.4"></path>
                  <path d="M15.7 8.3l1.4-1.4"></path>
                  <path d="M6.9 17.1l1.4-1.4"></path>
                </svg>
              </div>
              
              <div className="flex-1 ml-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-1 bg-yellow-400/70 rounded-full"></div>
                  ))}
                </div>
                <div className="h-4 w-24 bg-yellow-400/20 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">Digital Marketing</h3>
            <p className="text-yellow-100 text-lg mb-6">
              Comprehensive online marketing campaigns, advanced social media management, and data-driven optimization strategies to boost your brand's online presence.
            </p>
            
            <div className="flex items-center mt-6 pt-6 border-t border-yellow-500/20">
              <div className="mr-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border border-yellow-300 flex items-center justify-center text-xs font-bold text-white`}>{i+1}</div>
                  ))}
                </div>
              </div>
              <span className="text-yellow-300 text-sm">Active campaigns</span>
              
              <div className="ml-auto flex items-center space-x-1">
                <span className="text-yellow-300 text-sm">Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Web Development Card */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 backdrop-blur-md p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 group">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-800/60 to-amber-800/60 rounded-2xl flex items-center justify-center border border-yellow-500/30 shadow-lg shadow-yellow-500/10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                </svg>
              </div>
              
              <div className="flex-1 ml-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-1 bg-yellow-400/70 rounded-full"></div>
                  ))}
                </div>
                <div className="h-4 w-24 bg-yellow-400/20 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">Web Development</h3>
            <p className="text-yellow-100 text-lg mb-6">
              Creating cutting-edge, responsive websites with stunning UI/UX design, optimized performance, and seamless functionality for Crescentis Marketing Co's clients.
            </p>
            
            <div className="flex items-center mt-6 pt-6 border-t border-yellow-500/20">
              <div className="mr-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border border-yellow-300 flex items-center justify-center text-xs font-bold text-white`}>{i+1}</div>
                  ))}
                </div>
              </div>
              <span className="text-yellow-300 text-sm">Active projects</span>
              
              <div className="ml-auto flex items-center space-x-1">
                <span className="text-yellow-300 text-sm">Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Data Analysis Card */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 backdrop-blur-md p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 group">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-800/60 to-amber-800/60 rounded-2xl flex items-center justify-center border border-yellow-500/30 shadow-lg shadow-yellow-500/10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              
              <div className="flex-1 ml-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-1 bg-yellow-400/70 rounded-full"></div>
                  ))}
                </div>
                <div className="h-4 w-24 bg-yellow-400/20 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">Data Analysis</h3>
            <p className="text-yellow-100 text-lg mb-6">
              Transforming complex marketing data into actionable insights through advanced analytics, predictive modeling, and comprehensive performance dashboards.
            </p>
            
            <div className="flex items-center mt-6 pt-6 border-t border-yellow-500/20">
              <div className="mr-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border border-yellow-300 flex items-center justify-center text-xs font-bold text-white`}>{i+1}</div>
                  ))}
                </div>
              </div>
              <span className="text-yellow-300 text-sm">Active analytics</span>
              
              <div className="ml-auto flex items-center space-x-1">
                <span className="text-yellow-300 text-sm">Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Creative Services Card */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 backdrop-blur-md p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 group">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-800/60 to-amber-800/60 rounded-2xl flex items-center justify-center border border-yellow-500/30 shadow-lg shadow-yellow-500/10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
              </div>
              
              <div className="flex-1 ml-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-1 bg-yellow-400/70 rounded-full"></div>
                  ))}
                </div>
                <div className="h-4 w-24 bg-yellow-400/20 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">Creative Services</h3>
            <p className="text-yellow-100 text-lg mb-6">
              Award-winning graphic design, compelling content creation, and powerful branding solutions that captivate audiences and elevate your market position.
            </p>
            
            <div className="flex items-center mt-6 pt-6 border-t border-yellow-500/20">
              <div className="mr-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border border-yellow-300 flex items-center justify-center text-xs font-bold text-white`}>{i+1}</div>
                  ))}
                </div>
              </div>
              <span className="text-yellow-300 text-sm">Active projects</span>
              
              <div className="ml-auto flex items-center space-x-1">
                <span className="text-yellow-300 text-sm">Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-3 group text-lg font-medium">
            <span>Explore All Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-amber-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}