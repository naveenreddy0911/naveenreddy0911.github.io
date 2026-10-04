import {
  faBrain,
  faCode,
  faDatabase,
  faLayerGroup,
  faScrewdriverWrench,
  faServer,
  faEye,
  faComments,
  faTrophy,
  faMedal,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export const profile = {
  name: 'Jonnalagadda Naveen Reddy',
  shortName: 'Naveen Reddy',
  initials: 'NR',
  title: 'Software Engineer',
  roles: ['Software Engineer', 'AI Engineer', 'Backend Developer', 'Full-Stack Builder'],
  location: 'Bengaluru, India',
  email: 'naveenreddy0911@gmail.com',
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  resumeFileName: 'Naveen_Reddy_Resume.pdf',
  intro:
    'IIT Kharagpur graduate building reliable backend services, REST APIs and AI evaluation platforms with Python, TypeScript and C++.',
  summary:
    'IIT Kharagpur graduate (M.Tech & B.Tech) experienced in designing and building software services at scale using C++, Python, JavaScript, and TypeScript. Strong in object-oriented design, system and integration testing, and translating stakeholder requirements into reliable, production-ready features. Background in performance optimization, cross-functional delivery, and using AI-powered tools to improve development efficiency.',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/naveenreddy0911', icon: faGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naveenreddy0911', icon: faLinkedinIn },
  { label: 'Email', href: 'mailto:naveenreddy0911@gmail.com', icon: faEnvelope },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '90%', label: 'Less manual analysis time' },
  { value: '100+', label: 'LLM evaluation scenarios' },
  { value: '50+', label: 'Backend routes integrated' },
  { value: '8.19', label: 'CGPA at IIT Kharagpur' },
]

export const education = [
  {
    degree: 'Master of Technology (M.Tech)',
    field: 'Mechanical Engineering',
    school: 'Indian Institute of Technology, Kharagpur',
    period: 'Jul 2024 – May 2025',
    location: 'West Bengal, India',
    grade: 'CGPA 8.19',
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Mechanical Engineering',
    school: 'Indian Institute of Technology, Kharagpur',
    period: 'Dec 2020 – May 2024',
    location: 'West Bengal, India',
    grade: 'CGPA 8.19',
  },
]

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Ascendion',
    period: 'Nov 2025 – Present',
    location: 'Bengaluru, India',
    current: true,
    points: [
      'Design and develop Python backend services and REST APIs (FastAPI) with testable architecture, processing high-volume data from 5+ concurrent sources while maintaining data controls and reliability.',
      'Built automated pipelines and reporting services at scale, reducing manual analysis time by over 90% across 4+ recurring workflows through efficient, reusable backend design.',
      'Built a web-based validation platform (DeepEval) used by model reviewers and governance teams to independently assess conversational and RAG chatbot quality across 100+ evaluation scenarios and metrics.',
      'Partnered with 3+ cross-functional stakeholder teams to gather requirements, deliver features, and improve reporting efficiency using modern engineering practices and AI-assisted development workflows.',
    ],
    tags: ['Python', 'FastAPI', 'REST APIs', 'DeepEval', 'RAG', 'LLM Evaluation'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Navea Ventures',
    period: 'Jun 2025 – Sep 2025',
    location: 'Hyderabad, India',
    current: false,
    points: [
      'Designed and implemented backend services with FastAPI and PostgreSQL, applying object-oriented design and software architecture to model, store, and serve data across 10+ multi-entity domains.',
      'Translated business requirements into production features, delivering a React/TypeScript UI with 30+ pages integrated with 50+ backend service routes.',
      'Contributed to platform feature development by breaking down requirements, reusing shared components, and shipping tested code with JSON schema validation and OAuth 2.0 security controls.',
      'Collaborated with cross-functional teams on system and integration testing, rapid prototyping, and end-to-end delivery of scalable application features.',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'OAuth 2.0', 'JSON Schema'],
  },
]

export const projects = [
  {
    title: 'Yapper',
    subtitle: 'Software Services & REST APIs',
    icon: faComments,
    accent: 'from-indigo-500 to-sky-500',
    points: [
      'Designed and implemented 12+ REST APIs and backend services with Node.js/Express and PostgreSQL, using object-oriented patterns and a repository-layer architecture across 4 relational tables.',
      'Built production-ready user-facing features with input validation (Zod), secure auth (JWT/OAuth 2.0), and end-to-end testing across 8+ flows including signup, login, and session management.',
    ],
    metrics: [
      { value: '12+', label: 'REST APIs' },
      { value: '8+', label: 'Tested flows' },
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Zod', 'JWT', 'OAuth 2.0'],
    link: null,
  },
  {
    title: 'Real-Time Detection Pipeline',
    subtitle: "Master's Thesis · Real-Time Systems & Performance Optimization",
    icon: faEye,
    accent: 'from-fuchsia-500 to-rose-400',
    points: [
      'Built an end-to-end real-time detection pipeline in Python with YOLOv8, VGG16, and ViT, achieving 99.84% accuracy and 94.5% mAP@50 on a 10+ class dataset.',
      'Improved system efficiency through transfer learning and performance tuning, reducing training time by 63% while maintaining reliable inference under real-time constraints.',
    ],
    metrics: [
      { value: '99.84%', label: 'Accuracy' },
      { value: '63%', label: 'Faster training' },
    ],
    tags: ['Python', 'YOLOv8', 'VGG16', 'ViT', 'Transfer Learning'],
    link: null,
  },
]

export const skills = [
  {
    title: 'Languages',
    icon: faCode,
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Software Engineering',
    icon: faLayerGroup,
    items: ['Object-Oriented Design', 'Data Structures & Algorithms', 'System & Integration Testing', 'Performance Optimization'],
  },
  {
    title: 'Development',
    icon: faServer,
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'React', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    icon: faDatabase,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Data Modeling', 'Query Optimization'],
  },
  {
    title: 'AI & Evaluation',
    icon: faBrain,
    items: ['DeepEval', 'RAG Evaluation', 'YOLOv8', 'Vision Transformers', 'Transfer Learning'],
  },
  {
    title: 'Tools',
    icon: faScrewdriverWrench,
    items: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Linux', 'VS Code'],
  },
]

export const marquee = [
  'Python', 'FastAPI', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'C++', 'Docker',
  'REST APIs', 'DeepEval', 'RAG', 'MongoDB', 'Express', 'OAuth 2.0', 'Azure DevOps', 'YOLOv8',
]

export const achievements = [
  {
    icon: faTrophy,
    title: 'National Entrance Exams',
    text: 'Secured AIR 2481 in JEE Main, AIR 3091 in JEE Advanced, and State Rank 381 in TS EAMCET.',
    highlights: ['AIR 2481', 'AIR 3091', 'SR 381'],
  },
  {
    icon: faMedal,
    title: 'NAEST',
    text: 'Earned District 1st place in the National Anveshika Experimental Skills Test.',
    highlights: ['District 1st'],
  },
]
