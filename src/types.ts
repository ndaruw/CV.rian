export interface Project {
  id: string;
  title: string;
  category: 'web' | 'uiux' | 'mobile' | 'branding';
  categoryLabel: string;
  description: string;
  fullStory: string;
  client: string;
  year: string;
  role: string;
  metrics?: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  project: string;
}
