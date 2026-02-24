<?php
class Pessoa {
    public $nome = "Rasmus";
    protected $idade = 48;
    private $senha = "12345";

    public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->senha . "<br/>";
    }
}

class Programador extends Pessoa {

    public function verDados(){

        //Exibe a Classe atual
        echo get_class($this) . "<br/>";
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->senha . "<br/>";
    }
}

// Instanciando a classe filho
$pietro = new Programador();
//echo $objeto->nome . "<br/>";
$pietro->verDados();

// Instanciando a classe pai
$ferreira = new Pessoa();
$ferreira->verDados();

?>