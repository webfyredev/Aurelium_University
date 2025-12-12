
"use client";
import { FaEnvelope, FaFacebook, FaInstagram, FaLink, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPhoneSquare} from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";
export default function Footer(){
    const dates = new Date().getFullYear();
    return(
        <>
            <footer className="w-full flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2 items-center">
                            <img src="/logo.png" className="w-10 h-10 rounded-md" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text">
                                Aurelium University
                            </h3>
                        </div>
                        <p className="text-xs text-gray-600">
                            Building tomorrow's leaders through world-class education, innovative research, and transfromative experience
                        </p>
                        <div className="flex space-x-2.5">
                            <FaFacebook  className="w-9 h-9 rounded-sm p-2.5 bg-white shadow-sm text-purple-500 cursor-pointer hover:bg-purple-100 transition-all duration-300"/>
                            <SiX  className="w-9 h-9 rounded-sm p-2.5 bg-white shadow-sm text-purple-500 cursor-pointer hover:bg-purple-100 transition-all duration-300"/>
                            <FaInstagram  className="w-9 h-9 rounded-sm p-2.5 bg-white shadow-sm text-purple-500 cursor-pointer hover:bg-purple-100 transition-all duration-300"/>
                            <FaLinkedinIn  className="w-9 h-9 rounded-sm p-2.5 bg-white shadow-sm text-purple-500 cursor-pointer hover:bg-purple-100 transition-all duration-300"/>

                        </div>

                    </div>
                    <div className="flex flex-col lg:px-10">
                        <h3 className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text text-base mb-3">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/about">
                                    About Us
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/academics">
                                    Academics
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/admissions">
                                    Admissions
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/research">
                                    Research
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/ns_events">
                                    News & Events
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/contacts">
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col lg:px-10">
                        <h3 className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text text-base mb-3">
                            Resources
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/">
                                    Academic Calender
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/">
                                    Library
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/ns_events">
                                    E-Learning Platform
                                </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="#">
                                Scholarships
                            </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="#">
                                Campus Maps
                            </Link>
                            </li>
                            <li 
                                // whileHover={{x : 10}}
                                // transition={{duration : 0.2}}
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300">
                                <Link href="/">
                                    Portal
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text text-base mb-3">
                            Contact Info
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li 
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300 flex items-center space-x-1">
                                    <FaMapMarkerAlt />
                                    <p>
                                        67 University Road, Abuja Nigeria
                                    </p>
                            </li>
                            <li 
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300 flex items-center space-x-1">
                                    <FaPhoneAlt />
                                    <a href="tel:/+234 803 789 64754">
                                        +234 803 789 64754
                                    </a>
                            </li>
                            <li 
                                className="w-full text-[13px] text-gray-600 hover:font-semibold hover:text-purple-500 cursor-pointer transition-all duration-300 flex items-center space-x-1.5">
                                    <FaEnvelope/>
                                    <a href="mailto:aurelium@university.edu">
                                        aurelium@university.edu
                                    </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="w-[85%] border-1 border-purple-100 mt-3"></div>
                <div className="w-full mt-2 p-3 flex items-center justify-between">
                    <p className="text-[9px] md:text-xs font-semibold text-purple-950">&copy; {dates} <a href="mailto:aureliumuniversity@gmail.com" className="hover:text-purple-500">Aurelium University</a>. All right reserved</p>
                    <p className="text-[9px] md:text-xs text-gray-500">
                        Developed by <a href="mailto:oyinwebworks@gmail.com" className="hover:text-purple-500">oyinwebworks@gmail.com</a>
                    </p>
                </div>
            </footer>
        </>
    );
}