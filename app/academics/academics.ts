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
interface program { name : string, image : string, description : string, duration : number, degree : string, faculty : string}
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

export const programs:program[] = [
    // faculty of sciences
    {
        "name": "Physics",
        "image": "/programs/science/scs1.jpg",
        "description": "Physics explores the principles of matter, energy, and the universe. Students study mechanics, thermodynamics, waves, and modern physics, applying theory to practical problems.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Chemistry",
        "image": "/programs/science/scs2.jpg",
        "description": "Chemistry examines substances, reactions, and chemical properties. Students learn lab techniques, analytical methods, and applications in industry and research.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Mathematics",
        "image": "/programs/science/scs3.jpg",
        "description": "Mathematics studies numbers, structures, and patterns. Students develop problem-solving, analytical, and logical reasoning skills for academic and professional applications.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Biology",
        "image": "/programs/science/scs4.jpg",
        "description": "Biology focuses on living organisms, their structure, function, and evolution. Students explore genetics, physiology, ecology, and biodiversity.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Microbiology",
        "image": "/programs/science/scs5.jpg",
        "description": "Microbiology studies microorganisms and their impact on health, industry, and the environment. Students conduct lab research and learn microbial control techniques.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Statistics",
        "image": "/programs/science/scs6.jpg",
        "description": "Statistics focuses on data collection, analysis, and interpretation. Students learn probability, modeling, and statistical software for decision-making and research.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    {
        "name": "Computer Science",
        "image": "/programs/science/scs7.jpg",
        "description": "Computer Science explores programming, algorithms, and software development. Students learn computing theory, systems design, and applications in various technologies.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Science"
    },
    // faculty of engineering & technology

    {
        "name": "Electrical Engineering",
        "image": "/programs/engr/eng1.jpg",
        "description": "Electrical Engineering covers electricity, electronics, and power systems. Students design circuits, control systems, and electrical devices for industrial and technological use.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    {
        "name": "Mechanical Engineering",
        "image": "/programs/engr/eng2.jpg",
        "description": "Mechanical Engineering focuses on the design, construction, and maintenance of machines. Students study mechanics, thermodynamics, and materials for practical applications.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    {
        "name": "Civil Engineering",
        "image": "/programs/engr/eng3.jpg",
        "description": "Civil Engineering deals with infrastructure design and construction. Students learn structural analysis, construction materials, and project management.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    {
        "name": "Chemical Engineering",
        "image": "/programs/engr/eng4.jpg",

        "description": "Chemical Engineering applies chemistry and physics to industrial processes. Students design chemical plants, study reaction engineering, and improve production systems.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    {
        "name": "Computer Engineering",
        "image": "/programs/engr/eng5.jpg",
        "description": "Computer Engineering integrates computing and electronics. Students design hardware, software, and embedded systems for modern technology solutions.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    {
        "name": "Mechatronics Engineering",
        "image": "/programs/engr/eng6.jpg",
        "description": "Mechatronics combines mechanical, electronic, and software systems. Students develop automated machines, robotics, and intelligent systems.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    {
        "name": "Petroleum Engineering",
        "image": "/programs/engr/eng7.jpg",
        "description": "Petroleum Engineering focuses on oil and gas exploration and extraction. Students study drilling, reservoir management, and petroleum production technologies.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Engineering"
    },
    // Faculty of Arts 
    {
        "name": "History",
        "image" : "/programs/arts/art1.jpg",
        "description": "History examines human societies, events, and cultures over time. Students learn research methods, critical analysis, and the interpretation of historical sources.",
        "duration": 4,
        "degree": "B.A",
        "faculty": "Arts"
    },
    {
        "name": "Languages & Linguistics",
        "image" : "/programs/arts/art2.jpg",
        "description": "This department explores language structures, communication, and linguistics theory. Students improve writing, speaking, and analytical skills in multiple languages.",
        "duration": 4,
        "degree": "B.A",
        "faculty": "Arts"
    },
    {
        "name": "Philosophy",
        "image" : "/programs/arts/art3.jpg",
        "description": "Philosophy studies ethics, logic, and existence. Students develop reasoning, debate, and critical thinking applicable to diverse intellectual and professional fields.",
        "duration": 4,
        "degree": "B.A",
        "faculty": "Arts"
    },
    {
        "name": "Religious Studies",
        "image" : "/programs/arts/art4.jpg",
        "description": "Religious Studies examines world religions, beliefs, and cultural impacts. Students explore ethics, rituals, and historical development of faith systems.",
        "duration": 4,
        "degree": "B.A",
        "faculty": "Arts"
    },
    {
        "name": "Theatre Arts",
        "image" : "/programs/arts/art5.jpg",
        "description": "Theatre Arts focuses on performance, production, and dramatic literature. Students learn acting, directing, stage design, and creative storytelling.",
        "duration": 4,
        "degree": "B.A",
        "faculty": "Arts"
    },
    {
        "name": "Music",
        "image" : "/programs/arts/art6.jpg",
        "description": "Music explores theory, performance, and composition. Students develop skills in instruments, vocals, and digital music production.",
        "duration": 4,
        "degree": "B.A",
        "faculty": "Arts"
    },

    // faculty of social science
    {
        "name": "Economics",
        "image": "/programs/social/soc1.jpg",
        "description": "Economics studies production, distribution, and consumption of resources. Students analyze markets, policies, and financial systems for decision-making.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Social Sciences"
    },
    {
        "name": "Political Science",
        "image": "/programs/social/soc2.jpg",
        "description": "Political Science examines governance, policies, and political systems. Students study political theory, comparative politics, and international relations.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Social Sciences"
    },
    {
        "name": "Sociology",
        "image": "/programs/social/soc3.jpg",
        "description": "Sociology studies human society, interactions, and institutions. Students learn research methods, social theory, and societal development analysis.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Social Sciences"
    },
    {
        "name": "Psychology",
        "image": "/programs/social/soc4.jpg",
        "description": "Psychology explores human behavior and mental processes. Students study cognition, development, therapy, and behavioral analysis.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Social Sciences"
    },
    {
        "name": "Mass Communication",
        "image": "/programs/social/soc5.jpg",
        "description": "Mass Communication focuses on media, journalism, and communication strategies. Students develop skills in reporting, broadcasting, and digital media production.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Social Sciences"
    },
    {
        "name": "Geography",
        "image": "/programs/social/soc6.jpg",
        "description": "Geography studies Earth's environments, landscapes, and spatial patterns. Students learn mapping, GIS, and environmental management techniques.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Social Sciences"
    },

    // faculty of management science
    {
        "name": "Accounting",
        "image": "/programs/mgts/mgs1.jpg",
        "description": "Accounting focuses on financial reporting, auditing, and record-keeping. Students learn taxation, financial analysis, and business compliance.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Management Sciences"
    },
    {
        "name": "Business Administration",
        "image": "/programs/mgts/mgs2.jpg",
        "description": "Business Administration teaches organizational management, operations, and strategy. Students study leadership, marketing, and business analytics.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Management Sciences"
    },
    {
        "name": "Banking & Finance",
        "image": "/programs/mgts/mgs3.jpg",
        "description": "Banking & Finance studies financial institutions, investments, and economic systems. Students learn banking operations, risk management, and financial planning.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Management Sciences"
    },
    {
        "name": "Marketing",
        "image": "/programs/mgts/mgs4.jpg",
        "description": "Marketing focuses on consumer behavior, branding, and market research. Students develop skills in digital marketing, advertising, and strategy planning.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Management Sciences"
    },
    {
        "name": "Public Administration",
        "image": "/programs/mgts/mgs5.jpg",
        "description": "Public Administration studies governance, policy implementation, and management of public organizations. Students learn leadership, budgeting, and administrative law.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Management Sciences"
    },
    {
        "name": "Entrepreneurship",
        "image": "/programs/mgts/mgs6.jpg",
        "description": "Entrepreneurship teaches how to start, manage, and grow businesses. Students learn innovation, business planning, and financial management.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Management Sciences"
    },

    // faculty of education 
    {
        "name": "Guidance & Counselling",
        "image": "/programs/edu/edu1.jpg",
        "description": "Focuses on providing personal, academic, and career guidance to students. Students learn counselling methods, psychology, and mentorship strategies.",
        "duration": 4,
        "degree": "B.Ed",
        "faculty": "Education"
    },
    {
        "name": "Educational Management",
        "image": "/programs/edu/edu2.jpg",
        "description": "Educational Management teaches leadership and administration in schools. Students study policy, planning, and school governance techniques.",
        "duration": 4,
        "degree": "B.Ed",
        "faculty": "Education"
    },
    {
        "name": "Adult Education",
        "image": "/programs/edu/edu3.jpg",
        "description": "Adult Education focuses on teaching strategies for adult learners. Students explore lifelong learning, literacy, and community education methods.",
        "duration": 4,
        "degree": "B.Ed",
        "faculty": "Education"
    },
    {
        "name": "Science Education",
        "image": "/programs/edu/edu4.jpg",

        "description": "Science Education prepares students to teach science subjects in schools. Students learn pedagogy, curriculum design, and scientific methods.",
        "duration": 4,
        "degree": "B.Ed",
        "faculty": "Education"
    },
    {
        "name": "Arts Education",
        "image": "/programs/edu/edu5.jpg",
        "description": "Arts Education trains students to teach arts and creative subjects. Students study teaching methods, curriculum planning, and artistic development.",
        "duration": 4,
        "degree": "B.Ed",
        "faculty": "Education"
    },

    // faculty of health_sciences
    {
        "name": "Nursing Science",
        "image": "/programs/health/hls1.jpg",
        "description": "Nursing Science prepares students to deliver patient care and health services. Students learn clinical practice, healthcare management, and patient advocacy.",
        "duration": 5,
        "degree": "B.Sc Nursing",
        "faculty": "Health Sciences"
    },
    {
        "name": "Public Health",
        "image": "/programs/health/hls2.jpg",
        "description": "Public Health focuses on disease prevention and health promotion. Students study epidemiology, community health, and health policy implementation.",
        "duration": 5,
        "degree": "B.Sc",
        "faculty": "Health Sciences"
    },
    {
        "name": "Medical Laboratory Science",
        "image": "/programs/health/hls3.jpg",
        "description": "Medical Laboratory Science trains students in diagnostic testing. Students analyze biological samples and support medical diagnosis and treatment.",
        "duration": 5,
        "degree": "B.Sc",
        "faculty": "Health Sciences"
    },
    {
        "name": "Anatomy",
        "image": "/programs/health/hls4.jpg",
        "description": "Anatomy studies the structure of the human body. Students learn about organs, tissues, and systems essential for medical and health sciences.",
        "duration": 5,
        "degree": "B.Sc",
        "faculty": "Health Sciences"
    },
    {
        "name": "Physiology",
        "image": "/programs/health/hls5.jpg",

        "description": "Physiology explores how the human body functions. Students study organs, systems, and processes necessary for health and medical research.",
        "duration": 5,
        "degree": "B.Sc",
        "faculty": "Health Sciences"
    },
    {
        "name": "Private & Property Law",
        "image": "/programs/law/law1.jpg",
        "description": "Covers civil law matters, including contracts, property, and personal rights. Students learn legal principles, case studies, and dispute resolution.",
        "duration": 5,
        "degree": "LL.B",
        "faculty": "Law"
    },
    {
        "name": "Public Law",
        "image": "/programs/law/law2.jpg",
        "description": "Public Law focuses on constitutional, administrative, and criminal law. Students explore governance, legal systems, and human rights issues.",
        "duration": 5,
        "degree": "LL.B",
        "faculty": "Law"
    },
    {
        "name": "International Law",
        "image": "/programs/law/law3.jpg",
        "description": "International Law studies relations between nations and global legal frameworks. Students learn treaties, trade law, and conflict resolution strategies.",
        "duration": 5,
        "degree": "LL.B",
        "faculty": "Law"
    },
    {
        "name": "Commercial Law",
        "image": "/programs/law/law4.jpg",
        "description": "Commercial Law deals with trade, business regulations, and corporate governance. Students study contracts, company law, and dispute management.",
        "duration": 5,
        "degree": "LL.B",
        "faculty": "Law"
    },

    // faculty of agriculture
    {
        "name": "Agricultural Economics",
        "image": "/programs/agr/agr1.jpg",
        "description": "Applies economic principles to agriculture. Students study farm management, agricultural policies, and market analysis for sustainable production.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Agriculture"
    },
    {
        "name": "Animal Science",
        "image": "/programs/agr/agr2.jpg",
        "description": "Animal Science focuses on livestock production, breeding, and health. Students learn animal nutrition, genetics, and farm management techniques.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Agriculture"
    },
    {
        "name": "Crop Science",
        "image": "/programs/agr/agr3.jpg",
        "description": "Crop Science studies cultivation, improvement, and protection of crops. Students learn agronomy, soil management, and sustainable farming practices.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Agriculture"
    },
    {
        "name": "Soil Science",
        "image": "/programs/agr/agr4.jpg",
        "description": "Covers soil properties, fertility, and sustainable land management.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Agriculture"
    },
    {
        "name": "Fisheries & Aquaculture",
        "image": "/programs/agr/agr5.jpg",
        "description": "Studies fish production, aquatic ecosystems, and aquaculture methods.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Agriculture"
    },
    {
        "name": "Agricultural Extension",
        "image": "/programs/agr/agr6.jpg",
        "description": "Focuses on educating farmers and rural communities in agriculture.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Agriculture"
    },

    // faculty of environmental science

    {
        "name": "Architecture",
        "image": "/programs/env/env1.jpg",
        "description": "Study of building design, aesthetics, and functional spaces.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Environmental Sciences"
    },
    {
        "name": "Urban & Regional Planning",
        "image": "/programs/env/env2.jpg",
        "description": "Focuses on designing and managing sustainable urban areas.",
        "duration": 5,
        "degree": "B.Eng",
        "faculty": "Environmental Sciences"
    },
    {
        "name": "Estate Management",
        "image": "/programs/env/env3.jpg",
        "description": "Covers property valuation, management, and real estate development.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Environmental Sciences"
    },
    {
        "name": "Surveying & Geoinformatics",
        "image": "/programs/env/env4.jpg",
        "description": "Studies land measurement, mapping, and spatial data systems.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Environmental Sciences"
    },
    {
        "name": "Landscaping & Environmental Design",
        "image": "/programs/env/env5.jpg",
        "description": "Focuses on landscape planning, environmental aesthetics, and design.",
        "duration": 4,
        "degree": "B.Sc",
        "faculty": "Environmental Sciences"
    }
];
interface academic_date {title : string, text : string}
export const academic_dates:academic_date[] = [
    {
        title : 'Fall Semester Begins',
        text : 'September 1, 2025'
    },
    {
        title : 'Mid-term Examinations',
        text : 'October 15-20, 2025'
    },
    {
        title : 'Spring Semester Begins',
        text : 'January 15, 2026'
    },
    {
        title : 'Mid-term Examinations',
        text : 'March 10-15, 2026'
    },
    {
        title : 'Spring Semester Ends',
        text : 'May 30, 2026'
    }
];

export const research_centers:academic_date[] = [
    {
        title : 'AI & Machine Learning Lab',
        text : 'Artificial Intelligence Research'
    },
    {
        title : 'Biomedical Research Center',
        text : 'Medical Innovation & Healthcare'
    },
    {
        title : 'Sustainable Energy Institute',
        text : 'Renewable Energy Solutions'
    },
    {
        title : 'Innovation & Entreprenuership Hub',
        text : 'Startup Development'
    }
]