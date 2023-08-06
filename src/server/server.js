import { db } from "../db/connection.js";
import { User } from "../user/user.model.js";

export async function createTable() {
  await db
    .sync()
    .then(() => console.log("Conectado al Servidor"))
    .catch((error) => console.log(error));
  // Esto no debería ir, pero como no me dió tiempo a implementar el registro en el front, lo incluyo para que cuando levanten el proyecto tengan un usuario con el que empezar. El endpoint del registro si está implementado, enviando email en el body, a /user/createUser (POST), y la contraseña la envía automáticamente al email enviado (por si quereis probar por postman)
  User.create({
    email: "user@hotmail.com",
    password:
      "fde131b9b282936f0f6fe3a38b1416ebb2c9ac7b59109b218444e26bb99ced0e437baa74d222d5e75b56d5262988066355804b517b5f8dd0b28062bdf3366ca6",
  })
    .then((c) => console.log("userCreate OK"))
    .catch((error) => console.log(error));
}
