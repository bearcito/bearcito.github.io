const RESULTADO = document.getElementById("resultado");
const MANTENIMIENTOMM2 = document.getElementById("mantenimientomm2");
const DOSIS = document.getElementById("dosis");
let pesoInput = document.getElementById("peso"); // peso del input de la calculadora 
let boton = document.getElementById("boton"); // botón
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
 
boton.addEventListener("click", eventoBoton); // event listener del botón = espera a una acción

function eventoBoton() {
    let peso = pesoInput.valueAsNumber; // value as number obt el valor del peso como número

    if (peso<= 30){ 
    let dato = holliday(peso);
    RESULTADO.innerHTML = dato + "cc";
    MANTENIMIENTOMM2.innerHTML = "Mantenimiento m+m/2: " + (dato / 24) * 1.5 + "cc/h";
    DOSIS.innerHTML = Math.round(dato / 24) + "cc/h";
        return;
}
    else if (peso>30){
        let dato = superficie(peso)
        resultado.innerHTML = Math.round(dato *1500)+"X1500"
        DOSIS.innerHTML = Math.round(dato*2000)+"x2000"
        MANTENIMIENTOMM2.innerHTML=(dato/24)+"cc/h"
    }
   
    if (isNaN(peso) || peso <= 0) {
        error1.style.display = "block";
        error2.style.display = "none";
        return; // Detener la ejecución si hay un error
    } else {
        error1.style.display = "none";
        error2.style.display = "none"; // Ocultar el error2 si el peso es válido
    }
    


}
function holliday(peso) {
    let dosis;
    if (peso > 20) {
        let resultado = (peso - 20) * 20;
        dosis = resultado + 1500;
    } else if (peso <= 20 && peso > 10) {
        let resultado = (peso - 10) * 50;
        dosis = resultado + 1000;
    } else if (peso <= 10) {
        let resultado = peso * 100;
        dosis = resultado; 
    }
    return dosis;
}    
function superficie(peso){ 
    
    let resultadosc1 = ((peso *4)+7)/(peso+90)
    
    return[(Math.round(resultadosc1))]
}
