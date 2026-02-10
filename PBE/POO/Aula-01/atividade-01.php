<?php

class Garrafinha {

    public $cor;
    public $tamanho;
    public $forma;
    public $capacidade;
    public $marca;

    public function __construct($cor, $tamanho, $forma, $capacidade, $marca) {
        $this->cor = $cor;
        $this->tamanho = $tamanho;
        $this->forma = $forma;
        $this->capacidade = $capacidade;
        $this->marca = $marca;
    }

    public function beberAgua() {

        return "Bebendo água na garrafinha da " . $this->marca . "<br>";

    }

    public function encherDeAgua() {
        
        return "Enchendo de água na garrafinha de capacidade " . $this->capacidade . "ml<br>";

    }

    public function esvaziar() {

        return "Esvaziar garrafinha de tamanho " . $this->tamanho . "cm<br>";

    }

}

class Bola {
    
    public $cor;
    public $volume;
    public $marca;
    public $esporte;
    public $peso;

    public function __construct($cor, $volume, $marca, $esporte, $peso) {
        $this->cor = $cor;
        $this->volume = $volume;
        $this->marca = $marca;
        $this->esporte = $esporte;
        $this->peso = $peso;
    }

    public function quicar() {

        return "Você quicou a bola de peso " . $this->peso . "g<br>";

    }

    public function chutar() {

        return "Você chutou a bola da marca " . $this->marca . "<br>";

    }

    public function encher() {
        
        return "Você encheu a bola de volume " . $this->volume . "cm³<br>";

    }

}

class Cabelo {

    public $comprimento;
    public $cor;
    public $tipo;
    public $calvice;
    public $corte;

    public function __construct($comprimento, $cor, $tipo, $calvice, $corte) {
        $this->$comprimento = $comprimento;
        $this->cor = $cor;
        $this->tipo = $tipo;
        $this->calvice = $calvice;
        $this->corte = $corte;
    }

    public function lavar() {

        return "Você lavou o cabelo de comprimento " . $this->comprimento . "cm<br>";

    }

    public function cortar() {

        return "Você cortou o cabelo de tipo " . $this->tipo . "<br>";

    }

    public function pentear() {

        return "Você penteou o cabelo da cor " . $this->cor . "<br>";

    }

}

class Estojo {

    public $capacidade;
    public $tamanho;
    public $ziperes;
    public $cor;
    public $aberto;

    public function __construct($capacidade, $tamanho, $ziperes, $cor, $aberto) {
        $this->capacidade = $capacidade;
        $this->tamanho = $tamanho;
        $this->ziperes = $ziperes;
        $this->cor = $cor;
        $this->aberto = $aberto;
    }

    public function abrir() {

        $this->aberto = true;
        return "Você abriu o estojo de cor " . $this->cor . "<br>";

    }

    public function guardarMaterial() {

        return "Você guardou seu material com o estojo " . $this->aberto . "<br>";

    }

    public function fechar() {

        $this->aberto = false;
        return "Você freturnu o estojo com " . $this->ziperes . " zíperes<br>";

    }

}

class Caderno {

    public $material;
    public $folhas;
    public $desenhoNaCapa;
    public $tamanho;
    public $tipo;

    public function __construct($material, $folhas, $desenhoNaCapa, $tamanho, $tipo) {
        $this->material = $material;
        $this->folhas = $folhas;
        $this->desenhoNaCapa = $desenhoNaCapa;
        $this->tamanho = $tamanho;
        $this->tipo = $tipo;
    }

    public function abrir() {

        return "Você abriu o caderno com desenho na capa " . $this->desenhoNaCapa . "<br>";

    }

    public function escrever() {

        return "Você escreveu no seu caderno de material " . $this->material . "<br>";

    }

    public function folhar() {

        return "Você folhou o seu caderno de " . $this->folhas . " folhas<br>";

    }

}

// ------------------------------ GARRAFINHA ------------------------------

echo "<h2>Instanciando Garrafinha</h2>";

$minhaGarrafinha = new Garrafinha("azul", 25, "Cilindro", 1000, "Stanley");
echo $minhaGarrafinha->beberAgua();

$suaGarrafinha = new Garrafinha("verde", 10, "Cilindro", 200, "NaoSeiOutra");
echo $minhaGarrafinha->encherDeAgua();

$nossaGarrafinha = new Garrafinha("laranja", 15, "Cilindro", 5000, "Crystal");
echo $minhaGarrafinha->esvaziar();


// ------------------------------ BOLA ------------------------------

echo "<h2>Instanciando Bola</h2>";

$minhaBola = new Bola("azul", 5000, "Topper", "Futebol", 410);
echo $minhaBola->quicar();

$suaBola = new Bola("vermelha", 3000, "Nike", "Basquete", 600);
echo $suaBola->chutar();

$nossaBola = new Bola("amarela", 4000, "Penalty", "Vôlei", 450);
echo $nossaBola->encher();

// ------------------------------ CABELO ------------------------------

echo "<h2>Instanciando Cabelo</h2>";

$meuCabelo = new Cabelo(30, "preto", "liso", false, "degradê");
echo $meuCabelo->lavar();

$seuCabelo = new Cabelo(20, "loiro", "cacheado", false, "repicado");
echo $seuCabelo->cortar();

$nossoCabelo = new Cabelo(15, "castanho", "ondulado", false, "reto");
echo $nossoCabelo->pentear();

// ------------------------------ ESTOJO ------------------------------

echo "<h2>Instanciando Estojo</h2>";

$meuEstojo = new Estojo(20, "médio", 2, "azul", true);
echo $meuEstojo->abrir();

$seuEstojo = new Estojo(15, "pequeno", 1, "vermelho", false);
echo $seuEstojo->guardarMaterial();

$nossoEstojo = new Estojo(30, "grande", 3, "verde", true);
echo $nossoEstojo->fechar();

// ------------------------------ CADERNO ------------------------------

echo "<h2>Instanciando Caderno</h2>";

$meuCaderno = new Caderno("plástico", 96, "super-herói", "A4", "espiral");
echo $meuCaderno->abrir();

$seuCaderno = new Caderno("papel", 200, "flor", "A5", "brochura");
echo $seuCaderno->escrever();

$nossoCaderno = new Caderno("couro", 150, "animal", "A4", "espiral");
echo $nossoCaderno->folhar();
?>