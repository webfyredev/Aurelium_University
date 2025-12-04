import { ListenOptions } from "net";
import { title } from "process"
import React from "react";
import { FaCertificate, FaEnvelopeOpenText, FaGraduationCap, FaListUl, FaPaperPlane, FaUpload } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi";
interface admissions {id:number, icon : React.ElementType, title: string, text:string}
interface required { id :number, title : string, icon : React.ElementType, qualfs :string[]}
interface award {title : string, text:string, percent:string}
export const apply = [
    {
        id : 1,
        icon : FaListUl,
        title : 'Choose Program',
        text : 'Select your desired program and level of study from our comprehensive offerings'
    },
    {
        id : 2,
        icon : FaPaperPlane,
        title : 'Submit Applicaton',
        text : 'Complete the online application form with your personal and academic information'
    },
    {
        id : 3, 
        icon : FaUpload,
        title : 'Upload Documents',
        text : 'Provide required documents including transcripts, test scores, and recommendations'
    },
    {
        id : 4,
        icon : FaEnvelopeOpenText,
        title : 'Recieve Decision',
        text : 'Get your admission decision and begin your journey to excellence'
    },
];

export const requirements = [
    {
        id : 1,
        title : 'Undergraduate',
        icon : FaGraduationCap,
        qualfs : ['High School Diploma', 'GPA 3.0 or higher', 'SAT/ACT Scores', 'English Proficiency (TOEFL/IELTS)', 'Letters of Recommendation', 'Personal Statements']
    },
    {
        id : 2,
        title : 'Postgraduates',
        icon :  GiGraduateCap,
        qualfs : ['Bachelor Degree', 'GPA 3.5 or higher', 'GRE/GMAT Scores', 'English Proficiency (TOEFL/IELTS)', 'Research Proposal', 'Academics References']
    },
    {
        id : 3,
        title : 'Diploma',
        icon : FaCertificate,
        qualfs : ['High School Certificate', 'GPA 2.5 or higher', 'English Proficiency', 'Personal Statements']
    },
];

export const scholarsips:award[] = [
    {
        title : 'Merit Scholarship',
        text : 'Outstanding academic achievement',
        percent : '100%',
    },
    {
        title : 'Need-Based Aid',
        text : 'Demostrated Financial need',
        percent : '75%',
    },
    {
        title : 'International Student Scholarship',
        text : 'International students with excellent records',
        percent : '50%',
    },
    {
        title : 'Sports Excellence Award',
        text : 'Outstanding athletic achievements',
        percent : '50%',
    },
]
export const aid:string[] = ['Over $2.5 million in scholarships awarded anually', 'Merit based and need-based financial assistance', 'Flexible payment plans available']