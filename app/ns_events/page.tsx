import { Metadata } from "next";
import News_Events from "./ns_events";

export const metadata : Metadata = {
    title : 'Aurelium | News & Events'
};

export default function NewsEvents_Page(){
    return < News_Events />
}