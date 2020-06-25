"use strict";
let x = document.getElementById("myLinks");
let imagenes=new Array('',
        'Imagenes/cp1.jpg',
        'Imagenes/cp2.png',
        'Imagenes/cp3.png',
        'Imagenes/cp4.png'
    
    );

let contador=0;
function rotarImagenes(){
        contador++
        document.getElementById("imagen").src=imagenes[contador];
        
        if(contador == imagenes.length-1){
            contador=0;
            console.log("El vector de imagenes ha sido recorrido con éxito");
        }
        console.log("Cambio de imagen finalizado");
        }

onload=function(){
        rotarImagenes();
        setInterval(rotarImagenes,4000);
    }

    function mobileNav() {
     
        console.log("Llama al nav de mobile")
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }