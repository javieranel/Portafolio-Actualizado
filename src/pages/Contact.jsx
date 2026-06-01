import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({


    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: data.message,
      });

      setFormData({
        nombre: "",
        correo: "",
        mensaje: "",
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar el mensaje",
      });
    }
  };

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
            href="mailto:javieranel0107@gmail.com"
            className="contact-card"
          >
            <FaEnvelope size={35} />

            <div>
              <h3>Email</h3>
              <p>javieranel0107@gmail.com</p>
            </div>
          </a>

        </div>

      </div>

      {/* FORMULARIO */}

      <div className="contact-right">

        <form
          className="modern-contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Enviar Mensaje
          </button>

        </form>

      </div>

    </div>
  );
}