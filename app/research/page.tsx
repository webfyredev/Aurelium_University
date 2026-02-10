import { Metadata } from "next";
import Research from "./researchClient";

export const metadata : Metadata = {
    title : "Aurelium | Research"
};

export default function Research_Page(){
    return <Research />
}

