<?php

echo "<h1>Datos enviados con método GET</h1>";

if(isset($_GET['destino1'])){
    echo "<p>Visitaste: " . $_GET['destino1'] . "</p>";
}

if(isset($_GET['destino2'])){
    echo "<p>Visitaste: " . $_GET['destino2'] . "</p>";
}

if(isset($_GET['destino3'])){
    echo "<p>Visitaste: " . $_GET['destino3'] . "</p>";
}

if(isset($_GET['sexo'])){
    echo "<p><strong>Genero:</strong> " . $_GET['sexo'] . "</p>";
}

if(isset($_GET['telefono'])){
    echo "<p><strong>Telefono:</strong> " . $_GET['telefono'] . "</p>";
}

?>