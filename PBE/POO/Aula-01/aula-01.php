<?php

class Pessoa {

    public $nome; // Atributo

    public function falar() { // Método

        return "O meu nome é " . $this->nome;

    }

}

$pietro = new Pessoa();
$pietro->nome = "Pietro Vono";
echo $pietro->falar();
?>