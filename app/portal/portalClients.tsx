"use client";
import { textFadeIn } from "../animations/framer";
import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { motion } from 'framer-motion'

export default function Portal_Registration(){
    return(
        <>
            <DefaultNavBar />
            <div className="w-full p-10 mt-25 flex flex-col items-center h-55">
                <motion.h3
                {...textFadeIn}
                className="font-semibold text-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text"
                >
                    Page Out Soon
                </motion.h3>
            </div>
        </>
    );
}