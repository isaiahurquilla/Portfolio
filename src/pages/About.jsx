export default function About() {
  return (
    <section className="page">
      <h1>About</h1>
      <p>
        I'm a Computer Science student at CSUB with a strong interest in frontend
        development and building applications that solve real problems. I started
        programming in high school and have since developed projects in both web
        and mobile development, with experience using React, JavaScript, and APIs
        to create responsive, data-driven user experiences. I enjoy building clean,
        maintainable interfaces and continuing to grow as a software engineer
        through both individual and collaborative projects.
      </p>

      <h2>Focus Areas</h2>
      <ul>
        <li>Frontend Development</li>
        <li>Responsive Web and Mobile UI</li>
        <li>API Integration and Data-Driven Applications</li>
      </ul>

      <h2>Skills</h2>
      <p>
        JavaScript, React, React Native, TypeScript, Python, Java, Node.js, SQL,
        and C++
      </p>

      <div style={{ marginTop: "1rem" }}>
        <a href="/resume" role="button">
          View Resume
        </a>
      </div>
    </section>
  );
}