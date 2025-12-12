"use client";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarker, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
interface contacts_sec {icon : React.ElementType, title : string, text:string, text2:string, type : string}
interface social_icons {icon : React.ElementType, link : string}
export const contacts: contacts_sec[] = [
    {
        icon : FaMapMarker,
        title : 'Address',
        text : '67 University Road',
        text2 : 'Abuja Nigeria.', 
        type : 'text'
    },
    {
        icon : FaPhoneAlt,
        title : 'Phone',
        text : '+234 8086970096',
        text2 : 'Mon-Fri 8:00 AM - 6:00 PM',
        type : 'phone'
    },
    {
        icon : FaEnvelope,
        title : 'Email',
        text : 'aurelium@university.edu',
        text2 : "We'll respond withing 24 hours",
        type : 'link'
    }
]

export const social_Icons:social_icons[] = [
    {
        icon : FaFacebook,
        link : '',
    },
    {
        icon : SiX,
        link : '',
    },
    {
        icon : FaInstagram,
        link : ''
    },
    {
        icon : FaLinkedin,
        link : ''
    },
    {
        icon : FaYoutube,
        link : ''
    }
];