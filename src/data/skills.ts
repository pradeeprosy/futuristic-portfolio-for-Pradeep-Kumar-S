import type { SkillCategoryGroup } from '../types';

/**
 * =====================================================================
 * SKILLS & TECHNOLOGIES CONFIGURATION
 * =====================================================================
 * Only verified candidate technologies are listed.
 * No arbitrary percentages or fake proficiency meters.
 * You can adjust levels: 'Actively Building' | 'Academic Projects' | 'Core Knowledge' | 'Exploring'
 */

export const skillsData: SkillCategoryGroup[] = [
  {
    id: "languages",
    categoryName: "Programming Languages",
    description: "Core languages used for coursework, algorithms, and project development.",
    skills: [
      { name: "Python", level: "Actively Building", description: "Scripting, backend prototyping, and AI/ML experiments" },
      { name: "Java", level: "Academic Projects", description: "Object-oriented programming, class design, and data structures" },
      { name: "C", level: "Core Knowledge", description: "Low-level concepts, memory management, and procedural logic" },
      { name: "C++", level: "Core Knowledge", description: "STL structures, competitive algorithms, and object-oriented foundations" },
      { name: "JavaScript", level: "Actively Building", description: "ES6+, DOM interactions, async programming, and API integration" }
    ]
  },
  {
    id: "frontend",
    categoryName: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "React", level: "Actively Building", description: "Component-driven architecture, state management, and modern hooks" },
      { name: "HTML5", level: "Core Knowledge", description: "Semantic markup, accessibility compliance, and structural layouts" },
      { name: "CSS3", level: "Core Knowledge", description: "Flexbox, Grid, custom animations, and responsive media queries" }
    ]
  },
  {
    id: "backend",
    categoryName: "Backend Development",
    description: "Server-side logic, routing, and RESTful API endpoints.",
    skills: [
      { name: "FastAPI", level: "Actively Building", description: "High-performance Python APIs with automatic Swagger documentation" },
      { name: "Flask", level: "Academic Projects", description: "Lightweight Python microframework for rapid web prototyping" }
    ]
  },
  {
    id: "databases",
    categoryName: "Databases & Storage",
    description: "Relational data modeling and persistence.",
    skills: [
      { name: "SQLite", level: "Academic Projects", description: "Embedded relational database for lightweight, serverless persistence" }
    ]
  },
  {
    id: "ai_ml",
    categoryName: "Artificial Intelligence & ML",
    description: "Exploration of intelligent conversational systems and model integration.",
    skills: [
      { name: "AI & Chatbot Systems", level: "Academic Projects", description: "Conversational assistants, prompt structure, and knowledge retrieval" }
    ]
  },
  {
    id: "tools_version_control",
    categoryName: "Development Tools & Version Control",
    description: "Tools for daily engineering, collaboration, and environment setup.",
    skills: [
      { name: "Git", level: "Actively Building", description: "Branching, commit history, staging, and version control discipline" },
      { name: "GitHub", level: "Actively Building", description: "Remote repository hosting, issues, collaboration, and code showcases" }
    ]
  }
];
