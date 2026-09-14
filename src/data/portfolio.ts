// All content below is transcribed from Chekonda Alex Nitin's resume
// (as of Sep 2026) and verified prior sources. Nothing here is invented —
// update this file directly to change what appears on the site.

export const profile = {
  name: 'Chekonda Alex Nitin',
  shortName: 'Alex Nitin',
  initials: 'CN',
  title: 'Product Growth & Digital Marketing',
  subtitle: 'D2C E-Commerce · Website & App Operations',
  location: 'Hyderabad, Telangana, India',
  email: 'chekondaalexnitin@gmail.com',
  phone: '+91 8328086697',
  phoneHref: 'tel:+918328086697',
  availability: 'Immediately available',
  intro:
    "Product-minded professional with hands-on experience in website & app operations, digital marketing, and D2C e-commerce — gained on the Product Growth team at Mamaearth (Honasa Consumer), a leading D2C beauty and personal care brand. I use data from GA4, Firebase, Power BI, AppsFlyer, and MoEngage to inform product and marketing decisions, working across CRM, lifecycle marketing, and e-commerce platforms like Magento, Shopify, and Strapi. A current role as a Cloud Engineer at LTIMindtree adds a structured, analytical foundation to that growth work.",
  about: [
    "I'm most at home translating growth goals into shipped work — on the Product Growth team at Mamaearth (Honasa Consumer Ltd.), a high-traffic D2C beauty and personal care platform, I owned improvements to the homepage and mobile app experience, tracked traffic/engagement/conversion in Power BI, GA4, and Firebase, and supported CRM and lifecycle marketing campaigns through MoEngage and AppsFlyer. Day to day that meant working closely with product, design, marketing, and engineering to turn business goals into operational execution across Magento, Shopify, and Strapi.",
    "Alongside that, I'm a Cloud Engineer on a Microsoft Azure project at LTIMindtree, supporting enterprise infrastructure, incident management, and cross-functional troubleshooting. It's a different kind of work, but it feeds the same instinct — a structured, analytical approach to solving product and growth problems, not just technical ones.",
  ],
  strengths: [
    {
      title: 'Product Growth & D2C E-Commerce',
      description:
        'Website & app feature rollouts, usability improvements, and funnel & conversion optimization for a high-traffic D2C e-commerce platform.',
    },
    {
      title: 'Digital Marketing & CRM',
      description:
        'Lifecycle marketing and customer engagement/retention campaigns via MoEngage and AppsFlyer, across app and web.',
    },
    {
      title: 'Analytics & Data-Driven Decisions',
      description:
        'Tracking traffic, engagement, and conversion in Power BI, GA4, and Firebase to turn data into actionable product decisions.',
    },
    {
      title: 'Cloud & Technical Grounding',
      description:
        'Microsoft Azure infrastructure, incident management, and networking — a structured, analytical foundation from a current Cloud Engineer role.',
    },
  ],
  socials: {
    github: 'https://github.com/chekonda',
    linkedin: 'https://www.linkedin.com/in/alexnitin/',
    email: 'mailto:chekondaalexnitin@gmail.com',
    phone: 'tel:+918328086697',
  },
  resumeFile: '/Chekonda-Alex-Nitin-Resume.pdf',
  languages: ['English', 'Telugu', 'Hindi', 'Tamil'],
  volunteer: 'Technical Intern, Divya Disha NGO, Hyderabad',
  interests: ['Traveling', 'Arts and Painting'],
} as const

export type ExperienceEntry = {
  id: string
  company: string
  role: string
  duration: string
  location: string
  summary: string
  responsibilities: string[]
  skills: string[]
  recognition?: string
}

