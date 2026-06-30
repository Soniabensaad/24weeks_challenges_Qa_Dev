const prompt = require("prompt-sync")();


let nr = 2;
console.log(nr++);
console.log(nr);

let nr1 = 2;
console.log(++nr1);

let nr111 = 4;
let nr222 = 5;
let nr333 = 2;
console.log(nr111++ + ++nr222 * nr333++);

let a = Number(prompt("enter a", "90"));
let b = Number(prompt("enter b", "90"));
let c = Number(prompt("enter c", "70"));

let tr1 = a**2 + b**2;
let tr2 = c**2;

let result;

if (tr1 === tr2) {
    result = "yes";
} else {
    result = "no";
}

console.log(result);
