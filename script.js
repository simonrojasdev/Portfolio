const form = document.querySelector("#contacto");
let msjEnvio = document.querySelector("#msjEnvio");

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
        alert("Por favor rellene el formulario antes de enviar");
    }else{
        form.setAttribute('action', alert("Gracias, su mensaje fue enviado correctamente"))
    }
})