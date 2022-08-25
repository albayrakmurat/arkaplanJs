const button = document.querySelector("button")
const body = document.querySelector("body")
const colors = ["#5CFA9B","b#DBBB4B","g#21D145","#FA925C","#59CEF0","#9159F0","#F0ECCC","#91C7F0","#95C77F"]



button.addEventListener("click", changeBackground);

function changeBackground() {
    const secilenRenk = Math.floor(Math.random() * colors.length);
    const color = colors[secilenRenk];
    body.style.backgroundColor = color;
  }
   
