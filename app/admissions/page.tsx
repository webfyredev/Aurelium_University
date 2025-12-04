import { FaArrowRight, FaAward, FaCheck, FaEnvelope, FaPhone, FaPhoneAlt, FaUsers } from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { aid, apply, requirements, scholarsips } from "./admission";
import { FaPaperPlane } from "react-icons/fa6";
import { Metadata } from "next";
export const metadata : Metadata = {
    title : "Aurelium | Admissions"
}
export default function Admissioons(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image="/header/admission.webp"
            title = "Join Our Community"
            text="Start your journey to excellence. Apply todayand transform your future."
            />
            <div className="w-full p-10 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    APPLICATION PROCESS
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    How to Apply
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-[90%] mt-5 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {apply.map((data) => (
                        <div key={data.id} className="p-5 flex flex-col items-center group rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:border-1 hover:border-purple-500 transition-all duration-300">
                            <data.icon  className="w-13 h-13 p-4 rounded-full bg-purple-100 text-purple-500 group-hover:bg-gradient-to-r from-purple-500 to-purple-600 group-hover:text-white "/>
                            <h2 className="text-sm font-semibold text-purple-950 mt-2.5">
                                {data.title}
                            </h2>
                            <h3 className="text-[10px] mt-2 text-center">
                                {data.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-10 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    ADMISSION REQUIREMENTS
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    What You Need
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-[90%] p-5 mt-5 grid grid-cols-1 sm:grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {requirements.map((data) => (
                        <div key={data.id} className="p-5 flex flex-col items-center rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer">
                            <data.icon  className="w-13 h-13 p-3 border-1 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <h2 className="mt-3 font-semibold text-md text-purple-950">
                                {data.title}
                            </h2>
                            <ul className="w-full flex flex-col space-y-3 mt-5">
                                {data.qualfs.map((data, index) => (
                                    <li key={index} className="flex items-center text-[11px]"><FaCheck  className="w-2.5 h-2.5 border-1 mr-1 mt-0.5 p-0.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>{data}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-5 bg-white flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    APPLICATION EXPERIENCE
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Application Form
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-[13px] w-150 text-center mt-2 text-gray-500">
                    Complete the form below to begin your application
                </p>
                <form action="" className="w-[70%] my-5 p-5 shadow-lg rounded-ms">
                    <div className="flex space-x-5 w-full mb-3">
                        <div className="w-1/2">
                            <label htmlFor="" className="text-xs font-semibold text-purple-950">First Name</label>
                            <input type="text" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="Enter your first name" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="" className="text-xs font-semibold text-purple-950">Last Name</label>
                            <input type="text" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="flex space-x-5 w-full mb-3">
                        <div className="w-1/2">
                            <label htmlFor="" className="text-xs font-semibold text-purple-950">Email Address</label>
                            <input type="email" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="lads@gmail.com" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="" className="text-xs font-semibold text-purple-950">Phone Number</label>
                            <input type="text" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="+(234) 8089-4156" />
                        </div>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="" className="text-xs font-semibold text-purple-950">Date of Birth</label>
                        <input type="date" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="+(234) 8089-4156" />
                    </div>
                    <div className="flex space-x-5 w-full mb-3">
                        <div className="w-1/2">
                            <label htmlFor="" className="text-xs font-semibold text-purple-950">Program</label>
                            <select name="" id="" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md"></select>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="" className="text-xs font-semibold text-purple-950">Academic Level</label>
                            <select name="" id="" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md"></select>
                        </div>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="" className="text-xs font-semibold text-purple-950">Address</label>
                        <input type="text" className="w-full h-10 border-1 mt-1.5 px-3 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="Enter your full address" />
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="" className="text-xs font-semibold text-purple-950">Personal Statement</label>
                        {/* <input type="date" className="" placeholder="+(234) 8089-4156" /> */}
                        <textarea name="" id="" className="w-full h-20 border-1 mt-1.5 px-3 py-2 text-xs border-gray-200 outline-purple-200 rounded-md" placeholder="Tell us about yourself, your goals, and why you want to join Aurelium university."></textarea>
                    </div>
                    <div className="w-full mb-3 flex space-x-2">
                        <input type="checkbox" name="" id="" /><p className="text-xs">I agree to the <a href="" className="text-purple-500 font-semibold">Terms and conditions</a> and confirm that all information provided is accurate</p>
                    </div>
                    <button className="flex items-center justify-center border-1 w-full h-11 text-sm my-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-md cursor-pointer">
                        Submit Application <FaPaperPlane  className="w-3 h-3 mt-0.5 ml-1"/>
                    </button>
                </form>
            </div>
            <div className="w-full p-10 flex flex-row items-center bg-gradient-to-r from-slate-50 to-purple-50 space-x-5">
                <div className="w-1/2 p-5">
                    <p className="w-40 text-[10px] text-green-800 py-1 text-center bg-green-200 font-semibold rounded-lg">Financial Support Available</p>
                    <h2 className="text-4xl font-bold mt-3 text-purple-950">
                        Scholarships & Financial Aid
                    </h2>
                    <p className="text-xs mt-4 text-gray-600">
                        We believe that financial constraints should ever limit educational opportunities. Aurelium University offers comprehensive scholarships programs and financial aid to deserving students
                    </p>
                    <ul className="flex flex-col space-y-4 mt-4">
                    {aid.map((aid, index) => (
                        <li key={index} className="flex text-xs text-gray-700 items-center"><FaCheck  className="w-2.5 h-2.5 p-0.5 rounded-full mr-1 mt-1 bg-green-500 text-white"/>{aid}</li>
                    ))}
                    </ul>
                    <button className="flex items-center border-2 border-purple-950 mt-8 px-8 py-3 text-xs text-purple-950 font-semibold rounded-md cursor-pointer hover:bg-gradient-to-r from-purple-500 to-purple-600 hover:text-white hover:border-none transition-all duration-300">Learn About More Scholarships <FaArrowRight className="ml-1 mt-0.5" /></button>
                </div>
                <div className="w-1/2 p-5 flex flex-col space-y-3">
                    {scholarsips.map((data, index) => (
                        <div key={index} className="p-3 rounded-md shadow-sm flex flex-col space-y-2 bg-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-semibold text-purple-950">
                                {data.title}
                                </h3>
                                <FaAward  className="text-purple-500"/>
                            </div>
                            <p className="text-[10px] text-gray-700 font-semibold">
                                {data.text}
                            </p>
                            <div className="flex items-center justify-center w-30 text-[10px] font-semibold h-6 bg-purple-100 text-purple-500 rounded-full">
                                Up to {data.percent} Tuition
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-10 flex flex-col items-center bg-white">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    HAVE QUESTION?
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Frequently Asked Questions
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
            </div>
            <div className="w-full py-5 px-15 bg-purple-950 flex justify-between items-center">
                <div className="flex space-x-5 p-5 items-center">
                    <FaUsers  className="w-10 h-10 text-purple-200"/>
                    <div className="">
                        <h3 className="font-bold text-xl text-white">
                            Need Help with Your Application?
                        </h3>
                        <p className="text-[13px] text-purple-100">Our admissions team is here to assist you</p>
                    </div>
                </div>
                <div className="flex space-x-5 p-3">
                    <button className="flex items-center bg-white px-7 py-2 cursor-pointer text-[13px] text-purple-950 font-semibold rounded-md"><FaPhoneAlt  className="w-3 h-3 mt-0.5 mr-1"/> Call Us</button>
                    <button className="flex items-center bg-purple-500 px-7 py-2 cursor-pointer text-[13px] text-white font-semibold rounded-md"><FaEnvelope  className="w-3 h-3 mt-0.5 mr-1"/> Email Admissions</button>
                </div>
            </div>
        </>
    );
}