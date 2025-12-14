// "use client";
import type { Metadata } from "next";
import Header from "../components/header";
import DefaultNavBar from "../components/defaultNav";
import { campus_infra, difference, impacts, milestone, team, values, } from "./about";
import FooterCTA from "../components/footer_Cta";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import Alumni_Stories from "../components/alumni";

export const metadata: Metadata = {
  title: "Aurelium | About",
  icons : {
    icon : '/logo.png'
  }

};
export default function About_Us(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image = '/header/abouts.webp'
            title = 'Our Story'
            text = "Building tomorrow's leaders since 2000"/>
            <div className="w-full lg:flex lg:flex-row flex flex-col lg:space-x-10 p-5 lg:p-10">
                <div className="w-full lg:w-[45%] md:h-110 lg:h-140 lg:p-5">
                    <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
                        ABOUT AURELIUM UNIVERSITY
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Empowering Minds, <br /> Transforming Lives
                    </h2>
                    <div className="w-20 my-5 border-2 border-purple-700"></div>
                    <p className="text-sm mb-5">
                        For over six decades, Aurelium University has been at the forefront of higher education, research, and innovation.
                        We are committed to nurturing the next generation od leaders, thinkers and changemakers who will shape our world.
                        
                    </p>
                    <p className="text-sm mb-5">
                        Our diverse community of students, faculty, and staff from over 180 
                        countries creates a vibrant learning environment where ideas flourish 
                        and boundaries are pushed. We combine academic rigor with real-world 
                        application ensuring our graduates are prepared to excel in their chosen 
                        fields.
                    </p>
                    <div className="w-full py-5 flex space-x-5">
                        <div className="w-1/2 h-20 rounded-md bg-purple-100 flex flex-col items-center">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text mt-3">
                                25+
                            </h3>
                            <p className="text-[11px] font-semibold mt-1 text-slate-500">
                                YEARS OF EXCELLENCE
                            </p>
                        </div>
                        <div className="w-1/2 h-20 rounded-md bg-purple-100 flex flex-col items-center">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text mt-3">
                                100K
                            </h3>
                            <p className="text-[11px] font-semibold mt-1 text-slate-500">
                                ALUMNI WORLDWIDE
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[45%] h-75 md:h-100 lg:h-140 lg:p-5 mt-5 lg:mt-0">
                    <img src="/about/about2.webp" alt="about_Us" className="w-full h-full rounded-md shadow-md object-cover" />
                </div>
            </div>
            <div className="w-full p-5 mt-5 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-5">
                    OUR JOURNEY
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    MileStones & History
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-full lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
                    {milestone.map((data) => (
                        <div key={data.id} className=" bg-white mb-2 lg:mb-3 p-5 rounded-xl shadow-sm flex flex-col items-center space-y-1.5 hover:shadow-lg cursor-pointer hover:border-1 hover:border-purple-500 transition-all duration-300">
                        <h3 className="font-bold text-lg bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text">
                            {data.year}
                        </h3>
                        <p className="font-bold text-md text-purple-950">
                            {data.title}
                        </p>
                        <p className="text-[13px] text-center">
                            {data.text}
                        </p>
                        </div>
                    ))}

                </div>

            </div>
            <div className="w-full p-5 lg:p-15 bg-white flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    WORLD-CLASS FACILITIES
                </h4>
                <h2 className="text-xl md:text-3xl font-bold text-purple-950">
                    Campus & Infrastructure
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-gray-500">
                    Our 200-acre campus features state-of-the-art facilities designed to support academic excellence, 
                    research innovation, and student well-being.
                </p>
                <div className="w-full lg:px-10 py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {campus_infra.map((data) => (
                        <div key={data.id} className="bg-white p-5 flex flex-col items-center space-y-2 shadow-md hover:shadow-lg rounded-xl cursor-pointer transition-all duration-300">
                            <data.icon  className="w-12 h-12 p-3 border-1 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <h3 className="text-purple-950 font-semibold text-sm mt-2">
                                {data.title}
                            </h3>
                            <p className="text-[12px] text-center">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-5 lg:p-15 bg-purple-950 border-1 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-300 mb-3">
                    LEADERSHIP TEAM
                </h4>
                <h2 className="text-3xl font-bold text-white">
                    Meet Our Visionaries
                </h2>
                <div className="w-20 my-3 border-2 border-white"></div>
                <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-5">
                    {team.map((team) => (
                        <div key={team.id} className="p-5 rounded-md bg-white relative flex flex-col items-center group overflow-hidden">
                            <img src={team.image} className="w-full h-55 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"/>
                            <div className="absolute w-12 h-12 top-52 left-[85%] rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center cursor-pointer">
                                <FaLinkedinIn  className="text-white"/>
                            </div>
                            <h3 className="font-bold text-md mt-3">
                                {team.name}
                            </h3>
                            <p className="text-xs italic bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                                {team.position}
                            </p>
                            <p className="text-[11px] text-gray-600 text-center mt-3">
                                {team.context}
                            </p>
                            <a href={`mailto : ${team.mail}`} className="font-semibold text-gray-600 text-[10px] mt-4 flex items-center">
                                <FaEnvelope className="mr-1" /> {team.mail}
                            </a>
                        </div>
                    ))}
                </div>

            </div>
            <div className="w-full p-5 lg:p-10 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    OUR VALUES
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    What Drives Us
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-full lg:px-10 py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {values.map((data) => (
                        <div key={data.id} className="flex flex-col items-center px-8 py-5 space-y-3 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300">
                            <data.icon  className="w-12 h-12 p-3 border-1 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <h3 className="text-purple-950 font-semibold text-sm mt-2">
                                {data.title}
                            </h3>
                            <p className="text-[12px] text-center mb-2">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="w-full mt-5 p-5 lg:p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    VIRTUAL EXPERIENCE
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Campus Video Tour
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="mt-5 w-full lg:w-[90%] lg:p-5">
                    <video src="" controls className="w-full  h-75 md:h-90 lg:h-120 border-1 rounded-lg object-cover"></video>
                </div> 
            </div>
            <div className="w-full lg:px-5 py-15 flex flex-col items-center bg-gradient-to-r from-slate-50 to-purple-50">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    ACHIEVEMENTS & RECOGNITION
                </h4>
                <h2 className="text-3xl font-bold text-purple-950">
                    Our Impact
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-full lg:w-[85%] mt-5 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {impacts.map((data) => (
                        <div key={data.id} className="flex flex-col items-center p-5 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 bg-white">
                            <data.icon  className="w-12 h-12 p-3 rounded-md text-purple-600"/>
                            <h3 className="text-purple-950 font-semibold text-sm mt-2">
                                {data.title}
                            </h3>
                            <p className="text-[12px] text-center mb-2">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col items-center p-5 lg:p-10 bg-white">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    COMMUNITY IMPACT
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950">
                    Making a Difference
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-xs md:text-[13px] w-85 md:w-150 text-center mt-2 text-gray-500">
                    Our commitment extends beyond campus walls. We actively contribute to society through research, community services,
                    and industry partnerships.
                </p>
                <div className="w-full lg:w-[85%] mt-5 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {difference.map((data) => (
                        <div key={data.id} className="flex flex-col items-center p-5 shadow-sm hover:shadow-lg rounded-xl cursor-pointer transition-all duration-300">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text">
                                {data.value}
                            </h3>
                            <p className="text-sm font-semibold mt-2 text-purple-950">
                                {data.title}
                            </p>
                            <p className="text-[11px] text-center mt-2 text-gray-500">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Alumni_Stories />
            <FooterCTA 
            title = 'Join Our Legacy of Excellence'
            text = 'Become part of a community thats shaping the future through education, innovation, and impact'
            btn_text1="Apply Now"
            btn_text2="Schedule a Visit"/>
        </>
    );
}