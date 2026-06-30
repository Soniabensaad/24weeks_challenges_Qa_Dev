let company = { companyName: "Healthy Candy",//object in object
 activity: "food manufacturing",
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };
company.address.zipcode = "33117";
company["address"]["number"] = "100";
console.log(company)

company = { companyName: "Healthy Candy",//array in objects
 activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };
 let activity = company.activities[1];
 console.log(activity)

 company = { companyName: "Healthy Candy",//object in arrays in objects
 activities: [ "food manufacturing",
"improving kids' health", "manufacturing toys"],
 address: [{
 street: "2nd street",
number: "123",
 zipcode: "33116",
city: "Miami",
state: "Florida"
 },
 {
 street: "1st West avenue",
 number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
 }],
 yearOfEstablishment: 2021
 };
let streetName = company.address[0].street
console.log(streetName)

let test = {
    name:"test",
    friends: [
        {firstName: "Ali", lastName: "hoover", id: 11},
        {firstName: "Ahmed", lastName: "smith", id: 12},
        {firstName: "Maria", lastName: "johnson", id: 13}
    ]
}
console.log(test)
console.log(test.friends[0].lastName)

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.pop()
theList.shift()
theList.unshift('FIRST')
theList.splice(5,0,'hello World')
theList.splice(2,3)
theList.splice(3)
theList.splice(2,0,'MIDDLE')
theList.push('LAST')
console.log(theList)


let store = [[
    {name:"apple",model: 1998, price: 0.5, quantity: 30},
    {name:"banana",model: 2000, price: 0.3, quantity: 100},
    {name:"orange",model: 2005, price: 0.8, quantity: 50}
], [
    {name:"apple",model: 1998, price: 0.5, quantity: 30},
    {name:"banana",model: 2000, price: 0.3, quantity: 100},
    {name:"orange",model: 2005, price: 0.8, quantity: 50}
], [
    {name:"apple",model: 1998, price: 0.1, quantity: 30},
    {name:"banana",model: 2000, price: 0.3, quantity: 100},
    {name:"orange",model: 2005, price: 0.8, quantity: 50}
], [
    {name:"apple",model: 1998, price: 0.6, quantity: 30},
    {name:"banana",model: 2000, price: 0.3, quantity: 100},
    {name:"orange",model: 2005, price: 0.8, quantity: 50}
]]
let result = store[3][0].price
console.log(result)

const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
myArr1[2] = 4
console.log(myArr1)

const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2])

const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
 96
