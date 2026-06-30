/*
Exercise 1: Flight Passenger Manifest Validator
Background
You are building an airport check-in system. You need to validate passenger boarding data, normalize flight codes, and calculate baggage fees.

Object Specification
Each passenger object will have the following properties:

ticketId: A positive integer.

passengerName: A non-empty string (after trimming whitespace).

flightCode: A string representing the flight. It must be case-insensitive but normalized later.

baggageWeight: A positive number representing the weight of luggage.

classType: A string that must strictly be either "economy", "business", or "first".

User Stories
Implement normalizeFlightData(passenger)

Must not mutate the original object; return a new copy.

Convert flightCode entirely to uppercase.

If classType is "economy" and baggageWeight is greater than 23, add a new property to the returned object: excessBagFee: 50. Otherwise, set excessBagFee: 0.

Implement validatePassenger(passenger)

Must not mutate the original object.

If valid, return {}.

If properties are missing, flag them as "Missing". If properties fail rules (e.g., negative weight, empty name, or invalid class), flag them as "Invalid".

Implement processPassenger(passenger)

If valid, make two console.log calls:

"Check-in success: [ticketId]"

"Bag Fee: $[excessBagFee]" (Use normalizeFlightData for this).

If invalid, make two console.log calls:

"Check-in error: [ticketId]"

Log the error object returned from validatePassenger.

*/
const passenger = {
  ticketId: 102,
  passengerName: "  Ahmed  Ali  ",
  flightCode: "bai456",
  baggageWeight: 26,
  classType: "economy"
};
function normalizeFlightData(passenger){
    const copy = { ...passenger}
    copy.passengerName=copy.passengerName.trim()
    copy.flightCode = copy.flightCode.toUpperCase();
    if((copy.classType === 'economy') && (copy.baggageWeight>23)){
        copy.excessBagFee = 50
        
    }else{
         copy.excessBagFee = 0
    }
    return copy

}
function validatePassenger(passenger){
    const errors = {};

  // containerId Validation
  if (!("ticketId" in passenger)) {
    errors.ticketId = "Missing";
  } else if (typeof manifest.ticketId !== "number" || !Number.isInteger(passenger.ticketId) || passenger.ticketId <= 0) {
    errors.ticketId = "Invalid";
  }

  // destination Validation
  if (!("passengerName" in passenger)) {
    errors.passengerName = "Missing";
  } else if (typeof passenger.passengerName!== "string" || passenger.passengerName.trim() === "") {
    errors.passengerName = "Invalid";
  }

  // weight Validation
  if (!("baggageWeight" in passenger)) {
    errors.baggageWeight = "Missing";
  } else if (typeof passenger.baggageWeight!== "number" || Number.isNaN(passenger.baggageWeight) || passenger.baggageWeight <= 0) {
    errors.baggageWeight = "Invalid";
  }

  // unit Validation
  if (!("classType" in passenger)) {
    errors.classType = "Missing";
  } else if (passenger.classType !== "economy" && passenger.classType !== "business" && passenger.classType !== "first") {
    errors.classType= "Invalid";
  }

  // hazmat Validation
  
  return errors;
}

function processPassenger(passenger){
    const errors = validatePassenger(passenger);
    if(Object.keys(errors).length===0){
        console.log((`Check-in success: ${passenger.ticketId}`))
        const cleanPassenger = normalizeFlightData(passenger);
        console.log(`Bag Fee: $${cleanPassenger.excessBagFee}`)

    }
    console.log(errors)
}

console.log(normalizeFlightData(passenger))
