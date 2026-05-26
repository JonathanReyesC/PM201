// --- LÓGICA DE CAJA ---
const agregarPedidoCaja = (nombre, precio) => {
    let pedidos = JSON.parse(localStorage.getItem("bd_pedidos")) || [];
    // Agregar al array de pedidos
    pedidos.push({ nombre: nombre, precio: precio });
    localStorage.setItem("bd_pedidos", JSON.stringify(pedidos));
    
    calcularTotalesCaja();
};

const calcularTotalesCaja = () => {
    let pedidos = JSON.parse(localStorage.getItem("bd_pedidos")) || [];
    
    // 1. Rúbrica: Uso de reduce() y Destructuring
    let subtotal = pedidos.reduce((acumulador, pedidoActual) => {
        const { precio } = pedidoActual; // Destructuring
        return acumulador + Number(precio);
    }, 0);

    // 2. Cálculos matemáticos
    let iva = subtotal * 0.16;
    let total = subtotal + iva;

    // 3. Pintar en pantalla
    document.getElementById("lbl-subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("lbl-iva").innerText = `$${iva.toFixed(2)}`;
    document.getElementById("lbl-total").innerText = `$${total.toFixed(2)}`;

    // 4. Listar historial
    let contenedorHistorial = document.getElementById("vistaHistorialCaja");
    contenedorHistorial.innerHTML = "";
    pedidos.forEach((p, i) => {
        contenedorHistorial.innerHTML += `
            <div class="d-flex justify-content-between border-bottom py-1 text-muted small">
                <span>#${i+1} ${p.nombre}</span>
                <span>$${p.precio}</span>
            </div>`;
    });
};

