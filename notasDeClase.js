//Callback
/*
Es un tipo de función que se ejecuta al ser llamada por otra función
*/

function calcular (x,y,operation, callback){
    let result;
    switch(operation){
        case 'add':
            result  = x + y;
            break;
        case 'substract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        default: 
            result = 'Op not valid'
    }
    callback(result)
}

function logResult (value){
    console.log(`Result : ${value}`);
}

calcular(100,50,'add',logResult);

calcular(100,50,'substract',logResult);

calcular(100,50,'multiply',logResult);


// set time out

function getUser(){
    console.log(`welcome, Shrek99`)
} 

setTimeout(getUser, 3000);

console.log(`Waiting for user info`)

