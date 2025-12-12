import React from "react"
import { FaFlask, FaBriefcase, FaGlobe, FaUsers, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { SiX } from "react-icons/si";
interface highlights_events {icon : React.ElementType, date:string, title : string, text:string}
interface social_media {icon : React.ElementType, name : string, value : string, text :string, link:string}
export const highlights:highlights_events[] =[
    {
        icon : FaFlask,
        date : 'Feb 15, 2026',
        title : 'Animal Science Fair',
        text : 'Students showcase innovative research projects'
    },
    {
        icon : FaBriefcase,
        date : 'Feb 20, 2026',
        title : 'Career Expo 2025',
        text : 'Meet top employers and explore opportunities'
    },
    {
        icon : FaGlobe,
        date : 'Mar 1, 2026',
        title : 'International Conference',
        text : 'Global leaders discuss future of education'
    },
    {
        icon : FaUsers,
        date : 'Mar 10, 2026',
        title : 'Alumni Reunion',
        text : 'Reconnect with classmates and celebrate achievments'
    },
];
interface media{icon : React.ElementType, tits:string, date:string, title : string}
export const press_media:media[] = [
    {
        icon : FaFlask,
        tits : 'The Times',
        date : 'Jan 15, 2025',
        title : 'Aurelium University Ranks Top 50 Globally',
    },
    {
        icon : FaFlask,
        tits : 'Science Today',
        date : 'Jan 12, 2025',
        title : 'Breakthrough Rsearch in Renewable Energy',
    },
    {
        icon : FaFlask,
        tits : 'Education Weekly',
        date : 'Jan 8, 2025',
        title : 'Innovative Teaching Methods Transform Learning',
    },
    {
        icon : FaFlask,
        tits : 'Tech News',
        date : 'Jan 5, 2025',
        title : 'AI Lab Recieves $5M Research Grant',
    },
]
export const social_media:social_media[] = [
    {
        icon : SiX,
        name : 'Twitter',
        value : '125K',
        text : '15K',
        link : '',
    },
    {
        icon : FaInstagram,
        name : 'Instagram',
        value : '200K',
        text : '25K',
        link : ''
    },
    {
        icon : FaLinkedin,
        name : 'LinkedIn',
        value : '85K',
        text : '10K',
        link : '',
    },
    {
        icon : FaYoutube,
        name : 'YouTube',
        value : '150K',
        text : '50K',
        link : ''

    }
]

export const news_data = [
    {
    title: "University Ranks Among Top 100 Global Institutions in Latest QS",
    text: "Our institution has achieved a remarkable milestone, securing a position in the top 100 universities worldwide, reflecting our commitment to academic excellence.",
    author: "Dr. Sarah Mitchell",
    date: "January 15, 2025",
    image: "/news/newsData/news1.jpg",
    category: "Rankings"
  },

  {
    title: "Breakthrough Research Team Discovers Novel Solution for Clean Energy",
    text: "A team from the Faculty of Engineering has developed an innovative technique that significantly improves renewable energy storage efficiency.",
    author: "Prof. Daniel Roberts",
    date: "January 22, 2025",
    image: "/news/newsData/news2.jpg",
    category: "Research"
  },

  {
    title: "Campus Facilities Expansion: New Smart Library Opens",
    text: "The newly commissioned Smart Library features AI-powered learning spaces, digital research labs, and 24/7 collaborative study rooms.",
    author: "Emily Carter",
    date: "February 3, 2025",
    image: "/news/newsData/news3.jpg",
    category: "Campus"
  },

  {
    title: "University Signs International Partnership with Tokyo Tech",
    text: "A new global collaboration with Tokyo Institute of Technology aims to enhance student exchange, joint research, and cultural integration.",
    author: "Dr. Kenji Hiro",
    date: "February 10, 2025",
    image: "/news/newsData/news4.jpg",
    category: "International"
  },

  {
    title: "Engineering Students Win National Robotics Championship",
    text: "Our robotics team secured first place at the National Tech Innovators Competition with their autonomous rescue drone.",
    author: "Mark Benson",
    date: "February 14, 2025",
    image: "/news/newsData/news5.jpg",
    category: "Student Achievements"
  },

  {
    title: "Annual University Cultural Festival Attracts Over 5,000 Attendees",
    text: "The 2025 Cultural Festival featured performances, exhibitions, and showcases celebrating traditions from over 20 countries.",
    author: "Laura Johnson",
    date: "February 20, 2025",
    image: "/news/newsData/news6.jpg",
    category: "Events"
  },

  {
    title: "New Campus Shuttle System Launched for Easier Student Mobility",
    text: "The modern shuttle system includes GPS tracking, extended routes, and eco-friendly buses designed to improve transportation comfort.",
    author: "Michael Anderson",
    date: "March 1, 2025",
    image: "/news/newsData/news7.jpg",
    category: "Campus"
  },

  {
    title: "Research Grant Awarded for Artificial Intelligence in Healthcare",
    text: "The university has received a $1.2M grant to develop AI-driven medical diagnostic tools aimed at early disease detection.",
    author: "Dr. Helena Wright",
    date: "March 5, 2025",
    image: "/news/newsData/news8.jpg",
    category: "Research"
  }
];

export const event_data = [
  {
    title: "2025 Undergraduate Admission Orientation Program",
    text: "Prospective students are invited to attend the admission orientation to learn about requirements, deadlines, and available programs.",
    date: "February 10, 2025",
    day: "10",
    month: "FEB",
    time: "9:00 AM - 12:00 PM",
    venue: "Main Auditorium",
    image: "/news/eventsData/events1.jpg",
    category: "Admissions"
  },
  {
    title: "Annual Research & Innovation Expo 2025",
    text: "The university will showcase groundbreaking projects from students and faculty, including AI robotics, climate innovation, and biotechnology demos.",
    date: "March 4, 2025",
    day: "04",
    month: "MAR",
    time: "10:00 AM - 6:00 PM",
    venue: "Innovation Center Hall A",
    image: "/news/eventsData/events2.jpg",
    category: "Research"
  },
  {
    title: "Career Fair: Tech & Engineering Recruitment Drive",
    text: "Top companies in software engineering, cloud computing, and manufacturing will be present to interact with students and conduct interviews.",
    date: "April 12, 2025",
    day: "12",
    month: "APR",
    time: "11:00 AM - 5:00 PM",
    venue: "Sports Complex Arena",
    image: "/news/eventsData/events3.jpg",
    category: "Career"
  },
  {
    title: "Cultural Day Celebration: Showcasing Traditions",
    text: "Students from various backgrounds will display traditional music, food, art, and fashion in this year’s cultural celebration.",
    date: "May 27, 2025",
    day: "27",
    month: "MAY",
    time: "1:00 PM - 6:00 PM",
    venue: "Central Field",
    image: "/news/eventsData/events4.jpg",
    category: "Cultural"
  },
  {
    title: "Hands-On Web Development Bootcamp",
    text: "A 3-day intensive workshop on Next.js, APIs, and cloud deployment led by industry experts. Open to all students.",
    date: "June 9, 2025",
    day: "09",
    month: "JUN",
    time: "9:00 AM - 4:00 PM",
    venue: "Tech Hub Lab 3",
    image: "/news/eventsData/events5.jpg",
    category: "Workshop"
  },
  {
    title: "Inter-Faculty Sports Competition 2025",
    text: "Faculties will compete in football, basketball, athletics, and swimming for the annual university sports trophy.",
    date: "July 18, 2025",
    day: "18",
    month: "JUL",
    time: "8:00 AM - 3:00 PM",
    venue: "University Stadium",
    image: "/news/eventsData/events6.jpg",
    category: "Sports"
  },
  {
    title: "Graduate School Admission Webinar",
    text: "A virtual session for students interested in pursuing master’s and PhD programs at the university.",
    date: "August 3, 2025",
    day: "03",
    month: "AUG",
    time: "2:00 PM - 4:00 PM",
    venue: "Online (Zoom)",
    image: "/news/eventsData/events7.jpg",
    category: "Admission"
  },
  {
    title: "AI Research Symposium: The Future of Machine Learning",
    text: "Researchers and guest speakers from global institutions will discuss breakthroughs in AI, robotics, and deep learning.",
    date: "September 14, 2025",
    day: "14",
    month: "SEP",
    time: "9:00 AM - 5:00 PM",
    venue: "AI Research Auditorium",
    image: "/news/eventsData/events8.jpg",
    category: "Research"
  }
];