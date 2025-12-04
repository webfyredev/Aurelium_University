import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaMoneyBillAlt, FaServer, FaHandshake,FaLandmark,} from "react-icons/fa";
import { RiTeamLine, RiGlobalLine } from "react-icons/ri";
import { GiMicroscope, GiLightBulb } from "react-icons/gi";
import { MdScience } from "react-icons/md";


interface research {icon : React.ElementType, value : string, text : string}
interface ResearchArea {title : string, subtitle : string, image : string}
interface facilities {icon :React.ElementType, title : string, text : string}
interface research_imp {image : string,  year : number, title : string, text :string}
interface research_part {icon : React.ElementType, title : string, text : string}
interface reseach_success_s {image : string, title : string, description : string}
interface research_funds {title : string, title2:string, text : string}
interface research_news {image : string, year : number, title : string, text:string}
export const researchAreas: ResearchArea[] = [
    {
      title: "Artificial Intelligence",
      subtitle:
        "Advancing frontier intelligence research to create adaptive, ethical, and human-centered AI systems that reshape the future of innovation.",
      image: "/research/res1.webp",
    },
    {
      title: "Biotechnology",
      subtitle:
        "Pushing the boundaries of life sciences through pioneering research that transforms global health, agriculture, and sustainable biomanufacturing.",
      image: "/research/res2.webp",

    },
    {
      title: "Renewable Energy",
      subtitle:
        "Driving the transition to a low-carbon world by developing breakthrough energy technologies that ensure resilience and environmental stewardship.",
      image: "/research/res3.webp",

    },
    {
      title: "Quantum Computing",
      subtitle:
        "Exploring the fundamental principles of quantum science to engineer transformative computational capabilities for complex global challenges.",
      image: "/research/res4.webp",

    },
    {
      title: "Medical Research",
      subtitle:
        "Advancing precision medicine through interdisciplinary research that accelerates discovery and shapes the future of global healthcare.",
      image: "/research/res5.webp",

    },
    {
      title: "Environmental Science",
      subtitle:
        "Addressing climate and ecological challenges through integrative research that protects natural systems and supports sustainable planetary futures.",
      image: "/research/res6.webp",

    },
  ];
export const research_card: research[] = [
    {
        icon : AiOutlineProject,
        value : '500+',
        text : 'Active Research Projects'
    },
    {
        icon : HiOutlineDocumentText,
        value : '5,000+',
        text : 'Publications Annually'
    },
    {
        icon : FaMoneyBillAlt,
        value : '$50M+',
        text : 'Research Funding',
    },
    {
        icon : RiTeamLine,
        value : '100+',
        text : 'Research Partners'
    }
];

export const research_facilities: facilities[] = [
    {
        icon : FaServer,
        title : 'Advanced Computing Center',
        text : 'High-performance computing infrastructure for complex simulations and data analysis'
    },
    {
        icon : GiMicroscope,
        title : 'Biomedical Research Labs',
        text : 'State-of-the-art facilities for medical and bilogical research',
    },
    {
        icon : GiLightBulb,
        title : 'Innovation Hub',
        text : 'Collaborative space for interdisciplinary research and startup incubation'
    },
    {
        icon : MdScience,
        title : 'Materials Science Lab',
        text : 'Advanced equipment for materials testing and development'
    }
]

export const research_impact:research_imp[] = [
    {
        image : '/research/res_imm1.webp',
        year : 2024,
        title : 'Breakthrough in Cancer Treatment',
        text : 'Our researchers developed a novel immunotherapy approach showing 85% success rate in clinical trails'
    },
    {
        image : '/research/res_imm2.webp',
        year : 2024,
        title : 'Sustainable Energy Solution',
        text : 'Invented a new solar panel technology that icreases efficiency by 40% while reducing costs'
    },
    {
        image : '/research/res_imm3.webp',
        year : 2024,
        title : 'AI for Climate Prediction',
        text : 'Created machine learning models that predict climate patterns with unprecedented accuracy'
    },
    {
        image : '/research/res_imm4.webp',
        year : 2024,
        title : 'Quantum Computing Advancement',
        text : 'Achieved quantum supremacy in solving complex optimization problems',
    },
]

