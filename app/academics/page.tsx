import Academics from "./academicsClients";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Aurelium | Academics",
};

export default function AcademicsPage(){
    return <Academics />
}
