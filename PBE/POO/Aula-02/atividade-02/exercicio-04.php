<?php

abstract class Produto {
    protected $nome;
    protected $preco;
    protected $estoque;

    public function __construct($nome, $preco, $estoque) {
        $this->nome = $nome;
        $this->preco = $preco;
        $this->estoque = $estoque;
    }

    public function calcularDesconto(){}
}

class Eletronico extends Produto {
    public function calcularDesconto() {
        if($this->estoque < 5){
            return $this->preco - $this->preco * 19 / 100;
        }
        return $this->preco - $this->preco * 10 / 100;
    }
}

class Roupas extends Produto {
    public function calcularDesconto() {
        if($this->estoque < 5){
            return $this->preco - $this->preco * 28 / 100;
        }
        return $this->preco - $this->preco * 20 / 100;
    }
}

$eletronico = new Eletronico("Smartphone", 1000, 10);
echo "Preço do eletrônico com desconto(padrão): R$ " . $eletronico->calcularDesconto();

echo "<br/>";

$roupa = new Roupas("Camisa", 100, 3);
echo "Preço da roupa com desconto(padrão e pouca quantidade): R$ " . $roupa->calcularDesconto();

?>