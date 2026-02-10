"use client";
import { FaBookOpen, FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { contacts, social_Icons } from "./contact";
import Faqs from "../components/faqs";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function Contacts(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        const hash = window.location.hash;
        if(!hash) return;
        const el = document.querySelector(hash);
        if(el) el.scrollIntoView({behavior : 'smooth'});
    }, [pathname, searchParams]);

    return(
        <>
            <DefaultNavBar />
            <Header 
            image = "/header/contact3.webp"
            title = 'Get In Touch'
            text = "We're here to answer your questions and help you on your journey"/>
            <div className="w-full py-5 lg:py-10 md:px-5 lg:px-15 lg:flex lg:flex-row flex flex-col" id="contact-sec">
                <div className="w-full lg:w-1/2 p-3 md:p-5 flex flex-col items-left">
                    <h4 className="font-semibold text-[11px] md:text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                        CONTACT INFORMATION
                    </h4>
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-950">
                        Let's Connect
                    </h2>
                    <div className="w-20 my-3 border-2 border-purple-700"></div>
                    <p className="text-xs md:text-[13px] mt-2 text-gray-500">
                        Whether you're a prospective student, parent, or partner, we'd love to hear from you. Our team is ready to assist you with many questions or concerns
                    </p>
                    <div className="w-full mt-5 flex flex-col space-y-3.5">
                        {contacts.map((data, index) => {
                            if (data.type === 'text'){
                                return(
                                    <div key={index} className="px-3 py-4 rounded-md hover:rounded-xl flex space-x-2.5 shadow-md hover:shadow-lg transition">
                                        <data.icon  className="w-10 h-10 p-3.5 rounded-md bg-purple-100 text-purple-500"/>
                                        <div className="flex flex-col space-y-1">
                                            <h3 className="font-semibold text-purple-950 text-sm">{data.title}</h3>
                                            <p className="text-xs text-gray-600">{data.text}</p>
                                            <p className="text-[10px] text-gray-600">{data.text2}</p>
                                        </div>
                                    </div>
                                )
                            }else if(data.type === "link"){
                                return (
                                    <div key={index} className="px-3 py-4 rounded-md hover:rounded-xl flex space-x-2.5 shadow-md hover:shadow-lg transition">
                                        <data.icon  className="w-10 h-10 p-3.5 rounded-md bg-purple-100 text-purple-500"/>
                                        <div className="flex flex-col space-y-1">
                                            <h3 className="font-semibold text-purple-950 text-sm">{data.title}</h3>
                                            <a href={`mailto: ${data.text}`} className="text-xs text-gray-600 hover:text-purple-950 hover:font-semibold transition duration-300">{data.text}</a>
                                            <p className="text-[10px] text-gray-600">{data.text2}</p>

                                        </div>
                                    </div>
                                )
                            } else if(data.type === "phone"){
                                return(
                                    <div key={index} className="px-3 py-4 rounded-md hover:rounded-xl flex space-x-2.5 shadow-md hover:shadow-lg transition">
                                        <data.icon  className="w-10 h-10 p-3.5 rounded-md bg-purple-100 text-purple-500"/>
                                        <div className="flex flex-col space-y-1">
                                            <h3 className="font-semibold text-purple-950 text-sm">{data.title}</h3>
                                            <a href={`tel: // ${data.text}`} className="text-xs text-gray-600 hover:text-purple-950 hover:font-semibold transition duration-300">{data.text}</a>
                                            <p className="text-[10px] text-gray-600">{data.text2}</p>
                                        </div>
                                    </div>
                                )

                            }
                        })}
                    </div>
                    <div className="flex flex-col mt-5">
                        <p className="text-sm font-semibold text-purple-950">Follow Us</p>
                        <div className="flex space-x-2.5 mt-2">
                            {social_Icons.map((icon) => (
                               <a href={icon.link}> <icon.icon  className="w-9 h-9 p-2.5 rounded-md cursor-pointer text-purple-500 shadow-md hover:shadow-xl transition-all"/></a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 md:p-5 mt-3 md:mt-0">
                    <form action="" className="w-full p-4 md:p-5 flex flex-col rounded-md shadow-md">
                        <h3 className="font-semibold text-purple-950 mb-4">Send Us a Message</h3>
                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="" className="text-[11px] font-semibold text-black mb-1">Full Name</label>
                            <div className="flex w-full h-9.5 rounded-sm items-center px-3 hover:outline-2 hover:outline-purple-100 border-1 border-gray-200 transition-all duration-300 hover:border-none">
                                <FaUser  className="w-3 h-3 text-gray-400 mr-2"/>
                                <input type="text" className="w-full h-full text-xs outline-none" placeholder="Enter your full name" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="" className="text-[11px] font-semibold text-black mb-1">Email Address</label>
                            <div className="flex w-full h-9.5 rounded-sm items-center px-3 hover:outline-2 hover:outline-purple-100 border-1 border-gray-200 transition-all duration-300 hover:border-none">
                                <FaEnvelope  className="w-3 h-3 text-gray-400 mr-2"/>
                                <input type="email" className="w-full h-full text-xs outline-none" placeholder="your.email@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="" className="text-[11px] font-semibold text-black mb-1">Subject</label>
                            <div className="flex w-full h-9.5 rounded-sm items-center px-3 hover:outline-2 hover:outline-purple-100 border-1 border-gray-200 transition-all duration-300 hover:border-none">
                                <FaBookOpen  className="w-3 h-3 text-gray-400 mr-2"/>
                                <input type="text" className="w-full h-full text-xs outline-none" placeholder="Subject title" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="" className="text-[11px] font-semibold text-black mb-1">Message</label>
                            <div className="flex w-full h-20 rounded-sm items-center px-3 hover:outline-2 hover:outline-purple-100 border-1 border-gray-200 transition-all duration-300 hover:border-none">
                                <textarea name="" id="" className="py-2 w-full h-full text-xs outline-none text-xs flex items-center" placeholder="Tell us how we can help you (max 500 characters)"></textarea>
                            </div>
                        </div>
                        <button className="flex items-center justify-center border-1 mt-3 h-11 text-sm font-semibold bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg cursor-pointer">
                            Send Message <FaPaperPlane  className="w-3 h-3 mt-0.5 ml-1"/>
                        </button>
                    </form>
                </div>
            </div>
            <Faqs />
        </>
    );
}