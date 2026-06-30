let arr = [0, 1, 2];
console.log(typeof arr);
let dog = { dogName: "JavaScript",
 weight: 2.4,
 color: "brown",
 breed: "chihuahua",
 age: 3,
 burglarBiter: true
 };

let dogColor1 = dog["color"];
console.log(dogColor1)
let dogColor2 = dog.color
console.log(dogColor2)

dog["color"] = "blue";
dog.weight = 2.3;
dog["age"] = "three";
console.log(dog)
let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);
dog[variable] = "dachshund";
console.log(dog["breed"]);

let myCar = {
  carName: "Fird",
  year: 1998,
  color: "red",
  age: 17,
  toSell: true
};

console.log(myCar['color']); // red
console.log(myCar.color);    // red

let newtrust = myCar['color'];

newtrust = "blue";

console.log(newtrust);   // blue
console.log(myCar.color); // still red

// Change the object property
myCar.color = "blue";

console.log(myCar.color); // blue
console.log(myCar.color)

