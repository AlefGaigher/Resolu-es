// Depois de um período difícil no trabalho, você decide tirar férias para descansar e reserva um vôo para você e mais um acompanhante. Você 
// precisará alugar um carro para se locomover em suas férias. O gerente da locadora de veículos faz algumas boas ofertas:

// Cada dia que você aluga o carro custa $40.
// Se você alugar o carro por 7 dias ou mais, receberá $50 de desconto no total.
// Alternativamente, se você alugar o carro por 3 ou mais dias, receberá $20 de desconto no total.
// Escreva um código que retorne o valor total para diferentes dias(d).

function rentalCarCost(d) {
  var aluguel = 40;

  if (d >= 3 && d < 7) {
    valor = calcular(aluguel, d, 20);
  }
  else if (d >= 7) {
    valor = calcular(aluguel, d, 50);
  }
  else if (d < 1) {
    console.log("Digite um valor acima de 0");
  }
  else {
    valor = calcular(aluguel, d, 0);
  }

  return valor;
}


//Calcula o valor do aluguel e o desconto aplicado, melhorando a reutilização do código
function calcular(aluguel, d, desconto) {
  valor = (aluguel * d) - desconto;
  return valor;
}

//====================================================================================
//                                        TESTE
//====================================================================================

var assert = require('assert');
assert.equal(rentalCarCost(7), 230);
assert.equal(rentalCarCost(5), 180);
assert.equal(rentalCarCost(2), 80);
assert.equal(rentalCarCost(9), 310);