const tamanho = 20;

let x = 100;
let y = 100;

let direcaoX = tamanho;
let direcaoY = 0;

let corpo = [{ x: x, y: y }];

const maca = document.querySelector(".maca");

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        direcaoX = 0;
        direcaoY -= tamanho;
    }
    if (e.key === "ArrowDown") {
        direcaoX = 0;
        direcaoY += tamanho;
    }
    if (e.key === "ArrowLeft") {
        direcaoX -= tamanho;
        direcaoY = 0;
    }
    if (e.key === "ArrowRight") {
        direcaoX += tamanho;
        direcaoY = 0;
    }
});

function mover() {

    x += direcaoX;
    y += direcaoY;

    corpo.unshift({ x: x, y: y });

    // se NÃO comeu maçã, remove o último
    if (x != macaX || y != macaY) {
        corpo.pop();
    } else {
        gerarMaca();
    }

    desenhar();
}

function desenhar() {

    document.querySelectorAll(".cobrinha").forEach(function(el) {
        el.remove();
    });

    for (let i = 0; i < corpo.length; i++) {

        let parte = document.createElement("div");
        parte.className = "cobrinha";
        parte.style.left = corpo[i].x + "px";
        parte.style.top = corpo[i].y + "px";

        document.body.appendChild(parte);
    }
}

let macaX = 200;
let macaY = 200;

function gerarMaca() {
    macaX = Math.floor(Math.random() * 20) * tamanho;
    macaY = Math.floor(Math.random() * 20) * tamanho;

    maca.style.left = macaX + "px";
    maca.style.top = macaY + "px";
}

gerarMaca();
setInterval(mover, 150);