alert("Ola Jeff, eu quero jogar um jogo...");

var player;
var maquina;
var pedra = 1;
var papel = 2;
var tesoura = 3;

maquina = Math.random() * (4 - 1) + 1; 

alert("Escolha!!! Jo...Ken...Po!!!\n 1- Pedra\n 2- Papel\n 3- Tesoura")
player = prompt("Vamos jogar JoKenPo escolha um numero!!!");

player === maquina ? alert("Empate! De novo!"
) : (player === 1 && maquina === 2) ? alert("Você Perdeu!"
) : (player === 2 && maquina === 3) ? alert("Vecê Pedeu!!"
) : (player === 3 && maquina === 1) ? alert("você Perdeu!!!"
) : (player === 1 && maquina === 3) ? alert("Você Ganhou!"
) : (player === 2 && maquina === 1) ? alert("Vecê Ganhou!!"
) : (player === 3 && maquina === 2) ? alert("você Ganhou!!!");