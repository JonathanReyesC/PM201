function obtenerInventarioCompartido() {

    if (!localStorage.getItem("productos_cafeteria")) {

        localStorage.setItem(
            "productos_cafeteria",
            JSON.stringify(productos)
        );
    }

    return JSON.parse(localStorage.getItem("productos_cafeteria"));
}

function mostrarMenuCliente() {

    let inventario = obtenerInventarioCompartido();

    let disponibles = inventario.filter(
        producto => producto.cantidad > 0
    );

    let arregloHTML = disponibles.map((prod, index) => {

        let etiquetaPromo = prod.promo
            ? '<span class="btn-promo">PROMOCIÓN</span>'
            : '';

        return `
            <div class="item bg-white border p-2 mb-2 rounded shadow-sm">

                <div>

                    <strong>${prod.nombre}</strong>

                    ${etiquetaPromo}

                    <br>

                    <small class="text-muted">

                        Precio:
                        <strong class="text-danger">
                            $${prod.precio}
                        </strong>

                        |

                        Stock: ${prod.cantidad}

                    </small>

                </div>

                <button
                    class="btn btn-success btn-sm"
                    onclick="crearNuevoPedido(${index})"
                >
                    Pedir
                </button>

            </div>
        `;
    });

    let contenedorMenu = document.getElementById(
        'vista-menu-cliente'
    );

    contenedorMenu.innerHTML = "";

    arregloHTML.forEach(html => {
        contenedorMenu.innerHTML += html;
    });
}

function crearNuevoPedido(idProducto) {

    let inventario = obtenerInventarioCompartido();

    let productoComprado = inventario[idProducto];

    inventario[idProducto].cantidad -= 1;

    localStorage.setItem(
        "productos_cafeteria",
        JSON.stringify(inventario)
    );

    let misPedidos = JSON.parse(
        localStorage.getItem('bd_pedidos2')
    ) || [];

    misPedidos.push(productoComprado);

    localStorage.setItem(
        'bd_pedidos2',
        JSON.stringify(misPedidos)
    );

    mostrarMenuCliente();
    actualizarMisPedidos();
    calcularCajaAutomatico();
}

function actualizarMisPedidos() {

    let misPedidos = JSON.parse(
        localStorage.getItem('bd_pedidos2')
    ) || [];

    let contenedor = document.getElementById(
        'vista-pedidos-cliente'
    );

    contenedor.innerHTML = "";

    misPedidos.forEach((pedido, index) => {

        contenedor.innerHTML += `
            <div class="item bg-white border shadow-sm">

                <span>
                    Pedido ${index + 1}: ${pedido.nombre}
                </span>

                <span class="fw-bold">
                    $${pedido.precio}
                </span>

            </div>
        `;
    });
}

function limpiarTodoPrueba() {

    localStorage.removeItem('bd_pedidos2');
    localStorage.removeItem('productos_cafeteria');

    obtenerInventarioCompartido();

    mostrarMenuCliente();
    actualizarMisPedidos();
    calcularCajaAutomatico();
}

window.addEventListener('DOMContentLoaded', () => {

    mostrarMenuCliente();
    actualizarMisPedidos();
});