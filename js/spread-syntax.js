const pikachu = {name: 'Pikachu'};
const stats = {hp:40, attack: 60, defense: 45};

//bad object code
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

//or

const lv10 = Object.assign(pikachu, stats);
const lv11 = Object.assign(pikachu, {hp: 75});
console.log(lv10);  
console.log(lv11);

//good code
const lv12  = { ...pikachu, ...stats}
const lv13  = { ...pikachu, hp: 45}



let pokemon = ['Arbok', 'Raichu', 'Sandshew'];
let pokemon2 = ['Arbok', 'Raichu', 'Sandshew'];

//bad array code
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');

//good array code

//push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

//unshift
pokemon2 = ['Bulbasaur', ...pokemon2, 'Metapod', 'Weedle', ];

console.log(pokemon2)