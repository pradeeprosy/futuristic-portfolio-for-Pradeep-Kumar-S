import type { ProfileData } from '../types';

/**
 * =====================================================================
 * PRADEEP KUMAR S — PERSONAL & PROFESSIONAL CONFIGURATION
 * =====================================================================
 * This is your single source of truth for all personal details,
 * career targets, educational records, and contact channels.
 * Update the values below to immediately reflect across the entire site.
 */

export const profileData: ProfileData = {
  fullName: "Pradeep Kumar S",
  preferredName: "Pradeep",
  professionalHeadline: "Computer Science Engineering Student | Aspiring Software Developer",
  
  /**
   * ===================================================================
   * 📸 PROFILE IMAGE CONFIGURATION
   * ===================================================================
   * To display your real photo:
   * 1. Save your photo into `public/images/profile.jpg` (or .png/.webp)
   * 2. Set `profileImageUrl: "/images/profile.jpg"` below.
   * 3. Leave as "" to show the futuristic cyber-avatar placeholder.
   */
  profileImageUrl: "",
  
  heroIntro: 
    "Engineering student driven by curiosity for robust software systems, modern web development, and artificial intelligence. Dedicated to turning algorithmic concepts into functional, scalable digital solutions.",
  
  aboutIntro:
    "I am an enthusiastic Computer Science and Engineering student with a deep interest in software architecture, web technologies, and practical AI applications. I enjoy tackling complex computational problems and building responsive, reliable applications that create tangible value.",
  
  learningJourney:
    "My academic curriculum provides rigorous foundations in data structures, algorithms, object-oriented design, operating systems, and database management. Alongside my university coursework, I actively build full-stack prototypes, explore modern web frameworks, and experiment with intelligent chatbot interfaces.",
  
  careerGoals:
    "My objective is to kickstart my engineering career with an innovative technology team where I can contribute to high-impact products, continuously elevate my technical craftsmanship, and solve real-world problems. I am actively seeking software development roles in India and international technology hubs, with a strong interest in opportunities in Dubai.",
  
  interests: [
    "Software Engineering & Architecture",
    "Full-Stack Web Development",
    "Applied Artificial Intelligence & LLMs",
    "Modern APIs & Distributed Systems",
    "Clean Code & Object-Oriented Design"
  ],

  aspirations: {
    primaryTarget: "Software Development Engineer / Full-Stack Developer",
    regions: ["Dubai, UAE", "India", "Remote / Global"],
    focusAreas: [
      "Building high-performance web applications",
      "Designing clean RESTful backend architectures",
      "Integrating AI & language model workflows into user-centric software"
    ]
  },

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    // EDITABLE PLACEHOLDER: Replace with your actual college/university name
    institution: "[Your College / University Name]", 
    // EDITABLE PLACEHOLDER: Replace with your actual graduation or study years
    period: "Undergraduate Engineering Student (Expected 2026)", 
    status: "Currently Pursuing",
    location: "India",
    keyCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Computer Networks",
      "Web Technologies & Software Engineering",
      "Theory of Computation & System Design Principles"
    ],
    academicHighlights: [
      "Strong conceptual grounding in algorithmic problem solving and memory management.",
      "Practical project coursework applying OOP paradigms and relational databases.",
      "Continuous hands-on software lab assignments and collaborative development."
    ]
  },

  contact: {
    // EDITABLE PLACEHOLDER: Replace with your genuine email address
    email: "pradeepsuresh103@gmail.com", 
    // EDITABLE PLACEHOLDER: Replace with your genuine GitHub profile URL
    githubUrl: "https://github.com/pradeeprosy", 
    // EDITABLE PLACEHOLDER: Replace with your genuine LinkedIn profile URL
    linkedinUrl: "https://www.linkedin.com/in/pradeep-kumar-suresh-544075343/", 
    location: "India",
    relocationTarget: "Open to Relocation (Special focus on Dubai, UAE & Tier-1 Hubs)",
    availability: "Available for Internships & Graduate Software Roles",
    // EDITABLE PLACEHOLDER: Put your resume PDF in `public/documents/Pradeep_Kumar_S_Resume.pdf`
    resumeFileName: "Pradeep_Kumar_S_Resume.pdf",
    resumeFileUrl: "/documents/Pradeep_Kumar_S_Resume.pdf"
  }
};
