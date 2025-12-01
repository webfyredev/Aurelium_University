import { FaCheck } from "react-icons/fa";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { apply, requirements } from "./admission";

export default function Admissioons(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image=""
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
                        <div className="p-5 flex flex-col items-center group rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:border-2 hover:border-purple-500 transition-all duration-300">
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
                        <div className="p-5 flex flex-col items-center rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer">
                            <data.icon  className="w-13 h-13 p-3 border-1 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>
                            <h2 className="mt-3 font-semibold text-md text-purple-950">
                                {data.title}
                            </h2>
                            <ul className="w-full flex flex-col space-y-3 mt-5">
                                {data.qualfs.map((data) => (
                                    <li className="flex items-center text-[11px]"><FaCheck  className="w-2.5 h-2.5 border-1 mr-1 mt-0.5 p-0.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white"/>{data}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}