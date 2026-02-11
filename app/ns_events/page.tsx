import { Metadata } from "next";
import News_Events from "./ns_events";
import { Suspense } from "react";

export const metadata : Metadata = {
    title : 'Aurelium | News & Events'
};

export default function NewsEvents_Page(){
    return(
         <Suspense fallback={<div>Loading...</div>}>
            <News_Events />
        </Suspense>
    )
}