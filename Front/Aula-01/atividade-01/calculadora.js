let numero1 = prompt("Qual o primeiro número?");
let operacao = prompt("Qual a operação?");
let numero2 = prompt("Qual o segundo número?");

if (operacao === "+") {
    alert(Number(numero1) + Number(numero2));
} else if (operacao === "-") {
    alert(Number(numero1) - Number(numero2));
} else if (operacao === "*") {
    alert(Number(numero1) * Number(numero2));
} else if (operacao === "/") {
    if(Number(numero2) === 0) {
        alert("Não é possível dividir por zero!")
    } else {
        alert(Number(numero1) / Number(numero2));
    }
} else {
    alert("Operação errada, tente novamente")
}