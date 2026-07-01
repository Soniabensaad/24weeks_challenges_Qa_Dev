const inputAdd = document.getElementById("inputTask")
const btn = document.getElementById("btnAdd")
const list = document.getElementById("myList")
const temporaryList = document.getElementById("temporary_listElement_id")
let count = 0

 // un petit truc pour l'indentation du code avec vscode, (ctrl+a) pour selectionner toute la page, ctrl+k+f

btn.addEventListener("click", function(){
  const newLine = temporaryList.cloneNode(true)
  newLine.classList.remove("hiddenElement")
  const checkboxNote =newLine.querySelector("input")
  const labelNote =newLine.querySelector("label")
labelNote.textContent = inputAdd .value;
    inputAdd .value = "";
     checkboxNote.id = "task-" + count 
   labelNote.htmlFor = "task-" + count
   count++
   list.appendChild(newLine)
   //Il y a une facon d'implémenter cette fonctionnalité sans utiliser de javascript!
   checkboxNote.addEventListener("change",(e)=>{
if(e.target.checked){
  labelNote.style.textDecoration = "line-through";
    labelNote.style.color = "#888"; // 
  } else {
    labelNote.style.textDecoration = "none";
    labelNote.style.color = "#dbc5c5cd";
  }
}

)

   
})
