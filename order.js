/*
Exercise 3: E-Commerce Digital Order ProcessorBackgroundAn online storefront processes digital gift card purchases. Before capturing payment, the payload must be scrubbed, currencies checked, and fraud indicators flagged.Object SpecificationEach order object will have the following properties:orderId: A positive integer.email: A non-empty string that contains an @ character.amount: A positive number representing purchase value.currency: A string indicating currency, either "USD" or "EUR".isGift: A strict boolean value.User StoriesImplement normalizeCurrency(order)Must not mutate the original object; return a new copy.Assume a flat conversion exchange rate of 1 EUR = 1.10 USD.If currency is "EUR", convert the amount property to USD ($amount \times 1.10$) and change currency to "USD".Implement validateOrder(order)Must not mutate the original object.If valid, return {}.Missing properties get tagged "Missing".Invalid properties (e.g. amount $\le 0$, an email lacking an "@", or an invalid currency type) get tagged "Invalid".Implement processOrder(order)If valid, make two console.log calls:"Order [orderId] approved""Final settlement: $[amount] USD" (using the normalized object).If invalid, make two console.log calls:"Order [orderId] rejected"Log the error object.
 */
const order = {
  orderId: 501,
  email: "sonia@example.com",
  amount: 149.99,
  currency: "EUR",
  isGift: true
};
function normalizeCurrency(order){
    const newcopy = { ...order}
    if(newcopy.currency === "EUR"){
        newcopy.amount = newcopy.amount * 1.10
        newcopy.currency = "USD"
    }
    return newcopy
}
function validateOrder(order){
    const errors = {};

  if (!("orderId" in order)) {
    errors.orderId = "Missing";
  } else if (typeof order.orderId !== "number" || !Number.isInteger(order.orderId) || order.orderId <= 0) {
    errors.orderId = "Invalid";
  }

  if (!("email" in order)) {
    errors.email = "Missing";
  } else if (typeof order.email!== "string" || !(order.email.includes("@"))) {
    errors.email = "Invalid";
  }

  if (!("amount" in order)) {
    errors.amount = "Missing";
  } else if (typeof order.amount!== "number" || Number.isNaN(order.amount) || order.amount <= 0) {
    errors.amount = "Invalid";
  }

  if (!("currency" in order)) {
    errors.currency = "Missing";
  } else if (order.currency !== "USD" && order.currency !== "EUR") {
    errors.currency= "Invalid";
  }
if (!("isGift" in order)) {
    errors.isGift = "Missing";
  } else if (typeof order.isGift !== "boolean") {
    errors.isGift = "Invalid";
  }
  
  
  return errors;
}

function processOrder(order){
const errors1 =  validateOrder(order)
 if(Object.keys(errors1).length===0){
console.log(`Order ${order.orderId} approved`)
const normalized = normalizeCurrency(order)
console.log(`Final settlement: ${normalized.order} USD`)
 }else{
    console.log(`Order ${normalized.order} rejected`)
 }
 console.log(errors1)
}
processOrder(order);
