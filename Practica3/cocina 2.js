// ARRAY DE OBJETOS
const productos = [
    { nombre: "Café Americano", precio: 35, categoria: "Bebida", cantidad: 20 },
    { nombre: "Capuccino", precio: 40, categoria: "Bebida", cantidad: 15 },
    { nombre: "Chocolate Abuelita", precio: 40, categoria: "Bebida", cantidad: 10 },
    { nombre: "Concha de Vainilla", precio: 10, categoria: "Postre", cantidad: 30 },
    { nombre: "Dona de Chocolate", precio: 12, categoria: "Postre", cantidad: 25 }
];

let indiceEditar = -1;

// MOSTRAR PRODUCTOS
function mostrar(lista) {

    const tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = "";

    lista.forEach((producto, index) => {

        tabla.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.categoria}</td>
                <td>${producto.cantidad}</td>

                <td>
                    <button 
                        class="btn btn-warning btn-sm"
                        onclick="editarProducto(${index})"
                    >
                        Editar
                    </button>

                    <button 
                        class="btn btn-danger btn-sm"
                        onclick="eliminarProducto(${index})"
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

// LISTAR PRODUCTOS
function listarProductos() {
    mostrar(productos);
}

// AGREGAR Y EDITAR
function guardarProducto() {

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    const cantidad = document.getElementById("cantidad").value;

    if (indiceEditar === -1) {

        // AGREGAR
        productos.push({
            nombre,
            precio,
            categoria,
            cantidad
        });

    } else {

        // EDITAR
        productos[indiceEditar] = {
            nombre,
            precio,
            categoria,
            cantidad
        };

        indiceEditar = -1;
    }

    limpiarFormulario();
    listarProductos();
}

// EDITAR PRODUCTO
function editarProducto(index) {

    const producto = productos[index];

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("cantidad").value = producto.cantidad;

    indiceEditar = index;
}

// ELIMINAR PRODUCTO
function eliminarProducto(index) {

    productos.splice(index, 1);

    listarProductos();
}

// LIMPIAR FORMULARIO
function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("categoria").value = "Bebida";
    document.getElementById("cantidad").value = "";
}

// FILTER() PRODUCTOS BARATOS
function buscarBaratos() {

    const baratos = productos.filter(
        producto => producto.precio <= 15
    );

    mostrar(baratos);
}

// FILTER() PRODUCTOS CAROS
function buscarCaros() {

    const caros = productos.filter(
        producto => producto.precio >= 40
    );

    mostrar(caros);
}

// FILTER() BEBIDAS
function buscarBebidas() {

    const bebidas = productos.filter(
        producto => producto.categoria === "Bebida"
    );

    mostrar(bebidas);
}

// FILTER() POSTRES
function buscarPostres() {

    const postres = productos.filter(
        producto => producto.categoria === "Postre"
    );

    mostrar(postres);
}

// FIND()
const productoEncontrado = productos.find(
    producto => producto.nombre === "Capuccino"
);

console.log("Producto encontrado:", productoEncontrado);

// MOSTRAR AL INICIO
listarProductos();