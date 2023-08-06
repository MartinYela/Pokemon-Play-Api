import express from "express";
import {
  calculateDamageCtrl,
  getPokemonCtrl,
  getRandomFivePokemons,
} from "./pokemon.controller.js";

const router = express.Router();

router.route("/getPokemon/:pokemon").get(getPokemonCtrl);
router.route("/getFiveRandomPokemons").get(getRandomFivePokemons);
router.route("/calculateDamage").post(calculateDamageCtrl);

export default router;
