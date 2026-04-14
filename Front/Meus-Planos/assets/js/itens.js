
var divResposta = document.getElementById("tabela")

var inputNome = document.getElementById("nome");
var inputCategoria = document.getElementById("opcoesItens");


var inputItens = document.getElementById("opcoesItens");

document.addEventListener('DOMContentLoaded', async () => {
    var requisicao = await fetch('http://localhost/meus-planos-api/categorias');
    var resposta = await requisicao.json();
    var tabela = "";

    resposta.data.forEach(categoria => {
        tabela += `
        <option value='${categoria.id}'>${categoria.nome}</option>
        `
    });

    inputItens.innerHTML = tabela;
});

document.addEventListener('DOMContentLoaded', getItens)
document.getElementById("botaoEnviar").addEventListener('click', postItem)

async function getItens() {
    
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/")
    
    var resposta = await requisicao.json()

    //console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>
                <input type="checkbox"
                ${item.feito == 1 ? "checked" : ""}
                onchange="putFeito(${item.id}, this.checked)">
            </td>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.categoria_nome}</td>
            <td>
                <button onclick="deleteItem(${item.id})">Deletar</button>
            </td>
        </tr>
    `).join("");
    
    //console.log(linhas)
    divResposta.innerHTML = `
        <table class="tabela">
            <thead>
                <tr>
                    <th colspan="5" ><center>Categorias Cadastradas</center></th>
                </tr>
                <tr>
                    <th>Status</th>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categorias</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}

async function postItem() {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens", {
        method:  "POST",
        body:    JSON.stringify({
            nome: inputNome.value,
            categoria_id: inputCategoria.value
         })
    })

    var resposta = await requisicao.json()
    //console.log(resposta)
    
    //Limpa o campo
    inputNome.value = ""

    getItens()
}


async function putFeito(id, conclu) {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method:  "PUT",
        body:    JSON.stringify({
            feito: conclu == true ? 1 : 0
         })
    })

    var resposta = await requisicao.json()

    getItens()
}


async function deleteItem(id) {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    //console.log(resposta)
 
    getItens()
}