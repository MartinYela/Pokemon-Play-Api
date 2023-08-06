import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DATABASE || "pokemons";
const username = process.env.USER || "root";
const password = process.env.PASSWORD || "1234";
const host = process.env.HOST || "localhost";

export const db = new Sequelize(database, username, password, {
  host: host,
  dialect: "mariadb",
  port: 3308,
  logging: false,
});

export default db;
