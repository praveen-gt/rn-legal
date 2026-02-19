// // lib/config.ts — Central configuration for R&N Legal website

// export const siteConfig = {
//   name: 'R&N Legal',
//   tagline: 'Clear Legal Guidance. Careful Preparation. Real Outcomes.',
//   description:
//     'R&N Legal is a boutique Australian law practice providing clear, practical legal advice and representation across family law, migration, property and dispute-related matters.',
//   url: 'https://rnlegal.com.au',
//   abn: 'ABN: 12 345 678 901',

//   contact: {
//     email: 'info@rnlegal.com.au',
//     phone1: '0430 593 124',
//     phone2: '0470 695 941',
//     address: 'Suite 401 Level 4, 2 Queen Street',
//     suburb: 'Melbourne VIC 3000',
//     fullAddress: 'Suite 401 Level 4, 2 Queen Street, Melbourne VIC 3000',
//     hours: 'Monday – Friday, 10:00 am – 5:00 pm',
//     responseTime: 'We aim to respond within 1 business day.',
//   },

//   nav: [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Services', href: '/services' },
//     { label: 'Contact', href: '/contact' },
//     { label: 'Disclaimer', href: '/disclaimer' },
//   ],

//   trustPoints: [
//     { label: 'Plain-English Advice', description: 'We explain what the law allows and your realistic options.' },
//     { label: 'Strong Preparation', description: 'Precision in evidence, chronology and strategic positioning.' },
//     { label: 'Responsive Communication', description: 'Timely updates and clear expectations throughout.' },
//     { label: 'Cross-Practice Support', description: 'Family, migration, property and dispute expertise.' },
//   ],

//   process: [
//     {
//       step: '01',
//       title: 'Initial Consultation',
//       description: 'We understand your situation, key facts, deadlines and urgency.',
//     },
//     {
//       step: '02',
//       title: 'Strategy & Advice',
//       description: 'We advise on your options, risks and the most practical legal pathway.',
//     },
//     {
//       step: '03',
//       title: 'Preparation',
//       description: 'We prepare your evidence, affidavits and documents to the highest standard.',
//     },
//     {
//       step: '04',
//       title: 'Resolution',
//       description: 'We negotiate, represent and pursue resolution on your behalf.',
//     },
//   ],

//   services: [
//     {
//       slug: 'family-violence',
//       title: 'Family Violence — Intervention Orders',
//       shortTitle: 'Family Violence (FVIO)',
//       icon: 'Shield',
//       description:
//         'We assist with intervention order applications, responses, variations and contested hearings. We also advise on safety planning, evidence collection, and related parenting risk considerations.',
//       points: [
//         'Advice on safety planning, evidence and urgent applications',
//         'Applications, responses, variations and contested hearings',
//         'Negotiation of undertakings where appropriate and instructed',
//         'Related parenting and property risk considerations',
//       ],
//     },
//     {
//       slug: 'family-law',
//       title: 'Family Law — Divorce, Parenting & Orders',
//       shortTitle: 'Family Law',
//       icon: 'Users',
//       description:
//         'We assist families navigate divorce, parenting arrangements, interim and final orders with thorough preparation and honest advice about likely outcomes.',
//       points: [
//         'Divorce applications and procedural guidance',
//         'Parenting arrangements, parenting orders and interim orders',
//         'Communication protocols, changeover arrangements and risk management',
//         'Court-ready preparation of affidavits and supporting documents',
//       ],
//     },
//     {
//       slug: 'wills-estates',
//       title: 'Wills & Estates',
//       shortTitle: 'Wills & Estates',
//       icon: 'FileText',
//       description:
//         'We prepare straightforward wills and provide practical estate planning guidance to help you protect your family and assets.',
//       points: [
//         'Simple wills and basic estate planning',
//         'Executor guidance and practical steps after a death',
//         'Referrals for complex estate litigation where needed',
//       ],
//     },
//     {
//       slug: 'conveyancing-property',
//       title: 'Conveyancing & Property Law',
//       shortTitle: 'Property & Conveyancing',
//       icon: 'Home',
//       description:
//         'We assist buyers, sellers and owners with contract reviews, settlement, title matters and property disputes across Victoria.',
//       points: [
//         'Contract review and advice before signing',
//         'Buying/selling support, settlement coordination and checklists',
//         'Titles, notices, and property dispute guidance',
//         'Caveats and urgent property protection steps where appropriate',
//       ],
//     },
//     {
//       slug: 'immigration-law',
//       title: 'Immigration Law — Court & Tribunal Pathways',
//       shortTitle: 'Immigration Law',
//       icon: 'Globe',
//       description:
//         'We advise on visa strategy, refusal and cancellation responses, merits review at the ART, and court pathways through the FCFCOA.',
//       points: [
//         'Visa strategy and document preparation',
//         'Refusal/cancellation response planning and time-critical steps',
//         'Merits review preparation (ART) and related processes',
//         'Court pathway guidance (FCFCOA) where applicable',
//       ],
//     },
//     {
//       slug: 'litigation-disputes',
//       title: 'Litigation & Disputes',
//       shortTitle: 'Litigation & Disputes',
//       icon: 'Scale',
//       description:
//         'We assist with debt recovery, contract disputes and civil litigation — from letters of demand through to court representation.',
//       points: [
//         'Debt recovery, contract disputes and negotiations',
//         'Letters of demand, pre-action steps and settlement offers',
//         'Court documents and representation where appropriate',
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
//         'Response planning and document drafting for regulators',
//         'Professional conduct issues and related dispute strategy',
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
//         'Court representation and negotiation where permitted',
//         'Licence consequences and practical steps',
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
//         'Advice on Australian Consumer Law rights and remedies',
//         'Negotiation and dispute correspondence with businesses',
//         'VCAT and tribunal-ready preparation where applicable',
//       ],
//     },
//   ],

