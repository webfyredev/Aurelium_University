import React from "react"
import { FiBookOpen } from "react-icons/fi";
import { GiMicroscope } from "react-icons/gi";
import { MdLibraryBooks, MdSportsBasketball, MdRestaurant } from "react-icons/md";
import { FaHome, FaLightbulb, FaUsers, FaHandshake, FaMedal, FaGlobe, FaAward, FaFlag,FaBookOpen } from "react-icons/fa";
interface history {id : number, year : number, title : string, text : string }
interface campus {id : number, icon : React.ElementType, title : string, text : string}
interface difference {id:number, value : string, title : string, text : string}
interface teams {id:number, image:string, name:string, position:string, context : string, mail : string}
export const team: teams[] = [
    {
        id : 1,
        image : '/team/team1.webp',
        name : 'Dr. Robert Anderson',
        position : 'Chancellor',
        context : 'Leading the university with over 20 years of experience in higher education administration and academic excellence.',
        mail : 'chancellor@university.edu'
    },
    {
        id : 2,
        image : '/team/team2.webp',
        name : 'Prof. Maria Santos',
        position : 'Vice-Chancellor for Academic Affairs',
        context : 'Championing innovative teaching methodologies and curriculum development to ensure world-class education standards',
        mail : 'vc.academic@university.edu'
    },
    {
        id: 3,
        image : '/team/team3.webp',
        name : 'Dr. James Williams',
        position : 'Dean of Engineering',
        context : 'Driving technological innovation and research excellence in engineering education with a focus on industry partnerships.',
        mail : 'dean.engineering@university.edu'
    },

]
export const difference: difference[] = [
    {
        id : 1,
        value : '250K+',
        title : 'Community Service Hours',
        text : 'Annual volunteer contributions by students and staff'
    },
    {
        id : 2,
        value : '$50M+',
        title : 'Researh Funding',
        text : 'Invested in groundbreaking research projects'
    },
    {
        id : 3,
        value : '1,200+',
        title : 'Industry Partners',
        text : 'Collaborations with leading companies worldwide'
    },
    {
        id : 4,
        value : '95%',
        title : 'Graduate Employment',
        text : 'Students employed within 6 months of graduation'
    },

]
export const impacts: campus[] = [
    {
        id : 1,
        icon : FaGlobe, 
        title : 'Top 100 Global',
        text : 'Ranked among the worldbest universities'
    },
    {
        id : 2,
        icon : FaAward, 
        title : '50+ Awards',
        text : 'Excellence in teaching and research'
    },
    {
        id : 3,
        icon : FaFlag, 
        title : '80+ Countries',
        text : 'Students from around the world'
    },
    {
        id : 4,
        icon : FaBookOpen, 
        title : '5000+ Publications',
        text : 'Research papers annually'
    },

]
export const values: campus[] = [
    {
        id : 1,
        icon : FaLightbulb,
        title : 'Innovation',
        text : 'Fostering creativity and pioneering new solutions to global challenges'
    },
    {
        id : 2,
        icon : FaUsers,
        title : 'Collaboration',
        text : 'Building partnerships and working together for collective success'
    },
    {
        id : 3,
        icon : FaHandshake,
        title : 'Integrity',
        text : 'Upholdingthe highest ethical standards in all our endeavours'
    },
    {
        id : 4,
        icon : FaMedal,
        title : 'Excellence',
        text : 'Pursuing the highest quality in education, research and service'
    },

]
export const campus_infra: campus[] = [
    {
        id : 1,
        icon : FiBookOpen, 
        title : 'Modern Classrooms',
        text : 'State-of-the-art learning spaces equipped with the latest technology',
    },
    {
        id : 2,
        icon : GiMicroscope, 
        title : 'Research Labs',
        text : 'Advanced laboratories for cutting-edge scientific research'
    },
    {
        id : 3,
        icon : MdLibraryBooks, 
        title : 'Digital Library',
        text : 'Over 2 million books and digital resources available 24/7'
    },
    {
        id : 4,
        icon : MdSportsBasketball, 
        title : 'Sport Complex',
        text : 'Olympic-standard facilities for athletics and recreation'
    },
    {
        id : 5,
        icon : FaHome, 
        title : 'Student Housing',
        text : 'Comfortable on-campus accomodation for 5,000+ students'
    },
    {
        id : 6,
        icon : FiBookOpen, 
        title : 'Dinning Halls',
        text : 'Multiple cafeterias offerin diverse international cuisines'
    },

]
export const milestone: history[] = [
    {
        id : 1,
        year : 2000,
        title : 'Foundation',
        text : 'Aurelium University was established with a vision to provide world-class education and foster innovation.'
    },
    {
        id : 2,
        year : 2005,
        title : 'Expansion',
        text : 'Opened new faculties of Engineering, Medicine, and Business, expanding our academic offerings significantly'
    },
    {
        id : 3,
        year : 2010,
        title : 'Global Recognition',
        text : 'Achieved  Top 100 global university ranking and established partnerships with leading institutions worldwide'
    },
    {
        id : 4,
        year : 2015,
        title : 'Digital Transformation',
        text : 'Launched cuttind-edge online learning platforms and smart campus initiatives for the digital age.'
    },
    {
        id : 5,
        year : 2020,
        title : 'Future Forward',
        text : 'Continuing to innovate with AI-powered education, sustainable campus development, and gloabl impact'

    },

]

export const alumni_stories = [
    {
      image: "/about/alumni1.jpg",
      name: "Dr. Jane Okoro",
      achievement: "World Bank Climate Research Fellow",
      story:
        "Now a leading environmental scientist contributing to global climate resilience projects.",
    },
    {
      image: "/about/alumni2.jpg",
      name: "Engr. Samuel Adeyemi",
      achievement: "Lead Engineer, Tesla Energy",
      story:
        "Designed sustainable energy systems now used across Africa and Europe.",
    },
    {
      image: "/about/alumni3.jpg",
      name: "Prof. Maria Hassan",
      achievement: "Top 1% Cited Researcher (Elsevier)",
      story:
        "Published groundbreaking research in public health and epidemiology.",
    },
    {
      image: "/about/alumni4.jpg",
      name: "David Ayoola",
      achievement: "Founder, AgriTech Labs",
      story:
        "Created smart farming tools adopted by over 50,000 farmers nationwide.",
    },
  ];