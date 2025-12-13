import React from "react";
import { FaBuilding, FaLeaf, FaUsers } from "react-icons/fa";

interface gal_details { image : string, tag : string, title : string, subText:string}
interface tour{icon : React.ElementType, title : string, text : string}
export const gallery_data:gal_details[] = [
  {
    image: "/gallery/gal1.jpg",
    tag: "Campus",
    title: "Morning at the Garden",
    subText: "Beautiful sunrise lighting up the campus botanical garden."
  },
  {
    image: "/gallery/gal2.jpg",
    tag: "Academics",
    title: "Interactive Lecture Session",
    subText: "Students engaging actively during a multimedia lecture."
  },
  {
    image: "/gallery/gal3.jpg",
    tag: "Events",
    title: "Cultural Day Celebration",
    subText: "Students showcasing food, fashion, and traditions."
  },
  {
    image: "/gallery/gal4.jpg",
    tag: "Sports",
    title: "Basketball Practice",
    subText: "Players warming up ahead of the departmental competition."
  },
  {
    image: "/gallery/gal5.jpg",
    tag: "Campus Life",
    title: "Lunch at the Food Court",
    subText: "Students grabbing meals and chatting during break time."
  },
  {
    image: "/gallery/gal6.jpg",
    tag: "Academics",
    title: "Quiet Time at the Library",
    subText: "Students preparing for mid-semester exams."
  },
  {
    image: "/gallery/gal7.jpg",
    tag: "Events",
    title: "Matriculation Day",
    subText: "New students taking their oath into the academic community."
  },
  {
    image: "/gallery/gal8.jpg",
    tag: "Campus",
    title: "Hostel Night View",
    subText: "A peaceful night setting across the student residential halls."
  },
  {
    image: "/gallery/gal9.jpg",
    tag: "Sports",
    title: "Football Training",
    subText: "The school team getting ready for the league tournament."
  },
  {
    image: "/gallery/gal10.jpg",
    tag: "Campus Life",
    title: "Tech Club Meet-up",
    subText: "Developers brainstorming new projects at the innovation center."
  },
  {
    image: "/gallery/gal11.jpg",
    tag: "Academics",
    title: "Chemistry Practical",
    subText: "Science students carrying out titration experiments."
  },
  {
    image: "/gallery/gal12.jpg",
    tag: "Events",
    title: "Graduation Ceremony",
    subText: "Final-year students celebrating after receiving their degrees."
  },
  {
    image: "/gallery/gal13.jpg",
    tag: "Campus",
    title: "University Chapel",
    subText: "A quiet place for reflection in the heart of the campus."
  },
  {
    image: "/gallery/gal14.jpg",
    tag: "Sports",
    title: "Early Morning Workout",
    subText: "Students exercising at the campus gym."
  },
  {
    image: "/gallery/gal15.jpg",
    tag: "Campus Life",
    title: "Social Night",
    subText: "Students enjoying music and games during a fun evening hangout."
  },
  {
    image: "/gallery/gal16.jpg",
    tag: "Academics",
    title: "Computer Lab Coding Session",
    subText: "Tech students working on assignments and group projects."
  },
  {
    image: "/gallery/gal17.jpg",
    tag: "Events",
    title: "Science & Innovation Fair",
    subText: "Exhibition of student-built robots, drones, and tech projects."
  },
  {
    image: "/gallery/gal18.jpg",
    tag: "Campus",
    title: "Relaxing at the Campus Park",
    subText: "Students reading and enjoying nature between classes."
  },
  {
    image: "/gallery/gal19.jpg",
    tag: "Sports",
    title: "Tennis Court Warm-up",
    subText: "Players practising ahead of inter-faculty tennis matches."
  },
  {
    image: "/gallery/gal20.jpg",
    tag: "Campus Life",
    title: "Hostel Hangout",
    subText: "Friends relaxing together after evening classes."
  },
  {
    image: "/gallery/gal21.jpg",
    tag: "Academics",
    title: "Engineering Workshop",
    subText: "Mechanical and electrical engineering students working on prototypes."
  },
  {
    image: "/gallery/gal22.jpg",
    tag: "Events",
    title: "Annual Sports Day",
    subText: "Inter-departmental races, games, and celebrations."
  },
  {
    image: "/gallery/gal23.jpg",
    tag: "Campus",
    title: "Main Gate Entrance",
    subText: "The iconic university entrance welcoming visitors and students."
  },
  {
    image: "/gallery/gal24.jpg",
    tag: "Sports",
    title: "Swimming Team Practice",
    subText: "Early morning training sessions at the university pool."
  },
  {
    image: "/gallery/gal25.jpg",
    tag: "Campus Life",
    title: "Reading Group Outdoors",
    subText: "Students studying together under the shade near the lawn."
  }
];

export const tour_data:tour[] = [
    {
        icon : FaBuilding,
        title : 'Modern Facilities',
        text : 'State-of-the-art classrooms, labs and learning spaces'
    },
    {
        icon : FaUsers,
        title : 'Vibrant Community',
        text : 'Diverse student body from over 80 countires'
    },
    {
        icon : FaLeaf,
        title : 'Green Campus',
        text : 'Sustainable and eco-friendly campus environment'
    }
]
