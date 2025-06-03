// import { PracticeArea } from '@/types/PracticeArea'

// export const practiceAreas: PracticeArea[] = [
//   {
//     id: 1,
//     title: 'Civil & Criminal Litigation',
//     slug: 'civil-criminal-litigation',
//     image: '/images/practice-areas/civil-criminal.jpg',
//     shortDescription: 'Expert representation in civil disputes and criminal cases at all levels of judiciary.',
//     fullDescription: `At Vidhi Mantra Legal Consultants, we offer comprehensive representation in both civil and criminal litigation matters. Our team of experienced attorneys has handled a wide range of civil disputes, including contractual matters, property disputes, commercial litigation, and family law issues. In criminal matters, we provide robust defense and prosecution services for various offenses, from white-collar crimes to more serious criminal charges.

//     Our litigation practice is characterized by thorough preparation, strategic thinking, and aggressive advocacy. We understand the complexities of the legal system and have developed effective strategies to navigate them successfully. Whether you're facing a civil lawsuit or criminal charges, our team is equipped to protect your rights and interests.`,
//     keyServices: [
//       'Civil dispute resolution',
//       'Criminal defense and prosecution',
//       'Family law litigation',
//       'Commercial disputes',
//       'Property litigation',
//       'White-collar crime defense',
//       'Appeals and revisions'
//     ]
//   },
//   {
//     id: 2,
//     title: 'Corporate & Commercial Law',
//     slug: 'corporate-commercial-law',
//     image: '/images/practice-areas/corporate.jpg',
//     shortDescription: 'Comprehensive legal support for businesses from formation to complex corporate transactions.',
//     fullDescription: `Our corporate and commercial law practice offers strategic legal advice and services to businesses of all sizes, from startups to established corporations. We provide counsel on all aspects of corporate law, including entity formation, corporate governance, compliance, mergers and acquisitions, and corporate restructuring.

//     Our team has extensive experience drafting and negotiating commercial contracts, joint ventures, and partnership agreements. We also advise on regulatory compliance matters to ensure that your business operations remain within the bounds of applicable laws and regulations.`,
//     keyServices: [
//       'Corporate formation and structuring',
//       'Corporate governance',
//       'Mergers and acquisitions',
//       'Commercial contracts',
//       'Joint ventures and partnerships',
//       'Corporate compliance',
//       'Business restructuring'
//     ]
//   }
// ]

import { PracticeArea } from "@/types/PracticeArea";

