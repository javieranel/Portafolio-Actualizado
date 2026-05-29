import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-left">

        <p className="contact-subtitle">
          CONTACTO
        </p>

        <h1>
          Hablemos sobre tu próximo proyecto 🚀
        </h1>

        <p className="contact-description">
          Estoy disponible para desarrollo web,
          sistemas administrativos, automatización
          de procesos y soporte tecnológico.
        </p>

        {/* CARDS */}

        <div className="contact-cards">

          <a
            href="https://wa.me/50763776255"
            target="_blank"
            className="contact-card"
          >
            <FaWhatsapp size={35} />

            <div>
              <h3>WhatsApp</h3>
              <p>+507 6377-6255</p>
            </div>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="contact-card"
          >
            <FaGithub size={35} />

            <div>
              <h3>GitHub</h3>
              <p>Ver proyectos</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="contact-card"
          >
            <FaLinkedin size={35} />

            <div>
              <h3>LinkedIn</h3>
              <p>Perfil profesional</p>
            </div>
          </a>

          <a
            href="javieranel0107@gmail.com"
            className="contact-card"
          >
            <FaEnvelope size={35} />

            <div>
              <h3>Email</h3>
              <p>correo@gmail.com</p>
            </div>
          </a>

        </div>

      </div>

      {/* FORMULARIO */}

      <div className="contact-right">

        <form className="modern-contact-form">

          <input type="text" placeholder="Nombre" />

          <input type="email" placeholder="Correo" />

          <textarea placeholder="Escribe tu mensaje"></textarea>

          <button>
            Enviar Mensaje
          </button>

        </form>

      </div>

    </div>
  );
}