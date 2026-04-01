// // lib/config.ts — Central configuration for R&N Legal website

// export const siteConfig = {
//   name: 'R&N Legal',
//   tagline: 'Clear Legal Guidance. Careful Preparation. Real Outcomes.',
//   description:
//     'R&N Legal is a boutique Australian law practice providing clear, practical legal advice and representation across family law, migration, property and dispute-related matters.',
//   url: 'https://rnlegal.com.au',
//   abn: 'ABN: 12 345 678 901',

//   socials: {
//   instagram: 'https://instagram.com/rnlegal',
//   facebook: 'https://facebook.com/rnlegal',
//   tiktok: 'https://tiktok.com/@rnlegal',
// },

//   contact: {
//     email: 'info@rnlegal.com.au',
//     phone1: '0430 593 124',
//     whatsapp1: "61430593124",
//     phone2: '0470 695 941',
//     whatsapp2: "61470695941",
//     address: 'Suite 401–402, Level 4, 2 Queen Street',
//     suburb: 'Melbourne VIC 3000',
//     fullAddress: 'Suite 401–402, Level 4, 2 Queen Street, Melbourne VIC 3000',
//     hours: 'Monday – Friday, 10:00 am – 5:00 pm',
//     responseTime: 'We aim to respond within 1 business day.',
//   },

//   nav: [
//     { label: 'Home',       href: '/' },
//     { label: 'About',      href: '/about' },
//     { label: 'Services',   href: '/services' },
//     { label: 'Contact',    href: '/contact' },
//     { label: 'Disclaimer', href: '/disclaimer' },
//   ],

//   trustPoints: [
//     { label: 'Plain-English Advice',     description: 'We explain what the law allows and your realistic options.' },
//     { label: 'Strong Preparation',       description: 'Precision in evidence, chronology and strategic positioning.' },
//     { label: 'Responsive Communication', description: 'Timely updates and clear expectations throughout.' },
//     { label: 'Cross-Practice Support',   description: 'Family, migration, property and dispute expertise.' },
//   ],

//   // process: [
//   //   { step: '01', title: 'Initial Consultation', description: 'We understand your situation, key facts, deadlines and urgency.' },
//   //   { step: '02', title: 'Strategy & Advice',    description: 'We advise on your options, risks and the most practical legal pathway.' },
//   //   { step: '03', title: 'Preparation',          description: 'We prepare your evidence, affidavits and documents to the highest standard.' },
//   //   { step: '04', title: 'Resolution',           description: 'We negotiate, represent and pursue resolution on your behalf.' },
//   // ],

//   process: [
//   {
//     step: '01',
//     title: 'Initial Assessment',
//     description: 'We understand your situation, key facts, deadlines and urgency.',
//   },
//   {
//     step: '02',
//     title: 'Conflict Check',
//     description: 'We conduct a conflict check to ensure we can act for you without any professional conflicts.',
//   },
//   {
//     step: '03',
//     title: 'Scope & Fee Discussion',
//     description: 'We clearly outline the scope of work, likely steps involved and applicable fees.',
//   },
//   {
//     step: '04',
//     title: 'Strategy & Document Review',
//     description: 'We develop your legal strategy and carefully review all documents and evidence.',
//   },
//   {
//     step: '05',
//     title: 'Ongoing Representation',
//     description: 'We represent you throughout the matter or provide limited-scope advice as required.',
//   },
// ],

