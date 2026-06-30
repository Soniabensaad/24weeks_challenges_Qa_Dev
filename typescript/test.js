var Name = "Tessy";
var age = 25;
var isStudent = 'true';
var isStudent2 = true;
var result = Name.concat(age.toString(), isStudent);
var result2 = Name.concat(age.toString(), isStudent2.toString());
console.log(result);
console.log(result2);
var temp = 20;
function celsiusToFahrenheit(params) {
    return (temp * 9 / 5) + 32;
}
var res = celsiusToFahrenheit(temp);
console.log(res);
console.log("".concat(temp, "\u00B0C is equal to ").concat(res, "\u00B0F"));
