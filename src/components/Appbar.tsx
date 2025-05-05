"use client"
import Link from "next/link";
import Image from "next/image";

export default function Appbar() {
    return(
        <div className="relative bg-black text-white overflow-hidden">
            <nav className="relative z-10 flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md border-b border-yellow-500/10">
                <div className="flex items-center gap-3">
                    <Link href={"/"} className="flex items-center gap-1">
                        <Image 
                            src="/logo.png"
                            height={50}
                            width={50}
                            alt="Logo"
                            className="h-12 w-auto"
                        />
                        <span className="text-2xl font-bold text-yellow-300">Crescentis</span>
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center gap-8">
                    <a href="about" className="hover:text-yellow-300 transition relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="contact" className="hover:text-yellow-300 transition relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="blog" className="hover:text-yellow-300 transition relative group">
                        Blog
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>
            </nav>
        </div>
    )
}