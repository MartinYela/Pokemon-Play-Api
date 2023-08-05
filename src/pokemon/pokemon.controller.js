import pokeApi from "../config/pokeAPI.js";
import { createPokemon, determineDamageDealt } from "../helpers/pokemon.js";

export async function getPokemonCtrl(req, res) {
  try {
    const pokemon = req.params.pokemon;
    const { data, status } = await pokeApi.get(`/pokemon/${pokemon}`);
    if (status === 200) {
      const pokemonData = createPokemon(data);

      const movesWithPowers = await Promise.all(
        pokemonData?.moves?.map(async (move) => {
          const moveData = await getMoveData(move);
          return {
            name: move,
            power: moveData?.power || 0,
          };
        })
      );

      pokemonData.moves = movesWithPowers;

      res.status(201).json({
        pokemon: pokemonData,
      });
    } else {
      res.status(400).json({
        error: "Algo ha ido mal, revisa el nombre del Pokemon",
      });
    }
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}

async function getMoveData(moveName) {
  try {
    const { data } = await pokeApi.get(`/move/${moveName}`);
    return data;
  } catch (error) {
    console.error("Error fetching move data:", error);
    throw error;
  }
}

// Part 1:
// A method is required that, when a Pokémon is passed to you, the chosen move of the Pokémon and its
// its opponent returns the damage calculation.
export async function calculateDamageCtrl(req, res) {
  try {
    const { attackerPokemon, moveType, defenderPokemon } = req.body;

    const damageDealt = determineDamageDealt(
      attackerPokemon,
      moveType,
      defenderPokemon
    );

    res.status(200).json({
      damageDealt: damageDealt.toFixed(2),
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}