export const practiceAreas: PracticeArea[] = [
  {
    id: "civil-criminal-litigation",
    title: "Civil & Criminal Litigation",
    shortDescription: "Expert legal representation in civil disputes and criminal defense cases at all court levels.",
    description: `Our litigation team provides comprehensive legal representation for both civil disputes and criminal defense matters. With extensive experience in trial advocacy, we handle cases at all court levels, including the Supreme Court of India, High Court of Punjab and Haryana, and district courts throughout Punjab and Haryana.
    
    Our civil litigation services cover breach of contract, property disputes, commercial conflicts, and tort claims. In criminal defense, we handle everything from white-collar crimes to serious criminal charges with strategic defense planning and thorough case preparation.
    
    We believe in a client-focused approach, keeping you informed at every stage and developing strategies aligned with your objectives.`,
    icon: "scale-balance",
    imageSrc: "/images/practice-areas/civil-criminal.jpg",
    partners: ["sudhir-rana", "vishal-singh", "bhaskar-sorout"],
    relatedAreas: ["arbitration-mediation", "family-law-divorce"]
  },
  {
    id: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    shortDescription: "Comprehensive legal solutions for businesses, from startups to established corporations.",
    description: `Our corporate and commercial law practice provides strategic legal counsel to businesses of all sizes. We assist with entity formation, governance issues, regulatory compliance, contract drafting and negotiation, mergers and acquisitions, and corporate restructuring.
    
    We serve as trusted advisors to entrepreneurs, startups, SMEs, and established corporations, helping navigate complex legal landscapes while focusing on business objectives. Our team has particular expertise in commercial contracts, shareholder agreements, joint ventures, and corporate compliance.
    
    We take pride in offering practical, business-oriented legal solutions that balance legal protection with commercial viability.`,
    icon: "briefcase",
    imageSrc: "/images/practice-areas/corporate.jpg",
    partners: ["sudhir-rana", "baljeet-beniwal", "vishal-singh"],
    relatedAreas: ["banking-finance-law", "regulatory-compliance"]
  },
  {
    id: "banking-finance-law",
    title: "Banking & Finance Law",
    shortDescription: "Specialized legal services for financial institutions and banking-related matters.",
    description: `Our banking and finance law practice offers specialized legal services to financial institutions, lenders, borrowers, and investors. We handle loan transactions, debt recovery, security enforcement, banking regulations, and financial restructuring.
    
    With extensive experience representing major banks and financial institutions, our team provides comprehensive legal support for project finance, syndicated lending, debt restructuring, and regulatory compliance under banking and finance laws.
    
    We take particular pride in our debt recovery and security enforcement capabilities, having successfully recovered substantial dues for banks and financial institutions through strategic legal action.`,
    icon: "currency-dollar",
    imageSrc: "/images/practice-areas/banking.jpg",
    partners: ["sudhir-rana", "baljeet-beniwal", "bhaskar-sorout"],
    relatedAreas: ["corporate-commercial-law", "arbitration-mediation"]
  },
  {
    id: "real-estate-property-law",
    title: "Real Estate & Property Law",
    shortDescription: "Expert guidance on property transactions, disputes, and regulatory compliance.",
    description: `Our real estate and property law practice assists clients with all aspects of property transactions, disputes, and compliance issues. Services include property title verification, transaction documentation, lease agreements, property disputes, land acquisition matters, and regulatory compliance.
    
    We represent individual property owners, real estate developers, construction companies, and investors in matters relating to residential, commercial, and agricultural properties across Punjab and Haryana.
    
    Our specialized knowledge of local property laws, regulations, and procedures ensures that clients receive accurate advice and effective representation in property-related legal matters.`,
    icon: "building-office",
    imageSrc: "/images/practice-areas/real-estate.jpg",
    partners: ["abhishek-kharb", "vishal-singh"],
    relatedAreas: ["civil-criminal-litigation", "corporate-commercial-law"]
  },
  {
    id: "arbitration-mediation",
    title: "Arbitration & Mediation",
    shortDescription: "Alternative dispute resolution services for efficient and effective conflict resolution.",
    description: `Our arbitration and mediation practice offers specialized alternative dispute resolution services for commercial and civil conflicts. We act as counsel in arbitration proceedings, appointed arbitrators, and trained mediators to facilitate negotiated settlements.
    
    With expertise in institutional and ad-hoc arbitrations under various rules including the Arbitration and Conciliation Act, we provide strategic representation throughout the arbitration process, from drafting arbitration clauses to enforcement of arbitral awards.
    
    We emphasize the advantages of alternative dispute resolution—cost efficiency, confidentiality, speed, and preserved business relationships—while creating tailored approaches for each unique dispute.`,
    icon: "chat-bubble-left-right",
    imageSrc: "/images/practice-areas/arbitration.jpg",
    partners: ["baljeet-beniwal", "bhaskar-sorout"],
    relatedAreas: ["civil-criminal-litigation", "corporate-commercial-law"]
  },
  {
    id: "family-law-divorce",
    title: "Family Law & Divorce",
    shortDescription: "Compassionate legal counsel for family matters, including divorce and child custody.",
    description: `Our family law practice provides compassionate and discreet legal counsel for sensitive family matters. Services include divorce proceedings, judicial separation, child custody arrangements, maintenance and alimony claims, matrimonial property disputes, and domestic violence protection.
    
    We understand the emotional challenges involved in family disputes and strive to offer supportive guidance while protecting our clients' legal interests and rights. Our approach emphasizes negotiated settlements where possible, but we provide strong representation in contested matters when necessary.
    
    We handle both Hindu and Muslim personal law matters and have extensive experience in cases under the Special Marriage Act.`,
    icon: "users",
    imageSrc: "/images/practice-areas/family.jpg",
    partners: ["vishal-singh", "abhishek-kharb"],
    relatedAreas: ["arbitration-mediation", "civil-criminal-litigation"]
  },
  {
    id: "employment-labor-laws",
    title: "Employment & Labor Laws",
    shortDescription: "Comprehensive legal services for employers and employees on workplace matters.",
    description: `Our employment and labor law practice serves both employers and employees with comprehensive legal services on workplace matters. We handle labor compliance, employment contracts, workplace policies, termination disputes, sexual harassment issues, and labor union negotiations.
    
    For employers, we provide strategic advice on compliance with labor laws, employee management, and dispute resolution. For employees, we offer representation in wrongful termination, discrimination, and benefit claims.
    
    Our team has particular expertise in industrial disputes, retrenchment procedures, and statutory compliance under various labor laws applicable in India.`,
    icon: "clipboard-document-list",
    imageSrc: "/images/practice-areas/employment.jpg",
    partners: ["bhaskar-sorout", "vishal-singh"],
    relatedAreas: ["corporate-commercial-law", "civil-criminal-litigation"]
  },
  {
    id: "regulatory-compliance",
    title: "Regulatory & Compliance Advisory",
    shortDescription: "Strategic guidance on navigating complex regulatory frameworks across various sectors.",
    description: `Our regulatory and compliance advisory practice helps businesses navigate complex regulatory frameworks across various sectors. We provide comprehensive compliance audits, regulatory documentation, licensing assistance, and representation before regulatory authorities.
    
    With expertise in multiple sectors including banking, real estate, corporate governance, and data protection, we help clients understand their compliance obligations and implement effective compliance programs.
    
    We place particular emphasis on preventive compliance strategies to mitigate risks before they escalate into regulatory actions or penalties.`,
    icon: "document-check",
    imageSrc: "/images/practice-areas/regulatory.jpg",
    partners: ["sudhir-rana", "abhishek-kharb"],
    relatedAreas: ["corporate-commercial-law", "banking-finance-law"]
  },
  {
    id: "intellectual-property-law",
    title: "Intellectual Property Law",
    shortDescription: "Protection and enforcement of intellectual property rights for individuals and businesses.",
    description: `Our intellectual property practice covers trademark registration and protection, copyright issues, patent consultation, IP licensing and assignment, and IP infringement actions. We assist creators, innovators, startups, and established businesses in protecting their valuable intellectual assets.
    
    Our services include IP portfolio management, conducting trademark searches, preparing and filing trademark applications, drafting IP licensing agreements, and enforcement actions against infringement.
    
    While we focus primarily on trademark and copyright matters, we coordinate with specialized patent attorneys for technical patent filings when needed.`,
    icon: "light-bulb",
    imageSrc: "/images/practice-areas/intellectual-property.jpg",
    partners: ["abhishek-kharb", "vishal-singh"],
    relatedAreas: ["corporate-commercial-law", "civil-criminal-litigation"]
  }
];

export const getPracticeArea = (slug: string): PracticeArea | undefined => {
  return practiceAreas.find((area) => area.id === slug);
};

export const getRelatedPracticeAreas = (ids: string[]): PracticeArea[] => {
  return practiceAreas.filter((area) => ids.includes(area.id));
};