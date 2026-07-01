const input = document.getElementById("inputMin")
const convert = document.getElementById("btnConvert")
const result = document.getElementById("minTohours")
convert.addEventListener("click" , function(){
const numbertoAdd =input.value 
const hours = Math.trunc(numbertoAdd / 60)
const minutes = numbertoAdd % 60
result.textContent= `${hours}h ${minutes}min`
})
