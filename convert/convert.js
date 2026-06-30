
const btn = document.getElementById("btn-change");
const afficherMessage = document.getElementById("message");
const cloneBtn = btn.cloneNode(true);
  afficherMessage.textContent="Hello toi"


btn.addEventListener("click", function() {
  afficherMessage.classList.toggle("hidden");
  
  if (cloneBtn.isConnected) {
    cloneBtn.remove();
  } else {
    btn.parentElement.appendChild(cloneBtn);
    

  }
});
