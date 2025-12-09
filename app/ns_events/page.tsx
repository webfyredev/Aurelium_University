import { FaArrowRight, FaEnvelope} from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { highlights, press_media, social_media } from "./events";
import Latest_Research_News from "../components/research_news";

export default function News_Events(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image = ''
            title = 'News & Events'
            text = 'Stay updated with the latest happenings at Aurelium University'/>
            <Latest_Research_News />
            <div className="w-full p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    COMING SOON
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950 text-center">
                    Upcoming Events Highlights
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-[90%] p-5 rounded-sm mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {highlights.map((data, index) => (
                        <div key={index} className="flex flex-col items-center p-5 rounded-xl shadow-sm bg-white">
                            <data.icon  className="w-12 h-12 p-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <p className="text-xs font-semibold text-purple-500 mt-3">{data.date}</p>
                            <h3 className="font-semibold text-purple-950 mt-2">{data.title}</h3>
                            <p className="text-xs text-center mt-3">{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-15 w-full flex flex-col items-center bg-white">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    IN THE MEDIA
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950 text-center">
                    Press Releases & Media Coverage
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <div className="w-[90%] p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {press_media.map((media, index) =>(
                        <div key={index} className=" rounded-md p-5 flex space-x-2 shadow-sm hover:shadow-lg transition">
                            <media.icon  className="w-10 h-10 p-3 rounded-lg bg-purple-100 text-purple-500"/>
                            <div className="flex flex-col">
                                <p className="text-[10px]"><span className="mr-2 font-semibold text-purple-500 text-xs">{media.tits}</span>{media.date}</p>
                                <h3 className="font-semibold text-purple-950 text-sm">{media.title}</h3>
                                <a href="" className="mt-2 text-[10px] font-bold text-purple-500 flex items-center">Read Article <FaArrowRight  className="w-2 h-2 mt-0.5 ml-0.5"/></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
                <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600 mb-3">
                    STAY CONNECTED
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-950">
                    Follow Us on Social Media
                </h2>
                <div className="w-20 my-3 border-2 border-purple-700"></div>
                <p className="text-xs md:text-[13px] md:w-150 w-85 text-center mt-2 text-gray-500">
                    Join our vibrant community and stay updated with daily news, events and student life.
                </p>
                <div className="w-[90%] p-5 mt-5 rounded-sm grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {social_media.map((media, index) => (
                        <div key={index} className="p-5 rounded-xl flex flex-col items-center space-y-2 bg-white shadow-sm">
                            <media.icon  className="w-12 h-12 border-1 p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <p className="font-semibold text-purple-950 text-sm">{media.name}</p>
                            <h3 className="text-lg font-bold text-purple-500">{media.value}</h3>
                            <p className="text-xs">{media.text} daily interactions</p>
                            <a href="" className="w-full py-1.5 text-xs font-semibold text-center rounded-sm bg-purple-100 text-purple-500">Follow</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-15 py-10 w-full bg-gradient-to-r from-purple-500 to-purple-600 flex justify-between items-center">
                <div className="flex space-x-3">
                    <FaEnvelope  className="w-10 h-10 rounded-full p-3 bg-purple-300 text-white"/>
                    <div className="flex flex-col space-y-1.5">
                        <h3 className="font-semibold text-white">Subscribe to our Newsletter</h3>
                        <p className="text-xs text-purple-100">Get weekly updated delivered to your inbox</p>
                    </div>
                </div>
                <a href="#" className="flex items-center bg-white rounded-full text-xs font-semibold px-5 h-8 text-purple-500 cursor-pointer">
                    <FaEnvelope className="mr-1" /> Subscribe Now
                </a>
            </div>
        </>
    );
}