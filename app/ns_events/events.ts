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
        title : 'University Ranks Among Top 100 Global Institutions in Latest QS',
        text : 'Our institution has achieved a remarkable milestone, securing a position in the top 100 universities worldwide, reflecting our commitments..',
        author : 'Dr.Sarah Mitchell',
        date : 'January 15, 2025',
        image : '',
        category : 'Ranking'
    },
    {
        title : 'Groundbreaking Research in Renewable Energy Published by...',
        text : 'Our research team has published pioneering findings on solar energy efficiency, potentially revolutionizing sustainable power generation',
        author : 'Prof.James Cham',
        date : 'January 12, 2025',
        image : '',
        category : 'Research'
    },
    {
        title : 'New State-of-the-Art Innovation Hub Opens on Campus',
        text : 'Student and faculty now have access to cuttind-edge facilities designed to foster creativity, collaboration, and technological solution..',
        author : 'Dr.Golmes Elian',
        date : 'January 10, 2025',
        image : '',
        category : 'Campus'
    },
    {
        title : 'University Ranks Among Top 100 Global Institutions in Latest QS',
        text : 'Our institution has achieved a remarkable milestone, securing a position in the top 100 universities worldwide, reflecting our commitments..',
        author : 'Dr.Sarah Mitchell',
        date : 'January 15, 2025',
        image : '',
        category : 'Ranking'
    },
    {
        title : 'University Ranks Among Top 100 Global Institutions in Latest QS',
        text : 'Our institution has achieved a remarkable milestone, securing a position in the top 100 universities worldwide, reflecting our commitments..',
        author : 'Dr.Sarah Mitchell',
        date : 'January 15, 2025',
        image : '',
        category : 'Ranking'
    },
    {
        title : 'University Ranks Among Top 100 Global Institutions in Latest QS',
        text : 'Our institution has achieved a remarkable milestone, securing a position in the top 100 universities worldwide, reflecting our commitments..',
        author : 'Dr.Sarah Mitchell',
        date : 'January 15, 2025',
        image : '',
        category : 'Ranking'
    },
];