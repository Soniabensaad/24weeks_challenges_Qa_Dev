const employees = [
  { id: 1, name: "John", active: true },
  { id: 2, name: "Anna", active: false },
  { id: 3, name: "Mike", active: true }
];
let getActiveEmployee=employees.filter(employee=>employee.active)
let nameActiv = []
for(let i=0; i< getActiveEmployee.length; i++){
    
    nameActiv.push(getActiveEmployee[i].name)
}
console.log(nameActiv)

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
];
let nameProduct = products.map(e=>e.name)
console.log(nameProduct)

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Anna Smith" }
];
let customerName = customers.map(n=>n.name)
console.log(customerName)
let first = customerName[0]
console.log(first)
let sliceName = first.slice(0,5)
console.log(sliceName)

const categories = ["it", "office", "services"];
let stringui = categories.join(""); 
console.log(stringui); // "itofficeservices"

// .join(", ") ajoute une virgule et un espace entre chaque mot
let stringuiAlternative = categories.join(", "); 
console.log(stringuiAlternative); 
let upperString = stringuiAlternative.toUpperCase()
console.log(upperString)


const invoice = {
  lines: [
    { qty: 2, price: 100 },
    { qty: 5, price: 10 }
  ]
};

let count = 0;

for (let i = 0; i < (invoice.lines).length; i++) {
    // 1. On va chercher le tableau dans invoice -> invoice.lines
    // 2. On prend l'élément à l'index actuel -> [i]
    // 3. On accède à sa propriété -> .qty
    count += invoice.lines[i].qty; 
}

console.log(count); // Résultat : 7

const tickets = [
  { id: 1, status: "open" },
  { id: 2, status: "closed" },
  { id: 3, status: "open" }
];
let count1 = {};

for (let i = 0; i < tickets.length; i++) {
    let statusTicket = tickets[i].status;
    
    // 2. Si le statut n'existe pas encore dans l'objet, on le crée à 0
    if (count1[statusTicket] === undefined) {
        count1[statusTicket] = 0;
    }
    
    // 3. On incrémente la propriété textuelle de l'objet
    count1[statusTicket]++;
}

console.log(count1); 
