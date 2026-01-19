import Edusphere from "../assets/images/edushpere.png";
import EduVideo from "../assets/videos/edushpere.mp4";
import AmStock from "../assets/images/amstock.png";
import AmVideo from "../assets/videos/am_stock.mp4";
import SmartInven from "../assets/images/smartinven.png";
import InvenVideo from "../assets/videos/smartinven.mp4";
import CashCoach from "../assets/images/cashcoach.png";
export const exploreProjects = [
  {
    id: 1,
    title: "Edusphere",
    type: "Frontend",
    category: "Online Learning Platform",
    description:
      "An interactive online learning platform focused on seamless course delivery, intuitive navigation, and responsive user experiences.",
    image: Edusphere,
    video: EduVideo,
    tech: ["React", "Tailwind CSS", "REST APIs"],
    details: {
      problem:
        "Students and educators needed a clean, easy-to-use platform for consuming educational content without overwhelming interfaces or poor mobile support.",
      solution:
        "Developed a fully responsive frontend using reusable React components, dynamic UI states, and accessibility-first design principles.",
      highlights: [
        "Structured course and lesson layouts",
        "Reusable, scalable UI components",
        "Mobile-first and accessible design",
      ],
    },
  },

  {
    id: 2,
    title: "AM_STOCK",
    type: "FullStack",
    category: "Portfolio Tracker",
    description:
      "A stock portfolio tracking application that provides real-time market data, performance analytics, and investment insights.",
    image: AmStock,
    video: AmVideo,
    tech: ["React", "Django", "APIs", "Charts"],
    details: {
      problem:
        "Investors lacked a simple way to monitor portfolio performance and market movements in one centralized dashboard.",
      solution:
        "Built a full-stack application that fetches real-time stock data, visualizes performance trends, and updates portfolios dynamically.",
      highlights: [
        "Real-time stock price updates",
        "Performance and profit/loss analytics",
        "Interactive data visualizations",
      ],
    },
  },

  {
    id: 3,
    title: "Inventory System",
    type: "FullStack",
    category: "Inventory Management System",
    description:
      "A web-based inventory management system designed to track products, monitor stock levels, and streamline inventory operations.",
    image: SmartInven,
    video: InvenVideo,
    tech: ["React", "Django", "Database", "REST APIs"],
    details: {
      problem:
        "Businesses needed a reliable system to manage inventory efficiently and avoid stock shortages or overstocking.",
      solution:
        "Developed a full-stack inventory system with CRUD functionality, status indicators, and real-time stock updates.",
      highlights: [
        "Product and stock management",
        "Clear inventory status indicators",
        "Scalable backend integration",
      ],
    },
  },

  {
    id: 4,
    title: "CashCoach",
    type: "Full-Stack",
    category: "Personal Finance Manager",
    description:
      "A personal finance management application that helps users track expenses, manage budgets, and gain insights into their financial habits.",
    image: CashCoach,
    video: "/assets/videos/cashcoach.mp4",
    tech: ["React", "Charts", "State Management"],
    details: {
      problem:
        "Users struggled to keep track of expenses and budgets across multiple financial tools and spreadsheets.",
      solution:
        "Designed and built a centralized dashboard with visual analytics to help users monitor spending patterns and financial goals.",
      highlights: [
        "Expense and budget tracking",
        "Visual analytics and charts",
        "Clean, intuitive dashboard UX",
      ],
    },
  },
];
