/**
 * Single source of truth for all résumé content.
 * Edit values here — components never hardcode copy.
 */

export const profile = {
  name: 'Cydric James Bulan',
  title: 'Software Developer',
  location: 'Bulakan, Bulacan, Philippines',
  available: true,
  availabilityNote: 'Open to opportunities',
  bio: 'Information Technology graduate with hands-on full-stack web, mobile, and game development experience from internship, freelance, and academic projects. Strong foundation in object-oriented programming, Git version control, and modern web technologies — eager to learn new frameworks and grow in a team-based environment.',
} as const;

// Root-relative anchors so the nav also works from sub-pages (e.g. /projects).
export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  meta?: string;
  stack?: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2023 — Present',
    meta: 'Remote',
    stack: 'React · Flutter · MongoDB · Socket.IO · Godot · Firebase',
    achievements: [
      'Built a cross-platform cafe system — a Flutter customer ordering app and a React admin panel for orders and deliveries — with real-time order sync via Socket.IO and MongoDB.',
      'Developed Disaster Ranger, a 2D Godot game with 4 disaster-preparedness scenarios teaching children emergency response.',
      'Delivered full-cycle web and game solutions for clients, from scoping through deployment.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Bulacan State University',
    period: 'Feb 2025 — May 2025',
    meta: 'Malolos, Bulacan · 486 hours',
    stack: 'React',
    achievements: [
      'Built React UI components for Document Tracking, Record Management, and Vehicle Trip Ticket systems.',
      'Integrated REST APIs with backend developers to ensure consistent data flow across all frontend interfaces.',
    ],
  },
];

/** Section a project is grouped under on the /projects page. */
export type ProjectCategory = 'Freelance' | 'Personal' | 'Academic';

/** Render order for the grouped sections on /projects (empty groups skipped). */
export const projectCategoryOrder: ProjectCategory[] = [
  'Freelance',
  'Personal',
  'Academic',
];

