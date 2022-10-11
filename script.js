const form = document.querySelector("#contacto");
let msjEnvio = document.querySelector("#msjEnvio");
console.log(form)

form.addEventListener("submit", (event)=>{
    Array.from(document.querySelectorAll(".validar")).forEach(elemento =>{
        error = false;
        if(elemento.id === "campBot"){
            if(elemento.value !== ""){
                error = true;
                console.log("entra aquí, eres un bot");
            }
        }
        if(elemento.id === "inputEmail"){
            if((/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/).test(oneField.value) == false){
                error = true;
                alert("MAIL INVALIDO")
            }
        }
        else{
            if(oneField.value == ""){
                error = true;
            }
        }
        if(error == true){
            event.preventDefault();
        }else{
            msjEnvio.document.write("Gracias, su mensaje fue enviado con exito")
        }
    })
})