const informations = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I am a ${informations.name} from ${informations.campus} Campus`,
    e: "oO",
    T: "U ",
}));