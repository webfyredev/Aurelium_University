"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion} from 'framer-motion'
import { scrollUpEffect } from "../animations/framer";

export default function DefaultNavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white shadow-md text-white font-semibold top-0`}>
                <div className="w-full px-6 py-3 flex items-center justify-between cursor-pointer">
                    <div className={`w-auto space-x-2 flex items-center justify-center font-bold text-xl bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text`}>
                        <img src="/nav_logo.png" alt="Aurelium Logo" className="w-10 h-10 rounded-sm mt-[-2]" />
                        <Link href="/" className="ml-[-13px]">
                            <h3>Aurelium University</h3>
                        </Link>
                    </div>
                    <ul className={`hidden lg:flex space-x-1.5 items-center text-purple-400`}>
                        
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/academics">
                                Academics
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/admissions">
                                Admissions
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/research">
                                Research
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/ns_events">
                                News & Events 
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/contacts">
                                Contact
                            </Link>
                        </li>
                        <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 rounded-sm">
                            <Link href="/portal">
                                Portal
                            </Link>
                        </li>
                        <button className={`px-6 py-2.5 text-[13px] font-semibold cursor-pointer transition-all duration-300 bg-purple-800 rounded-sm text-white`}>
                            Apply Now
                        </button>
                    </ul>
                    <button
                    onClick={() => setIsOpen(!isOpen)} 
                        className="lg:hidden flex text-purple-600 cursor-pointer hover:text-purple-600 transiton-all duration-200"
                    >
                        {isOpen ? <FaXmark  size={20} /> : <FaGripLines size={20} />}
                    </button>
                </div>
                {isOpen && (
                    <motion.div 
                        {...scrollUpEffect}
                        className={`lg:hidden border-1  p-5 w-full  bg-white  rounded-sm style-none`}>
                        <ul className="flex flex-col space-y-2.5">
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 bg-purple-50/30 hover:bg-purple-100 text-purple-400 rounded-sm">
                                    <Link href="/">
                                        Home
                                    </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 bg-purple-50/30 hover:bg-purple-100 text-purple-400 rounded-sm">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 bg-purple-50/30 hover:bg-purple-100 text-purple-400 rounded-sm">
                                <Link href="/academics">
                                    Academics
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 bg-purple-50/30 text-purple-400 rounded-sm">
                                <Link href="/admissions">
                                    Admissions
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 bg-purple-50/30 text-purple-400 rounded-sm">
                                
                                <Link href="/research">
                                    Research
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 bg-purple-50/30 text-purple-400 rounded-sm"> 
                                <Link href="/ns_events">
                                    News & Events 
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 bg-purple-50/30 text-purple-400 rounded-sm">
                                <Link href="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 bg-purple-50/30 text-purple-400 rounded-sm">
                                <Link href="/contacts">
                                    Contact
                                </Link>
                            </li>
                            <li className="px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-purple-100 bg-purple-50/30 text-purple-400 rounded-sm">
                                <Link href="/portal">
                                    Portal
                                </Link>
                            </li>
                            <button className={`px-6 py-2.5 text-[13px] font-semibold cursor-pointer transition-all duration-300 bg-purple-800 hover:bg-purple-500 rounded-sm `}>
                                Apply Now
                            </button>
                        </ul>
                        
                    </motion.div>
                )}
            </nav>
        </>
    );
}