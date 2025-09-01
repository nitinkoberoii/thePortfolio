export interface Project {
  image?: string;
  techStack: string[];
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  category: 'complete-apps' | 'small-projects' | 'AI/ML';
}

export const PROJECTS: Project[] = [
  {
    category: "complete-apps",
    image: "/projects/my-portfolio.png",
    techStack: ["HTML", "CSS", "React", "Vite", "Typescript"],
    title: "My Portfolio",
    description: "You're using it rn",
    liveUrl: "https://nitin-portfolio-peach.vercel.app",
    githubUrl: "https://github.com/nitinkoberoii/thePortfolio"
  },
  {
    category: "complete-apps",
    image: "/projects/discussit.png",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod_SM"],
    title: "DiscussIt",
    description: "A community based forum for everything and everyone",
    githubUrl: "https://github.com/nitinkoberoii/DiscussIt"
  },
  {
    category: "complete-apps",
    image: "/projects/zoom.png",
    techStack: ["Dart", "Flutter", "Firebase", "Jitsi_meet"],
    title: "Zoom Video Conferencing App",
    description: "A video conferencing app",
    githubUrl: "https://github.com/nitinkoberoii/Zoom-Clone"
  },
  {
    category: "complete-apps",
    image: "/projects/bloggingsite.png",
    techStack: ["HTML", "CSS", "Flask", "Python", "SQLite"],
    title: "BloggingSite",
    description: "A blogging site",
    githubUrl: "https://github.com/nitinkoberoii/Blogging-Site-with-Flask-and-SQLite"
  },
  {
    category: "complete-apps",
    image: "/projects/skribbl.png",
    techStack: ["Dart", "Flutter", "Node.js", "Express.js", "Socket.io", "Mongoose", "MongoDB"],
    title: "Skribbl",
    description: "The popular word-guessing game",
    githubUrl: "https://github.com/nitinkoberoii/Skribbl_Clone"
  },
  {
    category: "complete-apps",
    techStack: ["Next_13.4", "React", "Stripe", "Supabase", "PostgreSQL", "Tailwind", "Selenium"],
    title: "Musically",
    description: "A digital music service",
    githubUrl: "https://github.com/nitinkoberoii/Musically"
  },
  {
    category: "small-projects",
    image: "/projects/tic-tac-toe.png",
    techStack: ["Dart", "Flutter", "Provider_SM"],
    title: "Tic-Tac-Toe",
    description: "A simple and elegant Tic-Tac-Toe mobile game built with Flutter",
    githubUrl: "https://github.com/nitinkoberoii/Tic-Tac-Toe"
  },
  {
    category: "small-projects",
    image: "/projects/ace-arena.png",
    techStack: ["Python", "Tkinter"],
    title: "Ace-Arena",
    description: "A classic game of Klondike Solitaire",
    githubUrl: "https://github.com/nitinkoberoii/Ace-Arena"
  },
  {
    category: "small-projects",
    image: "/projects/foodie.png",
    techStack: ["Dart", "Flutter"],
    title: "Foodie App UI",
    description: "A food delivery app UI",
    githubUrl: "https://github.com/nitinkoberoii/Foodie-App-UI-Flutter/tree/master"
  },
  {
    category: "small-projects",
    image: "/projects/weather.png",
    techStack: ["Dart", "Flutter", "OpenWeather-API"],
    title: "Weather App UI",
    description: "A weather forecasting application with OpenWeather API",
    githubUrl: "https://github.com/nitinkoberoii/Weather-App-UI"
  },
  {
    category: "small-projects",
    techStack: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-learn"],
    title: "Feature Extraction - DAV Mini-Project",
    description: "Demonstrating fundamental concepts and techniques in data analysis, feature engineering and data visualization",
    githubUrl: "https://github.com/nitinkoberoii/Data-Analytics-Visualization"
  },
  {
    category: "small-projects",
    techStack: ["Node.js", "Javascript", "Express.js", "CORS", "Nodemon"],
    title: "QuotesAPI",
    description: "A basic implementation of REST API for quotes",
    liveUrl: "https://quotes-api-seven.vercel.app/",
    githubUrl: "https://github.com/nitinkoberoii/quotes-api"
  },
  {
    category: "small-projects",
    techStack: ["C++", "Arduino-UNO"],
    title: "RC Car",
    description: "A BT remote-controlled car built using Arduino UNO",
    githubUrl: "https://github.com/nitinkoberoii/RC-Car-using-Arduino"
  },
  {
    category: "AI/ML",
    image: "/projects/ALPDV.png",
    techStack: ["Python", "PyTorch", "TorchVision", "YOLOv5", "OpenCV", "NumPy", "Pytesseract", "Colab", "Jupyter-Notebook"],
    title: "Automatic License Plate Detection and Validation System",
    description: "Automatic License Plate Detection and Verification (ALPDV) using YOLOv5 for object detection and Tesseract OCR for text recognition.",
    githubUrl: "https://github.com/nitinkoberoii/Automatic-License-Plate-Detection-and-Validation"
  },
  {
    category: "AI/ML",
    image: "/projects/chest.png",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter-Notebook"],
    title: "Chest X-Ray Disease Detection",
    description: "Detection of diseases using predictive models.",
    githubUrl: "https://github.com/nitinkoberoii/Disease_detection"
  },
  {
    category: "AI/ML",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Support-Vector-Machine(SVC)", "Random-Forest-Classifier"],
    title: "AI for Personalized Medicine",
    description: "AI for personalized disease prediction and treatment recommendations.",
    githubUrl: "https://github.com/nitinkoberoii/AI-based-disease-prediction"
  },
]; 