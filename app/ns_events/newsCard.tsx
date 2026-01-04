"use client";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { cardFadeShow } from "../animations/framer";
import { motion } from 'framer-motion'
export default function NewsCard({ item } : any){
    return(
        <>
            <motion.div 
                {...cardFadeShow}
                className="flex flex-col rounded-xl overflow-hidden shadow-lg relative hover:shadow-xl transition group mb-5">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-xl transition duration-300 " />
                <div className="absolute top-0 left-0 w-full h-48 z-1 rounded-t-xl inset-0 bg-black/15 hover:bg-black/0 transition duration-300 cursor-pointer group">
                    <p className="absolute right-2 text-[10px] top-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 px-2 py-1 rounded-xl group-hover:hidden transition duration-300">{item.category}</p>
                </div>
                <div className="p-4 rounded-b-xl flex flex-col space-y-2">
                    <p className="flex items-center text-[9px] space-x-3 text-gray-500"><FaCalendar  className="text-gray-500 w-2.5 h-2.5 mr-2"/>{item.date}</p>
                    <a href="" className="text-sm font-semibold text-purple-950 group-hover:text-purple-500 transition">{item.title}</a>
                    <p className="text-[10.5px] text-gray-600">{item.text}</p>
                    <hr  className="text-gray-200 w-full mt-1"/>
                    <div className="flex justify-between">
                    <p className="flex items-center text-[9px] space-x-3 text-gray-500 font-semibold"><FaUser  className="text-gray-500 w-2.5 h-2.5 mr-2"/> {item.author}</p>
                    <a href="" className="flex items-center text-[10px] space-x-3 font-semibold text-purple-950 group-hover:text-purple-500 transition mb-3">Read More <FaArrowRight  className="w-2 h-2 ml-1 mt-1"/></a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}