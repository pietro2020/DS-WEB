const params = new URLSearchParams(window.location.search);
const id = params.get("id");

var titulo = document.getElementById("titulo");

var divResposta = document.getElementById("resposta");

var inputProduto = document.getElementById("produto");
var inputQuantidade = document.getElementById("quantidade");

document.addEventListener('DOMContentLoaded', getPedido)
document.getElementById("botaoEnviar").addEventListener('click', postPedido)

document.addEventListener('DOMContentLoaded', async () => {

    var requisicao = await fetch(`http://localhost/cafeteria-api/pedidos/${id}`);
    var resposta = await requisicao.json();

    titulo.innerHTML = `Pedido #${id} - ${resposta.data[0].cliente}`;
});

document.addEventListener('DOMContentLoaded', async () => {

    var requisicao = await fetch('http://localhost/cafeteria-api/produtos');
    var resposta = await requisicao.json();
    var tabela = "";

    resposta.data.forEach(produto => {
        tabela += `
        <option value='${produto.id}'>${produto.nome} - R$${produto.preco}</option>
        `
    });

    inputProduto.innerHTML = tabela;
});


async function getPedido() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido/" + id)
    var resposta = await requisicao.json()
    var total = 0

    //console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.produto_nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.preco}</td>
            <td>
                <button onclick="deletePedido(${item.id})">Deletar</button>
            </td>
        </tr>
    `).join("");


    //Calcular o total
    
    resposta.data.forEach(item => {
        total += parseFloat(item.preco);
    });

    //console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="5" ><center>Categorias Cadastradas</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
        <div>Total: R$ ${total.toFixed(2)}</div>
    `;
}

async function postPedido() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido", {
        method:  "POST",
        body:    JSON.stringify({
                pedido_id: id,
                produto_id: inputProduto.value,
                quantidade: inputQuantidade.value
            })
    })

    console.log(requisicao)

    var resposta = await requisicao.json()
    
    
    //Limpa o campo
    inputProduto.value = "";
    inputQuantidade.value = "";

    getPedido();
}


async function deletePedido(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    //console.log(resposta)
 
    getPedido()
}