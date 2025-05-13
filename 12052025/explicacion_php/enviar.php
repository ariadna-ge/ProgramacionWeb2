<!-- Solo es un ejemplo de como funciona php -->
<?php
    $nombreUsuario=$_POST['nombre'];
    $sql = "SELECT * FROM usuarios WHERE nombre = $nombreUsuario"
    resultado = $conn--> mysqli($sql);

    fetch_assoc(resultado);
?>
<h1>Hola como estas <?php echo $nombreUsuario; ?></h1>

<p>La dirección del usuario: <?php echo $nombreUsuario; ?> y su dirección es: <?php $dato=['direccion'];?></p>