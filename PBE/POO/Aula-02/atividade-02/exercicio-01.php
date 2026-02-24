<?php
class Pessoa {
    private $nome = "Pietro";
    private $idade = 17;
}

class Funcionario extends Pessoa {
    protected $salario;

    public function calcularBonus() {

    }

}

class Gerente extends Funcionario {

    public function __construct() {
        $this->salario = 5000;
    }

    public function calcularBonus() {
        $this->salario += $this->salario * 20 / 100;
        return $this->salario;
    }
}

class Desenvolvedor extends Funcionario {
    
    public function __construct() {
        $this->salario = 6000;
    }

    public function calcularBonus() {
        $this->salario += $this->salario * 20 / 100;
        return $this->salario;
    }
}

$gerente = new Gerente();

echo "Salário do gerente: R$ " . $gerente->calcularBonus();

echo "<br/>";

$desenvolvedor = new Desenvolvedor();

echo "Salário do desenvolvedor: R$ " . $desenvolvedor->calcularBonus();

?>