let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays)
let value1 = arrOfArrays[0][1];//value at index1 of 1st array
console.log(value1)
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let value2 = arrOfArrays[2][2];
console.log(value2)
arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays)
let middleValue = arrOfArraysOfArrays[1][1][1]//value at index 1 of the second array of the 2 nd array of arrays
console.log(middleValue)

let arr5 = [1, 2, 3]
let arr = [arr5, arr5, arr5]
console.log(arr)
let value3 = arr[0][2]
console.log(value3)
let value4 = arr[1][1]
console.log(value4)
let value5 = arr[2][0]
console.log(value5)

//ex6
let arr4 = [1,2,3,5,6]
let arr3 = Array.from({length: Math.max(...arr4)}, (_,i) => i+1)
console.log(arr3)

let by = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 20 },
  { name: "John", age: 25 }
];

// Remplacement de "gens" par "by"
let res = Object.groupBy(by, (gen) => gen.age);

console.log(res);
