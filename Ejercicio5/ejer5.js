

function factorial (num){
    let i = num -1;

    if (num == 1 || num == 0 ){
        console.log('El factorial es 1');

    } else   if(num < 0){
        console.log('El factorial applica para numeros enteros naturales');
        
    } else {

        for (i; i > 1; i --){
            num *= i
        }
        console.log (`El Factorial es:  ${num}`)
    }
    
}

factorial(6)