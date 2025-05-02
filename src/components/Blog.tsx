'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Clock, User, Tag, Search, Filter, ChevronRight, MessageSquare, Calendar, Bookmark, BookmarkPlus, Star } from 'lucide-react';

const Blog = () => {
  const [featuredHovered, setFeaturedHovered] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of AI in Modern Enterprise Solutions",
      excerpt: "Exploring how artificial intelligence is reshaping business operations and creating new opportunities for growth.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      date: "April 28, 2025",
      readTime: "8 min read",
      comments: 24,
      image: "/api/placeholder/800/600",
      featured: true,
      color: "#3B82F6" // blue
    },
    {
      id: 2,
      title: "Securing Cloud Infrastructure: Best Practices for 2025",
      excerpt: "A comprehensive guide to implementing robust security measures for your cloud-based systems.",
      category: "Cybersecurity",
      author: "Michael Rodriguez",
      date: "April 25, 2025",
      readTime: "6 min read",
      comments: 18,
      image: "/api/placeholder/800/600",
      featured: false,
      color: "#6366F1" // indigo
    },
    {
      id: 3,
      title: "Web3 Technologies: Building the Decentralized Future",
      excerpt: "Discover how blockchain and distributed systems are creating new paradigms for digital interaction.",
      category: "Blockchain",
      author: "Aisha Johnson",
      date: "April 21, 2025",
      readTime: "10 min read",
      comments: 31,
      image: "/api/placeholder/800/600",
      featured: false,
      color: "#8B5CF6" // purple
    },
    {
      id: 4,
      title: "Quantum Computing: Practical Applications for Today's Businesses",
      excerpt: "Moving beyond theory - how companies are leveraging quantum computing for real-world problem solving.",
      category: "Emerging Tech",
      author: "Dr. James Wei",
      date: "April 18, 2025",
      readTime: "12 min read",
      comments: 42,
      image: "/api/placeholder/800/600",
      featured: false,
      color: "#EC4899" // pink
    },
    {
      id: 5,
      title: "The Sustainable Tech Movement: Green Solutions for Digital Infrastructure",
      excerpt: "How technology companies are reducing their environmental impact while maintaining performance.",
      category: "Sustainability",
      author: "Emma Greenfield",
      date: "April 15, 2025",
      readTime: "5 min read",
      comments: 15,
      image: "/api/placeholder/800/600",
      featured: false,
      color: "#10B981" // green
    },
    {
      id: 6,
      title: "5G and Beyond: The Next Generation of Connectivity",
      excerpt: "Exploring the transformative potential of advanced networking technologies on industry and society.",
      category: "Telecommunications",
      author: "Robert Kim",
      date: "April 12, 2025",
      readTime: "7 min read",
      comments: 22,
      image: "/api/placeholder/800/600",
      featured: false,
      color: "#F59E0B" // amber
    },
  ];
  
  const categories = [
    "All", 
    "AI & Machine Learning", 
    "Cybersecurity", 
    "Blockchain", 
    "Emerging Tech", 
    "Sustainability", 
    "Telecommunications"
  ];
  
  // Filter posts based on active category
  const filteredPosts = activeCategoryTab === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategoryTab);
  
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
    
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
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
      
      <div className="max-w-7xl mx-auto mb-16 px-4 relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-blue-100 via-blue-300 to-indigo-200 bg-clip-text text-transparent mb-6">
          Our Blog
        </h1>
        
        <p className="text-2xl text-blue-100 text-center mt-8 max-w-3xl mx-auto opacity-90">
          Insights, perspectives, and news from our tech experts
        </p>
        
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">Weekly Updates</span>
          </div>
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">Industry Insights</span>
          </div>
          <div className="flex items-center bg-blue-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/20">
            <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">Tech Trends</span>
          </div>
        </div>
        
        {/* Search and filter section */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full bg-blue-900/20 border border-blue-500/30 rounded-lg py-3 pl-10 pr-4 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </div>
          
          <div className="w-full md:w-auto flex items-center gap-2 bg-blue-900/20 border border-blue-500/30 rounded-lg p-2">
            <Filter className="h-5 w-5 text-blue-400 ml-2" />
            <span className="text-blue-200 mr-2">Filter by:</span>
            <select className="bg-blue-900/40 border border-blue-500/30 rounded-md py-2 px-3 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Commented</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Category tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-3 rounded-full transition-all ${
                activeCategoryTab === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-blue-900/20 text-blue-300 hover:bg-blue-800/30 border border-blue-500/20'
              }`}
              onClick={() => setActiveCategoryTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured article */}
      {blogPosts.filter(post => post.featured).length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-16">
          {blogPosts.filter(post => post.featured).map(post => (
            <div 
              key={post.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setFeaturedHovered(true)}
              onMouseLeave={() => setFeaturedHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl transform group-hover:scale-[1.01] transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/90 opacity-90 rounded-2xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 group-hover:border-blue-400/50 transition-all shadow-xl shadow-blue-800/20 backdrop-blur-lg">
                <div className="px-8 py-10 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="bg-blue-700/50 text-blue-200 px-4 py-1 rounded-full text-sm font-medium">Featured</div>
                      <div className="bg-blue-800/30 text-blue-300 px-4 py-1 rounded-full text-sm">{post.category}</div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h2>
                    <p className="text-blue-100 text-lg mb-6">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-200">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-200">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-200">{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-200">{post.comments} comments</span>
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>Read Article</span>
                      <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${featuredHovered ? 'translate-x-1' : ''}`} />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/40 rounded-xl opacity-60"></div>
                    <div className="rounded-xl overflow-hidden border border-blue-400/30 transform transition-transform duration-300 group-hover:scale-[1.02]">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover aspect-[4/3]"
                      />
                    </div>
                    
                    {/* Floating elements around the image */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600/20 rounded-full blur-xl animate-pulse-glow"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600/20 rounded-full blur-xl animate-pulse-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Blog posts grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map(post => (
            <div 
              key={post.id}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-900/10 group hover:shadow-blue-500/30 hover:border-blue-400/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div 
                    className="text-white px-4 py-1 rounded-full text-sm"
                    style={{ backgroundColor: `${post.color}40` }}
                  >
                    {post.category}
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-black/30 backdrop-blur-md p-2 rounded-full text-blue-200 cursor-pointer hover:bg-black/50 transition-all">
                    <BookmarkPlus className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-100 mb-3 line-clamp-2 group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-blue-200/90 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-blue-900 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-blue-300 text-sm">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-300 text-sm">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-blue-300/80 text-sm">{post.date}</div>
                  
                  <div className="flex items-center text-blue-300 text-sm gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read More</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 border border-blue-500/20 hover:bg-blue-800/40 transition-all">
              <ArrowRight className="h-5 w-5 transform rotate-180" />
            </button>
            
            <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              1
            </button>
            
            <button className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 border border-blue-500/20 hover:bg-blue-800/40 transition-all">
              2
            </button>
            
            <button className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 border border-blue-500/20 hover:bg-blue-800/40 transition-all">
              3
            </button>
            
            <div className="text-blue-300 px-2">...</div>
            
            <button className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 border border-blue-500/20 hover:bg-blue-800/40 transition-all">
              10
            </button>
            
            <button className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 border border-blue-500/20 hover:bg-blue-800/40 transition-all">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="max-w-5xl mx-auto mt-24 mb-8 px-4">
        <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl shadow-blue-800/20 backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/90 opacity-90"></div>
          
          {/* Background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <div className="inline-block bg-blue-900/50 rounded-full p-4 mb-6">
              <Star className="h-8 w-8 text-blue-300" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, articles, and tech news delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-blue-900/30 border border-blue-500/30 rounded-lg py-3 px-4 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
              
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>Subscribe</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-blue-300/80 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      
      {/* Gradient overlays at the edges */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-blue-500/5 to-transparent blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-br from-indigo-500/5 to-transparent blur-2xl"></div>
    </section>
  );
};

export default Blog;