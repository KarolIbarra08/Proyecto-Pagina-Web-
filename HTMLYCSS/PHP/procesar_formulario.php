<?php

echo "<h1>Datos recibidos del formulario</h1>";

$nombre = $_POST['nombre'];
$password = $_POST['password'];
$mail = $_POST['mail'];
$nacimiento = $_POST['nacimiento'];
$adiccion = $_POST['adiccion'];
$color = $_POST['color_preferido'];
$comics = $_POST['comics'];

echo "<p><strong>Nombre:</strong> $nombre</p>";
echo "<p><strong>Contraseña:</strong> $password</p>";
echo "<p><strong>Correo:</strong> $mail</p>";
echo "<p><strong>Fecha de nacimiento:</strong> $nacimiento</p>";
echo "<p><strong>Cómics a la semana:</strong> $adiccion</p>";
echo "<p><strong>Color favorito:</strong> $color</p>";
echo "<p><strong>Cantidad de cómics:</strong> $comics</p>";

?>