export const experience: ExperienceEntry[] = [
  {
    id: 'mamaearth',
    company: 'Mamaearth (Honasa Consumer Ltd.) — Product Growth Team',
    role: 'Website & App Operations Intern',
    duration: 'Aug 2024 – Jan 2025',
    location: 'Gurugram, India',
    summary:
      "Drove product growth for Mamaearth's D2C platform — shipping website & app improvements and optimizing site/app performance and conversion.",
    responsibilities: [
      'Owned homepage & mobile app improvements, partnering with product, design, and engineering to boost UX and conversion.',
      'Tracked traffic, engagement & conversion in Power BI, GA4, and Firebase to surface actionable insights.',
      'Drove CRM & lifecycle marketing via MoEngage and AppsFlyer to boost engagement and retention.',
      'Managed content, catalog & e-commerce ops across Magento, Shopify, and Strapi.',
      'Partnered daily across product, growth, marketing, and engineering to execute on business goals.',
    ],
    skills: [
      'Product Growth',
      'Power BI',
      'Google Analytics (GA4)',
      'Firebase',
      'MoEngage',
      'AppsFlyer',
      'Magento',
      'Shopify',
      'Strapi',
    ],
  },
  {
    id: 'ltimindtree',
    company: 'LTIMindtree — Microsoft Azure Project (Global Capacity Team)',
    role: 'Cloud Engineer',
    duration: 'Feb 2025 – Jul 2026',
    location: 'Hyderabad, India',
    summary:
      "Support Azure enterprise infrastructure for premium customers — quota management, incident resolution, and troubleshooting within SLA.",
    responsibilities: [
      'Manage RDQs & ICMs — quota requests and incident cases — with correct severity classification.',
      'Run root cause analysis via internal tooling (Jarvis) across quota, offer, and zone data.',
      'Troubleshoot VM deployment & scale-up failures from capacity, zone, and PPG constraints.',
      'Resolve cluster capacity issues across Resource Groups, Scale Sets & Availability Zones; support ECR/Defrag/OFR ops.',
    ],
    skills: [
      'Microsoft Azure',
      'VM Scale Sets',
      'Availability Zones',
      'Incident Management',
      'Root Cause Analysis',
      'VMware',
    ],
    recognition:
      'iWin Spot Award, Super Crew (LTIMindtree, Jan 2026) — for consistently going above and beyond in incident and capacity operations.',
  },
]

export type SkillCategory = {
  title: string
  accent: 'azure' | 'amber' | 'fuchsia' | 'teal' | 'emerald'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Product & Growth',
    accent: 'fuchsia',
    skills: [
      'Product Growth',
      'D2C E-Commerce',
      'Website & App Operations',
      'Funnel & Conversion Optimization',
      'User Experience',
      'Cross-Functional Collaboration',
    ],
  },
  {
    title: 'Digital Marketing & CRM',
    accent: 'amber',
    skills: [
      'CRM Operations',
      'Lifecycle Marketing',
      'MoEngage',
      'AppsFlyer',
      'Digital Marketing',
      'Customer Engagement & Retention',
    ],
  },
  {
    title: 'Analytics & Insights',
    accent: 'teal',
    skills: ['Power BI', 'Google Analytics (GA4)', 'Firebase', 'Data-Driven Decision Making'],
  },
  {
    title: 'E-Commerce & Web Platforms',
    accent: 'emerald',
    skills: ['Magento', 'Shopify', 'Strapi', 'HTML', 'CSS'],
  },
  {
    title: 'Cloud & Technical',
    accent: 'azure',
    skills: [
      'Microsoft Azure',
      'Cloud Infrastructure',
      'VM Scale Sets',
      'Availability Zones',
      'Incident Management',
      'Root Cause Analysis',
      'VMware',
      'Networking',
      'C++',
    ],
  },
]

export const education = {
  institution: 'Lovely Professional University',
  degree: 'Bachelor of Technology',
  field: 'Computer Science and Engineering',
  detail: 'CGPA: 7.78',
}

export type Certification = {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'Introduction to Front End Development', issuer: 'Meta' },
  { name: 'Innovating with Google Cloud AI', issuer: 'Simplilearn' },
]

export const additionalTraining = [
  'Networking Fundamentals',
  'Active Directory',
  'Group Policy',
  'VMware Concepts',
  'ITIL Fundamentals',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const
