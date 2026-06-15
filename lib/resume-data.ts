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

/** Render order for the grouped sections on /projects. */
export const projectCategoryOrder: ProjectCategory[] = [
  'Academic',
  'Freelance',
  'Personal',
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

// Build a gallery path list for a project slug: `/projects/<slug>/<slug>-<n>.<ext>`.
const gal = (slug: string, files: string[]) =>
  files.map((f) => `/projects/${slug}/${slug}-${f}`);

export const projects: Project[] = [
  {
    name: 'Learning Management System: Science with AR',
    role: 'Solo Developer',
    period: 'Mar 2026',
    description:
      'AR-integrated LMS for Grade 7 Science (MATATAG Curriculum) with 24 interactive 3D models — 6 per quarter — covering atoms, cells, and states of matter. Engineered the AR pipeline in Vuforia and Unity, with a companion web app in React + Firebase.',
    tech: ['Unity', 'Vuforia', 'Blender', 'React', 'Firebase'],
    category: 'Freelance',
    cover: '/projects/ar-lms/ar-lms-10.png',
    gallery: gal(
      'ar-lms',
      Array.from({ length: 11 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Hydrolar — Energy Storage Dashboard',
    role: 'Solo Developer',
    period: '2026',
    description:
      'A mobile-first energy-storage monitoring dashboard visualizing battery status, energy-source breakdown, and historical trends through interactive charts, with a weather-aware installation safety view.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    category: 'Freelance',
    cover: '/projects/hydrolar/hydrolar-1.png',
    gallery: gal(
      'hydrolar',
      Array.from({ length: 7 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Cafe Management System (Web)',
    role: 'Web Developer',
    period: '2026',
    description:
      'A web-based cafe management system for a client, handling orders, deliveries, and printable receipts with a PostgreSQL-backed admin dashboard.',
    tech: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
    category: 'Freelance',
    cover: '/projects/cafe-web/cafe-web-5.png',
    gallery: gal(
      'cafe-web',
      Array.from({ length: 6 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Heri-Threads',
    role: 'Web Developer',
    period: '2026',
    description:
      'A cultural showcase of Ifugao dances and traditional attire, presenting heritage content through interactive, image-rich pages built on the TALL stack.',
    tech: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
    category: 'Freelance',
    cover: '/projects/heri-threads/heri-threads-1.png',
    gallery: gal(
      'heri-threads',
      Array.from({ length: 9 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Cafe Management System (Web & Mobile)',
    role: 'Full-Stack Developer',
    period: '2026',
    description:
      'A cafe management system for a different client: a native Android ordering app paired with a real-time web admin dashboard. The Node.js/Express backend exposes a REST API and pushes live order updates over Socket.IO, with MongoDB storing orders, products, and receipts.',
    tech: ['Kotlin', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    category: 'Freelance',
    cover: '/projects/cafe-mobile/cafe-mobile-2.jpg',
    gallery: gal(
      'cafe-mobile',
      Array.from({ length: 11 }, (_, i) => `${i + 1}.jpg`),
    ),
  },
  {
    name: 'Disaster Ranger',
    role: 'Game Developer',
    period: '2025',
    description:
      'A 2D disaster-preparedness game for elementary schools, teaching emergency response through interactive scenarios and hand-drawn pixel art.',
    tech: ['Godot', 'GDScript', 'Aseprite'],
    category: 'Freelance',
    cover: '/projects/disaster-ranger/disaster-ranger-1.png',
    gallery: gal(
      'disaster-ranger',
      Array.from({ length: 9 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Brick Breaker',
    role: 'Game Developer',
    period: '2025',
    description:
      'A polished brick-breaker arcade game built in Godot with hand-designed levels, escalating difficulty, and responsive paddle physics.',
    tech: ['Godot', 'GDScript'],
    category: 'Freelance',
    cover: '/projects/brick-breaker/brick-breaker-1.png',
    gallery: [
      '/projects/brick-breaker/brick-breaker-1.png',
      '/projects/brick-breaker/brick-breaker-vid-1.mp4',
      '/projects/brick-breaker/brick-breaker-vid-2.mp4',
    ],
  },
  {
    name: 'Germ Buster',
    role: 'Game Developer',
    period: '2026',
    description:
      'An interactive educational game teaching young students hygiene and germ awareness through playful, character-driven gameplay.',
    tech: ['Godot', 'GDScript', 'Aseprite'],
    category: 'Freelance',
    cover: '/projects/germ-buster/germ-buster-1.png',
    gallery: gal(
      'germ-buster',
      Array.from({ length: 3 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Rock Paper Scissors',
    role: 'Game Developer',
    period: '2025',
    description:
      'A fast-paced rock-paper-scissors game made in Godot with animated showdowns and running score tracking.',
    tech: ['Godot', 'GDScript'],
    category: 'Freelance',
    cover: '/projects/rps/rps-1.png',
    gallery: [
      '/projects/rps/rps-1.png',
      '/projects/rps/rps-2.jpg',
      '/projects/rps/rps-3.jpg',
      '/projects/rps/rps-vid-1.mp4',
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
    featured: true,
    github: 'https://github.com/cedcedie/capstone-game-case-no-zero',
    cover: '/projects/case-zero/case-zero-3.png',
    gallery: gal(
      'case-zero',
      Array.from({ length: 8 }, (_, i) => `${i + 1}.png`),
    ),
  },
  {
    name: 'Library Attendance & Circulation Monitoring System',
    role: 'Team Lead',
    period: '2024',
    description:
      'Led a 4-person team building a web library system with dashboards, authentication, attendance logs, and circulation tracking.',
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    category: 'Academic',
    github: 'https://github.com/cedcedie/Library-Attendance-And-Circulation-Monitoring',
    cover: '/projects/library/library-1.png',
    gallery: ['/projects/library/library-1.png'],
  },
  // No Personal projects yet — the "Personal" section still renders with a
  // "coming soon" placeholder (see app/projects/page.tsx). Add real personal
  // builds here with `category: 'Personal'`.
];

/**
 * The three projects shown on the home-page preview, in display order.
 * Independent of `projects` array / category ordering — referenced by name.
 */
export const homeProjectNames: string[] = [
  'Case No. Zero: A Philippine Legal Crime Narrative',
  'Hydrolar — Energy Storage Dashboard',
  'Learning Management System: Science with AR',
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
