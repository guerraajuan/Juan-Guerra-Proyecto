var arregloDatos = []; // arreglo para guardar objetos con informacion del usuario
var objDatos = new Object();

//valida cada campo del formulario
function validaDatos(){
    let nombre = document.getElementById('nombre').value;
    let materno = document.getElementById('materno').value;
    let paterno = document.getElementById('paterno').value;
    let correo = document.getElementById('correo').value;
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let telefono = document.getElementById('tel').value;
    let regex2 = /^([0-9]{9})+$/;
    let mensaje = document.getElementById('mensaje');
    let terminos = document.getElementById('terminos').checked;
    mensaje.innerText = "";
    
    //nombre no puede estar vacio
    if(nombre == ''){
        mensaje.innerText = "El campo nombre es requerido";

    }
    else{
        //apellido paterno no puede estar vacio
        if(paterno == ''){
            mensaje.innerText = "El campo apellido paterno es requerido";
    
        } else{
            //apellido materno no puede estar vacio
            if(materno == ''){
                mensaje.innerText = "El campo apellido materno es requerido";
        
            }
            else{
                //verifica que el correo cumpla con una estructura de correo
                if(!(regex.test(correo))){
                    mensaje.innerText = "El correo no es valido";
            
                }else{
                    //verifica que el telefono sea solonumeros y de 9 digitos
                    if(!(regex2.test(telefono))){
                        mensaje.innerText = "El telefono no es valido";

                    }else{
                        //verifica que el usuario acepte los terminos y condiciones  
                        if(!terminos){
                            mensaje.innerText = "Debe aceptar los terminos y condiciones"; 
                        }
                        else{
                            //envia al usuario a la pagina 2, y guarda la informacion en un objeto 
                            window.location="pagina2.html";
                            objDatos['Nombre'] = nombre;
                            objDatos['Apellido materno'] = materno;
                            objDatos['Apellido paterno'] = paterno;
                            objDatos['Correo'] = correo;
                            objDatos['Telefono'] = telefono;
                            arregloDatos.push(objDatos);
                            console.log(arregloDatos);

                            
                        }
                    }
                }

            }
        }
    }


    

}