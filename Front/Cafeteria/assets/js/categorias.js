
var divResposta = document.getElementById("resposta")


document.addEventListener('DOMContentLoaded', getCategorias)

async function getCategorias() {
    var requisicao = await fetch('http://localhost/cafeteria-api/categorias');
    var resposta = await requisicao.json();
    console.log(resposta);

    tabela = `<table>
                <tr>
                    <th>ID</th>
                    <th>Nomes</th>
                </tr>`
    resposta.forEach(categoria => {
        tabela += `
        <tr>
            <td>${categoria.id}</td>
            <td>${categoria.nome}</td>
        </tr>`
    });

    tabela += `</table>`;

    divResposta.innerHTML = tabela;

}