import jwt from "jsonwebtoken";
import crypto from "crypto";

import { secret, salt } from "./auth.secret.js";
import { loginIsCorrect } from "../helpers/auth.js";
import { User } from "../user/user.model.js";

export const encodePassword = (pass) => {
  return crypto.pbkdf2Sync(pass, salt, 1000, 64, `sha512`).toString(`hex`);
};

export async function loginCtrl(req, res) {
  try {
    const { email, password } = req.body;
    const passwordEncriptado = encodePassword(password);
    const isLog = await loginIsCorrect(email, passwordEncriptado);
    if (isLog) {
      const token = jwt.sign({ user: email }, secret);

      res.status(200).json({
        token,
      });
    } else {
      res.status(404).json({
        error: {
          status: true,
          message: "usuario o contraseña incorrecta",
        },
      });
    }
  } catch (error) {
    res.status(404).json({
      error: {
        status: true,
        message: error,
      },
      data: null,
    });
  }
}
