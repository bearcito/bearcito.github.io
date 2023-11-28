let peso = document.getElementById("peso");


let boton = document.getElementById("boton");

boton.addEventListener("click",eventoBoton)

function eventoBoton(){
    console.log(holliday(peso.valueAsNumber))
    
}
function holliday(peso){
    return peso+1
}
