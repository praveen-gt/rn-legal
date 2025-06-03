import { Partner } from '@/types/Partner'; // Assuming your interface is in this path

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Advocate Sudhir Rana',
    slug: 'sudhir-rana',
    designation: 'Senior Partner',
    imageSrc: '/images/partners/sudhir-rana.jpg', // Correct field name
    since: '2013',                              // Correct field name
    expertiseAreas: [                           // Correct field name
      'Civil & Criminal Litigation',
      'Banking & Finance Law',
      'Corporate Law',
      'Regulatory & Compliance Matters'
    ],
    bio: 'Practicing in Punjab and Haryana High Court since 2013, with substantial experience in complex legal matters involving banking institutions, corporate disputes, and regulatory issues.',
    education: [
      'LL.B., Panjab University, Chandigarh',
      'B.Com, Panjab University, Chandigarh'
    ],
    contact: {                                  // Matches interface structure
      email: 'sudhir@vidhimantra.com',
      phone: '+91-9643213390'
    }
  },
  {
    id: 2,
    name: 'Advocate Baljeet Beniwal',
    slug: 'baljeet-beniwal',
    designation: 'Senior Partner',
    imageSrc: '/images/partners/baljeet-beniwal.jpg', // Changed from image
    since: '2013',
    expertiseAreas: [                              // Changed from expertise
      'Civil Litigation',
      'Debt Recovery',
      'Corporate Advisory',
      'Arbitration & Mediation'
    ],
    bio: 'Practicing in Punjab and Haryana High Court since 2013. Expertise in debt recovery matters and representing corporate clients in legal disputes and arbitration proceedings.',
    education: [
      'LL.B., Panjab University, Chandigarh',
      'B.A., Kurukshetra University'
    ],
    contact: {
      email: 'baljeet@vidhimantra.com',
      phone: '+91-9643213390'
    }
  },
  {
    id: 3,
    name: 'Advocate Bhaskar Sorout',
    slug: 'bhaskar-sorout',
    designation: 'Partner',
    imageSrc: '/images/partners/bhaskar-sorout.jpg', // Changed from image
    since: '2017',
    expertiseAreas: [                             // Changed from expertise
      'Criminal Law',
      'Banking Litigation',
      'Arbitration',
      'Employment Law'
    ],
    bio: 'Practicing in Punjab and Haryana High Court since 2017. Handles cases related to banking litigation, employee disputes, and criminal matters, with a focus on high-profile cases involving financial institutions.',
    education: [
      'LL.B., Panjab University, Chandigarh',
      'B.A., Delhi University'
    ],
    contact: {
      email: 'bhaskar@vidhimantra.com',
      phone: '+91-9643213390'
    }
  },
  {
    id: 4,
    name: 'Advocate Vishal Singh',
    slug: 'vishal-singh',
    designation: 'Partner',
    imageSrc: '/images/partners/vishal-singh.jpg', // Changed from image
    since: '2019',
    expertiseAreas: [                           // Changed from expertise
      'Corporate Law',
      'Family Law',
      'Civil & Criminal Law',
      'Contract Law'
    ],
    bio: 'Practicing in Punjab and Haryana High Court since 2019. Specializes in corporate law and legal solutions for family disputes, contracts, and civil litigation.',
    education: [
      'LL.B., Faculty of Law, Delhi University',
      'B.Com, Delhi University'
    ],
    contact: {
      email: 'vishal@vidhimantra.com',
      phone: '+91-9643213390'
    }
  },
  {
    id: 5,
    name: 'Advocate Abhishek Kharb',
    slug: 'abhishek-kharb',
    designation: 'Partner',
    imageSrc: '/images/partners/abhishek-kharb.jpg', // Changed from image
    since: '2019',
    expertiseAreas: [                             // Changed from expertise
      'Real Estate & Property Law',
      'Regulatory Compliance',
      'Commercial Litigation',
      'Intellectual Property Law'
    ],
    bio: 'Practicing in Punjab and Haryana High Court since 2019. Focuses on real estate disputes, regulatory issues, and intellectual property matters, representing both individuals and corporate clients.',
    education: [
      'LL.B., Panjab University, Chandigarh',
      'B.Tech, NIT Kurukshetra'
    ],
    contact: {
      email: 'abhishek@vidhimantra.com',
      phone: '+91-9643213390'
    }
  }
];