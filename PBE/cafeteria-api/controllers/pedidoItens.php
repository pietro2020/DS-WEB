<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) {
    $id = $segments[2];
} else {
    $id = null;
}

switch($method){
    // -------------------------------------------------------
    // GET /categorias 
    // GET /categorias/1
    // -------------------------------------------------------
    case 'GET':
        $resultado = $database->executeQuery('SELECT pedido_itens.*, produtos.nome AS produto_nome FROM pedido_itens INNER JOIN produtos ON pedido_itens.produto_id = produtos.id WHERE pedido_id = :id',
        [':id' => $id]);
        $pedidoItens = $resultado->fetchAll();

        echo json_encode([
            'status' => 'success',
            'data'   => $pedidoItens
        ]);
        break;
    // -------------------------------------------------------
    // POST /categorias
    // Body: { "nome": "Bebidas" }
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $pedido = trim($body['pedido_id']);
        $produto = trim($body['produto_id']);
        $quantidade = trim($body['quantidade']);

        if(!$produto || !$quantidade || !$pedido){
            echo json_encode([
                'status' => 'error',
                'message' => 'Algum campo não informado'
            ]);
            break;
        }

        $preco = $database->executeQuery(
            "SELECT preco FROM produtos WHERE id = :id",
            [ 
                ':id' => $produto,
            ]);

        $resultado = $preco->fetch();
        $precoProduto = (float) $resultado['preco'];

        $precoTotal = $precoProduto * $quantidade;

        $database->executeQuery(
            "INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco) VALUES (:pedido_id, :produto_id, :quantidade, :preco)",
            [ 
                ':pedido_id'         => $pedido,
                ':produto_id'        => $produto, 
                ':quantidade'        => $quantidade,
                ':preco'             => $precoTotal
            ]);

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Pedido cadastrado com sucesso',
            'idPedido' => $database->lastInsertId()
        ]);
        
        break;
    // -------------------------------------------------------
    // PUT /categorias/1
    // Body: { "nome": "Salgados" }
    // -------------------------------------------------------
    case 'PUT':
        
        break;
    // -------------------------------------------------------
    // DELETE /categorias/1
    // -------------------------------------------------------
    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode([
                'status'  => 'error',
                'message' => 'Informe o id do Pedido na URL.'
            ]);
            break;
        }
 
        $stmt = $database->executeQuery(
            'DELETE FROM pedido_itens WHERE id = :id',
            [':id' => $id]
        );
 
        if ($stmt->rowCount() === 0) {
            http_response_code(404);
            echo json_encode([
                'status'  => 'error',
                'message' => 'Pedido não encontrado.'
            ]);
            break;
        }
 
        echo json_encode([
            'status'  => 'success',
            'message' => 'Pedido removido com sucesso.'
        ]);
        break;
    // -------------------------------------------------------
    // Método não permitido
    // -------------------------------------------------------
    default:
        http_response_code(405);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Método não permitido.'
        ]);
}


?>