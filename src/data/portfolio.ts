// All content below is transcribed from Chekonda Alex Nitin's resume
// (as of Sep 2026) and verified prior sources. Nothing here is invented —
// update this file directly to change what appears on the site.

export const profile = {
  name: 'Chekonda Alex Nitin',
  shortName: 'Alex Nitin',
  initials: 'CN',
  title: 'Azure Cloud Engineer',
  subtitle: 'Cloud Capacity & Incident Management',
  location: 'Hyderabad, Telangana, India',
  email: 'chekondaalexnitin@gmail.com',
  phone: '+91 8328086697',
  phoneHref: 'tel:+918328086697',
  availability: 'Immediately available',
  intro:
    "Azure Cloud Engineer with hands-on experience in Azure Compute capacity management and incident resolution for enterprise customers on Microsoft's Global Capacity Team at LTIMindtree — VM allocation troubleshooting, quota management, root cause analysis, and SLA-driven incident management across Resource Groups, VM Scale Sets, and Availability Zones.",
  about: [
    "I work at the intersection of cloud infrastructure and digital operations. On Microsoft's Global Capacity Team at LTIMindtree, I troubleshoot Azure Compute allocation failures, manage quota requests (RDQs) and incident cases (ICMs), and run root cause analysis across Resource Groups, VM Scale Sets, and Availability Zones — all under SLA.",
    "Before that, I ran website and app operations for Mamaearth (Honasa Consumer Ltd.), a high-traffic D2C ecommerce platform — working across Power BI, GA4, Firebase, AppsFlyer, and MoEngage to monitor performance and partnering with engineering, marketing, and design to ship improvements. That combination gives me a practical read on both infrastructure reliability and digital growth.",
  ],
  strengths: [
    {
      title: 'Azure Cloud & Capacity Management',
      description:
        'VM allocation troubleshooting, quota management, and capacity operations across Resource Groups, VM Scale Sets, and Availability Zones.',
    },
    {
      title: 'Incident Management & RCA',
      description:
        'SLA-driven incident resolution (ICM/RDQ), severity classification, and root cause analysis using internal tooling and telemetry.',
    },
    {
      title: 'Digital & Growth Analytics',
      description:
        'Monitoring performance and engagement with Power BI, GA4, Firebase, AppsFlyer, and MoEngage on a high-traffic D2C platform.',
    },
    {
      title: 'Networking & Infrastructure',
      description:
        'Working knowledge of DNS, DHCP, TCP/IP, VMware virtualization concepts, Windows Server, and Office 365.',
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
  volunteer: 'Divya Disha NGO, Hyderabad',
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
    id: 'ltimindtree',
    company: 'LTIMindtree — Microsoft Azure Project (Global Capacity Team)',
    role: 'Azure Cloud Engineer',
    duration: 'Feb 2025 – Jul 2026',
    location: 'Hyderabad, India',
    summary:
      "Supported Azure Compute capacity operations for Premium (S500) enterprise customers on Microsoft's Global Capacity Team, handling quota requests, allocation-failure troubleshooting, and incident resolution within defined SLAs across rotational shifts.",
    responsibilities: [
      'Created and managed RDQs (quota requests) and ICMs (incident cases), applying correct severity classification based on issue type and business impact.',
      'Troubleshot VM deployment and scale-up failures caused by out-of-capacity conditions, Offer/Region/SKU/Zone restrictions, and Availability Set or Proximity Placement Group (PPG) pinning constraints.',
      'Performed root cause analysis using internal tooling (Jarvis) to review subscription quota, offer restrictions, and logical-to-physical zone mapping, and by analyzing VMApiQosEvents and Compute Allocation Activity logs.',
      'Worked across Resource Groups, VM Scale Sets, Availability Sets, and Availability Zones to resolve cluster capacity constraints, and supported cluster management operations including ECR, Defrag, and OFR.',
    ],
    skills: ['Azure Compute', 'VM Scale Sets', 'Availability Zones', 'Incident Management', 'Root Cause Analysis', 'SLA Management'],
    recognition: 'iWin Spot Award, Super Crew (LTIMindtree, Jan 2026) — for consistently going above and beyond in incident and capacity operations.',
  },
  {
    id: 'mamaearth',
    company: 'Mamaearth (Honasa Consumer Ltd.)',
    role: 'Website & App Operations Intern',
    duration: 'Aug 2024 – Jan 2025',
    location: 'Hyderabad, India',
    summary:
      "Independently contributed to the development and optimization of the company's homepage and mobile app experience on a high-traffic D2C ecommerce platform, improving usability, engagement, and site performance.",
    responsibilities: [
      'Managed day-to-day website and app operations to enhance user experience, engagement, and conversion.',
      'Leveraged analytics and CRM platforms — Power BI, Google Analytics (GA4), Firebase, AppsFlyer, and MoEngage — to monitor performance and generate actionable insights.',
      'Worked across Magento, Shopify, and Strapi to support content and ecommerce operations.',
      'Partnered with cross-functional teams (engineering, marketing, and design) to support project execution and drive operational improvements.',
    ],
    skills: ['Power BI', 'Google Analytics (GA4)', 'Firebase', 'AppsFlyer', 'MoEngage', 'Magento', 'Shopify', 'Strapi'],
  },
]

export type SkillCategory = {
  title: string
  accent: 'azure' | 'amber' | 'fuchsia' | 'teal' | 'emerald'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Azure Cloud & Capacity Management',
    accent: 'azure',
    skills: [
      'Microsoft Azure',
      'Azure Compute',
      'Azure Portal',
      'VM Scale Sets',
      'Availability Sets',
      'Availability Zones',
      'Resource Groups',
      'Proximity Placement Groups',
      'Quota Management',
      'Capacity Management',
      'Allocation Troubleshooting',
    ],
  },
  {
    title: 'Incident & Operations',
    accent: 'amber',
    skills: [
      'Incident Management (ICM)',
      'RDQ Management',
      'Root Cause Analysis',
      'SLA Management',
      'ITSM & Ticketing Workflows',
      'Cluster Operations (ECR, Defrag, OFR)',
    ],
  },
  {
    title: 'Analytics & Digital Operations',
    accent: 'fuchsia',
    skills: ['Power BI', 'Google Analytics (GA4)', 'Firebase', 'AppsFlyer', 'MoEngage', 'CRM Operations', 'Magento', 'Shopify', 'Strapi'],
  },
  {
    title: 'Networking & Infrastructure',
    accent: 'teal',
    skills: ['DNS', 'DHCP', 'TCP/IP', 'VMware Virtualization', 'Windows Server', 'Office 365'],
  },
  {
    title: 'Programming & Web',
    accent: 'emerald',
    skills: ['HTML', 'CSS', 'C++'],
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
