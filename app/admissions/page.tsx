import { Metadata } from "next";
import Admission from "./admissionClients";

export const metadata: Metadata  = {
    title : "Aurelium | Admissions"
};

export default function  AdmissionPage(){
    return <Admission />
}
