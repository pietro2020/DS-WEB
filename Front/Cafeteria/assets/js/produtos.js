
var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")
var inputNome = document.getElementById("nome");
var inputPreco = document.getElementById("preco");
var inputCategoria = document.getElementById("opcoesCategorias");

document.addEventListener('DOMContentLoaded', async () => {
    var requisicao = await fetch('http://localhost/cafeteria-api/categorias');
    var resposta = await requisicao.json();
    var tabela = "";

    resposta.data.forEach(categoria => {
        tabela += `
        <option value='${categoria.id}'>${categoria.nome}</option>
        `
    });

    inputCategoria.innerHTML = tabela;
});

document.addEventListener('DOMContentLoaded', getProdutos)
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getProdutos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos")
    var resposta = await requisicao.json()

    //console.log(resposta)


    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.nomeCategoria}</td>
            <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    //console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="5" ><center>Produtos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;

}

async function postProduto() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
        method:  "POST",
        body:    JSON.stringify({ 
            nome: inputNome.value,
            preco: inputPreco.value,
            categoria_id: inputCategoria.value
        })
    })

    var resposta = await requisicao.json()
    //console.log(resposta)
    
    //Limpa o campo
    inputNome.value = ""
    inputPreco.value = ""

    getProdutos()
}


async function deleteProduto(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    //console.log(resposta)
 
    getProdutos()
}