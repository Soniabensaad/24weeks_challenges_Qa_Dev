let str = "Hello How are you man";
let array = str.split('')
let c = 0
const rs = array.map((a, index) => {
    c++;
    return c;
})
console.log(rs)


