import { FaGlobeAmericas, FaUserGraduate,FaChalkboardTeacher, FaBriefcase, FaUsers, FaLightbulb, FaChartLine, FaFlask, FaHandshake, FaSmileBeam, FaBookReader, FaHome, FaHospitalUser, FaGraduationCap, FaBookOpen, FaAward} from "react-icons/fa"
import { MdArchitecture} from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BiBrain } from "react-icons/bi";
import { FiCpu} from "react-icons/fi";
import React from "react";
interface mission {
    id : number,
    icon : React.ElementType,
    title : string,
    text : string,
}

interface numbers {
    id : number,
    icon : React.ElementType,
    value : string,
    title : string,
    text : string
}

interface campus {
    id : number,
    image : string,
    title : string,
    text : string,
}
interface academics {
    id : numbers,
    image : string,
    title : string,
    text : string,
}
interface events {
    image : string,
    title : string, 
    text : string,
    date : string,
    tags : string
}
interface upcoming {
    month : string,
    date : number,
    tag : string,
    title : string,
    time : string,
    location : string
}
interface facs {image : string, icon : React.ElementType, title : string, description : string}
interface herosec {icon : React.ElementType, count: number, sign : string, title : string}
export const hero:herosec[] = [
    {
        icon : FaUsers,
        count : 15000,
        sign : '+',
        title : 'Students'
    },
    {
        icon : FaChalkboardTeacher,
        count : 200,
        sign : '+',
        title : 'Faculty Members'
    },
    
    {
        icon : FaBookOpen,
        count : 50,
        sign : '+',
        title : 'Programs'
    },
    {
        icon : FaUserGraduate,
        count : 12000,
        sign : '+',
        title : 'Alumni Worldwide'
    },
];
export const programs = [
    {
      title: "Undergraduate Programs",
      desc: "Explore diverse bachelor degree programs across multiple disciplines.",
      highlights: [
        "Popular courses: Engineering, Business, Arts & Sciences",
        "Research opportunities and internships",
        "Scholarship programs available",
      ],
      icon: FaGraduationCap,
      image: "/programs/progs1.webp",
      bullets: ["BSc, BA, BEng", "Industry placements", "Scholarships available"],
    },
    {
      title: "Postgraduate Programs",
      desc: "Advance your academic journey with master's and PhD programs.",
      highlights: [
        "Specializations in Science, Technology, Management",
        "Research-focused curriculum",
        "International collaboration opportunities",
      ],
      icon: FaBookOpen,
      image: "/programs/progs2.webp",
       bullets: ["Master's & PhD", "Research scholarships", "Professional doctorates"],

    },
    {
        title: "Professional / Certificate Programs",
        desc: "Enhance your skills with industry-focused short courses and certification programs.",
        highlights: [
            "Short-term professional training",
            "Industry-recognized certifications",
            "Flexible schedules for working individuals"
        ],
        icon: FaAward,
        image: "/programs/progs3.webp",
        bullets: ["Short courses", "CPD & microcredentials", "Executive education"],
    }
]
export const facilities:facs[] = [
    {
        image : '/facilities/facs1.webp',
        icon : FaBookReader,
        title : 'Digital Library',
        description: "Access thousands of e-books, journals, research papers, and multimedia learning resources.",
    },
    {
        image : '/facilities/facs2.webp',
        icon : FiCpu,
        title : 'Modern Laboratories',
        description: "State-of-the-art science, engineering, and computer laboratories for hands-on learning.",
    },
    {
        image : '/facilities/facs3.webp',
        icon : RiComputerLine,
        title : 'Learning Management System (LMS)',
        description: "A modern LMS where students access course materials, submit assignments, and attend online classes.",
    },
    {
        image : '/facilities/facs4.webp',
        icon : BiBrain,
        title : 'Research Centers',
        description: "Innovative research hubs driving academic discoveries and industry collaborations.",
    },
    {
        image : '/facilities/facs5.webp',
        icon : FaHome,
        title : 'Student Accomodation',
        description: "Comfortable on-campus and off-campus housing options to support student life.",
    },
    {
        image : '/facilities/facs6.webp',
        icon : FaHospitalUser,
        title : 'Health Centers',
        description: "A fully equipped medical center providing healthcare, emergency support, and wellness services.",
    },
    
]
export const testimonials = [
    {
        image : '/test/test1.jpg',
        name : 'Emma Richardson',
        role : 'Computer Science Students',
        rating : 5,
        text : 'The hands-on learning approach and  world-class faculty have transformed my understanding of technology. The research opportunities and industry connections have been invaluablefor my career development',
    },
    {
        image : '/test/test2.jpg',
        name : 'Marcus Johnson',
        role : 'Alumni - Software Engineer at Tech Crop',
        rating : 5,
        text : 'This university prepared me exceptionally well for the real world. Ths skills i gained and the network I built continue to benefit my career every single day, which made a spectacular candidates among competitors in the tech world.'
    },
    {
        image : '/test/test3.jpg',
        name : 'Priya Sharma',
        role : 'Medical Students',
        rating : 5,
        text : 'The clinical exposure and mentorship from experienced physicians have been extraordinary. The state-of-art facilities and patient-centered approach makes this the best place to study medicine'
    }
]
export const upcomingEvents: upcoming[] = [
    {
        month : 'MAR',
        date : 12,
        tag : 'Admissions',
        title : 'Open House Day',
        time : '10:00 AM - 4:00 PM',
        location : 'Main Campus'
    },
    {
        month : 'MAR',
        date : 22,
        tag : 'Research',
        title : 'Research Symposium',
        time : '9:00 AM - 5:00 PM',
        location : 'Science building'
    },
    {
        month : 'APR',
        date : 5,
        tag : 'Career',
        title : 'Career Fair 2025',
        time : '11:00 AM - 6:00 PM',
        location : 'Student Center'
    },
    {
        month : 'APR',
        date : 12,
        tag : 'Culture',
        title : 'International Festival',
        time : '2:00 PM - 8:00 PM',
        location : 'Campus Grounds'
    },
]