//   practiceAreas: [
//     'Family Violence (FVIO)',
//     'Family Law',
//     'Wills & Estates',
//     'Conveyancing & Property Law',
//     'Immigration Law',
//     'Litigation & Disputes',
//     'Disciplinary & Regulatory Matters',
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
//       { label: 'Disclaimer', href: '/disclaimer' },
//       { label: 'Contact', href: '/contact' },
//     ],
//   },
// }

// export type SiteConfig = typeof siteConfig
// export type Service = (typeof siteConfig.services)[number]


// lib/config.ts — Central configuration for R&N Legal website

export const siteConfig = {
  name: 'R&N Legal',
  tagline: 'Clear Legal Guidance. Careful Preparation. Real Outcomes.',
  description:
    'R&N Legal is a boutique Australian law practice providing clear, practical legal advice and representation across family law, migration, property and dispute-related matters.',
  url: 'https://rnlegal.com.au',
  abn: 'ABN: 12 345 678 901',

  contact: {
    email: 'info@rnlegal.com.au',
    phone1: '0430 593 124',
    phone2: '0470 695 941',
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
    { label: 'Plain-English Advice',      description: 'We explain what the law allows and your realistic options.' },
    { label: 'Strong Preparation',        description: 'Precision in evidence, chronology and strategic positioning.' },
    { label: 'Responsive Communication',  description: 'Timely updates and clear expectations throughout.' },
    { label: 'Cross-Practice Support',    description: 'Family, migration, property and dispute expertise.' },
  ],

  process: [
    { step: '01', title: 'Initial Consultation', description: 'We understand your situation, key facts, deadlines and urgency.' },
    { step: '02', title: 'Strategy & Advice',    description: 'We advise on your options, risks and the most practical legal pathway.' },
    { step: '03', title: 'Preparation',          description: 'We prepare your evidence, affidavits and documents to the highest standard.' },
    { step: '04', title: 'Resolution',           description: 'We negotiate, represent and pursue resolution on your behalf.' },
  ],

  // ─── Services — matches Page 3 of final client content doc ───────────────
  // 5 primary practice areas + 1 "Other Areas" group.
  // The header dropdown, services page quick-nav, and mobile accordion
  // all derive from this single array.
  services: [
    {
      slug: 'family-violence',
      title: 'Family Violence — Intervention Orders',
      shortTitle: 'Intervention Orders',
      icon: 'Shield',
      description:
        'We assist applicants and respondents in intervention order proceedings, from the initial application through to contested hearings. Every matter is approached with careful risk assessment and thorough evidence preparation.',
      points: [
        'Applications, responses and variations',
        'Contested hearings',
        'Risk assessment and evidence preparation',
      ],
    },
    {
      slug: 'family-law',
      title: 'Family Law — Divorce and Parenting',
      shortTitle: 'Family Law',
      icon: 'Users',
      description:
        'We guide clients through divorce applications and parenting arrangements with clarity and care, ensuring all court documentation is accurately prepared and filed in accordance with applicable procedural requirements.',
      points: [
        'Divorce applications',
        'Parenting arrangements and parenting orders',
        'Affidavits and court documentation',
      ],
    },
    {
      slug: 'litigation-disputes',
      title: 'Litigation and Civil Disputes',
      shortTitle: 'Litigation',
      icon: 'Scale',
      description:
        'R&N Legal represents clients in civil disputes across Victorian courts and tribunals. We prioritise strategic preparation, clear pleadings and disciplined representation focused on resolution.',
      points: [
        'Contract disputes',
        'Debt recovery',
        'Court pleadings and submissions',
      ],
    },
    {
      slug: 'immigration-law',
      title: 'Immigration — Tribunal and Court Pathways',
      shortTitle: 'Immigration',
      icon: 'Globe',
      description:
        'We provide structured advice on visa strategy and merits review, assisting clients to understand their options and navigate the Administrative Review Tribunal and court pathways where applicable.',
      points: [
        'Visa strategy and preparation',
        'Merits review matters',
        'Court pathway guidance where applicable',
      ],
    },
    {
      slug: 'conveyancing-property',
      title: 'Property Law and Conveyancing',
      shortTitle: 'Property Law',
      icon: 'Home',
      description:
        'From contract review through to settlement, we assist buyers, sellers and landlords with property transactions and disputes, including caveat matters requiring prompt legal action.',
      points: [
        'Contract review',
        'Settlement support',
        'Property disputes and caveats',
      ],
    },
    {
      // "Other Areas" group — links to the dedicated section on the services page
      slug: 'other-areas',
      title: 'Other Areas',
      shortTitle: 'Other Areas',
      icon: 'Briefcase',
      description:
        'Additional areas of practice including wills and estate planning, disciplinary and regulatory matters, traffic offences and consumer law disputes.',
      points: [
        'Wills and basic estate planning',
        'Disciplinary and regulatory matters',
        'Traffic offences',
        'Consumer law disputes',
      ],
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
export type Service = (typeof siteConfig.services)[number]