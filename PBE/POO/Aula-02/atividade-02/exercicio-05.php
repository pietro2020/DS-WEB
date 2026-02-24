<?php

class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}

class CPF extends Documento {
    function validar() {
 
    // Extrai somente os números
    $cpf = preg_replace( '/[^0-9]/is', '', $this->getNumero() );
     
    // Verifica se foi informado todos os digitos corretamente
    if (strlen($cpf) != 11) {
        return false;
    }

    // Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
    if (preg_match('/(\d)\1{10}/', $cpf)) {
        return false;
    }

    // Faz o calculo para validar o CPF
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) {
            $d += $cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$c] != $d) {
            return false;
        }
    }
    return true;

}
}

$cpf = new CPF();
$cpf->setNumero("123.456.789-09");
echo "O número de CPF " . $cpf->getNumero();
if($cpf->validar()) {
    echo " é válido!";
} else {
    echo " é inválido!";
}

?>