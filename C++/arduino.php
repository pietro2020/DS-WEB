<?php

    class Arduino{
        private $porta;

        public function __construct($porta){
            $this->porta = $porta;
        }

        private function enviarComando($comando){
        $cmd = "echo " . $comando . " > " . $this->porta;
        exec($cmd);
        }

        // o EXEC() executa o comando no terminal do sistema operacional 
    }

public function ligar(){
    $this->enviarComando("L");
}

public function desligar(){
    $this->enviarComando("D");
}

?>