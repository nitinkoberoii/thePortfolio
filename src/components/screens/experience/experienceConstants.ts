export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon?: string; // Optional: path to icon or logo
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Intern",
    company: "CodexVeer",
    duration: "May 2025 - July 2025",
    description: "Designed scalable RESTful APIs with Node.js and MongoDB (40% faster transactions, 1000+ concurrent users) and built 15+ Flutter UI components for seamless Android/web integration.",
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