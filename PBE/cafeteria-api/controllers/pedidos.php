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
        if(!$id) {
            $resultado = $database->executeQuery('SELECT * FROM pedidos');
        } else {
            $resultado = $database->executeQuery('SELECT * FROM pedidos WHERE id = :id',
                [':id' => $id]
            );
        }
        $pedidos = $resultado->fetchAll();

        echo json_encode([
            'status' => 'success',
            'data'   => $pedidos
        ]);
        break;
    // -------------------------------------------------------
    // POST /categorias
    // Body: { "nome": "Bebidas" }
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = trim($body['nome']);

        if(!$nome){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }
        $database->executeQuery(
            "INSERT INTO pedidos (cliente) VALUES (:cliente)",
            [ ':cliente' => $nome ]
        );

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
            'DELETE FROM pedidos WHERE id = :id',
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