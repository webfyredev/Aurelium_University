import { Metadata } from "next";
import Contacts from "./contactClients";
import { Suspense } from "react";


export const metadata : Metadata = {
    title : "Aurelium | Contacts"
};

export default function Contact_Page(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Contacts />
        </Suspense>
    )
}