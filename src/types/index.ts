export interface ContactInfo {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  relocationTarget: string;
  availability: string;
  resumeFileName?: string;
  resumeFileUrl?: string; // Path or external link if provided
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  keyCourses: string[];
  academicHighlights: string[];
}

export interface ProfileData {
  fullName: string;
  preferredName: string;
  professionalHeadline: string;
  profileImageUrl?: string; // Path in public folder e.g. "/images/profile.jpg"
  heroIntro: string;
  aboutIntro: string;
  learningJourney: string;
  careerGoals: string;
  interests: string[];
  contact: ContactInfo;
  education: EducationInfo;
  aspirations: {
    primaryTarget: string;
    regions: string[];
    focusAreas: string[];
  };
}

export type ProjectStatus = 'Prototype' | 'In Development' | 'Academic Project' | 'Concept';
export type ProjectCategory = 'All' | 'Web Apps' | 'AI & ML' | 'Systems & Core' | 'Platforms';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Web Apps' | 'AI & ML' | 'Systems & Core' | 'Platforms';
  technologies: string[];
  features: string[];
  status: ProjectStatus;
  githubUrl?: string; // Empty or placeholder if not yet published
  liveUrl?: string;   // Optional live demonstration
  hasRepoConfigured: boolean;
  hasLiveDemoConfigured: boolean;
  accentColor: string;
  architectureHighlights?: string[];
  icon: string;
}

export type SkillProficiencyLevel = 'Actively Building' | 'Academic Projects' | 'Core Knowledge' | 'Exploring';

export interface SkillItem {
  name: string;
  level: SkillProficiencyLevel;
  description?: string;
  icon?: string;
}

export interface SkillCategoryGroup {
  id: string;
  categoryName: string;
  description: string;
  skills: SkillItem[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}
