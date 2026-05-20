const productosDefectoCocina = [
    { nombre: "Café Americano", precio: 35, cantidad: 10 },
    { nombre: "Capuccino", precio: 40, cantidad: 8 },
    { nombre: "Chocolate Abuelita", precio: 40, cantidad: 15 },
    { nombre: "Concha de Vainilla", precio: 10, cantidad: 20 },
    { nombre: "Dona de Chocolate", precio: 12, cantidad: 10 },
];

function listarProductos() {
    let inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosDefectoCocina;
    const tablaCuerpo = document.getElementById('listaProductos');
    if (!tablaCuerpo) return;
    
    tablaCuerpo.innerHTML = "";

    inventario.forEach((producto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><strong>[ID: ${index + 1}]</strong> ${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td><span class="badge bg-secondary">${producto.cantidad} un.</span></td>
            <td>
                <button class="btn btn-sm btn-warning px-2 py-0" onclick="cargarDatosFormulario(${index})">Editar</button>
                <button class="btn btn-sm btn-danger px-2 py-0" onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        `;
        tablaCuerpo.appendChild(fila);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('formularioProducto');
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            let inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosDefectoCocina;
            const nombre = document.getElementById('nombre').value;
            const precio = parseFloat(document.getElementById('precio').value);
            const cantidad = parseInt(document.getElementById('cantidad').value);
            const index = document.getElementById('indexProducto').value;

            if (index === "") {
                inventario.push({ nombre, precio, cantidad });
            } else {
                inventario[index] = { nombre, precio, cantidad };
                document.getElementById('btnGuardar').textContent = "Agregar Producto"; 
                document.getElementById('indexProducto').value = "";
            }

            localStorage.setItem("productos_cafeteria", JSON.stringify(inventario));
            formulario.reset(); 
            listarProductos();  
            if (typeof mostrarCatalogo === "function") mostrarCatalogo();
            if (typeof mostrarProductos === "function") mostrarProductos();
        });
    }
});

function eliminarProducto(index) {
    let inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosDefectoCocina;
    inventario.splice(index, 1);
    localStorage.setItem("productos_cafeteria", JSON.stringify(inventario));
    listarProductos();
    if (typeof mostrarCatalogo === "function") mostrarCatalogo();
    if (typeof mostrarProductos === "function") mostrarProductos();
}

function cargarDatosFormulario(index) {
    let inventario = JSON.parse(localStorage.getItem("productos_cafeteria")) || productosDefectoCocina;
    const producto = inventario[index];
    
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('cantidad').value = producto.cantidad;
    document.getElementById('indexProducto').value = index; 
    document.getElementById('btnGuardar').textContent = "Actualizar Producto";
}