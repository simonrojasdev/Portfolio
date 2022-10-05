console.log("Enlazado")

const buttonCV = document.getElementById("cv");
const iframe = document.querySelectorAll("#iframe");

function hide() {
    myFunction(this);
    timeoutID = window.setTimeout(() => myFunction(this), 2000);
  }

function mostrarBlock(elemento){
    if (elemento.style.display == "none"){
        elemento.style.display = "block";
    }else{
        elemento.style.display = "none";
    }
}


