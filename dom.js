/* /* const users = [
  { id: 1, name: "Sonia Ben Saad", city: "Tunis" },
  { id: 2, name: "John Smith", city: "London" },
  { id: 3, name: "Sara Ali", city: "Tunis" }
];
let fromTunis =  users.filter(item => item.city === "Tunis")
console.log(fromTunis)

let onlyNames = users.map(n =>n.name)
console.log(onlyNames)

let oneId = users.find(i =>i.id === 2)
console.log(oneId)

let uppeCase = users.map(names=>(names.name).toUpperCase())
console.log(upperCase)

const sortAlpha = [...users]
  .sort((a, b) => a.name.localeCompare(b.name)) // 1. On trie les objets par nom
  .map(user => user.name);
 */


/* const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 80 }
];
let productOver =  products.filter(prix => prix.price > 50)
console.log(productOver)
let sumCounter = products.reduce((acc, curr) => {
  return acc + curr.price; // Correction ici : acc est le nombre, curr est l'objet
}, 0);

console.log(sumCounter)
console.log((products.map(e=>e.name)))
// Option : Si vous voulez extraire les prix, puis les trier
console.log(products.map(r => r.price).sort((a, b) => a - b));
// Résultat : [30, 80, 1200]
console.log(products.filter(t =>  Math.min(t.price)))
 */
 

