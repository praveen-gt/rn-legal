export interface Partner {
  id: number;
  name: string;
  slug: string;
  designation: string;
  imageSrc: string;
  since: string; 
  expertiseAreas: string[]; 
  bio?: string;
  education?: string[];
  contact?: { 
    email: string;
    phone: string;
  };
  highCourtPractice?: string;
  languages?: string[];
  barAssociations?: string[];
  achievements?: string[];
}