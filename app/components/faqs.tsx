"use client";
import { useState } from "react"
import { faqs } from "../admissions/admission";
import { FaChevronDown } from "react-icons/fa";

export default function Faqs(){
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center bg-white">
                <h4 className="font-semibold text-[10px] md:text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    HAVE QUESTION?
                </h4>
                <h2 className="text-xl md:text-3xl font-bold text-purple-950">
                    Frequently Asked Questions
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="space-y-5 mb-10 w-full lg:w-[75%] mt-5">
                    {faqs.map((faq, index) =>(
                        <div className="w-full rounded-xl shadow-sm">
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center px-4 py-5 text-left bg-white group transition-all duration-300 cursor-pointer rounded-xl">
                                <span className="font-semibold text-xs md:text-[13px] text-purple-950">{faq.question}</span>
                                <FaChevronDown  className={`w-3 h-3 transform transition-transform text-purple-950 duration-300 ${activeIndex === index ? "rotate-180" : ""}`}/>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-white text-gray-600 text-[10px] md:text-[13px] transition-all duration-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ) )}
                </div>
            </div>
        </>
    )
}