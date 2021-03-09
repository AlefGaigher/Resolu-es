// Dada uma matriz n x n, retorne os elementos da matriz organizados dos elementos mais externos para o elemento do meio, viajando no sentido horário.

// matriz = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// caracol (matriz) # => [1,2,3,6,9,8,7,4,5]
// Para melhor compreensão, siga os números da próxima matriz consecutivamente:

// matriz = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// caracol (matriz) # => [1,2,3,4,5,6,7,8,9]
// A Imagem Desafio_5.png ilustra a ideia
// Obs.: A ideia não é classificar os elementos do valor mais baixo para o mais alto; a ideia é atravessar a matriz 2D em um padrão de concha no sentido horário.
// Obs.2: O 0x0 (matriz vazia) é representado como um array vazio dentro de um array [[]].

caracol = function (array) {
  var a;
  var b = array.length - 1; //Tamanho do vetor menos 1
  var valor = 0; //iniciando a variável

  for (var j = 0; j < array.length; j++) {

    //Percorrendo a linha superior
    for (var i = a; i <= b; i++) {
      array[a][i] = valor++ + "";
    }
    //Percorrendo a coluna da direita de cima pra baixo
    for (var i = a + 1; i <= b; i++) {
      array[i][b] = valor++ + "";
    }
    //Percorrendo a ultima linha da direita pra esquerda
    for (var i = b - 1; i >= a; i--) {
      array[b][i] = valor++ + "";
    }
    //Percorrendo a coluna da esquerda de baixo pra cima
    for (var i = b - 1; i >= a + 1; i--) {
      array[i][a] = valor++ + "";
    }
    a++;
    b--;
  } //Fim do ciclo

  return array; //retorno em matriz
}



//====================================================================================
//                                        TESTE
//====================================================================================
var matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matriz2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

var assert = require('assert');
assert.deepEqual(caracol(matriz1), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
assert.deepEqual(caracol(matriz2), [1, 2, 3, 4, 5, 6, 7, 8, 9]);