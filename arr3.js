const rawTags = "  javascript,  html, css, ui , a , react , js  ";

function cleanTags(str) {
  let res = rawTags.split(",")
  let text = res
  .map(item =>item.replace(/\s+/g, ' ') .trim())
  .filter(item => item !== '')
  return text
}

console.log(cleanTags(rawTags)); 
// Expected output: ["Javascript", "Html", "Css", "React"]
