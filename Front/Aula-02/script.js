// Funções no JavaScript

function somarNumeros(num1, num2) {
    return num1 + num2;
}

let resultado = somarNumeros(5, 10);

console.log(resultado);

resultado = somarNumeros(10, 15);

console.log(resultado);

// Trabalhando com data e hora

let dataAtual = new Date();

console.log(dataAtual.toISOString());

let ano = dataAtual.getFullYear();
let mes =  dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

// ===============================================================
// ==================== OUTRO EXEMPLO DE DATA ====================

let hoje = new Date();
let diasPraAdicionar = 7;
let mesesPraAdicionar = 5

// Cria uma nova data a partir da atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasPraAdicionar);
novaData.setMonth(novaData.getMonth() + mesesPraAdicionar);

console.log(novaData.toLocaleDateString());

// ==============================================================
// ===================== DIFERENÇA DE DATAS =====================

let data1 = new Date('2025-03-19');
let data2 = new Date('2025-03-25');

// Diferença em milissegundos
let diferencaMs = data2 - data1;

// Convertendo para dias
let diferencaDias = diferencaMs / (1000* 60 * 60 * 24);
console.log(`Diferença: ${diferencaDias} dias`);
// Saída: Diferença: 6 dias

// ===============================================================
// ==================== FUNÇÕES DE MATEMÁTICA ====================

// Retorna um valor absoluto (positivo)
console.log(Math.abs(-10));

// Arredonda pra baixo
console.log(Math.floor(4.9));

// Arredonda pra cima
console.log(Math.ceil(4.1));

// Arredondamento padrão        
console.log(Math.round(4.5));

// Número aleatório entre 0 e 1
console.log(Math.random());

// Número aleatório entro 0 e 10
console.log(Math.floor(Math.random() * 10));

// Potência: 2 elevado a 3
console.log(Math.pow(2, 3)); // 8

// Raiz quadrado de 25
console.log(Math.sqrt(25)); // 5

// Valor mínimo e máximo entre números
console.log(Math.min(3, 9, 2)); // 2
console.log(Math.max(3, 9, 2)); // 9


// ===========================================================
// ==================== MANIPULANDO O DOM ====================

// Usando innerHTML
document.getElementById("conteudo").innerHTML = "<p>Olá, mundo!</p>";

let valor = document.getElementById("conteudo").innerHTML;
console.log(valor);

// Usando o setAtributte
document.getElementById("foto").setAttribute("src", "News.png");

// Usando o getAttribute
console.log(document.getElementById("foto").getAttribute("src"));

// Styles
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.width = "100px";
document.getElementById("foto").style.height = "100px";

// Criando um botão para uma função
function aumentaTamanho() {
    let widthImagem = (document.getElementById("foto").style.width).slice(0, -2);
    let heightImagem = (document.getElementById("foto").style.height).slice(0, -2);
    
    document.getElementById("foto").style.width = widthImagem * 2 + "px";
    document.getElementById("foto").style.height = heightImagem * 2 + "px";
}

function diminuiTamanho() {
    let widthImagem = (document.getElementById("foto").style.width).slice(0, -2);
    let heightImagem = (document.getElementById("foto").style.height).slice(0, -2);
    
    document.getElementById("foto").style.width = widthImagem * 5 / 10 + "px";
    document.getElementById("foto").style.height = heightImagem * 5 / 10 + "px";
}