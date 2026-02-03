<?php

class Garrafinha {

    public $cor;
    public $tamanho;
    public $forma;
    public $capacidade;
    public $marca;

    public function beberAgua() {

        return "Bebendo água na garrafinha da " . $this->marca;

    }

    public function encherDeAgua() {
        
        return "Enchendo de água na garrafinha de capacidade " . $this->capacidade;

    }

    public function esvaziar() {

        return "Esvaziar garrafinha de tamanho " . $this->tamanho;

    }

}

class Bola {
    
    public $cor;
    public $volume;
    public $marca;
    public $esporte;
    public $peso;

    public function quicar() {

        return "Você quicou a bola de peso " . $this->peso;

    }

    public function chutar() {

        return "Você chutou a bola da marca " . $this->marca;

    }

    public function encher() {
        
        return "Você encheu a bola de volume " . $this->volume;

    }

}

class Cabelo {

    public $comprimento;
    public $cor;
    public $tipo;
    public $calvice;
    public $corte;

    public function lavar() {

        return "Você lavou o cabelo de comprimento " . $this->comprimento;

    }

    public function cortar() {

        return "Você cortou o cabelo de tipo " . $this->tipo;

    }

    public function pentear() {

        return "Você penteou o cabelo da cor " . $this->cor;

    }

}

class Estojo {

    public $capacidade;
    public $tamanho;
    public $ziperes;
    public $cor;
    public $aberto;

    public function abrir() {

        return "Você abriu o estojo de cor " . $this->cor;

    }

    public function guardarMaterial() {

        return "Você guardou seu material com o estojo " . $this->aberto;

    }

    public function fechar() {

        return "Você freturnu o estojo com " . $this->ziperes . " zíperes";

    }

}

class Caderno {

    public $material;
    public $folhas;
    public $desenhoNaCapa;
    public $tamanho;
    public $tipo;

    public function abrir() {

        return "Você abriu o caderno com desenho na capa " . $this->desenhoNaCapa;

    }

    public function escrever() {

        return "Você escreveu no seu caderno de material " . $this->material;

    }

    public function folhar() {

        return "Você folhou o seu caderno de " . $this->folhas . " folhas";

    }

}

$meuCaderno = new Caderno();
$meuCaderno->folhas = 96;
echo $meuCaderno->folhar();
?>