import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Portafolio  Web</h2>

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/projects">Proyectos</Link>
          </li>

          <li>
            <Link to="/skills">Skills</Link>
          </li>

          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}