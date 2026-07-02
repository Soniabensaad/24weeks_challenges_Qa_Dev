const inputAdd = document.getElementById("inputTask");
const list = document.getElementById("myList");
const template = document.getElementById("temporary_listElement_id");

let count = 0;

function addTask() {
  const task = inputAdd.value.trim();

  if (task === "") {
    return;
  }

  const newLine = template.cloneNode(true);

  // Le changement d'id suffit à rendre l'élément visible
  newLine.id = "";

  const checkbox = newLine.querySelector("input");
  const label = newLine.querySelector("label");

  const checkboxId = `task-${count}`;

  checkbox.id = checkboxId;
  label.htmlFor = checkboxId;
  label.textContent = task;

  inputAdd.value = "";

  list.appendChild(newLine);

  count++;
}
