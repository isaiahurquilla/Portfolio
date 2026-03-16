export default function Resume() {
  return (
    <section className="page">
      <h1>Resume</h1>

      <h2>Professional Summary</h2>
      <p>
        Computer Science student at CSUB focused on frontend development and
        building responsive, user-friendly applications with React, JavaScript,
        and modern web technologies. Project experience includes developing
        component-based web and mobile applications, integrating APIs,
        rendering structured data dynamically, and building clean interfaces for
        real-world use cases. Seeking an entry-level software engineering
        opportunity where I can contribute to product development and continue
        growing as a frontend engineer.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        <li>
          <strong>Languages:</strong> JavaScript, TypeScript, Python, Java, C++,
          SQL
        </li>
        <li>
          <strong>Frameworks/Libraries:</strong> React, React Native, Expo,
          Node.js
        </li>
        <li>
          <strong>Frontend:</strong> React Router, responsive design, API
          integration, component-based UI development
        </li>
        <li>
          <strong>Tools:</strong> Git, GitHub, Vite, npm, VS Code, IntelliJ IDEA
        </li>
        <li>
          <strong>Hardware/Robotics:</strong> Arduino, Raspberry Pi, CAD,
          soldering, circuit board assembly
        </li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>California State University, Bakersfield</strong> — B.S. in
        Computer Science (In Progress)
        <br />
        <strong>Expected Graduation:</strong> 2027
      </p>

      <h2>Projects</h2>
      <ul>
        <li>
          <strong>About Me App</strong> (React Native, Expo, JavaScript) —
          Built a multi-screen mobile app with reusable navigation components
          and organized profile, skills, goals, and gallery views using a
          component-based structure.
        </li>
        <li>
          <strong>Nutrition Tracker</strong> (React Native, Expo, TypeScript) —
          Built a nutrition tracking app that integrates the USDA FoodData
          Central API and Open Food Facts API to support food search,
          serving-based calculations, meal logging, and daily/weekly nutrition
          summaries.
        </li>
        <li>
          <strong>DBCore4U Clothing Storefront</strong> (React, Vite,
          JavaScript) — Developed a responsive web storefront for a custom
          clothing brand with reusable UI components, structured product data,
          and a dynamic order form workflow.
        </li>
      </ul>

      <h2>Leadership & Activities</h2>
      <ul>
        <li>
          <strong>Combat Robotics Club (CSUB)</strong> — Collaborate on the
          design, assembly, and testing of competition robots using CAD,
          soldering, 3D printing, and team-based problem solving.
        </li>
        <li>
          <strong>AI Humanoid Robotics Workshop (CSUB)</strong> — Participated
          in hands-on workshops exploring robotics systems, AI concepts, and
          collaborative hardware/software builds.
        </li>
      </ul>
    </section>
  );
}