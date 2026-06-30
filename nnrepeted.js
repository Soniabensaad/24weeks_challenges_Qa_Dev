function firstUniqueChar(str){
    let count = {};

    // Step 1: count each character
    for (let i = 0; i < str.length; i++){
        if (count[str[i]]) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }

    // Step 2: find first character with count = 1
    for (let i = 0; i < str.length; i++){
        if (count[str[i]] === 1){
            return str[i];
        }
    }

    return null;
}

console.log(firstUniqueChar("aabbcddee"));