export type Project = {
  name: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  /** Group this project falls under on the /projects page. */
  category: ProjectCategory;
  github?: string;
  live?: string;
  /** Cover thumbnail shown on top of the card. Falls back to gallery[0]. */
  cover?: string;
  /** Screenshots/artwork shown in the project gallery (lightbox). */
  gallery?: string[];
  /** Marks a larger feature card in the bento grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Learning Management System: Science with AR',
    role: 'Solo Developer',
    period: 'Mar 2026',
    description:
      'AR-integrated LMS for Grade 7 Science (MATATAG Curriculum) with 24 interactive 3D models — 6 per quarter — covering atoms, cells, and states of matter. Engineered the AR pipeline in Vuforia and Unity, with a companion web app in React + Firebase.',
    tech: ['Unity', 'Vuforia', 'Blender', 'React', 'Firebase'],
    category: 'Freelance',
    featured: true,
    // TODO: replace mock links with the real repo / live demo.
    github: 'https://github.com/cedcedie',
    live: 'https://example.com',
    // Placeholder previews — replace the .svg files in /public/projects with
    // real screenshots (keep the same names, or update the paths here).
    cover: '/projects/ar-lms-1.svg',
    gallery: [
      '/projects/ar-lms-1.svg',
      '/projects/ar-lms-2.svg',
      '/projects/ar-lms-3.svg',
      '/projects/ar-lms-4.svg',
    ],
  },
  {
    name: 'Case No. Zero: A Philippine Legal Crime Narrative',
    role: 'Capstone · Team Lead & Lead Developer',
    period: 'Dec 2025',
    description:
      'Led the team and built all 3 core systems — investigation, dialogue, and courtroom — designing the full gameplay loop simulating Philippine legal investigation and trial procedures.',
    tech: ['Godot', 'GDScript'],
    category: 'Academic',
    github: 'https://github.com/cedcedie',
    cover: '/projects/case-zero-1.svg',
    gallery: [
      '/projects/case-zero-1.svg',
      '/projects/case-zero-2.svg',
      '/projects/case-zero-3.svg',
    ],
  },
  {
    name: 'Library Attendance & Circulation Monitoring System',
    role: 'Team Lead',
    period: 'Jun 2025',
    description:
      'Led a 4-person team building a web and mobile library system with dashboards, authentication, and circulation tracking.',
    tech: ['JavaScript', 'PHP', 'PostgreSQL', 'Android Studio'],
    category: 'Academic',
    github: 'https://github.com/cedcedie',
    cover: '/projects/library-1.svg',
    gallery: ['/projects/library-1.svg', '/projects/library-2.svg'],
  },
  // MOCK personal project — placeholder so the "Personal" section is visible on
  // /projects. Kept last so it stays out of the home-page top-3 preview.
  // Replace or remove once you add a real personal build.
  {
    name: 'Personal Portfolio',
    role: 'Solo Developer',
    period: 'Jun 2026',
    description:
      'This very site — a statically-exported Next.js portfolio with a hand-built bento layout, dark/light theming, an image lightbox, and zero UI dependencies. Built for performance and a clean editorial feel.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    category: 'Personal',
    github: 'https://github.com/cedcedie',
    live: 'https://example.com',
    cover: '/projects/portfolio-1.svg',
    gallery: [
      '/projects/portfolio-1.svg',
      '/projects/portfolio-2.svg',
      '/projects/portfolio-3.svg',
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C#', 'Dart', 'GDScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Flutter', 'Redux', 'Zustand', 'Tailwind CSS', 'ASP.NET', 'REST APIs', 'Socket.IO'],
  },
  {
    category: 'Game, AR & Databases',
    items: ['Unity', 'Vuforia', 'Godot', 'Blender 3D', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Android Studio', 'Aseprite'],
  },
];

/** A curated subset shown on the card; the modal reveals the full `skills`. */
export const keySkills: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Flutter',
  'Tailwind CSS',
  'Unity',
  'Godot',
  'Firebase',
  'PostgreSQL',
  'Git',
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export const education: Education[] = [
  {
    degree: 'BS Information Technology',
    school: 'STI College Balagtas',
    period: '2022 — 2026',
    location: 'Bulacan, Philippines',
  },
  {
    degree: 'General Academic Strand',
    school: 'Bulacan Montessori School Inc.',
    period: '2020 — 2022',
    location: 'Bulacan, Philippines',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  /** Short description shown under the thumbnail. */
  description?: string;
  /** Preview image (PNG/JPG) shown on top of the card. */
  image?: string;
  /** PDF/image opened when the card is clicked. */
  file?: string;
  /** Shown in the home-page preview grid. Others appear only on /certificates. */
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    name: 'Java Fundamentals',
    issuer: 'Oracle Academy',
    date: 'Jan 2023',
    description:
      'Oracle Academy award for satisfactory completion of all Java Fundamentals coursework.',
    image: '/certificates/java-fundamentals.png',
    file: '/certificates/java-fundamentals.pdf',
    featured: true,
  },
  {
    name: 'Java Fundamentals 2',
    issuer: 'Oracle Academy',
    date: 'Jun 2023',
    description:
      'Oracle Academy award for satisfactory completion of advanced Java Fundamentals coursework.',
    image: '/certificates/java-fundamentals-2.jpg',
    file: '/certificates/java-fundamentals-2.pdf',
  },
  {
    name: 'Systems Administration',
    issuer: 'STI Balagtas · Linux Professional Institute',
    date: 'Jun 2023',
    description:
      'Linux Professional Institute coursework covering system administration fundamentals.',
    image: '/certificates/systems-administration.png',
    file: '/certificates/systems-administration.pdf',
    featured: true,
  },
  {
    name: '11th TOPCIT Certificate',
    issuer: 'TOPCIT',
    date: 'Nov 2024',
    description:
      'Test of Practical Competency in IT — assessment of practical software development skills.',
  },
  {
    name: '13th TOPCIT Certificate',
    issuer: 'TOPCIT',
    date: 'Nov 2025',
    description:
      'Test of Practical Competency in IT — assessment of practical software development skills.',
  },
];

export const contact = {
  email: 'cedricjamesbulan@gmail.com',
  phone: '+63 961 622 5451',
  github: 'https://github.com/cedcedie',
  linkedin: 'https://linkedin.com/in/cydricjames',
  facebook: 'https://www.facebook.com/cedric.james.781367',
  portfolio: 'https://portfolio-cedcedies-projects.vercel.app',
  // Drop your résumé PDF at public/Cydric-James-Bulan-Resume.pdf
  resume: '/Cydric-James-Bulan-Resume.pdf',
} as const;
