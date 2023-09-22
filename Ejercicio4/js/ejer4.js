/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and be capitalized). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

//En este documento se utilizo node js
*/

let msg = 'anit***alav////ala     ti  na'
msg = msg.replace(/[.,\/#!$%\^&\\\*;:{}=\-_`~()\s]/g, '');
msg.toLowerCase
esPalindromo = [];
let msgArray = msg.split('');

for (index = msgArray.length-1; index >= 0; index -- ){
    esPalindromo.push(msgArray[index]);
}

if (esPalindromo.join === msgArray.join){
    console.log('Sí es palindromo');
} else {
    console.log('No es palindromo'); 
}