//   // ─────────────────────────────────────────────────────────────────────────
//   // ALL SERVICES — full list of 9 individual practice areas.
//   // Used by: homepage services grid, services page (individual sections),
//   //          contact form dropdown, practiceAreas list.
//   // ─────────────────────────────────────────────────────────────────────────
//   services: [
//     {
//       slug: 'family-violence',
//       title: 'Family Violence — Intervention Orders',
//       shortTitle: 'Family Violence (FVIO)',
//       icon: 'Shield',
//       description:
//         'We assist applicants and respondents in intervention order proceedings, from initial application through to contested hearings. Every matter is approached with careful risk assessment and thorough evidence preparation.',
//       points: [
//         'Applications, responses and variations',
//         'Contested hearings',
//         'Risk assessment and evidence preparation',
//       ],
//     },
//     {
//       slug: 'family-law',
//       title: 'Family Law — Divorce and Parenting',
//       shortTitle: 'Family Law',
//       icon: 'Users',
//       description:
//         'We guide clients through divorce applications and parenting arrangements with clarity and care, ensuring all court documentation is accurately prepared and filed.',
//       points: [
//         'Divorce applications',
//         'Parenting arrangements and parenting orders',
//         'Affidavits and court documentation',
//       ],
//     },
//     {
//       slug: 'litigation-disputes',
//       title: 'Litigation and Civil Disputes',
//       shortTitle: 'Litigation & Disputes',
//       icon: 'Scale',
//       description:
//         'We represent clients in civil disputes across Victorian courts and tribunals, prioritising strategic preparation, clear pleadings and disciplined representation.',
//       points: [
//         'Contract disputes',
//         'Debt recovery',
//         'Court pleadings and submissions',
//       ],
//     },
//     {
//       slug: 'immigration-law',
//       title: 'Immigration — Tribunal and Court Pathways',
//       shortTitle: 'Immigration Law',
//       icon: 'Globe',
//       description:
//         'We provide structured advice on visa strategy and merits review, helping clients navigate the Administrative Review Tribunal and court pathways where applicable.',
//       points: [
//         'Visa strategy and preparation',
//         'Merits review matters',
//         'Court pathway guidance where applicable',
//       ],
//     },
//     {
//       slug: 'conveyancing-property',
//       title: 'Property Law and Conveyancing',
//       shortTitle: 'Property & Conveyancing',
//       icon: 'Home',
//       description:
//         'From contract review through to settlement, we assist buyers, sellers and landlords with property transactions, disputes and caveat matters.',
//       points: [
//         'Contract review',
//         'Settlement support',
//         'Property disputes and caveats',
//       ],
//     },
//     {
//       slug: 'wills-estates',
//       title: 'Wills & Estate Planning',
//       shortTitle: 'Wills & Estates',
//       icon: 'FileText',
//       description:
//         'We prepare basic wills and provide practical estate planning guidance to help protect your family and assets.',
//       points: [
//         'Wills and basic estate planning',
//         'Executor guidance and practical steps',
//       ],
//     },
//     {
//       slug: 'disciplinary-regulatory',
//       title: 'Disciplinary & Regulatory Matters',
//       shortTitle: 'Disciplinary Matters',
//       icon: 'Briefcase',
//       description:
//         'We assist professionals and individuals facing regulatory inquiries, conduct investigations and disciplinary proceedings.',
//       points: [
//         'Response planning for regulatory matters',
//         'Professional conduct issues and dispute strategy',
//       ],
//     },
//     {
//       slug: 'traffic-offences',
//       title: 'Traffic Offences',
//       shortTitle: 'Traffic Offences',
//       icon: 'Car',
//       description:
//         'We advise and represent clients facing traffic infringements, charges and licence-related consequences before the Magistrates Court.',
//       points: [
//         'Advice for infringement and charge matters',
//         'Court representation and licence consequences',
//       ],
//     },
//     {
//       slug: 'consumer-law',
//       title: 'Consumer Law',
//       shortTitle: 'Consumer Law',
//       icon: 'ShoppingBag',
//       description:
//         'We advise consumers on their rights under the Australian Consumer Law and assist with disputes, refunds and tribunal proceedings.',
//       points: [
//         'Advice on Australian Consumer Law rights',
//         'VCAT and tribunal-ready preparation',
//       ],
//     },
//   ],

//   // ─────────────────────────────────────────────────────────────────────────
//   // NAV SERVICES — consolidated 6-item list for the header dropdown and
//   // mobile accordion only. Mirrors the client doc grouping (Page 3):
//   // 5 primary areas + 1 "Other Areas" catch-all linking to #other-areas.
//   // ─────────────────────────────────────────────────────────────────────────
//   navServices: [
//     {
//       slug: 'family-violence',
//       shortTitle: 'Intervention Orders',
//       hint: 'Applications, responses and variations',
//     },
//     {
//       slug: 'family-law',
//       shortTitle: 'Family Law',
//       hint: 'Divorce applications & parenting orders',
//     },
//     {
//       slug: 'litigation-disputes',
//       shortTitle: 'Litigation',
//       hint: 'Contract disputes & debt recovery',
//     },
//     {
//       slug: 'immigration-law',
//       shortTitle: 'Immigration',
//       hint: 'Visa strategy & merits review',
//     },
//     {
//       slug: 'conveyancing-property',
//       shortTitle: 'Property Law',
//       hint: 'Contract review & settlement support',
//     },
//     {
//       slug: 'other-areas',
//       shortTitle: 'Other Areas',
//       hint: 'Wills, traffic, disciplinary & consumer',
//     },
//   ],

