/*function paraAzul() {
    let body = document.getElementById("body");
    body.style.backgroundColor = "blue";
    document.getElementById("titulo").innerHTML = "Fundo Azul";
}

function paraVerde() {
    let body = document.getElementById("body");
    body.style.backgroundColor = "green";
    document.getElementById("titulo").innerHTML = "Fundo Verde";
}

function paraVermelho() {
    let body = document.getElementById("body");
    body.style.backgroundColor = "red";
    document.getElementById("titulo").innerHTML = "Fundo Vermelho";
}
*/
function mudarCor(cor) {
    let body = document.getElementById("body");
    body.style.backgroundColor = cor;
    document.getElementById("titulo").innerHTML = "Background color: " + cor;
}