const customers = [
  { id: 1, name: "John Doe", city: "Tunis", active: true },
  { id: 2, name: "Jane Smith", city: "Sfax", active: false },
  { id: 3, name: "Bob Brown", city: "Tunis", active: true }
];

const products = [
  { id: 1, name: "Laptop", price: 3000, category: "IT" },
  { id: 2, name: "Mouse", price: 50, category: "IT" },
  { id: 3, name: "Desk", price: 400, category: "Furniture" }
];

const orders = [
  { id: 1, customerId: 1, productId: 1, quantity: 2 },
  { id: 2, customerId: 2, productId: 2, quantity: 5 },
  { id: 3, customerId: 1, productId: 3, quantity: 1 }
];

//Display all customer names.
console.log(customers.map(n=>n.name))
//Display all product names in uppercase.
console.log(products.map(n => n.name[0].toUpperCase() + n.name.slice(1)))
//Count the number of customers.
console.log(customers.length)
//Count the number of products.
console.log(products.length)
//Return only active customers.
console.log(customers.filter( n => n.active === true) )
//Return only inactive customers.
console.log(customers.filter( n => n.active === false) )
//Find a customer named "John Doe".
console.log(customers.find(n=>n.name === "John Doe"))
//Find the most expensive product.
let expensive = products[0]
for(let i=0; i<products.length; i++){
    if(products[i].price > expensive.price){
        expensive = products[i]
    }
}
console.log(expensive)

//Find the cheapest product.

let cheapest = products[0]
for(let i=0; i<products.length; i++){
    if(products[i].price < cheapest.price){
        cheapest = products[i]
    }
}
console.log(cheapest)
//Calculate the sum of all product prices.

let c=0
for(let i=0; i<products.length; i++){
    c+=products[i].price
}
console.log(c)

//Return all customers whose name starts with "J".
let namedStarted = []
for(let i=0; i<customers.length; i++){
   if(customers[i].name && (customers[i].name).startsWith("J")){
    namedStarted.push(customers[i].name)
   }
}
console.log(namedStarted)
//Count how many times the letter "a" appears in all product names.
let count 
count= products.filter(c=>c.name?.includes("a"))
console.log(count.length)

//Find the longest customer name.
let count1 = (customers[0].name)
for(let i=1; i<customers.length; i++){
if( customers[i].name && count1.length< (customers[i].name).length){

count1 = (customers[i]).name
}
}
console.log(count1.length)
//Create customer usernames.
let nameWspace = customers[0].name
 let username  = nameWspace.replace(/\s+/g, "").toLowerCase()
console.log(username)

//Create customer initials.

// Create customer initials.
let nameWspace1 = customers[0].name;
let usernamearray = nameWspace1.split(" ");
console.log(usernamearray)

// 1. Create an empty array to store the initials
let initials = []; 

for (let i = 0; i < usernamearray.length; i++) {
    let currentWord = usernamearray[i];
    
    // 2. Grab the first letter, uppercase it, and push it to the array
    initials.push(currentWord[0].toUpperCase()); 
    console.log(initials)
}

// 3. Join the initials array into a single string
let final = initials.join(""); 

console.log(final); // Example output: "JD" (for "John Doe")

//Sort customer names alphabetically.
// Sort customer names alphabetically.
let alpha = [];

// 1. Collect all the full names into the array
for(let i = 0; i < customers.length; i++){
    alpha.push(customers[i].name);
}

// 2. Sort the array of names alphabetically
alpha.sort();

// 3. Join them with a comma or space so they are readable
let alphabetic = alpha.join(", ");

console.log(alphabetic); // Example: "Alex, Bob, Charlie, John"

//Sort product names by length.


let nameLengths = [];

for(let i = 0; i < products.length; i++){
    let lent = products[i].name.length;
    // 2. Push each number into the array
    nameLengths.push(lent);
}

// 3. Sort the numbers (using a compare function)
nameLengths.sort((a, b) => a - b);

console.log(nameLengths);

//Count customers per city.
for(let i = 0; i < customers.length; i++) {
    // 1. Grab the city name of the current customer using square brackets []
    let currentCity = customers[i].city;
    
    // 2. If the city doesn't exist in our object yet, initialize it at 0
    if (count[currentCity] === undefined) {
        count[currentCity] = 0;
    }
    
    // 3. Increment the counter for this specific city
    count[currentCity]++;
}

console.log(count); 
// Example output: { "New York": 3, "Paris": 1, "Tokyo": 2 }
