"use client";

import { useState } from "react";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { Metadata } from "next";
import { gallery_data, tour_data } from "./gallery";
import FooterCTA from "../components/footer_Cta";

const metadata : Metadata = {
    title : "Aurelium | Gallery"
}
const gal_cats = ['All', 'Campus', 'Academics', 'Events', 'Sports', 'Campus Life']
export default function Campus_Gallery(){
    const [selectedCats, setSelectedCats] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const programsPerPage = 12;
    const filteredCats = selectedCats === "All" ? gallery_data : gallery_data.filter(gal => gal.tag === selectedCats);
    const totalPages = Math.ceil(filteredCats.length / programsPerPage);
    const startIndex = (currentPage - 1) * programsPerPage;
    const paginatedgals = filteredCats.slice(startIndex, startIndex + programsPerPage)
    return(
        <>
            <DefaultNavBar />
            <Header 
            image = '/header/gals.webp'
            title= 'Campus Gallery'
            text = 'Experience Life at Aurelium University through our vibrant photo collection'/>
            <div className="w-full p-10 flex flex-col items-center">
                <div className="w-[75%] p-3 flex items-center justify-center gap-3 mb-3">
                    {gal_cats.map((cats, index) => (
                        <button key={index}
                        onClick={() => {
                            setSelectedCats(cats);
                            setCurrentPage(1);
                        }}
                            className={` shadow-xs px-3.5 py-1.5 rounded-xl font-semibold text-xs cursor-pointer ${selectedCats === cats ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold" : "bg-purple-50 text-purple-950" }`}
                        >
                            {cats}
                        </button>
                        
                    ))}

                </div>
                <div className="w-full mt-3 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {paginatedgals.map((gallery, index) => (
                        <div key={index} className="shadow-sm hover:shadow-xl rounded-lg cursor-pointer transition relative group overflow-hidden">
                            <img src={gallery.image} alt={gallery.title} className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition-all duration-300" />
                            <div className="absolute w-full h-full top-0 left-0 rounded-lg inset-0 hover:bg-black/30 transition">
                                <div className="bottom-1.5 absolute p-3 space-y-1 hidden group-hover:flex flex-col transition-all">
                                    <h3 className="w-20 px-3 py-1 text-[10px] flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 font-semibold text-white rounded-xl">{gallery.tag}</h3>
                                    <p className="text-sm font-semibold text-white">{gallery.title}</p>
                                    <p className="text-[10px] text-white">{gallery.subText}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center mt-5 gap-2">
                        {Array.from({length:totalPages}, (_, i) => i+1).map(page => (
                            <button 
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`shadow-sm font-semibold px-3 py-1 rounded-xl cursor-pointer text-sm ${currentPage === page ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' : 'bg-purple-50 text-purple-950'}`}
                            >
                                {page}
                            </button>
                        ))}

                    </div>
                )}
            </div>
            <div className="p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 text-purple-600 mb-3">
                    VIRTUAL EXPERIENCE
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Campus Video Tour
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="mt-5 w-full lg:w-[90%] lg:p-5">
                    <video src="" controls className="w-full h-75 md:h-90 lg:h-120 border-1 rounded-lg object-cover shadow-lg"></video>
                </div>
                <div className="w-[90%] p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
                    {tour_data.map((tour, index) => (
                        <div key={index} className="px-5 py-8 rounded-xl flex flex-col items-center space-y-1 bg-white shadow-xl">
                            <tour.icon  className="w-6 h-6 text-purple-500"/>
                            <h3 className="text-sm font-semibold text-purple-950">{tour.title}</h3>
                            <p className="text-xs text-gray-500">{tour.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <FooterCTA
                title="Experience Life on Our Campus"
                text="Explore the moments, achievements, and everyday experiences that define our vibrant academic community."
                btn_text1="Apply Now"
                btn_text2="Visit Our Campus"
            />
        </>
    );
}