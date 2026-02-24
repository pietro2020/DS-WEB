<?php

class Veiculo {
    public $marca;
    public $modelo;
    private $velocidade;

    public function getVelocidade() {
        return $this->velocidade;
    }

    public function setVelocidade($velocidade) {
        $this->velocidade = $velocidade;
    }
}

class Carro extends Veiculo {
    public function acelerar() {
        echo "Pisando no acelerador... Velocidade antiga: " . $this->getVelocidade() . " km/h,";
        $this->setVelocidade($this->getVelocidade() + 10);
        echo " Nova velocidade: " . $this->getVelocidade() . " km/h<br>";
    }
}

class Moto extends Veiculo {
    public function acelerar() {
        echo "Girando a manopla... Velocidade antiga: " . $this->getVelocidade() . " km/h,";
        $this->setVelocidade($this->getVelocidade() + 20);
        echo " Nova velocidade: " . $this->getVelocidade() . " km/h<br>";
    }   
}

$carro = new Carro();
$carro->setVelocidade(50);
$carro->acelerar();

$moto = new Moto();
$moto->setVelocidade(30);
$moto->acelerar();
?>