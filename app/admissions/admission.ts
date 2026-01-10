import { ListenOptions } from "net";
import { title } from "process"
import React from "react";
import { FaCertificate, FaEnvelopeOpenText, FaGraduationCap, FaListUl, FaPaperPlane, FaUpload } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi";
interface admissions {id:number, icon : React.ElementType, title: string, text:string}
interface required { id :number, title : string, icon : React.ElementType, qualfs :string[]}
interface award {title : string, text:string, percent:string}
interface apply{id:number, icon:React.ElementType, title:string, text:string}
export const apply:apply[] = [
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

interface requirements{id:number, title : string, icon : React.ElementType, qualfs:string[]}
export const requirements:requirements[] = [
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

interface faq{question : string, answer:string}
export const faqs:faq[] = [
    {
        question : 'What are the admission requirements for undergraduates programs',
        answer: 'Undergraduates admission requires completion of high school with a minimum of 3.0, standardized test scores (SAT/ACT), letters of recommendation, personal statement, and a proof of English proficiency for international students (TOEFL/IELTS)',
    },
    {
        question : 'Are scholarships available for international students',
        answer : 'Yes, we offer merit-based scholarships, need-based financial aid, and special scholarships for international students. Scholarship amount range from 25% to 100% tuition coverage based on academic excellence and financial need.'
    },
    {
        question : 'What is the application deadline',
        answer : 'For Fall semester admission, the priority deadline is January 15th, and the regular deadline is March 1st. Spring Semester applications are due by October 1st. Early application is recommended for scholarship consideration.'
    },
    {
        question : 'Can i transfer credits from another university',
        answer : 'Yes, we accept transfer credits from accredited institutions. Credits are evaluated on a case-by-case basics. Generally, course with a grade of C or higher are eligible for transfer. Contact our admissions office for a preliminary evaluation.'
    },
]