export const newEvents: events[] = [
    {
        image : '/news/news1.webp',
        title : 'University Ranks Among Top 100 Global Institutions',
        text : 'Our insititution has achieved a remarkable milestone, securing a position in the top 100 universities worldwide, reflecting our commitment to academic excellence.',
        date : 'January 15 2025',
        tags : 'Rankings',
    },
    {
        image : '/news/news2.webp',
        title : 'Groundbreaking Research in Renewable Energy Published by Faculty Team',
        text : 'Our research team has published pioneering findings on solar energy efficiency, potentially revolutionizing sustaiinable power generation.',
        date : 'January 12 2025',
        tags : 'Research'
    },
    {
        image : '/news/news3.webp',
        title : 'New State-of-the-Art Innovation Hub Opens on Campus',
        text : 'Students and faculty now have accessto cuttind-edge facilities designed to foster creativity, collaboraiton, and technological innovation.',
        date : 'January 10 2025',
        tags : 'Campus'
    },
    {
        image : '/news/news4.webp',
        title : 'International Partnership Established with Leading European Universities',
        text : 'New exchange programs and collaborative research opportunities now available for students and faculty across multiple disciplines.',
        date : 'January 8 2025',
        tags : 'International'
    },
    {
        image : '/news/news5.webp',
        title : 'Student Startup Wins National Innovation Competition',
        text : 'A team of our entreprenuership studente secured first place and $100,000 in funding for their innovative healthcare technology solution.',
        date : 'January 5 2025',
        tags : 'Student Achievement'
    },
    {
        image : '/news/news6.webp',
        title : 'Annual Science Fair Showcases Student Innovation and Creativity',
        text : 'Over 200 projects were presented by students from various departments, demonstrating exceptional research and problem-solving skills',
        date : 'January 3 2025',
        tags : 'Events'
    }
]
export const campus_life : campus[] = [
    {
        id : 1,
        image : '/campus/campus1.webp',
        title : 'Student Organization',
        text : 'Join over 150 student clubs and organizations covering academics, sports, art, culture and community service',
    },
    {
        id : 2,
        image : '/campus/campus2.webp',
        title : 'Sports & Recreation',
        text : 'Stay active with our Olympic-sized pool, fitness centers, sport teams, and recreational programs for all skill levels'
    },
    {
        id : 3,
        image : '/campus/campus3.webp',
        title : 'Arts & Culture',
        text : 'Express yourself through music, theater, dance, visual arts, and cultural events that celebrate diversity and creativity.'
    },
    {
        id : 4,
        image : '/campus/campus4.webp',
        title : 'Campus Housing',
        text : 'Live in modern residence hall with study spaces, dining facilities, and a supportive community of peers and mentors.'
    },

]
export const excellence_numbers: numbers[] = [
    {
        id : 1, 
        icon : FaChartLine,
        value : '95%',
        title : 'Graduate Employment Rate',
        text : 'Within 6 months of graduation'
    },
    {
        id : 2, 
        icon : FaFlask,
        value : '$50M+',
        title : 'Research Funding',
        text : 'Annual research grants and funding'
    },
    {
        id : 3, 
        icon : FaHandshake,
        value : '500+',
        title : 'Industry Partnerships',
        text : 'Collaborations with leading companies'
    },
    {
        id : 4, 
        icon : FaSmileBeam,
        value : '4.8/5',
        title : 'Student Satisfaction',
        text : 'Based on annual student surverys'
    },
]
export const success_mission: mission[] = [
    {
        id : 1,
        icon : FaGlobeAmericas ,
        title : 'Global Recognition',
        text : 'Our degrees are recognized worldwide, opening doors to international career opportunities and advanced studies at prestigious institutions'
    },
    {
        id : 2,
        icon : FaUserGraduate ,
        title : 'Expert Faculty',
        text : 'Learn from industry leaders and renowned researchers who bring the real-world experience and cutting-edge knowledge to classroom.'
    },
    {
        id : 3,
        icon : MdArchitecture ,
        title : 'State-of-the-Art Facilities',
        text : 'Access modern laboratories, research centers, libraries, and technology that support your academic and personal growth'
    },
    {
        id : 4,
        icon : FaBriefcase ,
        title : 'Career Support',
        text : 'Benefit from our extensive alumni network, internship programs, and career services that connect you with top employers globally.'
    },
    {
        id : 5,
        icon : FaUsers,
        title : 'Diverse Community',
        text : 'Join students from over 100 countries, creating a rich multicultural environment that prepares youfor global citizenship.'
    },
    {
        id : 6,
        icon : FaLightbulb,
        title : 'Innovation Hub',
        text : 'Engage in groundbreaking research and entreprenuership programs that turn your ideas into reality with mentorship and funding.'
    },
];
