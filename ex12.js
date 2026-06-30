const names = ["  Alice ", "Bob  ", "  Charlie"];
let newA = names.map(e=>e.trim())
console.log(newA)

const numbers = [10, 3, 25, 8, 100, 1];
let fil10= numbers.filter(num=> num>10)
console.log(fil10)

const words = ["js", "html", "css"];
let up = words.map(w=>w.toUpperCase())
console.log(up)

const sentence = "hello world from javascript";
let spliti = sentence.split(" ")
console.log(spliti)

const nums = [1, 2, 3, 4, 6, 8, 9];
const somme = nums.reduce((acc, curr) => curr %2 !==0 ? acc+ curr:acc, 0);
console.log(somme)
