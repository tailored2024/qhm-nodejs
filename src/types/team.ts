export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image: string;
  bio: string[];
  description?: string[];
  education?: string;
  languages?: string[];
}
