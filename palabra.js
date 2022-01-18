var p1 = "Visual";
var p2 = "UX";
var p3 = "UI";
var palabra = document.getElementById("palabra");
var i = 0;
var contador = 0;
var antiguo = "";
var nuevo = "";
palabra.textContent = p2;


setInterval("cambiarColorBarra()",500)
cambiar()

function cambiarColorBarra(){
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
    i = ahora.length;
    antiguo = ahora;
    transicionEliminar()
    
}

function transicionEliminar(){
   
    if(i >= 0){
        let s = palabra.textContent.substring(0,i)
        cambiarString(s)
        i--
        setTimeout("transicionEliminar()",250)
    }else{
        transicionNuevo()
    }
}

function adding(){
    
    if(i <= nuevo.length){
        let s = nuevo.substring(0,i)
        cambiarString(s)
        i++
        setTimeout("adding()",250)
    }else{
        setTimeout("cambiar()",1000)
    }
}

function transicionNuevo(){
    if(antiguo == p1){
        nuevo = p2;
    }else if(antiguo == p2){
        nuevo = p3;
    }else if(antiguo == p3){
        nuevo = p1;
    }
    i = 0
    adding()
}

function cambiarString(string){
    palabra.textContent = string;
}
