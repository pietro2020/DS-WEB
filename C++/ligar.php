<?php

require 'arduino.php';

$arduino = new Arduino("COM3"); // Substitua "COM3" pela porta correta do seu Arduino
$arduino->ligar();

echo "LED ligado!";

?>