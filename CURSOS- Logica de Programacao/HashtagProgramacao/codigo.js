const prompt = require("prompt-sync")();

const aluno = "Daniel Porto";
let pontosSomados = 0;
let notasLancadas = 0;
let mediaPontos = 0;

while (notasLancadas < 12) {
    const nota = Number(prompt(`${notasLancadas + 1}a nota do ${aluno}: `));
    console.log(`A nota inserida foi ${nota}`);
    pontosSomados = pontosSomados + nota;
  notasLancadas = notasLancadas+ 1;
  mediaPontos= pontosSomados / notasLancadas;
  
console.log(`A média final do aluno ${aluno} é ${mediaPontos.toFixed(2)}`);
}



if (mediaPontos >= 6) {
    console.log(`O aluno ${aluno} foi aprovado`);
} else {
    console.log(`O aluno ${aluno} foi reprovado`);
}
