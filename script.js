const form = document.querySelector("#contacto");
const msjEnvio = document.querySelector("#msjEnvio");
const buttonSubmit = document.querySelector("#submit");
const buttonLigth = document.querySelector("#buttonLigth");
const buttonDark = document.querySelector("#buttonDark");
const html = document.querySelector("html");

function temaLight(){
    html.setAttribute('tema', 'light');
    buttonDark.hidden = false;
    buttonLigth.hidden = true;
}
function temaDark(){
    html.setAttribute('tema', 'dark');
    buttonDark.hidden = true;
    buttonLigth.hidden = false;
}

form.addEventListener("submit", (event)=>{
    let error = false;
    Array.from(document.querySelectorAll(".validar")).forEach(elemento =>{
        if(elemento.id === "inputEmail"){
            if((/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/).test(elemento.value) == false){
                msjEnvio.style.color = "red";
                msjEnvio.innerHTML = "Por favor Ingrese un email valido.";
                error = true;
            }
        }
        else if(elemento.id === "campBot"){
            if(elemento.value !== ""){
                msjEnvio.style.color = "red";
                msjEnvio.innerHTML = "Mmmmm, eres un BOT.";
                error = true;
            }
        }
        else if(elemento.value == "" || elemento.value == "-None-"){
            msjEnvio.style.color = "red";
            msjEnvio.innerHTML = "Por favor Ingrese todos los campos.";
                error = true;
        }
    })
    if(error == true){
        event.preventDefault();
    }else{
        msjEnvio.style.color = "#84b6f4";
        msjEnvio.innerHTML = "Gracias, su mensaje fue enviado correctamente."
    }
});

