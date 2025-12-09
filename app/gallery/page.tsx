import DefaultNavBar from "../components/defaultNav";
import Header from "../components/header";
import { Metadata } from "next";

const metadata : Metadata = {
    title : "Aurelium | Gallery"
}

export default function Campus_Gallery(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image = ''
            title= 'Campus Gallery'
            text = 'Experience Life at Excellence University through our vibrant photo collection'/>
        </>
    );
}