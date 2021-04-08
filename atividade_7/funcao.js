alert("digite tres numeros inteiros e vamos descobrir o maior!");

var a = prompt("O primeiro numero? ");
var b = prompt("O segundo numero? ");
var c = prompt("O terceiro numero? ");


function maiorNumero(a, b, c) {
    Math.max(a, b, c)
    return Math.max(a, b, c);
}

alert("O maior numero é: " + maiorNumero(a, b, c));
