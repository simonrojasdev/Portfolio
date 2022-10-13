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
    }else{
        form.setAttribute('action', 'javascript:location.reload();')
        msjEnvio.style.display = "block";
        Array.from(document.querySelectorAll(".validar")).forEach(elemento =>{
            elemento.value = "";
        })
    }
})