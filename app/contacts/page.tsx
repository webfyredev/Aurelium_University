import { Metadata } from "next";
import Contacts from "./contactClients";


export const metadata : Metadata = {
    title : "Aurelium | Contacts"
};

export default function Contact_Page(){
    return <Contacts />
}