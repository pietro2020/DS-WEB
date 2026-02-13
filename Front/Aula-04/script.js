var contadorItem = 0;

function adicionar() {
    contadorItem++;

    let novoItem = document.createElement("li");
    let novaTarefa = document.getElementById("novaTarefa").value;

    novoItem.textContent = contadorItem + " - " + novaTarefa;

    novoItem.setAttribute("id", contadorItem);

    
    document.getElementById("lista").appendChild(novoItem);
}

function remover(itemLista) {
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}