// setTimeout

// console.log('1');

// setTimeout(() => {
//   console.log('Hola');
// }, 1000);

// console.log('Adios');

// const colors = ['red', 'yellow', 'green', 'blue'];
// const saveColors = [];
// const INDEX = 3;

// const playGame = () => {
//   for (let i = 1; i < INDEX; i++) {
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     setTimeout(() => {
//       console.log(color);
//       saveColors.push(color);
//       setTimeout(() => {
//         console.clear();
//       }, 500);
//     }, 1000 * i);
//     console.log('Index', i)
//   }
// };

// playGame();

// setTimeout(() => {
//   console.log('Primer console.log')
// }, 1000);

// setTimeout(() => {
//   console.log('Segundo console.log')
// }, 2000);

// console.log('TEst Clear');

// console.clear();

// setInterval

// setInterval(() => {
//   console.log('Me repito más que ajo');
// }, 1000)

// let time = 6;

// const id = setInterval(() => {
//   console.log(`Time: ${time}seg`);
//   time--;
//   if (time === 0) {
//     clearInterval(id);
//   }
// }, 1000); // ms

// Promise 🤯

// new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log('Pizza time!');
//     resolve();
//   }, 5000);
//   setTimeout(() => {
//     reject();
//   }, 2000);

// }).then(() => {
//   console.log('¿Con piña?');
// }).catch(() => {
//   console.log('Nos quedamos sin pizza');
// })

// const colors = ['red', 'yellow', 'green', 'blue'];
// const saveColors = [];

// const playGame = (res) => {
//   const numeroDeColoresQueVamosAMostrar = 5;
//   for (let i = 1; i < numeroDeColoresQueVamosAMostrar; i++) {
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     setTimeout(() => {
//       console.log(color);
//       saveColors.push(color);
//       setTimeout(() => {
//         console.clear();
//         if ((i === numeroDeColoresQueVamosAMostrar - 1)) {
//           res();
//         }
//       }, 500);
//     }, 1000 * i);
//     console.log('Index', i);
//   }
// };

// new Promise((res, rej) => {
//   playGame(res);
// }).then(() => {
//   console.log(saveColors);
// });

const array = [
  {
    name: 'pepe',
  },
  {
    name: 'luis',
  },
];

const array1 = [
  {
    name: 'luis',
  },
  {
    name: 'juan',
  },
];

const array3 = [];

array.forEach((element) => {
  const name = array1.find((element1) => {
    if (element1.name === element.name) {
      return true;
    } else {
      return false;
    }
  });
  if (name) {
    array3.push(name);
  }
});

console.log(array3);

fetch('https://pokeapi.co/api/v2/pokemon/3')
  .then((res) => {
    return res.json();
  })
  .then(async (pokemon) => {
    const pokemon1 = await (
      await fetch('https://pokeapi.co/api/v2/pokemon/1')
    ).json();
    return { pokemon, pokemon1 };
  })
  .then(({ pokemon, pokemon1 }) => {
    console.log(pokemon);
    console.log(pokemon1);
    const movesPokemon = [];
    pokemon.moves.forEach((element) => {
      const move = pokemon1.moves.find((element1) => {
        if (element1.move.name === element.move.name) {
          return true;
        } else {
          return false;
        }
      });
      if (move) {
        movesPokemon.push(move.move.name)
      }
    });
    console.log(movesPokemon);
  });


// .then((pokemon) => {
//   console.log(pokemon);
//   console.log(pokemon.name);

//   pokemon.abilities.forEach((element, index, array) => {
//     console.log(element.ability.name);
//   });

//   const pokemonAbilitiesIsHidden = pokemon.abilities.filter((element) => {
//     return element.is_hidden;
//   });
//   console.log(pokemonAbilitiesIsHidden);

//   const moveFiltered = pokemon.moves.filter((element) => {
//     if (element.move.name.length > 6) {
//       return true;
//     }
//     return false;
//   });
//   console.log(moveFiltered);

//   const movesName = moveFiltered.map((element) => {
//     return element.move.name;
//   });
//   console.log(movesName);

//   const finalOrVersion = pokemon.game_indices.reduce((acc, element, index, array) => {
//     const key = element.version.name;
//     acc[key] = element.game_index;
//     return acc;
//   }, {})

//   console.log(finalOrVersion);

//   // {
//   //   red: 153,
//   //   blue: 153,
//   //   ...
//   // }

//   // {
//   //   gameInde:'',
//   //   version: {
//   //     name: ''
//   //   }
//   // }
// });

console.log('Pokemon!');
