import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem" }}>{children}</main>
      {/* Footer goes here */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}