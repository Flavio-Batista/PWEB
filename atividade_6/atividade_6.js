alert("Ola Jeff, eu quero jogar um jogo...");

var  player;
var  maquina;
var pedra = 1;
var papel = 2;
var tesoura = 3;

maquina = Math.random() * (4 - 1) + 1; 

alert("Escolha!!! Jo...Ken...Po!!!\n 1- Pedra\n 2- Papel\n 3- Tesoura")
player = prompt("Vamos jogar JoKenPo escolha um numero!!!");

if (player === maquina) {
    alert("Empate! De novo!");
} else if (player === 1 && maquina === 2) {
    alert("Você Perdeu!");
} else if (player === 2 && maquina === 3) {
    alert("Você Perdeu!");
} else if (player === 3 && maquina === 1) {
    alert("Você Perdeu!");
} else if (player === 1 && maquina === 3) {
    alert("Você ganhou!");
} else if (player === 2 && maquina === 1) {
    alert("Você ganhou!");
} else (player === 3 && maquina === 2) {
    alert("Você ganhou!");
}