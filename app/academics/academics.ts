import React from "react";
import { FaUsers, FaIndustry, FaGlobeAmericas, FaUserTie, FaChalkboardTeacher, FaPenNib, FaGraduationCap, FaBookOpen, FaCertificate} from "react-icons/fa";
import { MdDevices, MdWorkOutline } from "react-icons/md";

interface approach {
    icon : React.ElementType,
    title : string,
    text : string
}
interface service {
    title : string,
    text : string,
}
interface programs { icon :React.ElementType, title : string, bullets:string[]}
export const academic:approach[] = [
    {
        icon : FaUsers,
        title : 'Collaborative Learning',
        text : 'Work with peers on real-world projects and case studies'
    },
    {
        icon : MdDevices,
        title : 'Hybird Education',
        text : 'Blend of in-person and online learning for flexibility',
    },
    {
        icon : FaIndustry,
        title : 'Industry Integration',
        text : 'Internships and partnerships with leading companies'
    },
    {
        icon : FaGlobeAmericas,
        title : 'Global Perspective',
        text : 'International exchange programs and multicultural environment'
    }
];
export const support_service: approach[] = [
    {
        icon : FaUserTie,
        title : 'Academic Advisors',
        text : 'Personalizedguidance throughout your academic journey'
    },
    {
        icon : FaChalkboardTeacher,
        title : 'Tutoring Services',
        text : 'Free peer and professional tutoring in all subjects'
    },
    {
        icon : FaPenNib,
        title : 'Writing Center',
        text : 'Expert help with essays, research papaers, and presentations'
    },
    {
        icon : MdWorkOutline,
        title : 'Career Counselling',
        text : 'Professional guidance for career planning and job placement'
    }
];


export const service2:service[] = [
    {
        title : 'Digital Library Access',
        text : '2M+ books, journals, and research database available 24/7'
    },
    {
        title : 'Learning Management System',
        text : 'Access course materials, submit assignments, and track progress online.'
    },
    {
        title : 'Study abroad programs',
        text : 'Exchange opportunities with 150+ partner universities worldwide'
    },
    {
        title : 'Academic Workshops',
        text : 'Regular seminars on study skills, time management, and research methods'
    }

];

export const academic_programs: programs[]  = [
    {
        icon: FaGraduationCap,
        title: "Undergraduate Programs",
        bullets: ["BSc, BA, BEng", "Industry placements", "Scholarships available"],
    },
    {
        icon: FaBookOpen,
        title: "Postgraduate Programs",
        bullets: ["Master's & PhD", "Research scholarships", "Professional doctorates"],
    },
    {
        icon: FaCertificate,
        title: "Professional & Certificate Programs",
        bullets: ["Short courses", "CPD & microcredentials", "Executive education"],
    },
]

export const programs = [
    // faculty of sciences
    {
        "name": "Physics",
        "image": "link_to_physics_image",
        "description": "Physics explores the principles of matter, energy, and the universe. Students study mechanics, thermodynamics, waves, and modern physics, applying theory to practical problems.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Chemistry",
        "image": "link_to_chemistry_image",
        "description": "Chemistry examines substances, reactions, and chemical properties. Students learn lab techniques, analytical methods, and applications in industry and research.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Mathematics",
        "image": "link_to_mathematics_image",
        "description": "Mathematics studies numbers, structures, and patterns. Students develop problem-solving, analytical, and logical reasoning skills for academic and professional applications.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Biology",
        "image": "link_to_biology_image",
        "description": "Biology focuses on living organisms, their structure, function, and evolution. Students explore genetics, physiology, ecology, and biodiversity.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Microbiology",
        "image": "link_to_microbiology_image",
        "description": "Microbiology studies microorganisms and their impact on health, industry, and the environment. Students conduct lab research and learn microbial control techniques.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Statistics",
        "image": "link_to_statistics_image",
        "description": "Statistics focuses on data collection, analysis, and interpretation. Students learn probability, modeling, and statistical software for decision-making and research.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Computer Science",
        "image": "link_to_computer_science_image",
        "description": "Computer Science explores programming, algorithms, and software development. Students learn computing theory, systems design, and applications in various technologies.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    }

    // faculty of engineering & technology
]