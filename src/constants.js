// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.webp';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import HugeLogo from './assets/company_logo/HugeLogo.avif';

// Education Section Logo's
import AmritaLogo from './assets/education_logo/AmritaLogo.jpg';
import PsbbLogo from './assets/education_logo/PsbbLogo.png';

// Project Section Logo's
import rovaai from '/rovaai.png';
import shopvibe from '/hero.png';
import flowai from '/hero1.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: HugeLogo,
    role: "Frontend Developer",
    company: "HUGE IT Solutions",
    date: "April 2025 - May 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "JavaScript",
      "React JS",
      "Next JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "HTML",
      "CSS"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: AmritaLogo,
    school: "Amrita Vishwa Vidyapeetham",
    date: "Aug 2023 - July 2027",
    grade: "7.69 CGPA",
    desc: "I am currently pursuing my B.Tech in Computer and Communication Engineering at Amrita College and expect to graduate in 2027. Through this course, I am building strong technical skills in computing, programming, and modern communication technologies.",
    degree: " Computer & Communication Engineering",
  },
  {
    id: 1,
    img: PsbbLogo,
    school: "The PSBB Millennium School",
    date: "June 2022 - March 2023",
    grade: "88.4%",
    desc: "I pursued my higher secondary education in the Bio-Maths group under the CBSE curriculum, building a strong foundation in both life sciences and mathematics.",
    degree: "CBSE Class XII (PCMB)",
  },
  {
    id: 2,
    img: PsbbLogo,
    school: "The PSBB Millennium School",
    date: "June 2020 - June 2021",
    grade: "97%",
    desc: "I completed my Class 10 under the CBSE curriculum with a strong focus on core subjects.This helped me build a solid academic foundation and sharpen my analytical and logical thinking skills.",
    degree: "CBSE Class X",
  },
];

export const projects = [
  {
    id: 0,
    title: "Rova Travel AI (Full Stack Web Application)",
    description:
    "Built a full-stack travel planning platform with personalised itinerary creation and visualisation. Integrated advanced AI features for automated itinerary generation, smart destination recommendations, and seamless user interactions. Delivered a secure, interactive experience with real-time chat, robust authentication, Stripe-powered payments, and a modern tech stack",
    image: rovaai,
    tags: ["Next.js", " React", "MongoDB", "Mongoose", "Clerk","Stripe","Tailwind CSS","Grok API","EmailJS","Node.js"],
    github: "https://github.com/harshitarr/Rova-Travel-AI",
    webapp: "https://rova-travel-ai.vercel.app/",
  },
  {
    id: 1,
    title: " ShopVibe (Multi-Vendor E-commerce Platform)",
    description:
      "Built a scalable multi-store e-commerce platform with advanced product discovery and secure transactions.Built robust admin and seller dashboards, real-time order tracking, and analytics to streamline store operations. Integrated Stripe for seamless payments, implemented role-based authentication, and enabled AI-powered product recommendations for enhanced user experience.",
    image:shopvibe,
    tags: ["Next.js", "React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Stripe", "Grok API", "Inngest", "Clerk", "MongoDB", "Mongoose"],
    github: "https://github.com/harshitarr/ShopVibe-Multivendor-Website",
    webapp: "https://shop-vibe-multivendor-website.vercel.app/",
  },
  {
    id: 2,
    title: " FlowAI - Fitness & Nutrition AI (Full-Stack Web Application)",
    description:
    "Built a modern fitness web app with personalised workout generation, progress tracking, and secure profiles.Integrated Vapi AI Voice Assistant for interactive voice-driven features, enhancing accessibility and user engagement.Implemented real-time authentication and data management using Clerk and Convex, ensuring seamless and secure user experiences.",
    image: flowai,
    tags: [ "Next.js", "React.js", "Convex", "Clerk", "Vapi AI", "Tailwind CSS" ],
    github: "https://github.com/harshitarr/FlowAI-Fitness-AI",
    webapp: "https://flow-ai-fitness-ai.vercel.app/",
  },

];
