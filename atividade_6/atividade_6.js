alert("Ola Jeff, eu quero jogar um jogo...");

var  player;
var  maquina;
var pedra = 1;
var papel = 2;
var tesoura = 3;

maquina = parseInt(Math.random() * ((4 - 1) + 1)); 


player = parseInt(prompt("Escolha!!! Jo...Ken...Po!!!\n 1- Pedra\n 2- Papel\n 3- Tesoura"));


player == maquina ? alert("Empate! De novo!") : ((player == 1 && maquina == 2) || (player == 2 && maquina == 3) || (player == 3 && maquina == 1)) ? alert("Você Perdeu!"
) : ((player == 1 && maquina == 3) || (player == 2 && maquina == 1) || (player == 3 && maquina == 2)) ? alert("Você Ganhou!") : alert("Vecê Ganhou!!");