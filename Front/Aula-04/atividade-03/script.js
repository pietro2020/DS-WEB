var contadorItem = 0;

function cadastraAluno() {
    contadorItem++;

    let novoItem = document.createElement("li");
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let ra = document.getElementById("ra").value;
    let telefone = document.getElementById("telefone").value;
    let turma = document.getElementById("turmas").value;

    novoItem.textContent = contadorItem + " - " + `${nome} | ${email} | ${ra} | ${telefone} | ${turma}`;
    
    document.getElementById("lista").appendChild(novoItem);

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", `remover(${contadorItem})`);

    novoItem.appendChild(botaoRemover)
    novoItem.setAttribute("id", contadorItem);
}

function remover(itemLista) {
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}