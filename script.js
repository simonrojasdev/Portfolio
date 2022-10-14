const form = document.querySelector("#contacto");
let msjEnvio = document.querySelector("#msjEnvio");

function redireccionar(){
    form.setAttribute('action', '/index.html#titleFormulario');
}

form.addEventListener("submit", (event)=>{
    Array.from(document.querySelectorAll(".validar")).forEach(elemento =>{
        error = false;
        if(elemento.id === "campBot"){
            if(elemento.value !== ""){
                error = true;
            }
        }
        else if(elemento.id === "inputEmail"){
            if((/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/).test(elemento.value) == false){
                error = true;
            }
        }
        else if(elemento.value == "" || elemento.value == "-None-"){
                error = true;
        }
    })
    if(error === true){
        event.preventDefault();
    }else{
        msjEnvio.innerHTML = "Gracias, su mensaje fue enviado correctamente.";
        setTimeout(function(){
            redireccionar();
            }, 5000);
    }
})