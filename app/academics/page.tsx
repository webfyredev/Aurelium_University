"use client";
import { FaCheckCircle } from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import FooterCTA from "../components/footer_Cta";
import Header from "../components/header";
import { Metadata } from "next";
import { academic, service2, support_service } from "./academics";
import Alumni_Stories from "../components/alumni";

const metadata : Metadata = {
    title : "Aurelium | Academics"
}
export default function Academics(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image="/header/academics.webp"
            title = 'Academic Excellence'
            text = 'Discover world-class programs designed to shape future leaders and innovators'/>
            <div className="w-full p-10 border-1 flex flex-col items-center bg-white">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    OUR PROGRAMS
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Explore Academic Programs
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
            </div>
            <div className="w-full p-10 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    LEARNING EXPERIENCE
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Our Teaching Approach
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-[13px] w-150 text-center mt-2 text-gray-500">
                    We combine innovative teaching methods with hands-on experience to ensure our
                    students are prepared for the challenges of tomorrow.
                </p>
                <div className="w-[90%] mt-5 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {academic.map((data, index) => (
                        <div key={index} className="p-5 rounded-xl shadow-sm flex flex-col items-center cursor-pointer hover:shadow-xl bg-white transition-all duration-300">
                            <data.icon  className="w-12 h-12 p-3.5 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <h3 className="mt-4 text-sm font-semibold text-purple-950">
                                {data.title}
                            </h3>
                            <p className="text-xs mt-4 text-center mb-3">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full border-1 p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    STUDENT SUCCESS
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Academic Support Services
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-[13px] w-150 text-center mt-2 text-gray-500">
                    We provide comprehensive support to help every student achieve their academic goals and reach their full potential
                </p>
                <div className="w-[90%] p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {support_service.map((service) => (
                        <div className="p-5 rounded-xl shadow-sm hover:shadow-xl cursor-pointer flex flex-col items-center bg-white transition-all duration-300">
                            <service.icon  className="w-11 h-11 p-3.5 rounded-xl bg-purple-100 text-purple-500"/>
                            <h3 className="text-sm font-semibold text-purple-950 mt-4">
                                {service.title}
                            </h3>
                            <p className="text-xs text-center my-3">
                                {service.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-[90%] mt-5 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {service2.map((data, index) => (
                        <div key={index} className="p-3 rounded-xl shadow-sm flex space-x-3 items-center bg-white hover:shadow-lg cursor-pointer transition-all duration-300">
                            <div className="w-11 h-11 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                <FaCheckCircle  className="fill-white"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <h3 className="text-sm font-semibold text-purple-950">
                                    {data.title}
                                </h3>
                                <p className="text-xs  mb-2">
                                    {data.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Alumni_Stories />
            <FooterCTA
            title = 'Ready to Begin Your Academic Journey?'
            text = 'Visit the research portal, program catalog, or contact an academic advisors.'
            btn_text1 = 'Programs Catalog'
            btn_text2="Contact Advisors"
            />
        </>
    );
}  