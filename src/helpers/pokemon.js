import { typeEffectChart } from "./efectivity.js";

// Starting from a pokemon, and a property, I extract that property from that pokemon
export const findOneProperty = (pokemon, property) => {
  return pokemon?.stats?.find((stat) => stat?.stat?.name === property)
    ?.base_stat;
};

// From a complete pokemon, I create a pokemon with the data of interest.
export const createPokemon = (pokemon) => {
  const firstHP = findOneProperty(pokemon, "hp");
  const baseAttack = findOneProperty(pokemon, "attack");
  const baseDefense = findOneProperty(pokemon, "defense");
  const baseSpecialAttack = findOneProperty(pokemon, "special-attack");
  const baseSpecialDefense = findOneProperty(pokemon, "special-defense");
  const baseSpeed = findOneProperty(pokemon, "speed");
  const moves = pokemon.moves.map((move) => move?.move?.name).slice(0, 4);
  //   I can't find the level inside a pokemon, according to what I'm reading this is calculated based on the experience
  //   that the pokemon is having, but for that I would need to persist the pokemon info, and increase the experience in the
  //   game, so for lack of time, for the moment I put level 1 to all of them.
  const level = 1;

  return {
    level,
    name: pokemon?.name,
    type: pokemon?.types[0]?.type?.name,
    currentHP: firstHP,
    totalHP: firstHP,
    baseAttack,
    baseDefense,
    baseSpecialAttack,
    baseSpecialDefense,
    baseSpeed,
    moves,
  };
};

export const determineDamageDealt = (
  attackerPokemon,
  moveType,
  defenderPokemon
) => {
  const { baseAttack, moves, type: attackType, level } = attackerPokemon;
  const { baseDefense, type: defenderType } = defenderPokemon;

  const efficiency = calculateAttackEfficiency(attackType, defenderType);

  if (efficiency === 0) {
    return 0; // No damage is inflicted if the efficiency is 0
  }
  const randomNum = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
  const movePower = moves.find((move) => move.name === moveType)?.power || 1;

  return (
    ((((2 * level) / 5 + 2) * baseAttack * movePower) / baseDefense / 50) *
    efficiency *
    (randomNum / 100)
  );
};

const calculateAttackEfficiency = (attackType, defenderType) => {
  if (
    typeEffectChart.hasOwnProperty(attackType) &&
    typeEffectChart[attackType].hasOwnProperty(defenderType)
  ) {
    return typeEffectChart[attackType][defenderType];
  } else {
    return 1; // If no specific efficiency is found, normal damage is assumed (1).
  }
};
