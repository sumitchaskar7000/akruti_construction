// =======================================
// Project Status Type
// =======================================
export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

// =======================================
// Project Interface
// =======================================
export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  location: string;
  image: string;
  description: string;
  link: string;
  specifications?: {
    area?: string;
    units?: string;
    type?: string;
    amenities?: string[];
  };
  gallery?: string[];
}

// =======================================
// Life Event Interface
// =======================================
export interface LifeEvent {
  id: string;
  title: string;
  video: string;
  thumbnail: string;
  description: string;
  date: string;
  image?: string;     // <-- FIXED: Optional now
}

// =======================================
// Team Member Interface
// =======================================
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

// =======================================
// Lead Form Data
// =======================================
export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  consent: boolean;
}
