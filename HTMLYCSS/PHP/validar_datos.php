<?php

echo "<h1>Validación de datos</h1>";

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];

echo "<p><strong>Nombre:</strong> $nombre</p>";
echo "<p><strong>Email:</strong> $email</p>";

if(!empty($telefono)){
    echo "<p><strong>Telefono:</strong> $telefono</p>";
}else{
    echo "<p>No ingresaste teléfono</p>";
}

?>