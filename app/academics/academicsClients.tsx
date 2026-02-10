"use client";
import { FaArrowRight, FaAward, FaCalendar, FaCheckCircle, FaClock, FaFlask, FaUniversity } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import DefaultNavBar from "../components/defaultNav";
import FooterCTA from "../components/footer_Cta";
import Header from "../components/header";
import { academic, service2, support_service, programs, academic_dates, research_centers } from "./academics";
import Alumni_Stories from "../components/alumni";
import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion'
import { borderFadeShow, scrollLeftEffects, scrollRightEffects, scrollupDelayEffects, scrollUpEffect } from "../animations/framer";
import { usePathname, useSearchParams } from "next/navigation";


const faculties = ['All', 'Science', 'Engineering', 'Law', 'Arts', 'Social Sciences', 'Management Sciences', 'Education', 'Health Sciences', 'Agriculture', 'Environmental Sciences']
export default function Academics(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        const hash = window.location.hash;
        if(!hash) return;
        const el = document.querySelector(hash)
        if(el) el.scrollIntoView({behavior : "smooth"});

    }, [pathname, searchParams]);

    const scrollRef = useRef<HTMLDivElement | null >(null);
    const scroll = (direction: "left" | "right") => {
        if(!scrollRef.current) return;
        const scrollAmount = 200;
        scrollRef.current.scrollBy({
            left : direction === "left" ? -scrollAmount : scrollAmount,
            behavior : "smooth"
        });
    };
    const [selectedFaculty, setSelectedFaculty] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const programsPage = 12;

    const filteredPrograms = selectedFaculty === "All" ? programs : programs.filter(p => p.faculty === selectedFaculty);
    const totalPages = Math.ceil(filteredPrograms.length / programsPage);
    const startIndex = (currentPage - 1) * programsPage;
    const paginatedPrograms = filteredPrograms.slice(startIndex, startIndex + programsPage);

    return(
        <>
            <DefaultNavBar />
            <Header 
            image="/header/academics.webp"
            title = 'Academic Excellence'
            text = 'Discover world-class programs designed to shape future leaders and innovators'/>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center bg-white" id="programs">
                <motion.h4 
                    {...borderFadeShow}
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    OUR PROGRAMS
                </motion.h4>
                <motion.h2 
                    {...scrollUpEffect}
                    className="text-2xl md:text-3xl font-bold text-purple-950">
                    Explore Academic Programs
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-700"></motion.div>
                <div className="relative w-full max-w-6xl mt-6 mb-4">
                    <button
                        onClick={() =>scroll("left")}
                        className="cursor-pointer hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition"
                    >
                        <FiChevronLeft />
                    </button>
                     <div
                            ref={scrollRef}
                            className="flex gap-3 overflow-x-auto scroll-smooth px-10 
                                    scrollbar-hide"
                        >
                            {faculties.map((faculty) => (
                            <button
                                key={faculty}
                                onClick={() => {
                                setSelectedFaculty(faculty);
                                setCurrentPage(1);
                                }}
                                className={`cursor-pointer whitespace-nowrap px-4 py-2 text-xs rounded-full border font-semibold transition
                                ${
                                    selectedFaculty === faculty
                                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-transparent"
                                    : "bg-white text-purple-600 border-purple-600 hover:bg-purple-50"
                                }`}
                            >
                                {faculty}
                            </button>
                            ))}
                        </div>
                    <button
                        onClick={() =>scroll("right")}
                        className="cursor-pointer hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition"
                    >
                        <FiChevronRight />
                    </button>
                </div>
                {/* <div className="p-5 w-full hidden lg:flex justify-center gap-3 mb-3 items-center">
                    {faculties.map((faculty, index) => (
                        <button key={index} 
                        className={`px-4 py-2 text-[11px] rounded-md border font-semibold cursor-pointer ${selectedFaculty === faculty ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white" : "bg-white text-purple-600 border-1 border-purple-600" }`} 
                        onClick={() => {
                            setSelectedFaculty(faculty);
                            setCurrentPage(1);
                        }}>
                        {faculty}
                        </button>
                    ))}
                </div> */}
                <div className="w-full lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-0">
                    {paginatedPrograms.map((program, index) => (
                        <motion.div 
                            {...scrollRightEffects}
                            key={index} className="rounded-lg shadow-sm overflow-hidden hover:shadow-xl cursor-pointer transition mb-3 group">
                            <img src={program.image} alt={program.name} className="w-full h-48 object-cover rounded-t-md group-hover:scale-105 transition duration-300"/>
                            <div className="p-3 rounded-b-md">
                                <h3 className="font-bold text-purple-950 group-hover:text-purple-500">{program.name}</h3>
                                <p className="text-[12px] my-2">
                                    {program.description}
                                </p>
                                <div className="flex justify-between">
                                    <p className="flex items-center text-[10px] text-purple-950 font-semibold"><FaClock  className="mr-0.5"/> {program.duration} Years</p>
                                    <p className="flex items-center text-[10px] text-purple-950 font-semibold"><FaAward  className="mr-0.5"/> {program.degree}</p>
                                </div>
                                <hr  className="w-full mt-3 text-purple-100"/>
                                <p className="flex text-xs items-center mt-3 font-semibold text-purple-950"><FaUniversity  className="mr-1"/> Faculty of {program.faculty}</p>
                                <a href="" className="flex items-center text-xs mt-4 mb-2  font-semibold text-purple-500">Apply Now <FaArrowRight  className="ml-0.5 mt-0.5 w-2.5 h-2.5"/></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({length:totalPages}, (_, i) => i +1).map(page => (
                            <button key={page}
                            onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md border cursor-pointer text-sm ${currentPage === page ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold' : 'bg-white text-purple-600 border-purple-600'}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}

            </div>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <motion.h4 
                    {...borderFadeShow}
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    LEARNING EXPERIENCE
                </motion.h4>
                <motion.h2 
                    {...scrollUpEffect}
                    className="text-2xl md:text-3xl font-bold text-purple-950">
                    Our Teaching Approach
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-700"></motion.div>
                <motion.p {...scrollupDelayEffects} className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-gray-500">
                    We combine innovative teaching methods with hands-on experience to ensure our
                    students are prepared for the challenges of tomorrow.
                </motion.p> 
                <div className="w-full lg:w-[90%] mt-5 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {academic.map((data, index) => (
                        <motion.div 
                            {...scrollRightEffects}
                            key={index} className="p-5 rounded-xl shadow-sm flex flex-col items-center cursor-pointer hover:shadow-xl bg-white transition-all duration-300">
                            <data.icon  className="w-12 h-12 p-3.5 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <h3 className="mt-4 text-sm font-bold text-purple-950">
                                {data.title}
                            </h3>
                            <p className="text-xs mt-4 text-center mb-3">
                                {data.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full p-5 lg:p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <motion.h4 
                    {...borderFadeShow}
                    className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    STUDENT SUCCESS
                </motion.h4>
                <motion.h2 
                    {...scrollUpEffect}
                    className="text-2xl md:text-3xl font-bold text-purple-950">
                    Academic Support Services
                </motion.h2>
                <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-700"></motion.div>
                <motion.p {...scrollupDelayEffects} className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-gray-500">
                    We provide comprehensive support to help every student achieve their academic goals and reach their full potential
                </motion.p>
                <div className="w-full lg:w-[90%] lg:p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {support_service.map((service) => (
                        <motion.div {...scrollLeftEffects} className="p-5 rounded-xl shadow-sm hover:shadow-xl cursor-pointer flex flex-col items-center bg-white transition-all duration-300">
                            <service.icon  className="w-11 h-11 p-3.5 rounded-xl bg-purple-100 text-purple-500"/>
                            <h3 className="text-sm font-semibold text-purple-950 mt-4">
                                {service.title}
                            </h3>
                            <p className="text-xs text-center my-3">
                                {service.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="w-full lg:w-[90%] mt-8 lg:mt-5 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {service2.map((data, index) => (
                        <motion.div 
                            {...scrollUpEffect}
                            key={index} className="p-3 rounded-xl shadow-sm flex space-x-3 items-center bg-white hover:shadow-lg cursor-pointer transition-all duration-300 group">
                            <div className="w-11 h-11 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                <FaCheckCircle  className="fill-white"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <h3 className="text-sm font-semibold text-purple-950 group-hover:text-purple-500 transition-all duration-300">
                                    {data.title}
                                </h3>
                                <p className="text-xs  mb-2">
                                    {data.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Alumni_Stories />
            <div className="w-full p-5 lg:p-10 bg-white lg:flex lg:flex-row flex flex-col space-x-10" id="prog_catalog">
                <div className="w-full lg:w-1/2 border-1 border-white lg:p-5 flex flex-col items-left">
                    <motion.h4 
                        {...borderFadeShow}
                        className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    ACADEMIC CALENDER
                    </motion.h4>
                    <motion.h2 
                        {...scrollUpEffect}
                        className="text-2xl md:text-3xl font-bold text-purple-950">
                        Important Dates
                    </motion.h2>
                    <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-500"></motion.div>
                    <div className="w-full space-y-4">
                    {academic_dates.map((dates) => (
                        <motion.div {...scrollUpEffect} className="w-full lg:w-[95%] px-2 py-3 rounded-md shadow-sm flex space-x-2 cursor-pointer hover:shadow-lg transition group">
                            <FaCalendar  className="lg:w-10 lg:h-10 w-8 h-8 border-1 p-2 lg:p-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <div className="flex flex-col space-y-0.5">
                                <h3 className="font-semibold text-purple-950 text-sm group-hover:text-purple-500 transition-all duration-300">{dates.title}</h3>
                                <p className="text-[11px] text-purple-950">{dates.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 border-1 border-white lg:p-5 mt-5 lg:mt-0">
                    <motion.h4 
                        {...borderFadeShow}
                        className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    RESEARCH & INNOVATION
                    </motion.h4>
                    <motion.h2 
                        {...scrollUpEffect}
                        className="text-2xl md:text-3xl font-bold text-purple-950">
                        Research Centers
                    </motion.h2>
                    <motion.div {...borderFadeShow} className="w-20 my-3 border-2 border-purple-500"></motion.div>
                    <div className="w-full space-y-4">
                        {research_centers.map((center, index) => (
                            <motion.div {...scrollUpEffect} key={index} className="w-full lg:w-[95%] px-2 py-3 rounded-md shadow-sm flex space-x-2 cursor-pointer hover:shadow-lg transition">
                            <FaFlask  className="lg:w-10 lg:h-10 w-8 h-8 p-2 border-1 lg:p-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <div className="flex flex-col space-y-0.5">
                                <h3 className="font-semibold text-purple-950 text-sm">{center.title}</h3>
                                <p className="text-[11px] text-purple-950">{center.text}</p>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterCTA
            title = 'Ready to Begin Your Academic Journey?'
            text = 'Visit the research portal, program catalog, or contact an academic advisors.'
            btn_text1 = 'Programs Catalog'
            btn_text2="Contact Advisors"
            btn_text1_link="/academics#prog_catalog"
            btn_text2_link="/contacts#contact-sec"
            />
        </>
    );
}  