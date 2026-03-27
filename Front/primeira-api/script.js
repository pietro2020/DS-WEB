const divResposta = document.getElementById("resposta");

var botaoHello = document.getElementById("botaoHello");
var botaoEcho = document.getElementById("botaoEcho");

botaoHello.addEventListener("click", requisicaoHello);
botaoEcho.addEventListener("click", requisicaoEcho);

async function requisicaoHello() {
    var requisicao = await fetch('http://localhost/primeira-api/hello');
    var resposta = await requisicao.json();
    console.log(resposta);

    divResposta.innerHTML = "Status: " + resposta.status + "<br>Mensagem: " + resposta.message;
}

async function requisicaoEcho() {
    var echo = document.getElementById("inputEcho").value;

    var requisicao = await fetch('http://localhost/primeira-api/echo', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message: echo})
    });
    var resposta = await requisicao.json();
    console.log(resposta.echo.message);

    divResposta.innerHTML = "Status: " + resposta.status + "<br>Mensagem: " + resposta.echo.message;
}