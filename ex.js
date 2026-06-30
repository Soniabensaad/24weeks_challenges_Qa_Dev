const customers = [
  "john@test.com",
  "anna@test.com",
  "john@test.com"
];
const mySet = new Set(customers)
console.log(mySet)

const products = [
  { name: "Laptop" },
  { name: "Mouse" },
  { name: "Keyboard" }
];
let uppercaseProduct = []
for (let i=0; i<products.length; i++){
    uppercaseProduct.push((products[i].name).toUpperCase())
}

console.log(uppercaseProduct)

const customers1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];
const idName = customers1.filter(e=>e.id===2)
console.log(idName)

const employees = [
  { name: "John", age: 35 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 30 }
];
employees.sort((a, b) => a.age - b.age);

console.log(employees);

[1001, 1002, 1003, 1001, 1004, 1002]
