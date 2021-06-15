// escucha el momento en que se da click en agregar comentario en el video
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton3").addEventListener("click", function(){
        let msj = document.getElementById('comentario3').value;
        if(msj != ""){
             var parrafo =comentar(msj);
            $("#container3").appendChild(parrafo); 
            document.getElementById("comentario3").value="";
            console.log(parrafo);
            agregarListener();
        }

    });

});

// escucha el momento en que se da click en agregar comentario en la foto 1
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton").addEventListener("click", function(){
        let msj = document.getElementById('comentario').value;
        if(msj != ""){
             var parrafo =comentar(msj);
            $("#container").appendChild(parrafo); 
            document.getElementById("comentario").value="";
            console.log(parrafo);
            agregarListener();
        }

    });

});

// escucha el momento en que se da click en agregar comentario en la foto 2
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton2").addEventListener("click", function(){
        let msj = document.getElementById('comentario2').value;
        if(msj != ""){
            var parrafo =comentar(msj);

            $("#container2").appendChild(parrafo); 
            document.getElementById("comentario2").value="";
            console.log(parrafo);
            agregarListener();
        }

    });
});


// escucha el momento en que se da click en agregar comentario la foto 3
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton4").addEventListener("click", function(){
        let msj = document.getElementById('comentario4').value;
        if(msj != ""){
             var parrafo =comentar(msj);
            $("#container4").appendChild(parrafo); 
            document.getElementById("comentario4").value="";
            console.log(parrafo);
            agregarListener();
        }

    });

});
// escucha el momento en que se da click en agregar comentario la foto 4
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton5").addEventListener("click", function(){
        let msj = document.getElementById('comentario5').value;
        if(msj != ""){
             var parrafo =comentar(msj);
            $("#container5").appendChild(parrafo); 
            document.getElementById("comentario5").value="";
            console.log(parrafo);
            agregarListener();
        }

    });

});


//funcion que retorna el contenido del elemento que posee el id que recibe
function $(selector){
    return document.querySelector(selector);

}

//recorre todos los elementos con la clase "close" que consiga y le añade elevento click
function agregarListener(){

    var elementos = document.querySelectorAll(".close");
    for(let i = elementos.length -1; i >= 0; i --){
        console.log(elementos[i]);
        var elemento = elementos[i];
        elemento.addEventListener("click", function(){
            this.parentNode.style.display = "none";
            console.log("di click");
        });
        
    }
}

// funcion comentar recibe lo que el usuario quiere comentar proveniente del input
// lo agrega en un elemento "p" que crea, adicional crea una "X" para que sea el boton de borrar
function comentar(mensaje){
    
    var parrafo = document.createElement("p");
    parrafo.setAttribute("class", "comentario");
    parrafo.innerHTML = mensaje;
    var close = document.createElement("span");
    close.style.float = "right";
    close.style.color = "red";
    close.style.cursor = "pointer";
    close.innerHTML = "X";
    close.setAttribute("class", "close");
    parrafo.appendChild(close);
    return parrafo;

}



