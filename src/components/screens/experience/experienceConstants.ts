export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
  icon?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Junior Research Fellow (Software Development)",
    company: "Engagetal Solutions",
    duration: "June 2026 - Present",
    description: "Full-stack software development, automated workflow setup, and component optimization.",
    highlights: [
      "Built three internal modules for a full-stack platform, cutting post-review bug count by 25% through mentor-guided walkthroughs.",
      "Delivered five features spanning frontend and backend layers, shortening average sprint turnaround by 18% via focused peer critique.",
      "Automated two recurring setup tasks using AI-assisted scripts, saving close to six hours of routine work weekly.",
      "Refined component structure across four planning sessions with senior engineers, lowering rework on a shared library by 20%."
    ],
    techStack: ["React", "Node.js", "MongoDB", "AI Scripts", "REST APIs"],
    icon: "/experience/engagetal.png"
  },
  {
    title: "Software Engineer Intern",
    company: "CareFi (Aldun App)",
    duration: "December 2025 - June 2026",
    description: "Geotagging feature engineering, PayU SDK checkout optimization, and PostHog analytics integration.",
    highlights: [
      "Engineered and launched a multi-module Geotagging feature with real-time location capture and tagging, achieving 95%+ tagging accuracy and a 30% reduction in manual input effort for users.",
      "Optimized payment flow by refining PayU SDK integration, eliminating redundant payment mode selection and improving checkout experience, contributing to a 15–20% reduction in user drop-offs.",
      "Streamlined behavioral analytics using PostHog across five user flows, surfacing three drop-off points that informed a 12% increase in onboarding completion."
    ],
    techStack: ["Flutter", "PayU SDK", "PostHog", "Geotagging", "REST APIs"],
    icon: "/experience/carefi.png"
  },
  {
    title: "Full Stack Intern",
    company: "CodexVeer",
    duration: "May 2025 - July 2025",
    description: "Scalable RESTful API development, database query optimization, and reusable Flutter UI component design.",
    highlights: [
      "Assembled 15 reusable Flutter components adopted across eight app screens, cutting duplicate UI code by 30%.",
      "Engineered scalable RESTful APIs with Node.js and MongoDB, processing 1000+ concurrent requests under 200ms latency.",
      "Reorganized query structures, achieving a 40% boost in database transaction efficiency during peak operations."
    ],
    techStack: ["Flutter", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    icon: "/experience/codexveer.png"
  },
  {
    title: "Backend Developer [Freelancer]",
    company: "Medhwan EduTech",
    duration: "May 2025 - June 2025",
    description: "RESTful API engineering and database integration for Prajawal educational platform.",
    highlights: [
      "Designed and developed RESTful APIs with optimized database integration for Prajawal, an educational platform for 10th-grade Gujarat Board students.",
      "Ensured high-performance backend delivery under tight deadlines for educational workflows."
    ],
    techStack: ["Node.js", "Express.js", "SQL", "REST APIs"],
    icon: "/experience/medhwan.png"
  },
  {
    title: "Flutter Developer Intern",
    company: "Thesis Ace Writers",
    duration: "September 2024 - November 2024",
    description: "Flutter screen UI redesign and API integrations for enhanced mobile user experience.",
    highlights: [
      "Redesigned 20+ Flutter app screens to enhance navigation and accessibility, driving a 15% user activity boost.",
      "Integrated 3 key APIs, improving application responsiveness by 20% through effective team collaboration."
    ],
    techStack: ["Flutter", "Dart", "REST APIs"],
    icon: "/experience/taw.png"
  }
]; 