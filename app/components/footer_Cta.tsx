"use client";
import { motion } from 'framer-motion'
interface ctaProps {
    title : string,
    text : string,
    btn_text1 : string,
    btn_text2 : string
}
export default function FooterCTA({title, text, btn_text1, btn_text2}:ctaProps){
    return(
        <>
            <div className="space-y-3 w-full p-x-10 py-15 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col items-center">
                <h3 className="font-bold text-3xl text-white">
                    {title}
                </h3>
                <p className="mt-2 w-150 text-sm text-center text-purple-100">
                    {text}
                </p>
                <div className="flex space-x-5 mt-3">
                    <motion.button 
                        whileHover={{scale : 1.05}}
                        whileTap={{ scale : 0.95}}
                        className="px-9 py-2.5 text-sm font-semibold rounded-sm bg-white text-purple-600 cursor-pointer">
                        {btn_text1}
                    </motion.button>
                    <motion.button 
                        whileHover={{scale : 1.05}}
                        whileTap={{ scale : 0.95}}
                        className="px-9 py-2.5 text-sm font-semibold rounded-sm bg-purple-900 text-white cursor-pointer">
                        {btn_text2}
                    </motion.button>
                </div>
            </div>
        </>
    );
}