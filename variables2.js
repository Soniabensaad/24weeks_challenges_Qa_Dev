let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
console.log(sym1)
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);


let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr1 = null;
nullToNr1 = Number(nullToNr1);
console.log("null", nullToNr1, typeof nullToNr1);
let strToNr2 = "";
strToNr2 = Number(strToNr2);
console.log("empty string", strToNr2, typeof strToNr2);

let strToNr3= "hello";
strToNr3 = Number(strToNr3);
console.log(strToNr3, typeof strToNr3);
