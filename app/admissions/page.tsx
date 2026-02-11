import { Metadata } from "next";
import Admission from "./admissionClients";
import { Suspense } from "react";

export const metadata: Metadata  = {
    title : "Aurelium | Admissions"
};

export default function  AdmissionPage(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Admission />
        </Suspense>
    )
}
