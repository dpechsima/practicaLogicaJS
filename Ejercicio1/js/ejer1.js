//Option 1

let name = prompt('Who are U?', 'Write your name');
let age = prompt(`What's your age?`, `Write your age` );
let favorite = prompt( `Tell me about you favorite movies!`,'Separate each of them with a \',\' !!!');
let favoriteMovies = favorite.split(',');
console.log(`So you are ${name}, you are ${age} YO and`);

for (let movie = 0; movie < favoriteMovies.length; movie ++){
        console.log(`The film ${favoriteMovies[movie]} is one of your favorites`)
}

//option 2

function perfil (name, age, favoritos){
    console.log(`So you are ${name}, you are ${age} YO and`);

for (let movie = 0; movie < favoritos.length; movie ++){
        console.log(`The film ${favoritos[movie]} is one of your favorites`)
}
}





