export const projects = [
  {
  id: 1,
  title: "About Me App",
  slug: "about-me-app",
  description:
    "A React Native introduction app built with Expo that organizes profile information, skills, goals, and supporting content across multiple screens using a reusable component-based structure.",
  techStack: ["React Native", "Expo", "JavaScript", "Expo Router"],
  image: null,
  github: "https://github.com/isaiahurquilla/Project1",
  live: null,
  highlights: [
    "Developed a multi-screen app with reusable link and layout components for cleaner navigation and structure",
    "Organized profile, skills, goals, and gallery content into dedicated views to create a more polished portfolio-style experience",
    "Applied consistent styling and component reuse to make the app easier to extend and maintain",
  ],
},
  {
  id: 2,
  title: "Nutrition Tracker",
  slug: "nutrition-tracker",
  description:
    "A React Native nutrition app that uses the USDA FoodData Central API and Open Food Facts API to power food search, serving-size calculations, meal logging, and daily/weekly nutrition tracking.",
  techStack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Expo Router",
    "AsyncStorage",
    "USDA FoodData Central API",
    "Open Food Facts API",
  ],
  image: null,
  github: "https://github.com/isaiahurquilla/nutrition-app",
  live: null,
  highlights: [
    "Developed reusable, component-based screens for food search, meal logging, and nutrition dashboards",
    "Implemented hybrid API search using USDA for generic foods and Open Food Facts for branded items, rendering structured JSON data dynamically in the UI",
    "Built client-side serving and unit calculations with persistent daily history, weekly summaries, and support for grams and fl oz",
  ],
  },
  {
  id: 3,
  title: "DBCore4U Clothing Storefront",
  slug: "dbcore4u-clothing",
  description:
    "A React web storefront for a custom clothing brand, built with Vite to showcase products, pricing, ordering instructions, and a streamlined custom-order flow.",
  techStack: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "shadcn/ui",
    "EmailJS",
    "Vercel",
  ],
  image: null,
  github: "https://github.com/isaiahurquilla/dbcore4u",
  live: {
    url: "https://dbcore4u.vercel.app/",
    label: "Open Live Site",
  },
  highlights: [
    "Built a responsive React storefront with reusable page components for product discovery, pricing, instructions, and customer contact",
    "Implemented a custom order form with dynamic item, color, size, and request inputs, plus EmailJS integration for collecting order details",
    "Structured merchandise, sizing, and color data separately from the UI to make product content easier to maintain and update",
  ],
  },
];
