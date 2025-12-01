import DefaultNavBar from "../components/defaultNav";
import FooterCTA from "../components/footer_Cta";
import Header from "../components/header";

export default function Academics(){
    return(
        <>
            <DefaultNavBar />
            <Header 
            image=""
            title = 'Academic Excellence'
            text = 'Discover world-class programs designed to shape future leaders and innovators'/>
            <FooterCTA
            title = 'Ready to Begin Your Academic Journey?'
            text = 'Explore our programs and find the perfect fit for your aspirations'
            btn_text1 = 'Apply Now'
            btn_text2="Contact Us"
            />
        </>
    );
}  