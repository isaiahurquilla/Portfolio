// src/data/posts.js
export const posts = [
  {
    id: 1,
    title: "Hello World",
    date: "2026-03-08",
    slug: "hello-world",
    excerpt:
      "A quick intro to my portfolio blog and what I’ll be writing about as I grow as a developer.",
    content: `
Welcome to my blog!

I built this portfolio site using React and React Router. My goal is to document what I’m learning, share project updates, and write about topics like web development, mobile development, and robotics.

In future posts, I’ll break down projects I’ve built, what I learned, and what I’d improve next time.
`,
    tags: ["portfolio", "react"],
    coverImage: null,
  },
  {
    id: 2,
    title: "Building with React Native (Expo)",
    date: "2026-03-08",
    slug: "react-native-expo-notes",
    excerpt:
      "Notes from building apps with React Native + Expo: components, navigation, and good habits for clean code.",
    content: `
React Native + Expo makes it fast to prototype mobile apps.

Some things I focus on:
- Reusable components (keep screens simple)
- Consistent styling
- Validating user input
- Keeping logic separate from UI when possible

Next, I want to improve my state management and add better error handling to my apps.
`,
    tags: ["react-native", "expo"],
    coverImage: null,
  },
  {
    id: 3,
    title: "Robotics + Software: What I’m Learning",
    date: "2026-03-08",
    slug: "robotics-and-software",
    excerpt:
      "How combat robotics and humanoid AI workshops are helping me think like an engineer and developer.",
    content: `
Robotics is one of the best ways to practice real engineering:

- Debugging hardware + software together
- Iterating quickly after failures
- Documenting changes and testing improvements
- Working with teammates under time constraints

I’ve worked with Arduino/Raspberry Pi, C++/Python, CAD, soldering, and circuit boards. These experiences help me stay disciplined with testing and problem-solving.
`,
    tags: ["robotics", "learning"],
    coverImage: null,
  },
];