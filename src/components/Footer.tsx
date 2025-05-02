import Link from "next/link"
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Curved border at the top */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <div 
          className="absolute w-[200%] h-[200%] left-[-50%] rounded-[50%] bg-gradient-to-r from-blue-900/30 to-indigo-900/30"
          style={{ top: "-180%" }}
        />
        <div 
          className="absolute w-[200%] h-[200%] left-[-50%] rounded-[50%] border-t-2 border-blue-500/30"
          style={{ top: "-180%" }}
        />
      </div>

      <div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="flex items-center gap-3 mb-8 md:mb-0">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg shadow-blue-500/30 overflow-hidden">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-300 to-indigo-300"></div>
            </div>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              Crescentis
            </span>
          </div>
          <Link 
            href="mailto:team@crescentis.ai" 
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition mb-8 md:mb-0"
          >
            <Mail size={18} />
            <span>team@crescentis.ai</span>
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link 
              href="/blog" 
              className="text-blue-100 hover:text-blue-300 transition relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/terms" 
              className="text-blue-100 hover:text-blue-300 transition relative group"
            >
              Terms and Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/privacy" 
              className="text-blue-100 hover:text-blue-300 transition relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
        <div className="text-blue-500/60 text-sm border-t border-blue-500/10 pt-6">
          All rights reserved | Crescentis 2025
        </div>
      </div>
    </footer>
  )
}
