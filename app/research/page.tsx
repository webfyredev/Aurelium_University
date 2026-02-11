import { Metadata } from "next";
import Research from "./researchClient";
import { Suspense } from "react";

export const metadata : Metadata = {
    title : "Aurelium | Research"
};

export default function Research_Page(){
    return(
         <Suspense fallback={<div>Loading...</div>}>
            <Research />
        </Suspense>
    )
    
}

