// const superheroes = require('superheroes');
 
import superheroes from 'superheroes'

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'

console.log(`I am a Superhero. My name is ${superheroes.random()}`)