//   practiceAreas: [
//     'Intervention Orders (FVIO)',
//     'Family Law',
//     'Litigation & Civil Disputes',
//     'Immigration',
//     'Property Law & Conveyancing',
//     'Wills & Estate Planning',
//     'Disciplinary & Regulatory',
//     'Traffic Offences',
//     'Consumer Law',
//     'Other / Not Sure',
//   ],

//   disclaimer: {
//     shortText:
//       'The information on this website is general in nature and does not constitute legal advice. Use of this website does not create a lawyer–client relationship.',
//     popupText:
//       'The information on this website is general in nature and is not intended to constitute legal advice. You should not act or refrain from acting based on any information on this website without obtaining specific legal advice from a qualified practitioner. By continuing to use this website, you acknowledge and accept these terms.',
//   },

//   footer: {
//     tagline: 'Boutique legal practice. Clear advice. Careful preparation.',
//     links: [
//       { label: 'Privacy Policy', href: '/disclaimer#privacy' },
//       { label: 'Disclaimer',     href: '/disclaimer' },
//       { label: 'Contact',        href: '/contact' },
//     ],
//   },
// }

// export type SiteConfig = typeof siteConfig
// export type Service    = (typeof siteConfig.services)[number]
// export type NavService = (typeof siteConfig.navServices)[number]

// lib/config.ts — Central configuration for R&N Legal website

