import FooterCTA from "./components/footer_Cta";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import NewsEvents from "./components/news";
import Testimonials from "./components/testimonial";
import { campus_life, excellence_numbers, success_mission } from "./pageData";

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <div className="w-full p-5 flex space-x-5 mt-10">
    <img src="/about/about1.webp" alt="About_Us" className="w-1/2 h-100 rounded-md" />
    <div className="flex flex-col p-5 w-1/2">
    <h2 className="font-bold text-purple-950 text-3xl">Welcome To Aurelium University</h2>
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
    <button className="mt-4 w-35 py-2.5 border-1 text-sm font-semibold rounded-md cursor-pointer bg-gradient-to-r from-purple-500 to-purple-600 text-white">
      Learn More
    </button>
    </div>
    </div>
    <div className="flex flex-col items-center p-10">
      <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
        WHY AURELIUM UNIVERSITY
      </h4>
      <h2 className="text-4xl font-bold mt-2 text-purple-900">
        Your Success is Our Mission
      </h2>
      <p className="w-150 text-sm text-center text-gray-600 mt-2">
        We provide exceptional educationa experience that combines academic excellence, innovative research, and comprehensive student support to help you achieve your goals
      </p>
      <div className="w-full mt-5 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    <div className="w-full border-1 border-red-500 p-10 bg-gradient-to-r from-slate-50 to-purple-50 flex flex-col items-center">
        <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
          DISCOVER YOUR PATH
        </h4>
        <h2 className="text-4xl font-bold mt-2 text-purple-900">
          Featured Programs
      </h2>
      <div className="w-20 mt-5 border-1 border-purple-700"></div>
    </div>
    <div className="w-full p-10 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col items-center"> 
        <h3 className="text-3xl font-bold mt-5 text-white">
          Excellence in Numbers
        </h3>
        <p className="w-150 text-sm text-center mt-2 text-purple-100">
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
    <div className="bg-white w-full p-10 flex flex-col items-center">
        <h4 className="font-semibold text-xs text-spacing-5 mt-5 text-purple-600">
          EXPERIENCE CAMPUS LIFE
        </h4>
        <h2 className="text-4xl font-bold mt-2 text-purple-900">
          More Than Just Academics
        </h2>
        <p className="w-150 text-sm text-center text-gray-600 mt-2">
          Discover a vibrant campus community where you can pursue your passion, make lifelong friends,
          and create unforgettable memories.
        </p>
        <div className="w-20 mt-5 border-2 border-purple-700"></div>
        <div className="w-[90%] mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
          {campus_life.map((campus) => (
            <div key={campus.id} className="rounded-md relative flex flex-col items-center">
              <img src={campus.image} alt={campus.title} className="w-full h-50 object-cover rounded-t-md" />
              <div className="absolute object-cover rounded-md inset-0 top-0 left-0 bg-black/25 hover:bg-black/10 transition-all duration-300 cursor-pointer">
                <h3 className="absolute top-37 left-5 text-xl font-bold text-white">
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

    </div>
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
