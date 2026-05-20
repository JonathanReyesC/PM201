function obtenerInventarioCompartido() {
    const productosIniciales = [
        { nombre: "Café Americano", precio: 35, cantidad: 10 },
        { nombre: "Capuccino", precio: 40, cantidad: 8 },
        { nombre: "Chocolate Abuelita", precio: 40, cantidad: 15 },
        { nombre: "Concha de Vainilla", precio: 10, cantidad: 20 },
        { nombre: "Dona de Chocolate", precio: 12, cantidad: 10 }
    ];
    return JSON.parse(localStorage.getItem("productos_cafeteria")) || productosIniciales;
}

function guardarInventarioCompartido(nuevoInventario) {
    localStorage.setItem("productos_cafeteria", JSON.stringify(nuevoInventario));
}

let carritoCliente = [];

function mostrarCatalogo() {
    let inventario = obtenerInventarioCompartido();
    let pantalla = document.getElementById("pantalla");
    if (!pantalla) return;

    let contenido = `
        <div class="row">
            <div class="col-md-7">
                <div class="mb-4">
                    <h5 class="text-success border-bottom pb-2 fw-bold">MENÚ</h5>
                    <div class="list-group shadow-sm">
    `;

    for (let i = 0; i < inventario.length; i++) {
        let p = inventario[i];
        
        if (p.cantidad > 0) {
            contenido += `
                <div class='list-group-item d-flex justify-content-between align-items-center py-2'>
                    <div style="flex: 1;">
                        <span class='fw-semibold'>${p.nombre}</span>
                        <span class='badge bg-light text-dark border ms-2'>$${p.precio.toFixed(2)}</span>
                        <small class='text-muted d-block'>Disponibles: ${p.cantidad}</small>
                    </div>
                    <div class="d-flex align-items-center">
                        <input type="number" id="cant-${i}" class="form-control form-control-sm me-2" value="1" min="1" max="${p.cantidad}" style="width: 65px;">
                        <button onclick="comprarDirecto(${i})" class="btn btn-sm btn-success fw-bold">Pedir</button>
                    </div>
                </div>
            `;
        } else {
            contenido += `
                <div class='list-group-item d-flex justify-content-between align-items-center py-2 bg-light text-muted'>
                    <div style="flex: 1;">
                        <span>${p.nombre}</span>
                        <span class='badge bg-light text-muted border ms-2'>$${p.precio.toFixed(2)}</span>
                        <small class='text-danger d-block'>Agotado</small>
                    </div>
                    <button class="btn btn-sm btn-secondary disabled">Pedir</button>
                </div>
            `;
        }
    }

    contenido += `
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div id="seccion-ticket"></div>
            </div>
        </div>
    `;

    pantalla.innerHTML = contenido;
    listarPedidoTicket();
}

function comprarDirecto(indexProducto) {
    let inputCant = document.getElementById(`cant-${indexProducto}`);
    if (!inputCant) return;

    let cantidadIngresada = parseInt(inputCant.value);
    let inventario = obtenerInventarioCompartido();
    let productoBuscado = inventario[indexProducto];

    if (productoBuscado && cantidadIngresada > 0) {
        if (productoBuscado.cantidad >= cantidadIngresada) {
            let totalItem = productoBuscado.precio * cantidadIngresada;

            let productoExistenteEnCarrito = carritoCliente.find(item => item.producto === productoBuscado.nombre);
            if (productoExistenteEnCarrito) {
                productoExistenteEnCarrito.cantidad += cantidadIngresada;
                productoExistenteEnCarrito.totalPagar += totalItem;
            } else {
                carritoCliente.push({
                    producto: productoBuscado.nombre,
                    cantidad: cantidadIngresada,
                    precioUnitario: productoBuscado.precio,
                    totalPagar: totalItem
                });
            }

            inventario[indexProducto].cantidad -= cantidadIngresada;
            guardarInventarioCompartido(inventario);

            mostrarCatalogo();
        } else {
            alert(`Stock insuficiente. Solo quedan ${productoBuscado.cantidad} unidades.`);
        }
    } else {
        alert("Por favor, ingresa una cantidad válida.");
    }
}

function listarPedidoTicket() {
    let seccionTicket = document.getElementById("seccion-ticket");
    if (!seccionTicket) return;

    if (carritoCliente.length === 0) {
        seccionTicket.innerHTML = `
            <div class="alert alert-light text-center border shadow-sm" style="border-style: dashed !important;">
                <p class="text-muted m-0 small">Tu ticket de compra está vacío. Selecciona productos del menú.</p>
            </div>
        `;
        return;
    }

    let totalFinal = 0;
    let filasTicket = "";

    carritoCliente.forEach(item => {
        filasTicket += `
            <div class="d-flex justify-content-between small mb-1 text-monospace">
                <span>${item.cantidad}x ${item.producto}</span>
                <span>$${item.totalPagar.toFixed(2)}</span>
            </div>
        `;
        totalFinal += item.totalPagar;
    });

    seccionTicket.innerHTML = `
        <div class="card bg-white text-dark shadow-sm border mb-3" style="font-family: 'Courier New', Courier, monospace; border: 2px dashed #ccc !important;">
            <div class="card-body p-3">
                <div class="text-center mb-2">
                    <h6 class="fw-bold m-0">CAFETERÍA CENTRAL</h6>
                    <small class="text-muted">Ticket de Consumo Cliente</small>
                    <div class="border-bottom my-2" style="border-style: dashed !important;"></div>
                </div>
                <div class="mb-2">
                    ${filasTicket}
                </div>
                <div class="border-bottom my-2" style="border-style: dashed !important;"></div>
                <div class="d-flex justify-content-between fw-bold fs-6 mb-2">
                    <span>TOTAL COMPRA:</span>
                    <span class="text-success">$${totalFinal.toFixed(2)}</span>
                </div>
                <div class="text-center mt-2 mb-0">
                    <small class="text-muted d-block mb-3" style="font-size: 11px;">¡Gracias por su compra!</small>
                    <button onclick="enviarTicketACaja(${totalFinal})" class="btn btn-sm btn-primary w-100 fw-bold py-2">Enviar Orden a Caja</button>
                </div>
            </div>
        </div>
    `;
}

function enviarTicketACaja(totalFinal) {
    let ahora = new Date();
    let horaEnvio = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    let nuevoTicket = {
        hora: horaEnvio,
        items: [...carritoCliente],
        total: totalFinal
    };

    if (typeof agregarPedido === "function") {
        agregarPedido(nuevoTicket);
    } else {
        let tickets = JSON.parse(localStorage.getItem("tickets_caja")) || [];
        tickets.push(nuevoTicket);
        localStorage.setItem("tickets_caja", JSON.stringify(tickets));
    }

    // Vacía el carrito para una compra nueva 
    carritoCliente = [];
    mostrarCatalogo();
    alert("Pedido enviado con éxito a la caja.");
}