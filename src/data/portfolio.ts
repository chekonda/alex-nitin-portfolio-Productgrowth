// All content below is transcribed from the source repository
// (github.com/chekonda/New-Portfolio) and the previously deployed site
// (alex-nitin-portfolio.vercel.app). Nothing here is invented — update
// this file directly to change what appears on the site.

export const profile = {
  name: 'Chekonda Alex Nitin',
  shortName: 'Alex Nitin',
  initials: 'CN',
  title: 'Frontend Developer & Project Manager',
  location: 'India',
  email: 'chekondaalexnitin@gmail.com',
  phone: '+91 8328086697',
  phoneHref: 'tel:+918328086697',
  availability: 'Currently available for work',
  tagline:
    'A results-oriented developer who enjoys turning raw ideas and data into responsive, well-built products.',
  intro:
    "I'm a Web Developer with a background in Frontend Development, Web & Social Media Analytics, and Project Management. I care about the full path from planning to a shipped, working product — and I enjoy solving business problems along the way.",
  about: [
    'I build responsive, user-friendly web interfaces with JavaScript, React, and modern CSS, and round that out with web analytics tooling (Google Analytics, Hotjar, VWO) to understand how the things I build are actually used.',
    "On the project side, I've managed work end-to-end — from planning and coordination through deployment — using tools like Jira and Trello to keep teams and timelines on track.",
  ],
  strengths: [
    {
      title: 'Frontend Development',
      description: 'Responsive, accessible interfaces built with HTML, CSS, JavaScript and React.',
    },
    {
      title: 'Web & Product Analytics',
      description: 'Instrumenting and reading user behavior with Google Analytics, Hotjar and VWO.',
    },
    {
      title: 'Project Management',
      description: 'Planning, coordinating and shipping work on time with Jira and Trello.',
    },
    {
      title: 'Deployment & Ops',
      description:
        'Shipping and hosting projects on Vercel and Netlify with GitHub-based workflows.',
    },
  ],
  socials: {
    github: 'https://github.com/chekonda',
    linkedin: 'https://www.linkedin.com/in/alexnitin/',
    email: 'mailto:chekondaalexnitin@gmail.com',
    phone: 'tel:+918328086697',
  },
} as const

export type ExperienceEntry = {
  id: string
  company: string
  role: string
  duration: string
  summary: string
  responsibilities: string[]
  skills: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'codeclause',
    company: 'CodeClause',
    role: 'Fullstack Developer Internship',
    duration: 'Oct 2023 – Nov 2023',
    summary:
      'Worked across the stack to improve user interaction, scalability and performance on an internship project delivered on schedule.',
    responsibilities: [
      'Implemented features to improve user interaction, scalability and system performance, working across both front-end and back-end technologies.',
      'Delivered the project within the specified timeframe while maintaining high-quality outcomes.',
      "Contributed to CodeClause's software development practices through problem-solving and iterative improvements.",
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'GitHub', 'Vercel', 'Netlify'],
  },
  {
    id: 'codsoft',
    company: 'Codsoft',
    role: 'Frontend Developer Internship',
    duration: 'Aug 2023 – Sep 2023',
    summary:
      'Led development of responsive web applications, staying current with front-end practices and collaborating using React.',
    responsibilities: [
      'Led development of responsive web applications using HTML, CSS and JavaScript.',
      'Stayed current with industry trends, contributing to innovation and continuous improvement in front-end practices.',
      'Collaborated to integrate front-end technologies, leveraging frameworks like React.js.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'GitHub', 'Vercel', 'Netlify'],
  },
]

export type Project = {
  id: string
  name: string
  description: string
  tags: string[]
  liveUrl: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'my-clock',
    name: 'My Clock',
    description: 'A live, in-browser clock application built and deployed as a standalone web app.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://clockieapp.netlify.app',
    image: 'clock',
  },
  {
    id: 'to-do-list',
    name: 'To Do List',
    description: 'A task-management web app for creating, tracking and completing everyday to-dos.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://todo-bynitin.netlify.app',
    image: 'todo',
  },
  {
    id: 'weather-app',
    name: 'Weather Application',
    description: 'A weather-lookup web app that surfaces current conditions in a clean interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://nitinsweatherapp.netlify.app',
    image: 'weather',
  },
]

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'C++', 'SQL', 'DBMS'],
  },
  {
    title: 'Web & Product Analytics',
    skills: ['Google Analytics', 'Hotjar', 'VWO'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['GitHub', 'Linux', 'Notion', 'Weebly', 'Excel', 'MS Office'],
  },
]

export const education = {
  institution: 'Lovely Professional University',
  degree: 'Bachelor of Technology',
  field: 'Computer Science Engineering — Specialization in Web Development',
  duration: 'April 2020 – May 2024',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const
