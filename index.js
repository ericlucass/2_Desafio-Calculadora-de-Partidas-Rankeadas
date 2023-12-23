const readlineSync = require('readline-sync');
(function() {

    let nomeHeroi = readlineSync.question("Digite o nome do seu Herói: ");
    let Vitorias = readlineSync.question("Digite a quantidade de vitórias: ");
    let Derrotas = readlineSync.question("Digite a quantidade de derrotas: ");

    
    let vitorias = parseInt(Vitorias);
    let derrotas = parseInt(Derrotas);

    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    }else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante";
    }else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    }else
        nivel = "Imortal"

    console.log(nomeHeroi, "tem saldo de " + saldoVitorias + " vitórias e está no nível " + nivel);
    
})();