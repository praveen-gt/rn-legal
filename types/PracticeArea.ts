export interface PracticeArea {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: string;
    imageSrc: string;
    partners: string[];
    relatedAreas: string[];
    slug?: string;
  }