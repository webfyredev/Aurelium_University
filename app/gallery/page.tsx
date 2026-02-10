import { Metadata } from "next";
import Campus_Gallery from "./galleryClients";

export const metadata : Metadata = {
    title : "Aurelium | Gallery"
};

export default function Gallery(){
    return <Campus_Gallery />
}