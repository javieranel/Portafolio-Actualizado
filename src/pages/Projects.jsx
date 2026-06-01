import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

export default function Projects() {

  const projects = [
    {
      title: "Sistema de Mantenimiento",
      image: project1,
      description:
        "Sistema para control de mantenimientos preventivos y correctivos.",
      tech: "React • PHP • MySQL • AJAX • Bootstrap • Chart.js • GitHub • HTML • CSS • JavaScript",
    },

    {
      title: "Dashboard de Compras",
      image: project2,
      description:
        "Panel administrativo para órdenes de compra y seguimiento.",
      tech: "PHP • Bootstrap • AJAX • MySQL • Chart.js • GitHub • HTML • CSS • JavaScript",
    },

    {
      title: "AllMarketing Panamá",
      image: project3,
      description:
        "Pagina Web para agencia de marketing digital en Panamá.",
      tech: "JavaScript • Chart.js • MySQL",
    },

    {
      title: "AllMarketing Panamá",
      image: project3,
      description:
        "Pagina Web para agencia de marketing digital en Panamá.",
      tech: "JavaScript • Chart.js • MySQL",
    },

    {
      title: "Feria de La Chorrera",
      image: project3,
      description:
        "Pagina Web para la feria de La Chorrera, con información de eventos, artistas y venta de boletos.",
      tech: "JavaScript • Wordpress",
    },
  ];

  return (
    <div className="projects-page">

      <h1 className="title">Mis Proyectos</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">

                <button>Demo</button>

                <button>GitHub</button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}