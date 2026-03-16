export const projects = [
  {
    id: 1,
    title: "About Me App",
    slug: "about-me-app",
    description:
      "A mobile About Me app built with React Native (Expo) showcasing profile sections, skills, and links.",
    techStack: ["React Native", "Expo", "JavaScript"],
    image: null,
    github: "https://github.com/isaiahurquilla/Project1",
    live: null,
    highlights: [
      "Reusable components for clean structure",
      "Mobile-friendly layout and styling",
      "Organized content sections for a portfolio feel",
    ],
  },
  {
    id: 2,
    title: "Nutrition Tracker",
    slug: "nutrition-tracker",
    description:
      "A mobile nutrition app for tracking daily meals, calories, and protein. Users can search foods by name or brand, log servings, and review nutrition totals across the day and week.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "AsyncStorage",
      "USDA API",
      "Open Food Facts API",
    ],
    image: null,
    github: "https://github.com/isaiahurquilla/nutrition-app",
    live: null,
    highlights: [
      "Designed a reusable component-based UI for food search, meal logging, and nutrition summaries",
      "Implemented hybrid food search using USDA for generic foods and Open Food Facts for branded products",
      "Built persistent daily history with weekly views, serving-based calculations, and unit support for grams and fl oz",
    ],
  },
  {
    id: 3,
    title: "DBCore4U Clothing Storefront",
    slug: "dbcore4u-clothing",
    description:
      "A branded clothing storefront experience for the DBCore4U brand.",
    techStack: ["React Native", "Expo", "JavaScript"],
    image: null,
    github: "https://github.com/isaiahurquilla/dbcore4u",
    live: {
      url: "https://dbcore4u.vercel.app/",
      label: "Open Live Site",
    },
    highlights: [
      "Branded UI and reusable product components",
      "Responsive layout and clean navigation structure",
      "Designed for easy content updates",
    ],
  },
];
