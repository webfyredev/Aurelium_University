import { Metadata } from "next";
import Portal_Registration from "./portalClients";

export const metadata : Metadata = {
    title : "Aurelium | Portal"
};

export default function Portal_Page(){
    return <Portal_Registration />
}