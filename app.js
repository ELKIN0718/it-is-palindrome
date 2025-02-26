agregarTexto('It`s palindrome?', '#titulo');

function agregarTexto(texto, elemento){
    let a = document.querySelector(elemento);
    a.innerHTML = texto;
    return;
    
};

function verificar(){
    let palabra = document.querySelector('#entrada').value;
    let validacion = /[\d\W]/.test(palabra);
    let derecho = [];
    let contra = [];
    let error = 0;
    let contador = 0;
    if(validacion){
        agregarTexto('Esto no es una palabra, no debe contener numeros, ni simbolos o espacios.', '#salida');
        
    }else{
        derecho = palabra.split('');
        contra = derecho;
        contador = contra.length - 1;
        console.log(contra);
        for (let index =  0; index < derecho.length ; index++) {
            if(derecho[index] != contra[contador]){
                error = error + 1;
            };

            contador--;
        };

        
        if(error > 0){
            agregarTexto('No es un palindrome', '#salida');
        }else{
            agregarTexto('Es un palindrome', '#salida');
        };
    };
}