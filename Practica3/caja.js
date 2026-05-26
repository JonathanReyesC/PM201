function calcularCajaAutomatico() {

    const contenedorPedidosCaja = document.getElementById(
        "contenedor-pedidos-caja"
    );

    contenedorPedidosCaja.innerHTML = "";

    let pedidosEnCaja = JSON.parse(
        localStorage.getItem('bd_pedidos2')
    ) || [];

    if (pedidosEnCaja.length === 0) {

        contenedorPedidosCaja.innerHTML = `
            <div class="text-center text-muted py-3">
                Esperando pedidos...
            </div>
        `;

        actualizarCamposTotales(0, 0, 0);
        return;
    }

    const totalGeneral = pedidosEnCaja.reduce(
        (suma, { precio }) => suma + Number(precio),
        0
    );

    const subtotal = totalGeneral / 1.16;
    const iva = totalGeneral - subtotal;

    actualizarCamposTotales(
        subtotal,
        iva,
        totalGeneral
    );

    pedidosEnCaja.forEach(({ nombre, precio }, index) => {

        contenedorPedidosCaja.innerHTML += `
            <div class="alert alert-info d-flex justify-content-between align-items-center py-2 mb-2 shadow-sm">

                <span>
                    <strong>#${index + 1}</strong>
                    ${nombre}
                </span>

                <span class="badge bg-primary fs-6">
                    $${Number(precio).toFixed(2)}
                </span>

            </div>
        `;
    });
}

function actualizarCamposTotales(subtotal, iva, total) {

    document.getElementById("caja-subtotal").textContent =
        `$${subtotal.toFixed(2)}`;

    document.getElementById("caja-iva").textContent =
        `$${iva.toFixed(2)}`;

    document.getElementById("caja-total").textContent =
        `$${total.toFixed(2)}`;
}

window.addEventListener(
    'DOMContentLoaded',
    calcularCajaAutomatico
);