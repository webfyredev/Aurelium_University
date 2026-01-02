"use client";

import { FaDollarSign, FaEnvelope } from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import ResearchSlider from "../components/research_slider";
import { research_card, research_facilities, research_funding, research_impact, research_partners, research_stories } from "./research";
import { Metadata } from "next";
import Latest_Research_News from "../components/research_news";

const metadata : Metadata = {
    title : "Aurelium | Research"
}
export default function Research(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image ="/header/research.webp"
            title = 'Research & Innovation'
            text = "Pioneering discoveries that shape the future of humanity"/>
            <div className="w-full flex flex-col items-center p-5">
                <div className="w-full lg:w-[90%] lg:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {research_card.map((data, index) => (
                        <div key={index} className="p-4 lg:p-5 flex flex-col items-center rounded-xl shadow-sm bg-purple-50 cursor-pointer">
                            <data.icon  className="w-13 h-13 p-2.5 text-purple-500"/>
                            <h3 className="font-bold text-purple-950 mt-1 text-xl">
                                {data.value}
                            </h3>
                            <p className="text-xs text-purple-800 my-2 font-semibold">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <ResearchSlider />
            <div className="p-5 lg:p-10 w-full flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    WORLD-CLASS INFRASTRUTURE
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950">
                    Research Facilities
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-xs md:text-[13px] md:w-150 w-85 text-center mt-2 text-gray-500">
                    Our cutting-edge facilities provide researchers with the tools and resources needed to push the boundaries of knowledge
                </p>
                <div className="w-full lg:w-[90%] mt-5 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {research_facilities.map((facitlities, index) => (
                        <div key={index} className="p-3 rounded-md shadow-md flex space-x-2 cursor-pointer mb-3">
                            <facitlities.icon  className="lg:w-12 lg:h-12 w-8 h-8 border-1 p-2 lg:p-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <div className="flex flex-col space-y-1">
                                <h3 className="font-semibold text-purple-950">
                                    {facitlities.title}
                                </h3>
                                <p className="text-[10px] md:text-xs lg:text-sm">
                                    {facitlities.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    MAKING A DIFFERENCE
                </h4>
                <h2 className="text-xl md:text-3xl font-bold text-purple-950 text-center">
                    Research Impact & Achievements
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-gray-500">
                    Our research has led to groundbreaking discoveries and innovations tha benefits society.
                </p>
                <div className="w-full lg:w-[90%] lg:p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {research_impact.map((data, index) => (
                        <div key={index} className="rounded-md bg-white flex flex-col shadow-sm cursor-pointer overflow-hidden group">
                            <img src={data.image} className="w-full h-55 rounded-t-md object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div className="flex p-3 space-x-3 rounded-b-md">
                                <div className="p-2.5 rounded-md bg-purple-100 h-11">
                                    <p className="font-bold  bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">2024</p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-purple-950 text-sm md:text-base">{data.title}</h3>
                                    <p className="text-[10px] md:text-xs mt-0.5">{data.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-5 lg:p-10 border-1 flex flex-col items-center bg-purple-950">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-300 mb-3">
                    COLLABORATIONS OPPORTUNITIES
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Partner With Us
                </h2>
                <div className="w-20 my-3 border-2 border-white"></div>
                <p className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-purple-100">
                    Join forces with our world-class researchers to drive innovation and create meaningful impact
                </p>
                <div className="w-full lg:w-[85%] lg:p-5 mt-5 border-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {research_partners.map((data, index) => (
                        <div key={index} className="p-8 rounded-xl bg-white flex flex-col items-center">
                            <data.icon  className="w-12 h-12 p-3 rounded-md bg-purple-100 text-purple-500"/>
                            <h3 className="mt-2.5 font-semibold text-purple-950">
                                {data.title}
                            </h3>
                            <p className="text-xs text-center my-2">{data.text}</p>
                        </div>
                    ))}
                </div>
                <button className="flex items-center border-1 mt-7 px-6 py-3 text-[13px] rounded-xl cursor-pointer bg-white font-semibold text-purple-950">
                    <FaEnvelope className="mr-1" />Contact Research Office
                </button>
            </div>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    RESEARCH ACHIEVMENTS
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950 text-center">
                    Research Stories & Success Profiles
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-full lg:p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {research_stories.map((stories, index) =>(
                        <div key={index} className="rounded-md bg-white shadow-sm mb-3 hover:shadow-lg transition-transform duration-300 group overflow-hidden">
                            <img src={stories.image} alt={stories.title} className="w-full h-55 object-cover rounded-t-md group-hover:scale-105 transiton-transform duration-300" />
                            <div className="flex flex-col p-3 rounded-b-md">
                                <h3 className="font-semibold text-purple-950">{stories.title}</h3>
                                <p className="text-[13px] mt-1.5">{stories.description}</p>
                                <button className="border-1 mt-4 mb-2 py-2.5 text-sm rounded-md font-semibold cursor-pointer bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                                    Read More
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    FUNDING & SUPPORT
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950 text-center">
                    Research Funding Opportunities
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-gray-500">
                    We provide comprehensive funding support to help researchers bring their innovative ideas to life.
                </p>
                <div className="w-full lg:w-[90%] lg:p-5 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {research_funding.map((funds) => (
                        <div className="p-5 rounded-xl shadow-sm flex flex-col items-center bg-white hover:shadow-xl transition-transform duration-500">
                                <FaDollarSign  className="w-12 h-12 p-3.5 rounded-xl bg-purple-100 text-purple-500"/>
                                <h3 className="text-purple-950 font-semibold text-center mt-2.5 text-sm">{funds.title}</h3>
                                <p className="font-bold text-purple-500 text-lg mt-2">{funds.title2}</p>
                                <p className="text-[13px] mt-2 text-center">{funds.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Latest_Research_News />

        </>
    )
}