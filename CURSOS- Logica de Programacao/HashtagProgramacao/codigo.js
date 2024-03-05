const prompt = require("prompt-sync")();

const aluno = "Daniel Porto";
let pontosSomados = 0;
let notasLancadas = 0;
let mediaPontos = 0;

while (notasLancadas < 12) {
    const nota = Number(prompt(`${notasLancadas + 1}ª nota ${aluno}: `));
    console.log(`A nota inserida foi ${nota}`);
    pontosSomados += nota;
    notasLancadas++;
    mediaPontos = pontosSomados / notasLancadas;
    console.log(`Média até a ${notasLancadas}ª nota: ${mediaPontos}`);
}

console.log(`A média final do aluno ${aluno} é ${mediaPontos}`);

if (mediaPontos >= 6) {
    console.log(`O aluno ${aluno} foi aprovado`);
} else {
    console.log(`O aluno ${aluno} foi reprovado`);
}
