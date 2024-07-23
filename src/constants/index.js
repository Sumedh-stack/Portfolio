/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  parsec,
  yif,
  c,
  python,
  java,
  mysql,
  app,
  soi,
  ros,
  SpringBoot,
  expressJs,
  Sequlize,
  airasia,
  optum,
  AirlineBooking,
  GeoCab,
  KodeIt
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Competitive Coder",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Sequlize ORM",
    icon: Sequlize,
  },
  {
    name: "SpringBoot",
    icon: SpringBoot,
  },
  {
    name: "Express JS",
    icon: expressJs,
  },
];

const experiences = [
  {
    title: "Software Development Engineer 1",
    company_name: "Airasia Technology",
    icon: airasia,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Developed a Unified Confirmation page that significantly enhanced user experience by consolidating two separate pages (one for legacy bookings and one for OTA bookings) into a single, streamlined page, resulting in a 25% reduction in user navigation time.",
      "Implemented Redis cache, transformation logic, and GTM event integration, handling over 2,000 transactions per day.",
      ,
      "Developed a new checkout flow for GoQuo Inventory, where primary responsibilities included writing a COR for processing, submitting responses collected from the checkout application, and delivering them to the respective inventories, successfully managing 1,500 daily checkout processes.",
      "Implemented gRPC to reduce response time by 40%, improving performance over REST calls and supporting 500,000 requests monthly.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Airasia Technology",
    icon: airasia,
    iconBg: "#E6DEDD",
    date: "January 2023 - August 2023",
    points: [
      "Played a pivotal role in ensuring operational stability by resolving approximately 45-50 production bugs",
      "Consistently adhered to SOLID Principles, emphasizing the writing of clean, maintainable code.",
      "Contributed significantly to the development process by creating HLD (High-Level Design) and LLD (Low-Level Design) for the Unified Confirmation Page.",
    ],
  },
  {
    title: "",
    company_name: "Optum Global Solutions Internship",
    icon: optum,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Trained an LSTM model to generate abstractive summaries of insurance reports for client comprehension.",
      "Utilized Azure’s Linguistic Service for Named Entity Recognition.",
      "Prepared data by filtering invalid responses, extracting JSON data using Pandas in Python, and employing regex patterns and templates for data processing.",
    ],
  },
  {
    title: "Utilities and Technical Lead",
    company_name: "PARSEC (TechFest IIT Dharwad)",
    icon: parsec,
    iconBg: "#E6DEDD",
    date: "January 2022 - March 2022",
    points: [
      "Lead a team of 30 students for managing utilites for about 2500 students and 22 lakhs of sponsorship.",
      "Managed the Technical aspects of various events in the Techfest",
      "Marketed the event over 200 colleges including prime Institutes like IITs, NITs, IIMs, etc.",
      "Collaborated and led different departments with a total of 40 team members for operations and conduction of the event",
    ],
  },
];

const projects = [
  {
    name: "GeoCab",
    description:
     "GeoCab is a geospatial location-based transportation app facilitating on-demand rides.",
       tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "API + Java",
        color: "pink-text-gradient",
      },
    ],
    image: GeoCab,
    source_code_link: "https://github.com/Sumedh-stack/GeoCab",
  },
  {
    name: "Airline Booking System",
    description:
      "ROS and Image Detection based UAV and UGV navigation model using OpenCV and various other python libraries. It also had other ML models for better naigviation",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: AirlineBooking,
    source_code_link: "https://github.com/Sumedh-stack/Airline-Booking-Service",
  },
  {
    name: "KodeIt (In progress)",
    description:
      "Online Coding Judge Platform for real-time coding challenges and skill assessment.",
       tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: KodeIt,
    source_code_link:
      "",
  },
];

export { services, technologies, experiences, projects };
