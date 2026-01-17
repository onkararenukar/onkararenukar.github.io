
import React from 'react';
import { SkillCategory, ExperienceItem, Certification } from './types';

/**
 * CONFIGURATION: Update these values to customize your profile.
 * These links are used across the Hero and Footer sections.
 */
export const PERSONAL_INFO = {
  name: "Onkar Renukar",
  title: "Senior Software Engineer (SE-II)",
  
  // Contact info
  email: "onkarrenukar@gmail.com",
  phone: "+91 8983045963",
  location: "Pune, India",
  
  // Social links
  linkedin: "https://www.linkedin.com/in/onkar-renukar",
  github: "https://github.com/onkararenukar",
  
  profileSummary: "Experienced Java Developer with 6+ years in Banking, Finance, and Telecom domains. Skilled in agile project delivery, cross-team coordination, and end-to-end execution. Proven ability to translate business requirements into robust backend solutions with a strong focus on quality, continuous improvement, and AI-driven development practices."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    items: ["Java 8/11/17", "Spring Boot", "JPA", "Hibernate", "Microservices", "REST APIs"]
  },
  {
    title: "Messaging & Caching",
    items: ["Kafka", "Redis"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MSSQL Server"]
  },
  {
    title: "DevOps & CI/CD",
    items: ["Jenkins", "Harness", "RLM", "Docker", "Linux"]
  },
  {
    title: "Development Tools",
    items: ["Maven", "GitHub Copilot", "Git", "GitHub", "JIRA"]
  },
  {
    title: "Methodologies",
    items: ["Agile (Scrum)", "TDD", "SDLC", "CI/CD", "SQL Optimization"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "LTIMindtree",
    role: "Senior Software Engineer (SE-II)",
    location: "Pune, India",
    period: "Nov 2024 – Present",
    description: "Leading backend development and cross-functional coordination for complex enterprise systems.",
    responsibilities: [
      "Designed and developed enterprise-grade backend systems using Java 8, Spring Boot, and Microservices architecture for Banking and Telecom sectors.",
      "Built and maintained RESTful APIs with secure and scalable integration across distributed systems.",
      "Implemented Redis caching and Kafka-based messaging to optimize system performance.",
      "Leveraged AI-assisted tools like GitHub Copilot to accelerate feature delivery."
    ],
    impacts: [
      "Improved system throughput by 30% and reduced response times by 40%.",
      "Enhanced project delivery timelines by 20% across 3 cross-functional teams."
    ]
  },
  {
    company: "Hughes Systique Softwares",
    role: "Software Engineer",
    location: "Bangalore, India",
    period: "Dec 2021 – Nov 2024",
    description: "Spearheaded module development and streamlined CI/CD pipelines.",
    responsibilities: [
      "End-to-end development of the Provisioning Module using Spring Boot, REST APIs, and MySQL.",
      "Utilized Bitbucket and Jenkins to streamline CI/CD pipelines for Linux-based deployments.",
      "Created comprehensive unit tests ensuring 90%+ code coverage.",
      "Orchestrated defect triage and led release planning for smooth production rollouts."
    ],
    impacts: [
      "Engineered data integration module processing 500,000+ SIM records daily.",
      "Enhanced data accuracy by 15% for downstream applications."
    ]
  },
  {
    company: "Omniscient Software",
    role: "Associate Solutions Engineer",
    location: "Pune, India",
    period: "Jan 2020 – Dec 2021",
    description: "Focus on banking transaction data validation and batch processing.",
    responsibilities: [
      "Integrated and validated banking transaction data for reporting and analysis.",
      "Developed transactional processes for efficient batch processing.",
      "Conducted unit testing, QA, and defect triage for critical project releases."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "ORACLE Certified Java Developer",
    description: "Professional certification demonstrating deep expertise in Java programming and application development."
  },
  {
    title: "Code Optimization Lead",
    description: "Recognized for leading performance enhancement initiatives and critical application deployments in the Banking domain."
  }
];

export const EDUCATION = {
  degree: "M.Sc. Computer Science",
  institution: "Fergusson College, Pune, India",
  graduation: "June 2020"
};
