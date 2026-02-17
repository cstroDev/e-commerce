import prompt from 'prompt-sync';
let ler = prompt();


const ciano = '\x1b[1;36m%s\x1b[0m';
const aviso = '\x1b[1;33m%s\x1b[0m';
const sucesso = '\x1b[1;32m%s\x1b[0m';
const erro = '\x1b[1;31m%s\x1b[0m';


console.log(aviso, "O sistema aceita apenas notas de R$5, R$10, R$20, R$50, R$100 e R$200. Informe a quantidade de notas de cada valor, um de cada vez!");

let capacidade = 200;
let cont = 1
let qtdTotalNotas = 0;
let qtdNotaCinco = 0;
let qtdNotaDez = 0;
let qtdNotaVinte = 0;
let qtdNotaCinquenta = 0;
let qtdNotaCem = 0;
let qtdNotaDuzentos = 0;

do {
    console.log(`
Atualmente no caixa tem:
Quantidade total de notas: ${qtdTotalNotas}.

Quantidade de notas de cinco: ${qtdNotaCinco}.
Quantidade de notas de dez: ${qtdNotaDez}.
Quantidade de notas de vinte: ${qtdNotaVinte}.
Quantidade de notas de cinquenta: ${qtdNotaCinquenta}.
Quantidade de notas de cem: ${qtdNotaCem}.
Quantidade de notas de duzentos: ${qtdNotaDuzentos}.

Informe a quantidade:`);

    let qtdNota = Number(ler());

    if (qtdNota == -1) {
        console.clear();
        console.log("Obrigado por utilizar nosso sistema! Volte sempre.");
        break;

    } else {

        if (cont == 1) {
            qtdTotalNotas += qtdNota;
            qtdNotaCinco += qtdNota;
            cont++;
            console.clear();

            if (qtdTotalNotas > capacidade) {
                console.log(erro, "Não podemos guardar mais de 200 notas!");
                qtdTotalNotas -= qtdNota;
                qtdNotaCinco -= qtdNota;
                cont--;

            } else if (qtdTotalNotas == 200) {
                console.clear();
                let total = qtdNotaCinco * 5;
                console.log(ciano, "Capacidade total atingida!");
                console.log(sucesso, `Quantidade total de notas: ${qtdTotalNotas}
Valor total: R$${total.toFixed(2)}`);
                break;
            }

        } else if (cont == 2) {
            qtdTotalNotas += qtdNota;
            qtdNotaDez += qtdNota;
            cont++;
            console.clear();

            if (qtdTotalNotas > capacidade) {
                console.log(erro, "Não podemos guardar mais de 200 notas!");
                qtdTotalNotas -= qtdNota;
                qtdNotaDez -= qtdNota;
                cont--;

            } else if (qtdTotalNotas == 200) {
                console.clear();
                let total = qtdNotaCinco * 5 + qtdNotaDez * 10;
                console.log(ciano, "Capacidade total atingida!");
                console.log(sucesso, `Quantidade total de notas: ${qtdTotalNotas}
Valor total: R$${total.toFixed(2)}`);
                break;
            }

        } else if (cont == 3) {
            qtdTotalNotas += qtdNota;
            qtdNotaVinte += qtdNota;
            cont++;
            console.clear();

            if (qtdTotalNotas > capacidade) {
                console.log(erro, "Não podemos guardar mais de 200 notas!");
                qtdTotalNotas -= qtdNota;
                qtdNotaVinte -= qtdNota;
                cont--;

            } else if (qtdTotalNotas == 200) {
                console.clear();
                let total = qtdNotaCinco * 5 + qtdNotaDez * 10 + qtdNotaVinte * 20;
                console.log(ciano, "Capacidade total atingida!");
                console.log(sucesso, `Quantidade total de notas: ${qtdTotalNotas}
Valor total: R$${total.toFixed(2)}`);
                break;
            }

        } else if (cont == 4) {
            qtdTotalNotas += qtdNota;
            qtdNotaCinquenta += qtdNota;
            cont++;
            console.clear();

            if (qtdTotalNotas > capacidade) {
                console.log(erro, "Não podemos guardar mais de 200 notas!");
                qtdTotalNotas -= qtdNota;
                qtdNotaCinquenta -= qtdNota;
                cont--;

            } else if (qtdTotalNotas == 200) {
                console.clear();
                let total = qtdNotaCinco * 5 + qtdNotaDez * 10 + qtdNotaVinte * 20 + qtdNotaCinquenta * 50;
                console.log(ciano, "Capacidade total atingida!");
                console.log(sucesso, `Quantidade total de notas: ${qtdTotalNotas}
Valor total: R$${total.toFixed(2)}`);
                break;
            }

        } else if (cont == 5) {
            qtdTotalNotas += qtdNota;
            qtdNotaCem += qtdNota;
            cont++;
            console.clear();

            if (qtdTotalNotas > capacidade) {
                console.log(erro, "Não podemos guardar mais de 200 notas!");
                qtdTotalNotas -= qtdNota;
                qtdNotaCem -= qtdNota;
                cont--;

            } else if (qtdTotalNotas == 200) {
                console.clear();
                let total = qtdNotaCinco * 5 + qtdNotaDez * 10 + qtdNotaVinte * 20 + qtdNotaCinquenta * 50 + qtdNotaCem * 100;
                console.log(ciano, "Capacidade total atingida!");
                console.log(sucesso, `Quantidade total de notas: ${qtdTotalNotas}
Valor total: R$${total.toFixed(2)}`);
                break;
            }

        } else {
            qtdTotalNotas += qtdNota;
            qtdNotaDuzentos += qtdNota;
            console.clear();

            if (qtdTotalNotas > capacidade) {
                console.log(erro, "Não podemos guardar mais de 200 notas!");
                qtdTotalNotas -= qtdNota;
                qtdNotaDuzentos -= qtdNota;

            } else {
                let total = qtdNotaCinco * 5 + qtdNotaDez * 10 + qtdNotaVinte * 20 + qtdNotaCinquenta * 50 + qtdNotaCem * 100 + qtdNotaDuzentos * 200;
                console.log(sucesso, `Quantidade total de notas: ${qtdTotalNotas}
Valor total: R$${total.toFixed(2)}`);
                break;
            }
        }
    }

} while (true)