import { User } from "./user.model.js";
import { v4 as uuidv4 } from "uuid";
import { encodePassword } from "../auth/auth.controller.js";
import { transporter } from "../config/mailer.js";

export async function createUserCtrl(req, res) {
  const { email } = req.body;
  const password = uuidv4();
  try {
    const usuario = await User.create({
      email: email,
      password: encodePassword(password),
    });

    try {
      let info = await transporter.sendMail({
        from: '"Envío de password" <appfotograph@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Completar registro Pokemon Play", // Subject line
        html: `
                <h4>Has sido añanadido como usuario en <b>Pokemon play</b></h4>
                <p>Tu password es: ${password}</p>
                <p>Por favor, haz click en el siguiente enlace para completar el registro:</p>
                <a href='http://localhost:3000'>http://localhost:3000</a>
            `,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        error: "No se ha podido enviar mail",
        data: error,
      });
    }

    res.status(201).json({
      status: true,
      error: null,
      data: usuario.email,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      error: error,
      data: null,
    });
  }
}
