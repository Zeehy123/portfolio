import edusphereImg from "../assets/images/edushpere.jpg";
import edusphereVideo from "../assets/videos/edushpere.mp4";
import amstockImg from "../assets/images/amstock.jpg";
import amstockVideo from "../assets/videos/am_stock.mp4";
import inventoryImg from "../assets/images/smartinven.jpg";
import inventoryVideo from "../assets/videos/smartinven.mp4";
import cashcoachImg from "../assets/images/cashcoach.jpg";
import paydpayImg from "../assets/images/paydpay.jpg";
import paydpayVideo from "../assets/videos/payDpay.mp4";
import cyberlogImg from "../assets/images/cyberlog.jpg";
import cyberlogVideo from "../assets/videos/cyberlog.mp4";
import linkerdImg from "../assets/images/linkerd.jpg";
import linkerdVideo from "../assets/videos/linkerd.mp4";

// type must be one of: "Frontend", "Full-Stack", "Security"
export const projects = [
  {
    id: "cyberlog",
    title: "CyberLog",
    type: "Security",
    category: "Log analysis and anomaly detection",
    featured: true,
    description:
      "A security dashboard that analyses uploaded log files and surfaces anomalies, critical alerts and the IP addresses behind them.",
    image: cyberlogImg,
    video: cyberlogVideo,
    tech: ["React", "Data visualisation", "Security analytics"],
    details: {
      problem:
        "Reading raw server logs by hand is slow, and suspicious activity is easy to miss in thousands of lines.",
      solution:
        "Upload a log file and the dashboard summarises it: threat level, total events, anomalies, critical alerts and uptime, with the worst activity highlighted on the timeline.",
      highlights: [
        "Log file upload and one-click analysis",
        "Event volume chart with anomaly spikes highlighted",
        "Top source IPs and a live-style alert feed",
      ],
    },
  },
  {
    id: "cashcoach",
    title: "CashCoach",
    type: "Full-Stack",
    category: "Personal finance manager",
    featured: true,
    description:
      "A personal finance app for tracking income and expenses, setting budgets and seeing where money goes each month.",
    image: cashcoachImg,
    tech: ["React", "Django", "Charts"],
    details: {
      problem:
        "People track money across notes, bank apps and spreadsheets, so they never see the full picture.",
      solution:
        "One dashboard with income, expenses, categories and budgets, plus charts for balance trends and a monthly expense breakdown.",
      highlights: [
        "Income and expense tracking with custom categories",
        "Balance trend chart and monthly breakdown",
        "Budget and analytics views (income, expenses, income vs expenses)",
      ],
    },
  },
  {
    id: "edusphere",
    title: "Edusphere",
    type: "Frontend",
    category: "Online learning platform",
    featured: true,
    description:
      "The complete frontend for an online learning platform, built for clear course navigation on any screen size.",
    image: edusphereImg,
    video: edusphereVideo,
    tech: ["React", "Tailwind CSS", "REST APIs"],
    details: {
      problem:
        "Students and educators needed a clean way to browse and take courses without cluttered screens or poor mobile support.",
      solution:
        "A responsive frontend made of reusable React components, with dynamic UI states and accessible layouts for courses and lessons.",
      highlights: [
        "Structured course and lesson layouts",
        "Reusable, scalable UI components",
        "Mobile-first and accessible design",
      ],
    },
  },
  {
    id: "paydpay",
    title: "PaydPay",
    type: "Frontend",
    category: "Payment dashboard",
    description:
      "An analytics dashboard for payments, showing revenue, active users, transactions and response times at a glance.",
    image: paydpayImg,
    video: paydpayVideo,
    tech: ["React", "Charts", "State management"],
    details: {
      problem:
        "Finance teams need to see revenue and transaction health quickly, without digging through reports.",
      solution:
        "A dark-themed dashboard with headline metrics, a revenue and profit trend, and a transaction mix breakdown by category.",
      highlights: [
        "Headline metrics with month-over-month change",
        "Revenue overview chart",
        "Transaction mix by transfers, payments, withdrawals and deposits",
      ],
    },
  },
  {
    id: "linkerd",
    title: "LinkerD",
    type: "Frontend",
    category: "Link management and analytics",
    description:
      "A dashboard for creating short links and tracking how many people click them over time.",
    image: linkerdImg,
    video: linkerdVideo,
    tech: ["React", "Charts", "Tailwind CSS"],
    details: {
      problem:
        "Anyone sharing links needs to know which ones work, and a plain list of URLs does not tell them.",
      solution:
        "A dashboard with total clicks, active links, today's clicks and click rate, plus a clicks-over-time chart with 7, 14 and 30 day views.",
      highlights: [
        "Create and manage links from one place",
        "Click-rate and daily activity summary",
        "Switchable time ranges on the clicks chart",
      ],
    },
  },
  {
    id: "am-stock",
    title: "AM_STOCK",
    type: "Full-Stack",
    category: "Stock portfolio tracker",
    description:
      "A stock portfolio tracker that brings market data, performance and profit or loss into one dashboard.",
    image: amstockImg,
    video: amstockVideo,
    tech: ["React", "Django", "APIs", "Charts"],
    details: {
      problem:
        "Investors lacked a simple way to follow their portfolio and market movements in one place.",
      solution:
        "A full-stack app that fetches stock data, visualises performance trends and updates portfolios dynamically.",
      highlights: [
        "Live-style stock price updates",
        "Performance and profit/loss analytics",
        "Interactive data visualisations",
      ],
    },
  },
  {
    id: "inventory",
    title: "Smart Inventory",
    type: "Full-Stack",
    category: "Inventory management system",
    description:
      "An inventory system that tracks products, stock levels and sales, and flags items that are running low.",
    image: inventoryImg,
    video: inventoryVideo,
    tech: ["React", "Django", "REST APIs", "Database"],
    details: {
      problem:
        "Businesses need to avoid running out of stock or over-ordering, without keeping counts in spreadsheets.",
      solution:
        "A full-stack system with product and sales management, a dashboard of revenue and profit, and a stock status chart.",
      highlights: [
        "Product and stock management (CRUD)",
        "Low-stock indicator and stock status chart",
        "Revenue overview across dates",
      ],
    },
  },
];

export const projectTypes = ["All", "Full-Stack", "Frontend", "Security"];
