import { Metadata } from "next";
import Campus_Gallery from "./galleryClients";
import { Suspense } from "react";

export const metadata : Metadata = {
    title : "Aurelium | Gallery"
};

export default function Gallery(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Campus_Gallery />
        </Suspense>
    )
}