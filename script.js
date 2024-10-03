// Variables globales
    var carrito = [];
    var totalCompra = 0;

    // Función para agregar productos al carrito
    function agregarAlCarrito(producto, precio) {
        // Crear un nuevo elemento de la lista
        var nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = producto + " - $" + precio + ' <button onclick="eliminarDelCarrito(this, ' + precio + ')">Eliminar</button>';

        // Agregar el elemento al DOM
        document.getElementById("listaCarrito").appendChild(nuevoItem);

        // Actualizar el total del carrito
        totalCompra += precio;
        document.getElementById("total").textContent = totalCompra;

        // Agregar el producto a la lista del carrito
        carrito.push({ producto, precio });
    }

    // Función para eliminar productos del carrito
    function eliminarDelCarrito(elemento, precio) {
        // Eliminar el elemento de la lista en el DOM
        elemento.parentElement.remove();

        // Actualizar el total del carrito
        totalCompra -= precio;
        document.getElementById("total").textContent = totalCompra;
    }