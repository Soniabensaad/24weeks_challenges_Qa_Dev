let Name: string = "Tessy"
let age : number= 25
let isStudent : string='true'
let isStudent2: boolean=true

let result : string = Name.concat(age.toString(), isStudent)
let result2 : string = Name.concat(age.toString(), isStudent2.toString())
console.log(result)
console.log(result2)


let temp:number= 20
function celsiusToFahrenheit(params:number) {
    return (temp * 9 / 5) +32
}
let res = celsiusToFahrenheit(temp)
console.log(res)
console.log(`${temp}°C is equal to ${res}°F`)
