
let numeroSecreto = 0;
intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    console.log(intentos);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');    }
    else{

        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos===1 ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else{
            //El usuario no acerto
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El numero secreto es menor');
            }
            else{
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    //reiniciar intentos
    intentos = 1;
    //cambiar numero secreto
    numeroSecreto = generarNumeroSecreto();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    const numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numeroGenerado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //indicar mensaje
    condicionesIniciales();
    
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
