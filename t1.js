//uppercase
const test = 'test your word test your mind';
const upper = test.toUpperCase()
console.log(upper)


//contains words

const test1 = 'test your word test your mind';
const pause = 't'
const rs = test1.includes(pause)
console.log(rs)
let count = 0;
for (let c of test1){
    if(c === pause){
        count++;
    }
   
}
console.log(count)
