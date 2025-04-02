let inventario = [];
function mostrarMenu() {
    return parseInt(prompt(
        "OPCIONES DISPONIBLES: \n"+
        "1. Agregar producto \n"+
        "2. Mostrar todos los productos \n"+
        "3. Buscar un producto por nombre \n"+
        "4. Salir \n" +
        "ELIGE UNA OPCIÓN"
    ));
}

function agregarProducto() {
    let nombreProducto = prompt("Introduce el nombre del producto");
    let cantidadProducto = parseInt(prompt("Introduce la cantidad del producto"));
    let precioProducto = parseInt(prompt("Introduce el precio del producto"));

    if (cantidadProducto >= 0 && precioProducto > 0) {
        let producto={
            nombre: nombreProducto,
            cantidad: cantidadProducto,
            precio: precioProducto
        };
        inventario.push(producto);
        alert("Producto agregado :)");
    }else{
        alert("Recuerda que la cantidad y el precio tiene que ser positivo :)");
    }
}

function mostrarProducto() {
    if (inventario.length === 0) {
        alert("¡NO HAY PRODUCTOS EN EL INVENTARIO!");
    }else{
        let mensaje = "PRODUCTOS DEL INVENTARIO \n";
        for (let i = 0; i < inventario.length; i++) {
            mensaje += `Producto ID: ${i + 1} \n` +
                        `Nombre:  ${inventario[i].nombre} \n`+
                        `Precio: ${inventario[i].precio} \n`+
                        `Cantidad: ${inventario[i].cantidad} \n`+
                        `--------- \n`;
    }
    alert(mensaje);
}
}

function buscarProducto() {
    let productoNombre = prompt("Introduce el nombre del producto");
    let productoEncontrado = inventario.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

    if (productoEncontrado) {
        let mensaje = "PRODUCTO ENCONTRADO :) \n";
        mensaje += `Nombre: ${productoEncontrado.nombre} \n` +
                   `Precio: ${productoEncontrado.precio} \n` +
                   `Cantidad: ${productoEncontrado.cantidad} \n`;
        alert(mensaje);
    } else {
        alert("PRODUCTO NO ENCONTRADO :(");
    }
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();            
                break;
            case 2:
                mostrarProducto();            
                break;
            case 3:
                buscarProducto();            
                break;
            case 4:
                alert("¡Saliendo del programa! :)");
                continuar = false;
                break;
            default:
                alert("Opción no válida :( ¡Intenta de nuevo!")
        }
    }
    alert("Programa finalizado...")
}

iniciarPrograma();