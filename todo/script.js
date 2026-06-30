const inputAdd = document.getElementById("inputTask")
const btn = document.getElementById("btnAdd")
const list = document.getElementById("myList")
let count = 0
btn.addEventListener("click", function(){
  //create a div fot the notes
  const wrapNote = document.createElement("div")
  wrapNote.style.marginTop = "8px" // space between notes

  //create a checkbox to check
  const checkboxNote =  document.createElement("input") // for every inputTask
  checkboxNote.type = "checkbox"
  


  // Create the text for (label) 
    const label = document.createElement("label");
    label.textContent = inputAdd .value;
    inputAdd .value = "";
     checkboxNote.id = "task-" + count 
   label.htmlFor = "task-" + count
   count++
    label.style.marginLeft = "5px";

    //  Assembler les éléments
    wrapNote.appendChild(checkboxNote);
    wrapNote.appendChild(label);

    //  Ajouter le tout sous l'input
    list.appendChild(wrapNote);


    checkboxNote.addEventListener("change", (e)=>{
if(e.target.checked){
  label.style.textDecoration = "line-through";
    label.style.color = "#888"; // 
  } else {
    label.style.textDecoration = "none";
    label.style.color = "#000";
  }
}

)
})

