let s = "HeLLo"
    let count = 0  
function CountUppercase(s) {
                         // moved inside function
    for (let i = 0; i < s.length; i++) { // use 'let' for 'i'
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            count++                      // removed the extra i++
        }
    }
    return count
}

console.log(CountUppercase(s))  // ✅ Output: 3
