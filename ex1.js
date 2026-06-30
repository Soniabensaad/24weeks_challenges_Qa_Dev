let sentence ="Hello world"


let test = sentence
.split(' ') // split string in array  ["hello", "world"]
.map(f => f .split('').reverse().join('') //split('') in array of charactere["h". "e". "l". "l". "o"]
    
)
console.log(test)

// ex2
let ex = ["apple", "banana", "apple", "orange", "banana", "apple"]
let count = {}

ex.forEach (f => { count [f] = (count[f] || 0) + 1} )
console.log(count)

//ex3
let c = [1, 2, 3, 2, 4, 1, 5];

//let unique = new Set(c) we can'( use map filter reduce )
let d = [...new Set(c)] // we can use map filter reduce
console.log(d)

//ex4
let a = [10, 5, 8, 20, 15];

let max = a[0];

for (let i = 0; i < a.length; i++) {

    if (a[i] > max) {
        max = a[i];
    }

    let min = [];

    if (a[i] < max) {
        min.push(a[i]);
    }

    let maxmin = min[0];

    for (let j = 0; j < min.length - 1; j++) {
        if (min[j] < min[j + 1]) {
            maxmin = min[j];
        }
    }

    if (maxmin < max) {
        max = maxmin;
    }
}

console.log(max);
 // ex5
let p = "madam"
let ispalindrome= p
.split("").reverse().join('')
console.log(ispalindrome === p)

//ex6
let t = "javascript is awesome"
let result = t.split(' ')

console.log(result.map(f => f[0].toUpperCase() + f.slice(1)).join(' '))
// flat array
let ab = [1,2,[3,4],[5,6]]
let flatt = ab.flat()
console.log(flatt)

//sum
let g = [
  {name: "phone", price: 500},
  {name: "case", price: 20},
  {name: "charger", price: 30}
]
let sum = 0
g.forEach(element => {sum+=element.price});
console.log(sum);

