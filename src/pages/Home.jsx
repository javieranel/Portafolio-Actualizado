import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="hero">

      <div className="terminal-window">

        {/* TOP BAR */}

        <div className="terminal-header">

          <div className="terminal-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <p>javieranel0107@gmail.com</p>

        </div>

        {/* TERMINAL BODY */}

        <div className="terminal-body">

          <p>
            <span className="green-text">$</span> npm start
          </p>

          <p>
            <span className="green-text">$</span> Loading portfolio...
          </p>

          <h1>

            <TypeAnimation
              sequence={[
                "Hola, soy Javier Tapia",
                2000,
                "",
                1000,
                "React Developer",
                2000,
                "",
                1000,
                "PHP & MySQL Developer",
                2000,
                "",
                1000,
                "Frontend & Backend",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="terminal-description">
            Desarrollador enfocado en aplicaciones web modernas,
            automatización de procesos y soluciones tecnológicas.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn" onClick={() => window.location.href = "projects"}>
              Ver Proyectos
            </button>

            <button   className="secondary-btn" onClick={() => window.location.href = "Contact"}>
              Contacto
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}