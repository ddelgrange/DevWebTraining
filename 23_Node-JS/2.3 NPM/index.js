//Utilisation de Common JS CJS  necessite l'utilisation du mot require
//var generateName = require('sillyname');

//utilisation ECMA avec le mot import
//import generateName from "sillyname";
//var sillyName = generateName();
//console.log("My name is ${sillyName}.");
//console.log('My name is '+sillyName+'.');

import superheroes, { randomSuperhero } from "superheroes";
const myName = randomSuperhero();
console.log("I'm "+myName+"!");