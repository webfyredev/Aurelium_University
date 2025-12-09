"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar(){
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    return(
        <>
            <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${ scrolled ? 'bg-white shadow-md text-white font-semibold top-0' : 'bg-transparent text-white top-3'}`}>
                <div className="w-full px-6 py-3 flex items-center justify-between cursor-pointer">
                    <div className={`w-auto space-x-2 flex items-center font-bold text-xl ${scrolled ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text' : 'text-white'}`}>
                        <img src="/logo.png" alt="Aurelium Logo" className="w-10 h-10 rounded-sm" />
                        <Link href="/">
                            <h3>Aurelium University</h3>
                        </Link>
                    </div>
                    <ul className={`hidden lg:flex space-x-1.5 items-center ${scrolled ? 'text-purple-400' : 'text-purple-100'}`}>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            <Link href="/academics">
                                Academics
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            <Link href="/admissions">
                                Admissions
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            
                            <Link href="/research">
                                Research
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm"> 
                            <Link href="/ns_events">
                                News & Events 
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            <Link href="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            Contact
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-200 hover:text-purple-400 rounded-sm">
                            Login
                        </li>
                        <button className={`px-6 py-2.5 text-[13px] font-semibold cursor-pointer transition-all duration-300 bg-purple-800 rounded-sm ${scrolled ? 'text-white': 'text-white'}`}>
                            Apply Now
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    );
}