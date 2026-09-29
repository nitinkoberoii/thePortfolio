export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon?: string; // Optional: path to icon or logo
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Junior Research Fellow (Software Development)",
    company: "Engagetal Solutions",
    duration: "June 2026 - Present",
    description: "Built three internal modules for a full-stack platform (cutting bug count by 25%), delivered 5 cross-stack features shortening sprint turnaround by 18%, and automated routine setup tasks using AI scripts.",
    icon: "/experience/engagetal.png"
  },
  {
    title: "Software Engineer Intern",
    company: "CareFi (Aldun App)",
    duration: "December 2025 - June 2026",
    description: "Engineered real-time Geotagging feature with 95%+ accuracy, optimized PayU SDK checkout flow reducing user drop-offs by 15–20%, and integrated PostHog behavioral analytics across 5 key user flows.",
    icon: "/experience/carefi.png"
  },
  {
    title: "Full Stack Intern",
    company: "CodexVeer",
    duration: "May 2025 - July 2025",
    description: "Designed scalable RESTful APIs with Node.js and MongoDB (40% faster transactions, 1000+ concurrent users under 200ms latency) and built 15+ Flutter UI components for seamless app integration.",
    icon: "/experience/codexveer.png"
  },
  {
    title: "Backend Developer [Freelancer]",
    company: "Medhwan EduTech",
    duration: "May 2025 - June 2025",
    description: "Designed and developed RESTful APIs with optimized database integration for Prajawal, an educational platform for 10th-grade Gujarat Board students, ensuring high-performance backend under tight deadlines.",
    icon: "/experience/medhwan.png"
  },
  {
    title: "Flutter Developer Intern",
    company: "Thesis Ace Writers",
    duration: "September 2024 - November 2024",
    description: "Redesigned 20+ Flutter app screens to enhance navigation and accessibility (15% user activity boost) and integrated 3 key APIs, improving responsiveness by 20% through effective team collaboration.",
    icon: "/experience/taw.png"
  }
]; 