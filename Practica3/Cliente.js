// Obtiene el inventario base o inicializa el LocalStorage si esta vacio
function obtenerInventarioCompartido() {
    const productosIniciales = [
        { nombre: "Cafe Americano", precio: 35, cantidad: 10, promo: true },
        { nombre: "Capuccino", precio: 40, cantidad: 8, promo: false },
        { nombre: "Chocolate Abuelita", precio: 40, cantidad: 15, promo: false },
        { nombre: "Concha de Vainilla", precio: 10, cantidad: 20, promo: true },
        { nombre: "Dona de Chocolate", precio: 12, cantidad: 10, promo: false }
    ];
    
    if (!localStorage.getItem("productos_cafeteria")) {
        localStorage.setItem("productos_cafeteria", JSON.stringify(productosIniciales));
    }
    return JSON.parse(localStorage.getItem("productos_cafeteria"));
}

// Muestra los productos disponibles usando filter, map y forEach
function mostrarMenuCliente() {
    let inventario = obtenerInventarioCompartido();
    
    // Filtro para mostrar solo productos con stock disponible
    let disponibles = inventario.filter(producto => producto.cantidad > 0);

    // Uso de map() para transformar los objetos del array en cadenas HTML
    let arregloHTML = disponibles.map((prod, index) => {
        let etiquetaPromo = prod.promo ? '<span class="btn-promo">PROMOCION</span>' : '';
        
        return `
            <div class="item bg-white border p-2 mb-2 rounded shadow-sm">
                <div>
                    <strong>${prod.nombre}</strong> ${etiquetaPromo} <br>
                    <small class="text-muted">Precio: $${prod.precio} - Stock: ${prod.cantidad} pz</small>
                </div>
                <button class="btn btn-success btn-sm" onclick="crearNuevoPedido(${index})">Pedir</button>
            </div>
        `;
    });

    // Uso de forEach() para insertar cada bloque de HTML en la vista
    let contenedorMenu = document.getElementById('vista-menu-cliente');
    if (!contenedorMenu) return;
    contenedorMenu.innerHTML = ""; 
    
    arregloHTML.forEach(htmlString => {
        contenedorMenu.innerHTML += htmlString;
    });
}

// Guarda la seleccion del cliente en el LocalStorage y descuenta el stock
function crearNuevoPedido(idProducto) {
    let inventario = obtenerInventarioCompartido();
    let productoComprado = inventario[idProducto];

    if (productoComprado) {
        // Restar una unidad del stock disponible
        inventario[idProducto].cantidad -= 1;
        localStorage.setItem("productos_cafeteria", JSON.stringify(inventario));

        // Insertar el producto comprado en la lista de pedidos generales
        let misPedidos = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
        misPedidos.push(productoComprado);
        localStorage.setItem('bd_pedidos2', JSON.stringify(misPedidos));

        // Actualizar la interfaz del cliente inmediatamente
        mostrarMenuCliente();
        actualizarMisPedidos(); 
        
        // Ejecutar de forma automatica la operacion de la Caja si la funcion existe
        if (typeof calcularCajaAutomatico === "function") {
            calcularCajaAutomatico();
        }
    }
}

// Muestra el listado de compras realizadas en la interfaz del cliente
function actualizarMisPedidos() {
    let misPedidos = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
    let contenedor = document.getElementById('vista-pedidos-cliente');
    if (!contenedor) return;
    contenedor.innerHTML = "";

    misPedidos.forEach((pedido, index) => {
        contenedor.innerHTML += `
            <div class="item bg-white border border-light shadow-sm text-secondary" style="font-size: 0.9rem;">
                <span>Pedido ${index + 1}: ${pedido.nombre}</span>
                <span class="fw-bold text-dark">$${pedido.precio}</span>
            </div>`;
    });
}

// Limpia el almacenamiento de pruebas para empezar desde cero
function limpiarTodoPrueba() {
    localStorage.removeItem('bd_pedidos2');
    localStorage.removeItem('productos_cafeteria');
    obtenerInventarioCompartido();
    mostrarMenuCliente();
    actualizarMisPedidos();
    if (typeof calcularCajaAutomatico === "function") {
        calcularCajaAutomatico();
    }
}

// Carga inicial al iniciar la pagina
window.addEventListener('DOMContentLoaded', () => {
    mostrarMenuCliente();
    actualizarMisPedidos();
});