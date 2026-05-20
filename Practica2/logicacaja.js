const productosDefectoCaja = [
    { nombre: "Café Americano", precio: 35, cantidad: 10 },
    { nombre: "Capuccino", precio: 40, cantidad: 8 },
    { nombre: "Chocolate Abuelita", precio: 40, cantidad: 15 },
    { nombre: "Concha de Vainilla", precio: 10, cantidad: 20 },
    { nombre: "Dona de Chocolate", precio: 12, cantidad: 10 }
];

let totalAcumuladoCaja = 0;

function obtenerTicketsServidor() {
    return JSON.parse(localStorage.getItem("tickets_caja")) || [];
}

function agregarPedido(ticket) {
    let tickets = obtenerTicketsServidor();
    tickets.push(ticket);
    localStorage.setItem("tickets_caja", JSON.stringify(tickets));
    mostrarPedidosClienteEnCaja();
}

function mostrarPedidosClienteEnCaja() {
    const contenedor = document.getElementById("contenedor-pedidos");
    const totalTexto = document.getElementById("total-texto");
    const totalBadge = document.getElementById("total-badge");
    
    if (!contenedor) return;
    contenedor.innerHTML = "";
    
    let tickets = obtenerTicketsServidor();
    totalAcumuladoCaja = 0;

    if (tickets.length === 0) {
        contenedor.innerHTML = `<div class="col-12 text-center text-muted py-3">No hay tickets o pedidos pendientes en caja</div>`;
    } else {
        tickets.forEach((ticket, index) => {
            totalAcumuladoCaja += ticket.total;
            
            let lineasHTML = "";
            ticket.items.forEach(item => {
                lineasHTML += `
                    <div class="d-flex justify-content-between small text-monospace">
                        <span>${item.cantidad}x ${item.producto}</span>
                        <span>$${item.totalPagar.toFixed(2)}</span>
                    </div>
                `;
            });

            let tarjetaTicket = document.createElement("div");
            tarjetaTicket.className = "col-md-6 mb-3";
            tarjetaTicket.innerHTML = `
                <div class="card bg-light border-secondary position-relative shadow-sm" style="font-family: 'Courier New', Courier, monospace; border-style: dashed !important;">
                    <div class="card-body p-3">
                        <button onclick="removerTicketCaja(${index})" class="btn-close position-absolute top-0 end-0 m-2" style="font-size: 0.8rem;"></button>
                        <div class="text-center mb-2">
                            <h6 class="fw-bold m-0">TICKET #${index + 1}</h6>
                            <small class="text-muted">Hora: ${ticket.hora}</small>
                            <div class="border-bottom my-2" style="border-style: dashed !important; border-color: #999 !important;"></div>
                        </div>
                        <div class="mb-2">
                            ${lineasHTML}
                        </div>
                        <div class="border-bottom my-2" style="border-style: dashed !important; border-color: #999 !important;"></div>
                        <div class="d-flex justify-content-between fw-bold">
                            <span>TOTAL TICKET:</span>
                            <span class="text-success">$${ticket.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
            contenedor.appendChild(tarjetaTicket);
        });
    }

    if (totalTexto) totalTexto.textContent = `$${totalAcumuladoCaja.toFixed(2)}`;
    if (totalBadge) totalBadge.textContent = `$${totalAcumuladoCaja.toFixed(2)}`;
}

function removerTicketCaja(index) {
    let tickets = obtenerTicketsServidor();
    tickets.splice(index, 1);
    localStorage.setItem("tickets_caja", JSON.stringify(tickets));
    mostrarPedidosClienteEnCaja();
}