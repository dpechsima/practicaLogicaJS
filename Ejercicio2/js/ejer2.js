/// ask for 10 numbers
let numerosArray = [];

while (numerosArray.length != 10){
    //ingreso de datos - recibe strings
    let numeros = prompt ('Ingresa 10 números separados por \',\'', 'Ejemplo: 1,2,3,4,5,6,7,8,9,10')
    //cambio a datos numericos
    numerosArray = numeros.split(',').map(Number); 
    //validacion de cantidad de numeros
    if (numerosArray.length != 10){
        alert('Se admiten/requieren 10 números')
    }
}

for ( let indexOut = 0; indexOut < numerosArray.length; indexOut ++ ){
    for (let indexIn = 0; indexIn < numerosArray.length; indexIn ++ ){
        if (numerosArray[indexIn + 1] > numerosArray[indexIn]){

            let aux = numerosArray[indexIn];
            numerosArray[indexIn] =  numerosArray[indexIn + 1];
            numerosArray[indexIn + 1] = aux;

        } 
    }
}
console.log(`The highest one is:  ${numerosArray[0]}`)

/*
//option 2
numerosArray.sort
console.log(`The highest one is:  ${numerosArray}`)


*/


