function obtenerInventarioCompartido() {
    if (!localStorage.getItem("productos_cafeteria")) localStorage.setItem("productos_cafeteria", JSON.stringify(productos));
    return JSON.parse(localStorage.getItem("productos_cafeteria"));
}

function mostrarMenuCliente() {
    let inventario = obtenerInventarioCompartido();
    let disponibles = inventario.filter(producto => producto.cantidad > 0);

    let arregloHTML = disponibles.map((prod) => {
        let etiquetaPromo = prod.promo ? '<span class="btn-promo">PROMOCIÓN</span>' : '';
        return `
            <div class="item bg-white border p-2 mb-2 rounded shadow-sm">
                <div>
                    <strong>${prod.nombre}</strong> ${etiquetaPromo}<br>
                    <small class="text-muted">Precio: <strong class="text-danger">$${prod.precio}</strong> | Stock: ${prod.cantidad}</small>
                </div>
                <button class="btn btn-success btn-sm" onclick="crearNuevoPedido('${prod.nombre}')">Pedir</button>
            </div>
        `;
    });

    document.getElementById('vista-menu-cliente').innerHTML = arregloHTML.join("");
}

function crearNuevoPedido(nombreProducto) {
    let inventario = obtenerInventarioCompartido();
    let index = inventario.findIndex(p => p.nombre === nombreProducto);

    if (index !== -1 && inventario[index].cantidad > 0) {
        let productoComprado = inventario[index];

        inventario[index].cantidad -= 1;
        localStorage.setItem("productos_cafeteria", JSON.stringify(inventario));

        let misPedidos = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
        let nuevoPedido = { ...productoComprado, idUnico: Date.now(), estado: "Pedido recibido" };

        misPedidos.push(nuevoPedido);
        localStorage.setItem('bd_pedidos2', JSON.stringify(misPedidos));

        mostrarMenuCliente();
        actualizarMisPedidos();
        
        // ENVÍA ORDEN A LA COCINA VISUALMENTE (Promesas)
        if(typeof procesarOrdenVisualCocina === 'function') procesarOrdenVisualCocina(nuevoPedido);

        // INICIA ASINCRONÍA DE CLIENTE (Timeouts)
        simularProcesoPedido(nuevoPedido);
    }
}

function simularProcesoPedido(pedidoInicial) {
    const actualizarEstado = (nuevoEstado) => {
        let pedidos = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
        let index = pedidos.findIndex(p => p.idUnico === pedidoInicial.idUnico);
        if (index !== -1) {
            pedidos[index].estado = nuevoEstado;
            localStorage.setItem('bd_pedidos2', JSON.stringify(pedidos));
            actualizarMisPedidos();
        }
    };

    setTimeout(() => actualizarEstado("Preparando........."), 2500);
    setTimeout(() => actualizarEstado("Empacando........."), 5000);
    setTimeout(() => {
        let exito = Math.random() > 0.1; 
        let pedidos = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
        let index = pedidos.findIndex(p => p.idUnico === pedidoInicial.idUnico);

        if (index !== -1) {
            if (exito) {
                pedidos[index].estado = "Pedido Entregado";
                localStorage.setItem('bd_pedidos2', JSON.stringify(pedidos));
                actualizarMisPedidos();
                // CALLBACK A CAJA: Éxito
                if(typeof notificarEstadoCaja === 'function') notificarEstadoCaja(pedidos[index], "listo", mostrarAlertaPantalla);
            } else {
                const motivos = ["Cancelado: Tarjeta rechazada", "Cancelado: Accidente en cocina", "Cancelado: Falta de insumos"];
                pedidos[index].estado = motivos[Math.floor(Math.random() * motivos.length)];
                pedidos[index].precio = 0; 
                localStorage.setItem('bd_pedidos2', JSON.stringify(pedidos));

                let inventario = obtenerInventarioCompartido();
                let invIndex = inventario.findIndex(p => p.nombre === pedidos[index].nombre);
                if (invIndex !== -1) inventario[invIndex].cantidad += 1;
                localStorage.setItem("productos_cafeteria", JSON.stringify(inventario));

                mostrarMenuCliente();
                actualizarMisPedidos();
                // CALLBACK A CAJA: Fracaso
                if(typeof notificarEstadoCaja === 'function') notificarEstadoCaja(pedidos[index], "cancelado", mostrarAlertaPantalla);
            }
        }
    }, 7500);
}

function actualizarMisPedidos() {
    let misPedidos = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
    let contenedor = document.getElementById('vista-pedidos-cliente');
    contenedor.innerHTML = "";

    misPedidos.forEach((pedido, index) => {
        // LÓGICA DE LA BARRA DE PROGRESO VISUAL
        let ancho = "25%"; let colorBarra = "bg-secondary"; let animacion = "progress-bar-striped progress-bar-animated";
        
        if (pedido.estado === "Preparando.........") { ancho = "50%"; colorBarra = "bg-warning"; }
        if (pedido.estado === "Empacando.........") { ancho = "75%"; colorBarra = "bg-info"; }
        if (pedido.estado === "Pedido Entregado") { ancho = "100%"; colorBarra = "bg-success"; animacion = ""; }
        if (pedido.estado.includes("Cancelado")) { ancho = "100%"; colorBarra = "bg-danger"; animacion = ""; }

        contenedor.innerHTML += `
            <div class="bg-white border shadow-sm p-3 mb-3 rounded">
                <div class="d-flex justify-content-between mb-2">
                    <span class="fw-bold text-dark">Ticket #${index + 1}: ${pedido.nombre}</span>
                    <span class="fw-bold">$${pedido.precio}</span>
                </div>
                <div class="progress" style="height: 18px;">
                    <div class="progress-bar ${colorBarra} ${animacion} fw-bold" role="progressbar" style="width: ${ancho}; font-size: 0.75rem;">
                        ${pedido.estado}
                    </div>
                </div>
            </div>
        `;
    });
}

function limpiarTodoPrueba() {
    localStorage.removeItem('bd_pedidos2');
    localStorage.removeItem('productos_cafeteria');
    document.getElementById("monitor-cocina").innerHTML = `<div class="text-center text-muted small py-4" id="estado-vacio-cocina">😴 A la espera de clientes...</div>`;
    document.getElementById("contenedor-notificaciones").innerHTML = `<div class="text-center text-muted small py-3">Sin notificaciones nuevas.</div>`;
    if(typeof limpiarNotificacionesCaja === 'function') limpiarNotificacionesCaja();
    obtenerInventarioCompartido();
    mostrarMenuCliente();
    actualizarMisPedidos();
    if(typeof calcularCajaAutomatico === 'function') calcularCajaAutomatico();
}

window.addEventListener('DOMContentLoaded', () => { mostrarMenuCliente(); actualizarMisPedidos(); });