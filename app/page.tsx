"use client";
import { FaArrowRight } from "react-icons/fa";
import FooterCTA from "./components/footer_Cta";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import NewsEvents from "./components/news";
import Testimonials from "./components/testimonial";
import { campus_life, excellence_numbers, facilities, programs, success_mission } from "./pageData";
import ResearchInnovation from "./components/research";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer'
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Aurelium | Home",
  icons : {
    icon : '/logo.png'
  }

};
export default function Home() {
  const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
    triggerOnce : false,
    threshold : 0.5,
  });
  return (
    <>
    <NavBar />
    <Hero />
    <div className="w-full p-5 lg:flex lg:flex-row flex flex-col space-x-5 mt-10">
    <img  src="/about/about1.webp" alt="About_Us" className="w-full lg:w-1/2 lg:h-95 h-100 object-cover rounded-md hover:scale-102 transition duration-300" />
    <div className="flex flex-col lg:p-5 w-full lg:w-1/2">
    <h2 className="font-bold text-purple-950 text-xl md:text-3xl mt-5 lg:mt-0">Welcome To Aurelium University</h2>
    <p className="font-semibold mt-5 text-xl">
      Our Vission
    </p>
    <p className="text-sm my-1">
      To be a leading center of academic excellence and innovation, 
      inspiring students and faculty to advance knowledge, drive positive 
      change, and shape a brighter future for society.
    </p>
    <p className="font-semibold mt-5 text-xl">
      Our Mission
    </p>
    <p className="text-sm my-1">
      Our mission is to provide high-quality education that fosters critical thinking, 
      innovation, and leadership. We are committed to nurturing students’ intellectual 
      and personal growth, preparing them to make meaningful contributions in a global society.
    </p>
    <button  className="mt-4 w-35 py-2.5 border-1 text-sm font-semibold rounded-md cursor-pointer bg-gradient-to-r from-purple-500 to-purple-600 text-white">
      Learn More
    </button>
    </div>
    </div>
    <div className="w-full p-5 lg:p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
        <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
          DISCOVER YOUR PATH
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-purple-900">
          Featured Programs
      </h2>
      <div className="w-20 mt-5 border-2 border-purple-700"></div>
      <div className="w-full mt-5 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((data, index) => (
          <div key={index} className="w-full rounded-md bg-white flex flex-col shadow-sm group overflow-hidden hover:shadow-lg transition duration-300">
            <img src={data.image} alt={data.title} className="h-52 w-full object-cover rounded-t-md group-hover:scale-105 transition duration-300" />
            <div className="flex flex-col p-3 w-full">
              <h3 className="mt-2 font-semibold text-purple-950">
                {data.title}
              </h3>
              <p className="text-gray-600 mt-1 text-[13px]">{data.desc}</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1.5">
                  {data.highlights.map((item, i) => (
                    <li key={i} className="text-[12px]">{item}</li>
                  ))}
              </ul>
              <p className="text-purple-950 mt-2 text-[13px] font-semibold">Available Degrees:</p>
              <ul className="space-x-2 mt-2 w-full grid sm:grid-cols-2 md:grid-cols-2 p-2 gap-2">
                  {data.bullets.map((buts, i) => (
                    <li key={i} className="text-[11px] p-2 flex items-center justify-center font-semibold text-center rounded-md bg-purple-100 text-purple-950 cursor-pointer">{buts}</li>
                  ))}
              </ul>
              <button className="w-[95%] border-1 my-3 py-2.5 text-sm cursor-pointer bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-md">
                  Learn More
              </button>
            </div>
          </div>
        ))}

      </div>
      <button 
        className="mt-10 border-1 border-purple-500 px-6 py-2.5 text-sm flex items-center rounded-md cursor-pointer font-semibold text-purple-500 hover:bg-gradient-to-r from-purple-500 to-purple-600 hover:text-white transition-all">
        Explore All Programs <FaArrowRight  className="w-2.5 h-2.5 mt-1 ml-1"/>
      </button>
    </div>
    <div className="flex flex-col items-center p-5 lg:p-10">
      <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
        WHY AURELIUM UNIVERSITY
      </h4>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-purple-900">
        Your Success is Our Mission
      </h2>
      <p className="w-85 md:w-150 text-xs md:text-sm text-center text-gray-600 mt-2">
        We provide exceptional educationa experience that combines academic excellence, innovative research, and comprehensive student support to help you achieve your goals
      </p>
      <div className="w-full mt-5 md:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {success_mission.map((data) => (
          <div key={data.id} className="space-y-3 p-5 rounded-sm flex flex-col items-center shadow-sm hover:shadow-lg cursor-pointer mb-3">
              <data.icon  className="border-1 w-13 h-13 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg"/>
              <h3 className="text-base font-semibold text-gray-800">
                {data.title}
              </h3>
              <p className="text-[12px] text-center text-gray-600">
                {data.text}
              </p>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full p-10 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col items-center"> 
        <h3 className="text-2xl md:text-3xl font-bold mt-5 text-white">
          Excellence in Numbers
        </h3>
        <p className="w-85 md:w-150 text-xs md:text-sm text-center mt-2 text-purple-100">
          Our commitment to quality education research excellence is reflected in our achievements and the success of our students and faculty.
        </p>
        <div className="w-full mt-5 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {excellence_numbers.map((data) =>(
            <div key={data.id} className="flex flex-col items-center p-5 space-y-2">
                <data.icon  className="h-14 w-14 p-3.5 rounded-md bg-purple-400 text-white"/>
                <h3 className="text-3xl font-bold text-white">
                  {data.value}
                </h3>
                <p className="text-sm font-semibold text-white">
                  {data.title}
                </p>
                <p className="text-xs font-semibold text-purple-200">
                  {data.text}
                </p>
            </div>
          ))}
        </div>
    </div>
    <div className="bg-white w-full p-5 lg:p-10 flex flex-col items-center">
        <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
          EXPERIENCE CAMPUS LIFE
        </h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-purple-900">
          More Than Just Academics
        </h2>
        <p className="w-85 md:w-150 text-xs md:text-sm text-center text-gray-600 mt-2">
          Discover a vibrant campus community where you can pursue your passion, make lifelong friends,
          and create unforgettable memories.
        </p>
        <div className="w-20 mt-5 border-2 border-purple-700"></div>
        <div className="w-full lg:w-[90%] mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
          {campus_life.map((campus) => (
            <div key={campus.id} className="rounded-md relative flex flex-col items-center group overflow-hidden">
              <img src={campus.image} alt={campus.title} className="w-full h-50 object-cover rounded-t-md group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute object-cover rounded-md inset-0 top-0 left-0 bg-black/25 hover:bg-black/10 transition-all duration-300 cursor-pointer">
                <h3 className="absolute top-37 left-5 text-lg md:text-xl font-bold text-white">
                  {campus.title}
                </h3>
              </div>
              <div className="z-1 bg-white p-3.5 rounded-b-md shadow-md">
                <h3 className="text-xs">
                {campus.text}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 border-1 border-purple-500 px-6 py-2.5 text-sm flex items-center rounded-md cursor-pointer font-semibold text-purple-500 hover:bg-gradient-to-r from-purple-500 to-purple-600 hover:text-white transition-all">
          Explore Campus Life <FaArrowRight  className="w-2.5 h-2.5 mt-1 ml-1"/>
        </button>
        <div className="w-full mt-10 lg:px-5 py-10 flex flex-col items-center">
            <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
              ACCESS FACILITIES
            </h4>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2 text-purple-900 text-center">
            Facilities & Campus Resources
            </h2>
            <div className="w-20 mt-5 border-2 border-purple-700"></div>
            <div className="w-full lg:p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map((facs, index) => (
                <div key={index} className="rounded-md shadow-sm flex flex-col mb-5 cursor-pointer group overflow-hidden">
                  <img src={facs.image} alt={facs.title} className="w-full h-52 object-cover rounded-t-md relative group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute w-10 h-10 ml-75 mt-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
                    <facs.icon  className="text-white"/>
                  </div>
                  <div className="flex flex-col p-3">
                    <h3 className="text-base font-semibold text-purple-950">
                      {facs.title}
                    </h3>
                    <p className="text-[13px] my-2">
                      {facs.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
    <ResearchInnovation />
    <NewsEvents />
    <Testimonials />
    <FooterCTA 
    title = 'Ready to Start Your Journey'
    text = 'Join thousands of students who are already shaping their future with us. Apply today and take the first step towards excellence'
    btn_text1="Apply Now"
    btn_text2="Contact Admission"/>

    </>
  );
}