export const siteConfig = {
  name: 'R&N Legal',
  tagline: 'Clear Legal Guidance. Careful Preparation. Real Outcomes.',
  description:
    'R&N Legal is a boutique Australian law practice providing clear, practical legal advice and representation across family law, migration, property and dispute-related matters.',
  url: 'https://rnlegal.com.au',
  abn: 'ABN: 12 345 678 901',

  socials: {
    instagram: 'https://instagram.com/rnlegal',
    facebook: 'https://facebook.com/rnlegal',
    tiktok: 'https://tiktok.com/@rnlegal',
  },

  contact: {
    email: 'info@rnlegal.com.au',
    phone1: '0430 593 124',
    whatsapp1: '61430593124',
    phone2: '0470 695 941',
    whatsapp2: '61470695941',
    address: 'Suite 401–402, Level 4, 2 Queen Street',
    suburb: 'Melbourne VIC 3000',
    fullAddress: 'Suite 401–402, Level 4, 2 Queen Street, Melbourne VIC 3000',
    hours: 'Monday – Friday, 10:00 am – 5:00 pm',
    responseTime: 'We aim to respond within 1 business day.',
  },

  nav: [
    { label: 'Home',       href: '/' },
    { label: 'About',      href: '/about' },
    { label: 'Services',   href: '/services' },
    { label: 'Contact',    href: '/contact' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],

  trustPoints: [
    { label: 'Plain-English Advice',     description: 'We explain what the law allows and your realistic options.' },
    { label: 'Strong Preparation',       description: 'Precision in evidence, chronology and strategic positioning.' },
    { label: 'Responsive Communication', description: 'Timely updates and clear expectations throughout.' },
    { label: 'Cross-Practice Support',   description: 'Family, migration, property and dispute expertise.' },
  ],

  process: [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'We understand your situation, key facts, deadlines and urgency.',
    },
    {
      step: '02',
      title: 'Conflict Check',
      description: 'We conduct a conflict check to ensure we can act for you without any professional conflicts.',
    },
    {
      step: '03',
      title: 'Scope & Fee Discussion',
      description: 'We clearly outline the scope of work, likely steps involved and applicable fees.',
    },
    {
      step: '04',
      title: 'Strategy & Document Review',
      description: 'We develop your legal strategy and carefully review all documents and evidence.',
    },
    {
      step: '05',
      title: 'Ongoing Representation',
      description: 'We represent you throughout the matter or provide limited-scope advice as required.',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // ALL SERVICES — full list of 9 individual practice areas.
  // Used by: homepage services grid, services page (individual sections),
  //          contact form dropdown, practiceAreas list.
  // ─────────────────────────────────────────────────────────────────────────
  services: [
    {
      slug: 'family-violence',
      title: 'Family Violence — Intervention Orders',
      shortTitle: 'Family Violence (FVIO)',
      icon: 'Shield',
      description:
        'Family violence intervention order matters in Victoria are serious, urgent and often deeply interconnected with family, parenting, housing and criminal consequences. Early legal advice is often critical because the practical effect of an interim or final order can be immediate and far-reaching. R&N Legal assists both applicants seeking protection and respondents responding to allegations or applications, with close attention to chronology, evidence, risk, procedural fairness and the practical consequences of any order sought or made.',
      points: [
        'Applications for family violence intervention orders',
        'Responding to police or private applications',
        'Interim order hearings',
        'Negotiated outcomes where appropriate',
        'Contested hearings',
        'Variations and revocations',
        'Advice on allegations, evidence and breach consequences',
        'Overlap between intervention orders and family law matters',
      ],
    },
    {
      slug: 'family-law',
      title: 'Family Law — Divorce and Parenting',
      shortTitle: 'Family Law',
      icon: 'Users',
      description:
        'Family law matters are rarely only about legal rights. They involve children, living arrangements, finances, communication breakdown and, in many cases, significant emotional pressure. R&N Legal assists clients with divorce, parenting matters, consent orders, interim applications and family law strategy. Our focus is on identifying what arrangement can be supported by evidence, what pathway is proportionate, and what steps best protect the client\'s legal and personal position.',
      points: [
        'Divorce applications',
        'Parenting disputes and parenting orders',
        'Consent orders',
        'Interim applications',
        'Affidavit material and supporting evidence',
        'Family-violence-related parenting issues',
        'Practical advice on process, risk and next steps',
      ],
    },
    {
      slug: 'litigation-disputes',
      title: 'Litigation and Civil Disputes',
      shortTitle: 'Litigation & Disputes',
      icon: 'Scale',
      description:
        'Disputes are rarely won by aggression alone. They are usually resolved through preparation, leverage, evidence, timing and judgment. R&N Legal assists clients with contractual disputes, debt recovery, property-related disputes and general civil litigation strategy. Our approach is grounded in commercial and procedural realism — focused on what is truly in dispute, what evidence exists, and which pathway gives the client the strongest practical advantage.',
      points: [
        'Contractual disputes',
        'Debt recovery',
        'Pre-litigation correspondence',
        'Settlement strategy',
        'Pleadings, evidence and submissions',
        'Court and tribunal matters',
        'Practical risk and recoverability advice',
      ],
    },
    {
      slug: 'immigration-law',
      title: 'Immigration — Tribunal and Court Pathways',
      shortTitle: 'Immigration Law',
      icon: 'Globe',
      description:
        'Immigration law is federal in nature, but for clients in Victoria its effects are immediate and local: work rights, family stability, sponsorship, lawful status, tribunal review and court deadlines. R&N Legal provides structured immigration advice for clients who need more than form-filling. Many migration matters turn on timing, status, validity, evidence, or the framing of review submissions — we assist clients to understand where they stand and how the matter should be prepared to be presented properly and persuasively.',
      points: [
        'Visa strategy and pathway advice',
        'Temporary and permanent visa matters',
        'Visa refusal matters',
        'Visa cancellation matters',
        'Administrative review and related preparation',
        'Bridging and status-related issues',
        'Complex procedural and evidentiary advice',
        'Structured submissions and case preparation',
      ],
    },
    {
      slug: 'conveyancing-property',
      title: 'Property Law and Conveyancing',
      shortTitle: 'Property & Conveyancing',
      icon: 'Home',
      description:
        'Property matters often involve significant financial exposure, fixed contractual deadlines and legal issues that become harder to unwind once a transaction is on foot. R&N Legal assists with contract review, conveyancing support, settlement issues, title concerns, caveats and property-related disputes. Our approach combines careful review, procedural attention and practical legal judgment — whether the matter is preventative, transactional or contentious.',
      points: [
        'Contract review before signing',
        'Residential conveyancing support',
        'Settlement advice and issue management',
        'Title and ownership concerns',
        'Caveat matters',
        'Property disputes',
        'Urgent transaction-related advice',
      ],
    },
    {
      slug: 'wills-estates',
      title: 'Wills & Estate Planning',
      shortTitle: 'Wills & Estates',
      icon: 'FileText',
      description:
        'A will should not be treated as a formality. It should reflect a client\'s actual intentions, family circumstances and practical planning needs. Poorly prepared estate documents can create unnecessary cost, uncertainty and tension for families later. R&N Legal assists with wills and basic estate planning so clients can put in place documents that are clear, workable and more likely to reduce future confusion.',
      points: [
        'Wills',
        'Review of existing wills',
        'Basic estate planning',
        'Executor and beneficiary planning',
      ],
    },
    {
      slug: 'disciplinary-regulatory',
      title: 'Disciplinary & Regulatory Matters',
      shortTitle: 'Disciplinary Matters',
      icon: 'Briefcase',
      description:
        'Regulatory and disciplinary matters require a careful and measured response from the beginning. These matters often carry consequences beyond the immediate complaint or allegation, including effects on registration, employment, reputation and future practice. R&N Legal assists clients to understand the process, assess the legal and factual issues, and respond in a way that protects both their immediate and longer-term position.',
      points: [
        'Complaints and investigations',
        'Regulatory correspondence',
        'Response strategy',
        'Professional conduct issues',
        'Disciplinary proceedings',
      ],
    },
    {
      slug: 'traffic-offences',
      title: 'Traffic Offences',
      shortTitle: 'Traffic Offences',
      icon: 'Car',
      description:
        'Traffic matters in Victoria can have consequences for licence status, employment, insurance, finances and, in some cases, criminal exposure. R&N Legal assists clients facing traffic-related proceedings with practical advice and representation. We assess the allegation, the procedural posture of the matter, the available evidence, and the realistic scope for mitigation or contest — treating these matters with the seriousness they deserve.',
      points: [
        'Traffic charges',
        'Plea and penalty advice',
        'Magistrates\' Court appearances',
        'Licence-impacting matters',
        'Strategic preparation',
        'Related transport and road law issues',
      ],
    },
    {
      slug: 'consumer-law',
      title: 'Consumer Law',
      shortTitle: 'Consumer Law',
      icon: 'ShoppingBag',
      description:
        'Consumers are often told they have rights, but far less often told how to enforce them effectively. R&N Legal assists clients with refund disputes, service complaints, misleading representations and broader consumer-law issues. Our role is to identify the legal basis of the complaint, assess the most efficient pathway to resolution, and apply the right level of pressure through correspondence, negotiation or tribunal preparation.',
      points: [
        'Refund disputes',
        'Service complaints',
        'Misleading conduct concerns',
        'Pre-VCAT correspondence',
        'Negotiation and resolution strategy',
        'Tribunal pathway advice',
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // NAV SERVICES — consolidated 6-item list for the header dropdown and
  // mobile accordion only.
  // ─────────────────────────────────────────────────────────────────────────
  navServices: [
    {
      slug: 'family-violence',
      shortTitle: 'Intervention Orders',
      hint: 'Applications, responses and variations',
    },
    {
      slug: 'family-law',
      shortTitle: 'Family Law',
      hint: 'Divorce applications & parenting orders',
    },
    {
      slug: 'litigation-disputes',
      shortTitle: 'Litigation',
      hint: 'Contract disputes & debt recovery',
    },
    {
      slug: 'immigration-law',
      shortTitle: 'Immigration',
      hint: 'Visa strategy & merits review',
    },
    {
      slug: 'conveyancing-property',
      shortTitle: 'Property Law',
      hint: 'Contract review & settlement support',
    },
    {
      slug: 'other-areas',
      shortTitle: 'Other Areas',
      hint: 'Wills, traffic, disciplinary & consumer',
    },
  ],

  practiceAreas: [
    'Intervention Orders (FVIO)',
    'Family Law',
    'Litigation & Civil Disputes',
    'Immigration',
    'Property Law & Conveyancing',
    'Wills & Estate Planning',
    'Disciplinary & Regulatory',
    'Traffic Offences',
    'Consumer Law',
    'Other / Not Sure',
  ],

  disclaimer: {
    shortText:
      'The information on this website is general in nature and does not constitute legal advice. Use of this website does not create a lawyer–client relationship.',
    popupText:
      'The information on this website is general in nature and is not intended to constitute legal advice. You should not act or refrain from acting based on any information on this website without obtaining specific legal advice from a qualified practitioner. By continuing to use this website, you acknowledge and accept these terms.',
  },

  footer: {
    tagline: 'Boutique legal practice. Clear advice. Careful preparation.',
    links: [
      { label: 'Privacy Policy', href: '/disclaimer#privacy' },
      { label: 'Disclaimer',     href: '/disclaimer' },
      { label: 'Contact',        href: '/contact' },
    ],
  },
}

export type SiteConfig = typeof siteConfig
export type Service    = (typeof siteConfig.services)[number]
export type NavService = (typeof siteConfig.navServices)[number]