"use client";

import { FaCheck, FaStar } from "react-icons/fa";
import { testimonials } from "../pageData";
export default function Testimonials(){
    return(
        <>
            <div className="w-full p-10 bg-purple-950 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-300">
                    STUDENT VOICES
                </h4>
                <h2 className="text-4xl font-bold mt-2 text-white">
                    What our Community Says
                </h2>
                <div className="w-20 mt-5 border-2 border-purple-200"></div>
                <div className="w-[90%] p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((test, index) => (
                        <div key={index} className="p-5 rounded-md bg-white flex flex-col">
                            <div className="w-full flex space-x-2 items-center">
                                <img src={test.image} className="w-12 h-12 object-cover rounded-full" />
                                <div className="flex flex-col">
                                    <h3 className="text-[13px] text-purple-950 font-semibold">{test.name}</h3>
                                    <p className="text-xs">{test.role}</p>
                                    <div className="flex mt-1 space-x-0.5">
                                        {Array.from({length:5}).map((_, i) => (
                                        <FaStar key={i} size={12} className={i < test.rating ? 'text-purple-400 fill-purple-400' : 'text-gray-300'}/>
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-[13px] my-3 italic">
                            {test.text}
                                </p>
                            <p className="flex items-center text-[11px] text-gray-500">
                                <FaCheck  className="border-1 w-3 h-3 p-0.5 rounded-full bg-green-300 text-white mr-0.5"/>
                                Verified Student
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}