<?php
// Obtener los valores del formulario usando GET
$nombre = $_GET['name'];
$noCuenta = $_GET['cuenta'];

// Validar si los campos fueron enviados
if (!empty($nombre) && !empty($noCuenta)) {
    echo "<p>Nombre: " . htmlspecialchars($nombre) . "</p>";
    echo "<p>No. de Cuenta: " . htmlspecialchars($noCuenta) . "</p>";
} else {
    echo "<p>Por favor, complete todos los campos.</p>";
}
?>
