const pokemon = require('./data')


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
game.difficulty = "hard"
console.log(game);

// //Exercise 4
game.party.push(pokemon[7]);
console.log(game)

// //Exercise 5
game.party.push(pokemon[10], pokemon[44], pokemon[80]);
console.log(game)

////Exercise 6
game.gyms.forEach((e)=>{
  if(e.difficulty < 3){
   return e.completed = true
  }
})
console.log('Exercise 6:',game)

////Solve Exercise 7 here:

game.party.splice(0, 1, pokemon[7]);
console.log(game.party)


// Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.

game.party.forEach((name)=>{
 console.log(name);
})

// // Exercise 9

pokemon.forEach((star)=>{
  if(star.starter === true)
    console.log(pokemon.name)
})

//// Exercise 10

game.catchPokemon = {}

game.party.pokemonObj = {}

game.party.pokemonObj = pokemon[101]

//console.log(game.party)

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?



Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


////Solve Exercise 12 here:

game.gyms.forEach((e)=>{
  if(e.difficulty < 6){
   return e.completed = true
  }
})
//console.log(game)


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/



////Solve Exercise 14 here:

let pC = game.party.length
game.partyCount = pC

//console.log(game)

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/





//DONT DO "REQUIRES"
