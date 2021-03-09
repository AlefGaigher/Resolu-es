// Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obteremos 3, 5, 6 e 9. A soma desses múltiplos é 23.
// Conclua a solução para que ela retorne a soma de todos os múltiplos de 3 ou 5 abaixo do número passado.
// Obs.: Se um dos números for um múltiplo de 3 e 5, conte-o apenas uma vez. Além disso, se o número passado for negativo, retorne 0.


function solution(number) {
    var x = 3; // Para multiplos de 3
    var z = 5; // Para multiplos de 5
    var res = 0; //Variavel para armazenar o valor


    if (number < 0) {
        res = 0; //Se o numero passado for negativo, retorna 0
    } else {
        for (var i = 0; i < number; i++) {
            if (i % x == 0 || i % z == 0) {
                res += i; //Armazenando multiplos de 3 ou 5 e somando
            }
        }
    }
    return res;

}


//====================================================================================
//                                        TESTE
//====================================================================================
var assert = require('assert');
assert.equal(solution(10), 23);
assert.equal(solution(12), 33);
assert.equal(solution(20), 78);
assert.equal(solution(-20), 0); //adicionei o teste negativo
