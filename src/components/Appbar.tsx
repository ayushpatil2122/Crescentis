import Link from "next/link";

export default function Appbar() {
    return(
        <div className="relative bg-black text-white overflow-hidden">
            <nav className="relative z-10 flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md border-b border-blue-500/10">
            <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-gray-200 to-blue-300 shadow-lg shadow-blue-500/30 overflow-hidden animate-pulse">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-200 to-blue-200"></div>
                <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-gray-800"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-gray-800"></div>
            </div>
            <Link href={"/"}>
                <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
                    Crescentis
                </span>
            </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
            <a href="about" className="hover:text-blue-300 transition relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="contact" className="hover:text-blue-300 transition relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="blog" className="hover:text-blue-300 transition relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            </div>

            <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-full border border-blue-300/30 hover:bg-blue-500/10 transition">
                Log In
            </button>
            <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition">
                Sign Up
            </button>
            </div>
        </nav>
      </div>
    ) 
}