const pokemon = require("./data");

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

// //Exercise 3
game.difficulty = "hard";
console.log("Exercise 3:", game);

// //Exercise 4
game.party.push(pokemon[7]);
console.log("Exercise 4:", game.party);

// //Exercise 5
game.party.push(pokemon[10], pokemon[44], pokemon[80]);
console.log("Exercise 5:", game.party);

////Exercise 6
game.gyms.forEach((e) => {
  if (e.difficulty < 3) {
    return (e.completed = true);
  }
});
console.log("Exercise 6:", game.gyms);

////Solve Exercise 7 here:

game.party.splice(0, 1, pokemon[7]);
console.log("Exercise 7:", game.party);

//// Exercise 8

for (let i = 0; i < game.party.length; i++) {
  console.log("Exercise 8:", game.party[i].name);
}

// // Exercise 9

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter) {
    console.log("Excercise 9:", pokemon[i]);
  }
}

//// Exercise 10

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};

game.catchPokemon(pokemon[101]);

console.log("Exercise 10;", game.party);


let zed = game.items[1]

for (let i = 0; i < game.party.length; i++) {
  if (game.catchPokemon === true) {
    return (zed[1] -1);
  }
}

console.log("Exercise 11:", game.items)


////Solve Exercise 12 here:

game.gyms.forEach((e) => {
  if (e.difficulty < 6) {
    return (e.completed = true);
  }
});
//console.log("Exercise 12:", game.gyms);

//// Exercise 13

game.gymTally = { complete: 0, incomplete: 0 };


game.gyms.forEach((f) => {
  if (f.completed === true) {
    return (game.gymTally.complete +=1);
  } else if (game.gymTally.incomplete +=1);
});

//console.log("Exercise 13:", game.gymTally);

////Solve Exercise 14 here:

game.partyCount = game.party.length;

//console.log("Excercise 14:", game.partyCount);

//// Exercise 15

game.gyms.forEach((e) => {
  if (e.difficulty < 8) {
    return (e.completed = true);
  }
});
//console.log("Exercise 15:" ,game.gyms);

//console.log("Excercise 16:" ,(game))
