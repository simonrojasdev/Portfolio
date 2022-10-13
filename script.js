const form = document.querySelector("#contacto");
let msjEnvio = document.querySelector("#msjEnvio");

form.addEventListener("submit", (event)=>{
    Array.from(document.querySelectorAll(".validar")).forEach(elemento =>{
        error = false;
        if(elemento.id === "campBot"){
            if(elemento.value !== ""){
                error = true;
               alert("entra aquí, eres un bot");
            }
        }
        else if(elemento.id === "inputEmail"){
            if((/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/).test(oneField.value) == false){
                error = true;
                alert("Email invalido o vacio")
            }
        }
        else if(elemento.value == "" || elemento.value == "-None-"){
                error = true;
                alert("Algun campo esta vacio")
        }
    })
    if(error === true){
        event.preventDefault();
        alert("Por favor rellene el formulario antes de enviar");
    }else{
        alert("Gracias, su mensaje fue enviado");
    }
})