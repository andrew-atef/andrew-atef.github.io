import { Experience, Project } from "./types";
import projectLms from "./images/project-lms.png";
import projectEcommerce from "./images/project-ecommerce.png";
import projectPortfolio from "./images/project-portfolio.png";
import projectDashboard from "./images/project-dashboard.png";
import projectFoodtech from "./images/project-foodtech.png";

export const PERSONAL_INFO = {
  name: "Andrew Atef",
  title: "Backend PHP Developer (Laravel Specialist)",
  subtitle: "Full Stack Developer | AI & Automation Enthusiast",
  location: "123 Main St, Cairo, Egypt (11511)",
  phone: "+20 1288600785",
  email: "andrew.atef.dev@gmail.com",
  linkedin: "linkedin.com/in/andrew-atef-dev",
  github: "github.com/andrew-atef",
  portfolio: "main.devawi.tech",
  whatsapp: "https://api.whatsapp.com/send/?phone=201288600785",
};

export const EDUCATION = [
  {
    school: "Helwan University",
    degree: "B.Sc. Computer Science and AI",
    period: "Sep 2021 – Jun 2025",
    grade: "GPA: 3.48/4.0 (Excellent with Honors)",
  },
  {
    school: "Digital Egypt Pioneers Initiative (DEPI)",
    degree: "Full Stack Web Developer (.NET Track)",
    period: "Oct 2024 – May 2025",
    details: "Foundation in C#, ASP.NET Core, Entity Framework.",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Kemet Technology",
    role: "Backend Developer",
    period: "Jan 2025 – Aug 2025",
    type: "Cairo",
    description: [
      "Developed and maintained backend systems using Laravel for web and mobile apps.",
      "Designed and implemented robust RESTful APIs.",
      "Implemented WebSockets for real-time notifications.",
      "Managed cloud infrastructure on Digital Ocean (Server Setup & Deployment).",
    ],
  },
  {
    company: "Nplanet, Inc",
    role: "Backend Developer Intern",
    period: "Jun 2023 – Sep 2023",
    type: "Alexandria",
    description: [
      "Collaborated on the company's API framework development.",
      "Coordinated with Frontend developers for seamless integration.",
      "Participated in Code Reviews and applied best practices.",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "Ongoing",
    type: "Remote",
    description: [
      "Building complete systems from scratch focusing on engineering solutions.",
      "Developing E-commerce platforms and LMS systems.",
      "Integrating payment gateways (Paymob, Fawry) and 3rd party APIs.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Learning Management System",
    description: "Developed advanced RESTful APIs and new features, honing skills in API design and database integration.",
    tags: ["Native PHP", "RESTful APIs", "SQL"],
    image: projectLms,
    details: [
      "API Design & Database Integration",
      "UI Enhancements for Interactive Scenes",
      "Full Native PHP Implementation"
    ],
    link: "https://lms-landing-page-gold.vercel.app/"
  },
  {
    title: "E-commerce & Affiliate System",
    description: "A robust e-commerce platform featuring product discounts, coupons, and a complete affiliate marketing system.",
    tags: ["PHP", "Laravel", "SQL", "DigitalOcean"],
    image: projectEcommerce,
    details: [
      "Affiliate Marketing System",
      "Coupon Generation Logic",
      "Robust Database Design"
    ]
  },
  {
    title: "Frontend Portfolio",
    description: "Bringing web ideas to life with a solid foundation in core frontend technologies and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: projectPortfolio,
    details: [
      "Responsive UI Implementation",
      "Git & GitHub Integration",
      "Modern Frontend Practices"
    ],
    link: "https://690a8922d00a231d4e8c438e--andrewdevportfolio.netlify.app/"
  },
  {
    title: "N8N Automation Dashboard UI",
    description: "A polished front-end UI for an automation tool to visually manage content workflows and AI integrations.",
    tags: ["Frontend Only", "UI/UX Design"],
    image: projectDashboard,
    details: [
      "Visual Workflow Management",
      "RSS to AI Social Posting UI",
      "Analytics Visualization"
    ],
    link: "https://www.youtube.com/watch?v=4V2p3BKMLEA"
  },
  {
    title: "FoodTech Delivery Platform",
    description: "Backend architecture for a complete food delivery system with apps and dashboards.",
    tags: ["PHP", "Laravel", "MySQL", "RESTful APIs"],
    image: projectFoodtech,
    details: [
      "Customer & Driver App APIs",
      "Live Order Tracking Support",
      "Comprehensive Admin Dashboards"
    ]
  }
];