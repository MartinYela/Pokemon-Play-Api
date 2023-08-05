import express from "express";
import { calculateDamageCtrl, getPokemonCtrl } from "./pokemon.controller.js";

const router = express.Router();

router.route("/getPokemon/:pokemon").get(getPokemonCtrl);
router.route("/calculateDamage").post(calculateDamageCtrl);

export default router;