export const research_partners:research_part[] = [
    {
        icon : FaHandshake, 
        title : 'Industry Partnerships',
        text : 'Collaborate on cutting-edge research projects and  technology transfer initiatives'
    },
    {
        icon : FaLandmark,
        title : 'Government Grants',
        text : 'Access funding opportunities for research that addresses societal challenges'
    },
    {
        icon : RiGlobalLine,
        title : 'International Collaboration',
        text : 'Partner with leading universities worlwide on joint research programs'
    }
]

export const research_stories:reseach_success_s[]   = [
    {
      image: "/research/rs_stories1.webp",
      title: "Student Develops AI-Powered Solar Drone",
      description:
        "A final-year engineering student designed a solar drone that improves environmental monitoring.",
    },
    {
      image: "/research/rs_stories2.webp",
      title: "Professor Wins Global Innovation Award",
      description:
        "Our lead researcher in robotics was honored for groundbreaking work in autonomous systems.",
    },
    {
      image: "/research/rs_stories3.webp",
      title: "Agritech Innovation: Smart Irrigation System",
      description:
        "A student team created an IoT irrigation system reducing water waste by 40%.",
    },
    {
      image: "/research/rs_stories4.webp",
      title: "Medical Student Publishes Breakthrough Study",
      description:
        "A study on early malaria detection receives international recognition.",
    },
    {
      image: "/research/rs_stories5.webp",
      title: "Robotics Team Builds Low-Cost Assistive Robot",
      description:
        "A multidisciplinary team created a functional assistive robot to support elderly and disabled individuals.",
    },
]
export const research_funding:research_funds[] = [
    {
        title : 'Government Research Grants',
        title2 : 'Up to $500K',
        text : 'Federal funding for innovative research projects'
    },
    {
        title : 'Industry Partnerships',
        title2 : 'Up to $1M',
        text : 'Collaborative research with leading corporations'
    },
    {
        title : 'International Collaborations',
        title2 : 'Up to $300K',
        text : 'Joint research programs with global institutions'
    },
    {
        title : 'Startup Seed Funding',
        title2 : 'Up to $100K',
        text : 'Support for commercializing research innovations'
    }
];

export const research_latest_news:research_news[] = [
    {
    image: '/research/res_news1.jpg',
    year: 2025,
    title: 'New Agricultural Techniques Boost Crop Yields',
    text: 'Our Agriculture faculty developed sustainable farming methods that increased maize and cassava production by 25% in local communities.'
  },
  {
    image: '/research/res_news2.jpg',
    year: 2025,
    title: 'Groundbreaking Study on Urban Sociology',
    text: 'The Social Sciences department published research analyzing migration patterns in cities, providing insights for urban planning.'
  },
  {
    image: '/research/res_news3.jpg',
    year: 2025,
    title: 'Medical Students Discover Novel Malaria Treatment',
    text: 'A collaborative study in our Medical faculty identified a plant-based compound showing promising results in malaria prevention.'
  },
  {
    image: '/research/res_news4.jpg',
    year: 2025,
    title: 'Historical Archives Digitized for Public Access',
    text: 'Our History department successfully digitized rare manuscripts and archives, preserving cultural heritage and making it accessible to students worldwide.'
  },
  {
    image: '/research/res_news5.jpg',
    year: 2025,
    title: 'Arts Faculty Hosts Sustainable Design Exhibition',
    text: 'Students showcased innovative art and design projects focusing on sustainability, attracting international attention.'
  },
  {
    image: '/research/res_news6.jpg',
    year: 2025,
    title: 'Psychology Research on Youth Mental Health',
    text: 'Our Psychology department published studies on stress and coping mechanisms among university students, offering recommendations for mental health programs.'
  }
]