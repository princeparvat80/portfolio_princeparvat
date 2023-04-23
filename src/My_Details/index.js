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
  figma,
  docker,
  bsl,
  adobe,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Adobe Analytics Consultant",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Technical Product Consultant - Adobe Analytics",
    company_name: "Adobe",
    icon: adobe,
    Projects: "Adobe Analytics Tool",
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Training on Adobe Analytics Tool",
      "Learning about Evar,Props,Events,Data feeds",
      "Creating Report Suits and managaing there Data",
      "Geeting glimps of Data Analytics",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Org : Birlasoft",
    Projects: "Project : Conduent Medicaid Suite (CMdS) CLAIMS",
    description:
      "Provides accurate, prompt, and real-time adjudication of claims and encounters to support state healthcare programs.",
    icon: bsl,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - March 2023",
    points: [
      "Implemented frontend technical solutions and API Integrations to meet project requirement for creation of several new web pages.",
      "Worked closely with the Design Team, UI Team, Client and Architects to understand the change requests and bring forth the design challenges from the UI perspective.",
      "Wrote Unit Test Cases in Jest & Enzyme and did unit testing to deliver quality code.",
      "Worked on different type of bugs (i.e Critical, High, Medium Bugs ) in existing project.",
      "Participated in the initial wave of developers learning and implementing the React.js library.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Org : Birlasoft",
    Projects: "Project : National Correct Coding Initiative (NCCI)",
    description:
      "The National Correct Coding Initiative (NCCI) is to promote national correct coding methodologies and to control improper coding leading to inappropriate payment in Part B claims.",
    icon: bsl,
    iconBg: "#383E56",
    date: "Nov 2020 - oct 2021",
    points: [
      "Optimize the application for maximum speed and Scalability.",
      "Assist in building 100% Reusable code and libraries for future use.",
      "Upgraded the Version of technologies used on Application i.e React.js, Redux , Axios , NPM, Node.",
      "Mentor 16 team members enabling them to achieve professional growth and personal goals.",
      "Took sessions of 40+ team members and explained about unit test cases in Jest as well as in Karma & Jasmine.",
    ],
  },
  {
    title: "Trainee Developer",
    company_name: "Org : Birlasoft",
    icon: bsl,
    Projects: "Project : Interoperability Exchange (IOX)",
    description:
      "It regulated payers to make health information more easily available to patients by leveraging APIs and Fast Healthcare Interoperability Resources (FHIR) technology.",
    iconBg: "#E6DEDD",
    date: "Nov 2020 - oct-2021",
    points: [
      "Develop and enhance the Front End Application and Back End services of the project within the set deadlines.",
      "Solely in charge for working on some Major Change Requests end to end.",
      "Implementing Routing and Event handling as per the change request requirements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
