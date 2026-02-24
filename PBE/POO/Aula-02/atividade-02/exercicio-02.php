<?php

abstract class Animal {

    public function fazerSom(){}

    public function mover(){
        return "Anda";
    }

}

class Sapo extends Animal {

    public function fazerSom() {
        return "Croac-Croac!";
    }

}

class Cavalo extends Animal {

    public function fazerSom() {
        return "Iiiirrrrí!";
    }

}

class Tartaruga extends Animal {

    public function fazerSom() {
        return "Pshhh!";
    }

    public function mover() {
        return "Nada e " . parent::mover();
    }

}

$sapo = new Sapo();
echo $sapo->fazerSom() . "<br/>";
echo $sapo->mover() . "<br/>";

echo "-------------------------<br/>";

$cavalo = new Cavalo();
echo $cavalo->fazerSom() . "<br/>";
echo $cavalo->mover() . "<br/>";

echo "-------------------------<br/>";

$tartaruga = new Tartaruga();
echo $tartaruga->fazerSom() . "<br/>";
echo $tartaruga->mover() . "<br/>";

?>
