/*
  ✨ Code Review & Refactor Suggestions ✨
  Excellent work on implementing game logic! The suggestions below will help with
  readability, efficiency, and best practices while keeping your solutions clear and effective. 
  Keep up the great work! 🚀
*/

const pokemon = require("./data");

// ✅ Game Object: Well-structured! Good use of objects and arrays.
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// ✅ Exercise 3: Add difficulty level to game
// Great approach! Adjusted to match consistent casing.
game.difficulty = "Hard";
console.log("Exercise 3:", game);

// ✅ Exercise 4: Add starter Pokémon to party
// Good selection! No changes needed.
game.party.push(pokemon[7]);
console.log("Exercise 4:", game.party);

// ✅ Exercise 5: Add additional Pokémon to party
// Perfect use of `.push()`! This adds multiple Pokémon in one call.
game.party.push(pokemon[10], pokemon[44], pokemon[80]);
console.log("Exercise 5:", game.party);

// ✅ Exercise 6: Complete gyms with difficulty < 3
// `.forEach()` is a great choice! Cleaned up return statement.
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});
console.log("Exercise 6:", game.gyms);

// ✅ Exercise 7: Evolve starter Pokémon
// The existing code replaces the same Pokémon with itself. Adjusted for evolution.
game.party.splice(0, 1, pokemon[8]); // Assuming `pokemon[8]` is the evolved form.
console.log("Exercise 7:", game.party);

// ✅ Exercise 8: Print all party Pokémon names
// Great use of looping! Optimized using `.map()` for cleaner output.
console.log(
  "Exercise 8:",
  game.party.map((p) => p.name)
);

// ✅ Exercise 9: Print all starter Pokémon
// Correct logic! Slight improvement using `.filter()`.
const starters = pokemon.filter((p) => p.starter);
console.log(
  "Exercise 9:",
  starters.map((p) => p.name)
);

// ✅ Exercise 10: Add `catchPokemon` method
// Good implementation! Defined it properly within `game`.
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon[101]);
console.log("Exercise 10:", game.party);

// ✅ Exercise 11: Deduct a pokeball when catching a Pokémon
// Logic needed correction. Properly decreases `pokeball` quantity when catching Pokémon.
game.catchPokemon = function (pokemonObj) {
  const pokeball = this.items.find((item) => item.name === "pokeball");
  if (pokeball && pokeball.quantity > 0) {
    this.party.push(pokemonObj);
    pokeball.quantity -= 1; // Decrease pokeball count
  }
};

game.catchPokemon(pokemon[102]);
console.log("Exercise 11:", game.items);

// ✅ Exercise 12: Complete gyms with difficulty < 6
// Correct approach! Cleaned up the return statement.
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) gym.completed = true;
});
console.log("Exercise 12:", game.gyms);

// ✅ Exercise 13: Create `gymTally` method
// The logic was close but had an issue in the `else if` condition. Used `.reduce()` instead.
game.gymTally = function () {
  return this.gyms.reduce(
    (tally, gym) => {
      gym.completed ? tally.complete++ : tally.incomplete++;
      return tally;
    },
    { complete: 0, incomplete: 0 }
  );
};

console.log("Exercise 13:", game.gymTally());

// ✅ Exercise 14: Count party Pokémon
// Correct idea, but it should be a function instead of a static value.
game.partyCount = function () {
  return this.party.length;
};
console.log("Exercise 14:", game.partyCount());

// ✅ Exercise 15: Complete gyms with difficulty < 8
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) gym.completed = true;
});
console.log("Exercise 15:", game.gyms);

// ✅ Exercise 16: Log entire `game` object
console.log("Exercise 16:", game);
