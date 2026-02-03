let capitalInicial = prompt("Qual a capital inicial?");
let tempo = prompt("Qual a quantidade de meses?");
let juros = prompt("Qual a porcentagem?");

let montante = capitalInicial * (1 + juros / 100) ** tempo;

alert(montante.toFixed(2));