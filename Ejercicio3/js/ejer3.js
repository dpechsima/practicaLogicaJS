let tiempo = prompt('Indica el tiempo para la alarma', 'tiempo en segundos')
let msg = prompt('Indica el mensaje', 'mensaje')

alert ("tu alarma sonará en " + tiempo +  'seg')

setTimeout(() => {
    
    enviarMensaje(msg)
    
}, tiempo * 1000 );

function enviarMensaje(msg){
    alert(msg);
}


