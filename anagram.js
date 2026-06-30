function isAnagram(str1, str2){
   let s = str1.split("").sort()
   let d =str2.split("").sort()
   if(s.length !== d.length ) {
    return false
   }
   for(i = 0; i<s.length; i++){

   if( s[i] === d[i]){
    return true
   } return false
}}
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))   
console.log(isAnagram("aabc", "abbc"))
