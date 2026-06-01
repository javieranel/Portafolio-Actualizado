const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/contact", async (req, res) => {

    const { nombre, correo, mensaje } = req.body;

    try {

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "javieranel0107@gmail.com",
            subject: `Nuevo mensaje de ${nombre}`,
            html: `
                <h2>Nuevo mensaje desde el portafolio</h2>

                <p><strong>Nombre:</strong> ${nombre}</p>

                <p><strong>Correo:</strong> ${correo}</p>

                <p><strong>Mensaje:</strong></p>

                <p>${mensaje}</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Mensaje enviado correctamente",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Error al enviar correo",
        });
    }
});

app.listen(5000, () => {
    console.log("Servidor corriendo en puerto 5000");
});