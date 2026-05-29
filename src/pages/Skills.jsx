import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

export default function Skills() {

  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      level: "85%",
    },

    {
      icon: <FaPhp />,
      name: "PHP",
      level: "90%",
    },

    {
      icon: <FaHtml5 />,
      name: "HTML",
      level: "95%",
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS",
      level: "90%",
    },

    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "88%",
    },

    {
      icon: <FaDatabase />,
      name: "MySQL",
      level: "85%",
    },

    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      level: "92%",
    },

    {
      icon: <FaGitAlt />,
      name: "Git & GitHub",
      level: "80%",
    },
  ];

  return (
    <div className="skills-page">

      <div className="skills-header">

        <p>HABILIDADES</p>

        <h1>
          Tecnologías que utilizo 🚀
        </h1>

        <span>
          Desarrollo aplicaciones modernas enfocadas
          en frontend, backend y automatización
          de procesos.
        </span>

      </div>

      <div className="modern-skills-grid">

        {skills.map((skill, index) => (

          <div className="modern-skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h2>{skill.name}</h2>

            <div className="progress-container">

              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>

            </div>

            <p>{skill.level}</p>

          </div>

        ))}

      </div>

    </div>
  );
}