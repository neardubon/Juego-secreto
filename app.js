let numeroSecreto = 0;
let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

    function condicionesInicial(){
        asignarTextoElemento('h1',"Juego del numero secreto");
        asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`); 
        numeroSecreto = numeroRandom();
        numeroIntentos = 1;
    }

    
    function asignarTextoElemento(elemeto, texto){
    let ElementoHTML =  document.querySelector(elemeto);
    ElementoHTML.innerHTML = texto;
    return;
    }

    function numeroRandom(){
        let numerognerado = Math.floor(Math.random()*numeroMaximo) + 1;
        console.log(listaNumerosSorteados);
        console.log(numerognerado);
        // si ya no hay numeros
        if (listaNumerosSorteados.length == numeroMaximo) {
                asignarTextoElemento("p","ya salieron todos los numeros posibles");
                
        }else{   
        // si el numero generado esta incluido en la list
        if (listaNumerosSorteados.includes(numerognerado)) {
            return numeroRandom();
        }else{

            listaNumerosSorteados.push(numerognerado);
            return numerognerado;
        }
        }

    }

    function limpiarTexto(){
        document.querySelector("#valorUsuario").value = "";
    }


    function verificarIntento(){
        let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
        
        if(numeroSecreto === numeroUsuario){
          asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${numeroIntentos == 1 ? "intento" : "intentos"}`);
          document.getElementById("reiniciar").removeAttribute("disabled");
          document.getElementById("intentar").setAttribute("disabled",true);
        }else if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");
            numeroIntentos++;
            limpiarTexto();
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
            numeroIntentos++;
            limpiarTexto();
        }
        //console.log(numeroIntentos);
        return;
    }

    function reiniciarJuego(){
        // Limpiar la cajar
        limpiarTexto();
        // Restaurar textos
        condicionesInicial();
        // Botones
        document.getElementById("reiniciar").setAttribute("disabled",true);
        document.getElementById("intentar").removeAttribute("disabled");

    }

condicionesInicial();