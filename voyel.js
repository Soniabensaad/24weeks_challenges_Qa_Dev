
function findVowelPositions(str){
     let lista=[]
for (let i=0; i<str.length ; i++){
    
    if ("aeiouy".includes(str[i])){
        lista .push(i) 
    }
}
return lista
}
console.log(findVowelPositions("javascript"))
