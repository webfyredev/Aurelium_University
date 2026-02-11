import Academics from "./academicsClients";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata : Metadata = {
    title : "Aurelium | Academics",
};

export default function AcademicsPage(){
    return(
         <Suspense fallback={<div>Loading...</div>}>
            <Academics />
        </Suspense>
    )
    
}
