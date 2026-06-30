function isPalindrome(word){
    let torarray = word.split("")
  if(torarray === [] || torarray === torarray.reverse()){
    return true
  }else{return false}

}
console.log(isPalindrome(cat))
