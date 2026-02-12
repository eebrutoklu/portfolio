"use client";

import React from "react";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs, SiHtml5, SiCss3, SiTailwindcss, SiSass, SiMui, SiBootstrap, SiShadcnui,
  SiNodedotjs, SiExpress, SiFirebase, SiSupabase, SiPostgresql, SiMongodb, SiGraphql, SiPrisma,
  SiGit, SiGithub, SiGitlab, SiDocker, SiJira, SiFigma, SiAdobephotoshop, SiAdobexd, SiNotion, SiSlack,
  SiRedux, SiElectron, SiTrello, SiJenkins, SiOpenproject, SiStripe, SiPaypal, SiJest,
  SiReactquery, SiReacthookform, SiZod, SiFramer, SiSocketdotio, SiPwa, SiLighthouse, SiCypress
} from "react-icons/si";
import { FaCode, FaProjectDiagram, FaCreditCard, FaVial, FaTools, FaTachometerAlt } from "react-icons/fa"; // Fallback icons

interface SkillIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  "JavaScript (ES6+)": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "React Native": SiReact, 
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Sass/SCSS": SiSass,
  "Sass": SiSass,
  "Material UI": SiMui,
  "Bootstrap": SiBootstrap,
  "Shadcn": SiShadcnui,
  "Redux": SiRedux,
  "Zustand": FaCode, 
  "Context API": SiReact, 
  "Electron.js": SiElectron,
  "Nextron": SiElectron, 
  "MVC, MVVM Design Patterns": FaProjectDiagram,
  "RESTful API Integration": FaCode,
  "Node.js": SiNodedotjs, 
  "Express.js": SiExpress,
  "Git": SiGit,
  "GitHub": SiGithub,
  "GitLab": SiGitlab,
  "Jira": SiJira,
  "Trello": SiTrello,
  "Jenkins": SiJenkins,
  "Docker": SiDocker,
  "OpenProject": SiOpenproject, 
  "openproject": SiOpenproject,
  "Figma": SiFigma,
  "Adobe Photoshop": SiAdobephotoshop,
  "Photoshop": SiAdobephotoshop,
  "UI/UX & Design Tools": FaTools,
  
  // Testing
  "Unit Test": SiJest,
  "Integration Test": FaVial,
  "End-to-End (E2E)": SiCypress, 
  "Unit Test, Integration Test, E2E": SiJest, // Fallback

  // New Additions
  "TanStack Query (React Query)": SiReactquery,
  "React Hook Form + Zod/Yup": SiReacthookform,
  "Framer Motion": SiFramer,
  "WebSockets / Realtime (Socket.io)": SiSocketdotio,
  "PWA (Service Workers)": SiPwa,
  "Performance Optimization": SiLighthouse,

  "Stripe": SiStripe,
  "PayPal": SiPaypal,
  "Iyzico": FaCreditCard,
  "Agile/Scrum": FaCode,
  "CI/CD": FaCode
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const Icon = iconMap[name] || FaCode;
  
  return <Icon className={className} />;
}
