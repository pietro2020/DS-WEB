var contadorItem = 0;

function adicionar() {
    contadorItem++;

    // Cria um novo item <li>
    let novoItem = document.createElement("li");

    // Adiciona um conteúdo de texto no item criado(<li>)
    novoItem.textContent = contadorItem + " - " + prompt("Digite o nome da tarefa");

    // Adiciona um atributo id com o valor item1 para o item
    novoItem.setAttribute("id", contadorItem);

    // Cria botão de remover
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover"; // Adiciona texto ao botão
    botaoRemover.setAttribute("onclick", `remover(${contadorItem})`); // Adiciona uima função ao botão

    novoItem.appendChild(botaoRemover)
    // Adicionao item como filho do item com id lista
    document.getElementById("lista").appendChild(novoItem);
}

function remover(itemLista) {
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}