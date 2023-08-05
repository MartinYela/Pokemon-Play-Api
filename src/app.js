import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { createTable } from "./server/server.js";
import { validateJWTAuth } from "./auth/auth.middleware.js";
import userRouter from "./user/user.router.js";
import authRouter from "./auth/auth.router.js";
import pokemonRouter from "./pokemon/pokemon.router.js";

createTable();
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/pokemon", validateJWTAuth, pokemonRouter);

app.use("/", (req, res) => res.json({ app: "App is working" }));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Server running on port " + port));
