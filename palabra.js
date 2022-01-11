var p1 = "Visual";
var p2 = "UX";
var p3 = "UI";
var palabra = document.getElementById("palabra");
var contador = 0;
palabra.textContent = p2;

setInterval("ultimaPalabra()",250)
setInterval("cambiar()",2000);

function ultimaPalabra(){
    var barra = document.getElementById("barra");
    if(contador == 0){
        barra.style.color = "#e8e6f0";
        contador = 1
    }else{
        barra.style.color = "#4719FF";
        contador = 0
    }
    
}

function cambiar(){
    var ahora = palabra.textContent;

    if(ahora == p1){
        transicion(p2)
        palabra.textContent = p2;
    }else if(ahora == p2){
        transicion(p3)
        palabra.textContent = p3;
    }else if(ahora == p3){
        transicion(p1)
        palabra.textContent = p1;
    }
}

function transicion(){
    
}