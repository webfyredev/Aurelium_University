"use client";
interface HeaderProps {
    image : string,
    title : string,
    text : string
}
export default function Header({image, title, text} : HeaderProps){
    return(
        <>
            <div className="w-full h-110 mt-16 mb-5 relative">
                <img src={image} className="w-full h-full object-cover"/>
                <div className="absolute w-full h-full top-0 left-0 absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-900/60">
                    <div className="w-150 h-auto relative top-45 left-[28%] p-5 flex flex-col items-center space-y-2">
                        <h3 className="text-5xl font-bold text-white">
                            {title}
                        </h3>
                        <p className="text-purple-100 text-sm">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}