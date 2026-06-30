    

function removeConsecutive(str){
    let newString =""
    for(i=0; i<str.length; i++){
        if(str[i]!==str[i+1]){
            newString+=((str[i]))
        }
    }
    return newString
}
console.log(removeConsecutive("aaabbbcca"))
