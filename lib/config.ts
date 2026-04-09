// lib/config.ts — Central configuration for R&N Legal website

export const siteConfig = {
  name: 'R&N Legal',
  tagline: 'Clear Legal Guidance. Careful Preparation. Real Outcomes.',
  description:
    'R&N Legal is a boutique Australian law practice providing clear, practical legal advice and representation across family law, migration, property and dispute-related matters.',
  url: 'https://rnlegal.com.au',
  abn: 'ABN: 12 345 678 901',

  socials: {
    instagram: 'https://instagram.com/lawwithamit',
    facebook: 'https://facebook.com/amit.narwal.9',
    tiktok: 'https://www.tiktok.com/@lawwithamit',
  },

  contact: {
    email: 'info@rnlegal.com.au',
    phone2: '0430 593 124',
    whatsapp2: '61430593124',
    phone1: '0470 695 941',
    whatsapp1: '61470695941',
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
  // ALL SERVICES — 9 practice areas in client-specified order.
  // `paragraphs` holds the full multi-paragraph body from the client doc.
  // `description` is the first paragraph (used by homepage grid / cards).
  // ─────────────────────────────────────────────────────────────────────────
  services: [
    {
      slug: 'family-violence',
      title: 'Family Violence — Intervention Orders',
      shortTitle: 'Family Violence (FVIO)',
      icon: 'Shield',
      num: '01',
      description:
        'Family violence intervention order matters in Victoria are serious, urgent and often deeply interconnected with family, parenting, housing and criminal consequences. Early legal advice is often critical because the practical effect of an interim or final order can be immediate and far-reaching.',
      paragraphs: [
        'Family violence intervention order matters in Victoria are serious, urgent and often deeply interconnected with family, parenting, housing and criminal consequences. Early legal advice is often critical because the practical effect of an interim or final order can be immediate and far-reaching.',
        'R&N Legal assists both applicants seeking protection and respondents responding to allegations or applications. We approach these matters with close attention to chronology, evidence, risk, procedural fairness and the practical consequences of any order sought or made. In Victoria, these matters can move quickly, particularly where interim orders are sought, police are involved, or the case is listed in a specialist family violence jurisdiction.',
        'Our role is to help clients understand the legal position early and to take an approach that is both protective and strategically sound. In some matters that means urgent assistance with applications and supporting material. In others it means a careful, evidence-based response to allegations that may be disputed, overstated or connected to wider family conflict. We also advise on variation, revocation and the practical effect of intervention order conditions on communication, parenting and day-to-day life.',
      ],
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
      image: '/images/services/family-violence-image.jpg',
    },
    {
      slug: 'family-law',
      title: 'Family Law — Divorce and Parenting',
      shortTitle: 'Family Law',
      icon: 'Users',
      num: '02',
      description:
        'Family law matters are rarely only about legal rights. They involve children, living arrangements, finances, communication breakdown and, in many cases, significant emotional pressure. Clients need more than a statement of legal principles. They need advice that is clear, practical and aligned with what can realistically be achieved.',
      paragraphs: [
        'Family law matters are rarely only about legal rights. They involve children, living arrangements, finances, communication breakdown and, in many cases, significant emotional pressure. Clients need more than a statement of legal principles. They need advice that is clear, practical and aligned with what can realistically be achieved.',
        "R&N Legal assists clients with divorce, parenting matters, consent orders, interim applications and family law strategy. Our focus is not on inflaming disputes unnecessarily. It is on identifying what arrangement can be supported by evidence, what pathway is proportionate, and what steps best protect the client's legal and personal position.",
        "We work carefully through the practical realities that shape family law matters: living arrangements, communication history, safety concerns, parenting history, school and care arrangements, and any existing intervention orders. We also assist where clients have reached agreement and want to formalise that agreement through consent orders, as well as where urgent court intervention is required.",
      ],
      points: [
        'Divorce applications',
        'Parenting disputes and parenting orders',
        'Consent orders',
        'Interim applications',
        'Affidavit material and supporting evidence',
        'Family-violence-related parenting issues',
        'Practical advice on process, risk and next steps',
      ],
      image: '/images/services/family-law.jpg',
    },
    {
      slug: 'immigration-law',
      title: 'Immigration — Tribunal and Court Pathways',
      shortTitle: 'Immigration Law',
      icon: 'Globe',
      num: '03',
      description:
        'Immigration law is federal in nature, but for clients in Victoria its effects are immediate and local: work rights, family stability, sponsorship, lawful status, tribunal review and court deadlines. R&N Legal provides structured immigration advice for clients who need more than form-filling.',
      paragraphs: [
        'Immigration law is federal in nature, but for clients in Victoria its effects are immediate and local: work rights, family stability, sponsorship, lawful status, tribunal review and court deadlines. R&N Legal provides structured immigration advice for clients who need more than form-filling. We focus on pathway assessment, evidentiary preparation, refusals, cancellations, tribunal matters and complex procedural issues.',
        'A strong immigration practice must look beyond the application form. Many migration matters turn on timing, status, validity, evidence, or the framing of review submissions. We assist clients to understand where they stand, what options remain open, what risks require urgent attention, and how the matter should be prepared if it is to be presented properly and persuasively.',
        'Our approach is disciplined and strategic. We aim to provide advice that is both legally sound and operationally precise, particularly where delay, incorrect assumptions or incomplete evidence may create long-term difficulty.',
      ],
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
      image: '/images/services/immigration.jpg',
    },
    {
      slug: 'litigation-disputes',
      title: 'Litigation and Civil Disputes',
      shortTitle: 'Litigation & Disputes',
      icon: 'Scale',
      num: '04',
      description:
        'Disputes are rarely won by aggression alone. They are usually resolved through preparation, leverage, evidence, timing and judgment. A strong litigation practice is not about escalating every conflict. It is about understanding when to preserve position, when to negotiate and when formal proceedings are necessary.',
      paragraphs: [
        'Disputes are rarely won by aggression alone. They are usually resolved through preparation, leverage, evidence, timing and judgment. A strong litigation practice is not about escalating every conflict. It is about understanding when to preserve position, when to negotiate and when formal proceedings are necessary.',
        "R&N Legal assists clients with contractual disputes, debt recovery, property-related disputes and general civil litigation strategy. Our approach is grounded in commercial and procedural realism. The first question is not simply whether proceedings can be issued; it is what is truly in dispute, what evidence exists, what relief is worth pursuing, and which pathway gives the client the strongest practical advantage.",
        'We assist from early-stage rights assessment through to letters of demand, negotiation, pleadings, evidence preparation and representation. Where resolution is possible, we pursue it sensibly. Where proceedings are necessary, we prepare carefully and run the matter with discipline.',
      ],
      points: [
        'Contractual disputes',
        'Debt recovery',
        'Pre-litigation correspondence',
        'Settlement strategy',
        'Pleadings, evidence and submissions',
        'Court and tribunal matters',
        'Practical risk and recoverability advice',
      ],
      image: '/images/services/litigation-dispute.jpg',
    },
    {
      slug: 'conveyancing-property',
      title: 'Property Law and Conveyancing',
      shortTitle: 'Property & Conveyancing',
      icon: 'Home',
      num: '05',
      description:
        'Property matters often involve significant financial exposure, fixed contractual deadlines and legal issues that become harder to unwind once a transaction is on foot. Good property advice is therefore not simply administrative. It is preventative, strategic and detail-driven.',
      paragraphs: [
        'Property matters often involve significant financial exposure, fixed contractual deadlines and legal issues that become harder to unwind once a transaction is on foot. Good property advice is therefore not simply administrative. It is preventative, strategic and detail-driven.',
        "R&N Legal assists with contract review, conveyancing support, settlement issues, title concerns, caveats and property-related disputes. Before a contract is signed, we focus on identifying legal risk and clarifying consequences. Once a matter is underway, we focus on managing settlement obligations, responding to issues quickly and preserving the client's position if a dispute emerges.",
        "Where a property dispute becomes contentious, we assess the appropriate forum and the most effective strategy to protect the client's interests. Our approach combines careful review, procedural attention and practical legal judgment.",
      ],
      points: [
        'Contract review before signing',
        'Residential conveyancing support',
        'Settlement advice and issue management',
        'Title and ownership concerns',
        'Caveat matters',
        'Property disputes',
        'Urgent transaction-related advice',
      ],
      image: '/images/services/property-law.jpg',
    },
    {
      slug: 'consumer-law',
      title: 'Consumer Law',
      shortTitle: 'Consumer Law',
      icon: 'ShoppingBag',
      num: '06',
      description:
        'Consumers are often told they have rights, but far less often told how to enforce them effectively. In practice, consumer disputes can involve delay, denial of responsibility, poor communication and a frustrating mismatch between the problem suffered and the effort required to resolve it.',
      paragraphs: [
        'Consumers are often told they have rights, but far less often told how to enforce them effectively. In practice, consumer disputes can involve delay, denial of responsibility, poor communication and a frustrating mismatch between the problem suffered and the effort required to resolve it. Good legal assistance in this area is about turning a vague complaint into a legally coherent claim.',
        'R&N Legal assists clients with refund disputes, service complaints, misleading representations and broader consumer-law issues. Our role is to identify the legal basis of the complaint, assess the most efficient pathway to resolution, and apply the right level of pressure through correspondence, negotiation or tribunal preparation.',
        'We focus on clarity and proportionality. Not every consumer dispute should become hard-fought litigation. But many disputes resolve more effectively once the claim is framed properly and the next procedural step is clear.',
      ],
      points: [
        'Refund disputes',
        'Service complaints',
        'Misleading conduct concerns',
        'Pre-VCAT correspondence',
        'Negotiation and resolution strategy',
        'Tribunal pathway advice',
      ],
      image: '/images/services/consumer_law.jpg',
    },
    {
      slug: 'traffic-offences',
      title: 'Traffic Offences',
      shortTitle: 'Traffic Offences',
      icon: 'Car',
      num: '07',
      description:
        'Traffic matters in Victoria can have consequences for licence status, employment, insurance, finances and, in some cases, criminal exposure. The right approach depends on the allegation, the available evidence, the client\'s history and what outcome is realistically open.',
      paragraphs: [
        "Traffic matters in Victoria can have consequences for licence status, employment, insurance, finances and, in some cases, criminal exposure. The right approach depends on the allegation, the available evidence, the client's history and what outcome is realistically open.",
        'R&N Legal assists clients facing traffic-related proceedings with practical advice and representation. We assess the allegation, the procedural posture of the matter, the available evidence, and the realistic scope for mitigation or contest. Where a plea is appropriate, we prepare carefully to present the client\'s circumstances and minimise the broader impact. Where the matter warrants scrutiny, we advise accordingly.',
        "These matters are often underestimated. Our approach is to treat them with the seriousness they deserve, particularly where a client's employment, mobility or personal circumstances may depend on the result.",
      ],
      points: [
        'Traffic charges',
        'Plea and penalty advice',
        "Magistrates' Court appearances",
        'Licence-impacting matters',
        'Strategic preparation',
        'Related transport and road law issues',
      ],
      image: '/images/services/traffic_offence.jpg',
    },
    {
      slug: 'wills-estates',
      title: 'Wills & Estates',
      shortTitle: 'Wills & Estates',
      icon: 'FileText',
      num: '08',
      description:
        'A will should not be treated as a formality. It should reflect a client\'s actual intentions, family circumstances and practical planning needs. Poorly prepared estate documents can create unnecessary cost, uncertainty and tension for families later.',
      paragraphs: [
        "A will should not be treated as a formality. It should reflect a client's actual intentions, family circumstances and practical planning needs. Poorly prepared estate documents can create unnecessary cost, uncertainty and tension for families later.",
        'R&N Legal assists with wills and basic estate planning so clients can put in place documents that are clear, workable and more likely to reduce future confusion. We focus on straightforward, properly structured documentation and practical advice about executors, beneficiaries and review of existing wills where circumstances have changed.',
      ],
      points: [
        'Wills',
        'Review of existing wills',
        'Basic estate planning',
        'Executor and beneficiary planning',
      ],
      image: '/images/services/wills-estates.jpg',
    },
    {
      slug: 'disciplinary-regulatory',
      title: 'Disciplinary & Regulatory Matters',
      shortTitle: 'Disciplinary Matters',
      icon: 'Briefcase',
      num: '09',
      description:
        'Regulatory and disciplinary matters require a careful and measured response from the beginning. These matters often carry consequences beyond the immediate complaint or allegation, including effects on registration, employment, reputation and future practice.',
      paragraphs: [
        'Regulatory and disciplinary matters require a careful and measured response from the beginning. These matters often carry consequences beyond the immediate complaint or allegation, including effects on registration, employment, reputation and future practice.',
        "R&N Legal assists clients to understand the process, assess the legal and factual issues, and respond in a way that protects both their immediate and longer-term position. We focus on disciplined analysis, procedural fairness and carefully prepared written responses rather than reactive or poorly framed communication.",
      ],
      points: [
        'Complaints and investigations',
        'Regulatory correspondence',
        'Response strategy',
        'Professional conduct issues',
        'Disciplinary proceedings',
      ],
      image: '/images/services/disciplinary-regulatory.jpg',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // NAV SERVICES — header dropdown (6 items max)
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
      slug: 'immigration-law',
      shortTitle: 'Immigration',
      hint: 'Visa strategy & merits review',
    },
    {
      slug: 'litigation-disputes',
      shortTitle: 'Litigation',
      hint: 'Contract disputes & debt recovery',
    },
    {
      slug: 'conveyancing-property',
      shortTitle: 'Property Law',
      hint: 'Contract review & settlement support',
    },
    {
      slug: 'other-areas',
      shortTitle: 'Other Areas',
      hint: 'Consumer, traffic, wills & disciplinary',
    },
  ],

  practiceAreas: [
    'Intervention Orders (FVIO)',
    'Family Law',
    'Immigration',
    'Litigation & Civil Disputes',
    'Property Law & Conveyancing',
    'Consumer Law',
    'Traffic Offences',
    'Wills & Estate Planning',
    'Disciplinary & Regulatory',
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