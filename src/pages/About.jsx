export default function About() {
  return (
    <section className="page">
      <h1>About</h1>
      <p>
        Hello, This is the about me page. As i stated on the home page, I am currently a full-time student
        at CSUB majoring in Computer Science. I was born and raised in California and found my love for programming in high school.
        I enjoy working on web applications, mobile apps, and learning more about deep learning and artificial intelligence.
        I have had the opportunity to work on some individual and collaborative group projects that I am very proud of and I hope to continue building more projects that can solve real-world problems.
      </p>

      <h2>Specializations</h2>
      <ul>
        <li>Web Programming</li>
        <li>Database building</li>
        <li>Deep Learning</li>
      </ul>

      <h2>Skills</h2>
      <p>Python, Java, JavaScript, React, Node.js, SQL, and C++</p>

      {/* Resume download button (add resume.pdf to src/assets later) */}
      <div style={{ marginTop: "1rem" }}>
        <a href="/resume" role="button">
          View Resume
        </a>
      </div>
    </section>
  );
}