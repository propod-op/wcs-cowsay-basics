const info = require('./information.js');
const cowsay = require("cowsay");

const name = info.nom;
const campus = info.campus

console.log(info.informations);

console.log(cowsay.say({
    text : `Hello, I'm ${name} du campus '${campus}'`,
    e : "oO",
    T : "U "
}));