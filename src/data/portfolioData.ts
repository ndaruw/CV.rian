import { Project, ServiceItem, ExperienceItem, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Riandaru Jiwan Alwasis',
  role: 'Designer & Full-Stack Developer',
  tagline: 'GET EVERY SINGLE SOLUTIONS.',
  heroBio: 'Membangun pengalaman digital yang berkesan melalui perpaduan estetika visual minimalis, tipografi presisi, dan arsitektur kode modern yang cepat dan terukur.',
  location: 'Jakarta & Remote Worldwide',
  email: 'aiwasis557@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  availableForWork: true,
  yearsExperience: '8+',
  projectsCompleted: '95+',
  clientSatisfaction: '99.2%',
  awardsWon: '14+'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'uiux',
    number: '01',
    title: 'UI/UX Design & Prototyping',
    tagline: 'Desain intuitif yang mengutamakan kenyamanan pengguna.',
    description: 'Riset mendalam, wireframing beresolusi tinggi, desain antarmuka interaktif, dan pembuatan sistem desain (Design System) modular berbasis Figma.',
    deliverables: ['User Journey & Wireframes', 'Figma Design System & Token', 'Interactive Clickable Prototype', 'Usability Testing & Audit'],
    icon: 'Layout'
  },
  {
    id: 'frontend',
    number: '02',
    title: 'Frontend Web Engineering',
    tagline: 'Implementasi kode bersih, cepat, dan teroptimasi SEO.',
    description: 'Membangun aplikasi web berperforma tinggi menggunakan React, Next.js, TypeScript, dan Tailwind CSS dengan standar skor 95+ di Google Lighthouse.',
    deliverables: ['Single Page Applications (SPA)', 'Responsive Web Design (Mobile/Desktop)', 'Animasi Halus & Aksesibilitas WCAG', 'SEO & Core Web Vitals Optimization'],
    icon: 'Code'
  },
  {
    id: 'product',
    number: '03',
    title: 'Brand Identity & Visual System',
    tagline: 'Membangun identitas visual yang elegan dan abadi.',
    description: 'Pengembangan identitas merek digital, pedoman tipografi, palet warna berkarakter, dan aset grafis konsisten untuk produk teknologi.',
    deliverables: ['Brand Guidelines & Stylebook', 'Tipografi & Skema Warna Terkurasi', 'Iconography & Visual Assets', 'Marketing Collateral Digital'],
    icon: 'Palette'
  },
  {
    id: 'consulting',
    number: '04',
    title: 'Deployment & Web Architecture',
    tagline: 'Distribusi instan ke GitHub, Vercel, dan Cloud Server.',
    description: 'Konfigurasi otomatisasi CI/CD, build pipelines, arsitektur serverless, dan hosting bebas repot untuk deployment proyek dalam hitungan detik.',
    deliverables: ['GitHub Repository & Actions Setup', 'Vercel / Netlify Production Deployment', 'Custom Domain & SSL Configuration', 'Performance Monitoring'],
    icon: 'Rocket'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Kinetix SaaS Financial Analytics',
    category: 'web',
    categoryLabel: 'Web Application',
    description: 'Platform visualisasi analitik keuangan real-time dengan diagram interaktif dan dashboard manajemen portofolio investasi.',
    fullStory: 'Kinetix dibangun untuk memecahkan kompleksitas visualisasi aliran kas korporat. Menggunakan arsitektur serverless modern dengan React, TypeScript, dan Tailwind CSS, aplikasi ini memproses ribuan data transaksi per detik tanpa lag.',
    client: 'FinVenture Capital',
    year: '2025',
    role: 'Lead Frontend Engineer & UI Designer',
    metrics: '+42% Peningkatan Retensi Pengguna',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Aura Studio Minimalist Commerce',
    category: 'uiux',
    categoryLabel: 'UI/UX & Branding',
    description: 'Pengalaman belanja daring produk arsitektural dan furnitur minimalis dengan navigasi spasial yang tenang dan elegan.',
    fullStory: 'Fokus proyek ini adalah menghilangkan kebisingan visual e-commerce tradisional. Tipografi bergaya editorial dikombinasikan dengan micro-interaction lembut memberikan sensasi berkunjung ke galeri fisik.',
    client: 'Aura Studio Nordics',
    year: '2024',
    role: 'Product Designer',
    metrics: '99.8% Core Web Vitals Score',
    technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Motion'],
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Pulse Mobile Health & Habit Tracker',
    category: 'mobile',
    categoryLabel: 'Mobile App Concept',
    description: 'Aplikasi pelacak kebiasaan dan metrik kesehatan harian dengan antarmuka gelap minimalis dan haptic feedback.',
    fullStory: 'Pulse dirancang untuk pengguna yang menginginkan pelacakan kesehatan tanpa grafik rumit. Menggunakan sistem kartu bento dan pengingat berbasis sains perilaku.',
    client: 'Pulse Health Lab',
    year: '2024',
    role: 'Lead UI/UX Designer',
    metrics: '4.9/5 Rating Pengguna Awal',
    technologies: ['React Native', 'Figma', 'Design Tokens'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Chronos Editorial Typography Showcase',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    description: 'Identitas visual dan situs portofolio editorial untuk kurator fotografi dan arsitektur kontemporer.',
    fullStory: 'Chronos mengeksplorasi batas antara editorial cetak dan web interaktif. Menggunakan grid asimetris presisi dengan font serif kontras tinggi.',
    client: 'Chronos Publishing',
    year: '2024',
    role: 'Art Director & Web Developer',
    metrics: 'Featured di Awwwards Nominee',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'CSS Grid'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 'proj-5',
    title: 'Sentry Cloud Developer Console',
    category: 'web',
    categoryLabel: 'Web Application',
    description: 'Dashboard pemantauan log serverless dan telemetry jaringan dengan performa render tabular ultra-cepat.',
    fullStory: 'Sistem dirancang untuk menyajikan jutaan log dengan rendering virtualized list tanpa membebani browser memori pengembang.',
    client: 'DevOps Scale Inc.',
    year: '2023',
    role: 'Frontend Architect',
    metrics: '< 100ms Query Latency Response',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 'proj-6',
    title: 'Verve Studio Brand & Packaging',
    category: 'branding',
    categoryLabel: 'Branding & Identity',
    description: 'Revitalisasi identitas visual untuk produk kopi spesialti organik asal Jawa Barat dengan pendekatan ramah lingkungan.',
    fullStory: 'Menciptakan tipografi khusus, palet warna earthy kontemporer, serta sistem kemasan biodegradasi yang siap pakai di pasar global.',
    client: 'Verve Artisan Roasters',
    year: '2023',
    role: 'Brand Designer',
    metrics: '+85% Penjualan D2C Batch 1',
    technologies: ['Adobe Illustrator', 'Figma', 'Packaging Prototyping'],
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: '2023 — Sekarang',
    role: 'Senior Product Designer & Frontend Dev',
    company: 'Studio Kinetic Global',
    location: 'Remote',
    type: 'Full-time',
    description: 'Memimpin perancangan sistem antarmuka untuk 12+ produk klien internasional, merumuskan design system berskala besar, dan mengimplementasikannya dengan React & TypeScript.',
    skills: ['Design Systems', 'React', 'TypeScript', 'Tailwind CSS', 'Design Tokens']
  },
  {
    period: '2021 — 2023',
    role: 'Frontend UI/UX Engineer',
    company: 'Nexa Digital Agency',
    location: 'Jakarta, ID',
    type: 'Full-time',
    description: 'Membangun puluhan situs web responsif dan aplikasi web interaktif untuk startup Seri A dan B. Meningkatkan kecepatan loading situs klien rata-rata 40%.',
    skills: ['Next.js', 'Responsive Design', 'Vite', 'REST API', 'Figma']
  },
  {
    period: '2019 — 2021',
    role: 'Interactive Web Designer',
    company: 'Creative Pixelworks',
    location: 'Bandung, ID',
    type: 'Contract',
    description: 'Merancang identitas visual merek, landing page konversi tinggi, dan materi interaktif untuk kampanye pemasaran digital.',
    skills: ['UI Prototyping', 'HTML/CSS/JS', 'Brand Guidelines', 'Animation']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'FinVenture Capital',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Riandaru memiliki kombinasi langka antara ketajaman estetika desain grafis dan keahlian teknis pemrograman frontend. Dashboard yang ia bangun tidak hanya tampak memukau, namun juga sangat cepat digunakan.',
    project: 'Kinetix SaaS Analytics'
  },
  {
    id: 'test-2',
    name: 'David Wijaya',
    role: 'Founder & CEO',
    company: 'Aura Studio Nordics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Kolaborasi terbaik yang pernah kami lakukan. Riandaru memahami visi minimalis kami sejak hari pertama dan merealisasikannya melampaui ekspektasi. Kami mendapatkan banyak pujian dari para pelanggan kami.',
    project: 'Aura Minimalist Commerce'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Chronos Media',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Ketelitian Riandaru pada ritme tipografi dan layout adalah kelas dunia. Kode yang diserahkan sangat rapi, terdokumentasi, dan mudah dipublish ke GitHub maupun server produksi.',
    project: 'Chronos Typography System'
  }
];

export const TECH_STACK = [
  { name: 'React 19', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Figma', category: 'Design' },
  { name: 'Vite', category: 'Build Tool' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Git & GitHub', category: 'Version Control' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'REST & GraphQL', category: 'API' }
];
