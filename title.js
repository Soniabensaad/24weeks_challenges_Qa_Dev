let str = "sHoRt AnD sToUt";

function titleCase(str) {
  let words = str.split(" "); // 1. On sépare par espace
  let resultat = [];
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; // Correction : 'words' avec un s
    
    // Correction : Index 0 en MAJUSCULE + le reste en minuscule
    let verified = word[0].toUpperCase() + word.slice(1).toLowerCase();
    
    resultat.push(verified);
  }
  
  return resultat.join(" "); // Correction : Joindre avec un espace
}

console.log(titleCase(str)); 
// Résultat : "Short And Stout"
