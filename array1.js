let test = ["Milk", "Bread", "Apples"];
let testLength= test.length
console.log(testLength)
test[1] = 'Bananas'
console.log(test)

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");//add in the end of array
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits)

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon", "test"];
arrOfShapes.splice(2, 2, "square", "trapezoid");//start at index 2 remove 2elts and replace by square ..
console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
arr8.pop();//remove last elt
console.log(arr8)
arr8.shift();// remove first 
console.log(arr8)
arr8.splice(1, 3);//remove 3 elts from index 1
console.log(arr8)
delete arr8[0];
console.log(arr8)

arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6}); //function to find 6
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
let findIndex = arr8.indexOf(6);//index of 6 in arr
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
let findIndex3 = arr8.indexOf(6, 2); //index of 6 starting from index2
console.log(findIndex3)

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog)

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.reverse();//reverse the order of names
console.log(names)
names.sort();//sort in alphabetic order
console.log(names)

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages)
names.reverse();//reverse the order of names
console.log(names)

let shop = new Array()
console.log(shop)
shop.push("Milk", "Bread", "Apples")
console.log(shop)
shop.splice(1, 1, "Bananas", "eggs")
console.log(shop)
shop.pop()
console.log(shop)
shop.sort()
console.log(shop)
let bananasIndex = shop.findIndex(function(d) { return d === "Bananas" })
console.log(bananasIndex)
shop.splice(1, 0, "Carrots", "Lettuce")
console.log(shop)
let fruits = ["Juice", "Pop"]
shop= shop.concat(fruits)
console.log(shop)
shop = fruits.concat(shop)
console.log(shop)
let popIndex = shop.lastIndexOf("Pop")
console.log(popIndex)
shop.shift()
shop.shift()
console.log(shop)
