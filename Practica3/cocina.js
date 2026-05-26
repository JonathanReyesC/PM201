const productos = [

    {
        nombre: "Cafe Americano",
        precio: 35,
        categoria: "Bebida",
        cantidad: 20,
        promo: false
    },

    {
        nombre: "Capuccino",
        precio: 40,
        categoria: "Bebida",
        cantidad: 15,
        promo: false
    },

    {
        nombre: "Chocolate Abuelita",
        precio: 40,
        categoria: "Bebida",
        cantidad: 10,
        promo: false
    },

    {
        nombre: "Concha de Vainilla",
        precio: 10,
        categoria: "Postre",
        cantidad: 30,
        promo: false
    },

    {
        nombre: "Dona de Chocolate",
        precio: 12,
        categoria: "Postre",
        cantidad: 25,
        promo: false
    }

];

let indiceEditar = -1;

function sincronizarStorage() {

    localStorage.setItem(
        "productos_cafeteria",
        JSON.stringify(productos)
    );

    mostrarMenuCliente();
}

function mostrar(lista) {

    const tabla = document.getElementById(
        "tablaProductos"
    );

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
                        class="btn btn-success btn-sm"
                        onclick="aplicarPromocion(${index})"
                    >
                        50%
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

function listarProductos() {
    mostrar(productos);
}

function guardarProducto() {

    const nombre = document.getElementById("nombre").value;

    const precio = Number(
        document.getElementById("precio").value
    );

    const categoria = document.getElementById(
        "categoria"
    ).value;

    const cantidad = Number(
        document.getElementById("cantidad").value
    );

    if (indiceEditar === -1) {

        productos.push({
            nombre,
            precio,
            categoria,
            cantidad,
            promo: false
        });

    } else {

        productos[indiceEditar] = {
            nombre,
            precio,
            categoria,
            cantidad,
            promo: false
        };

        indiceEditar = -1;
    }

    sincronizarStorage();

    limpiarFormulario();

    listarProductos();
}

function editarProducto(index) {

    const producto = productos[index];

    document.getElementById("nombre").value =
        producto.nombre;

    document.getElementById("precio").value =
        producto.precio;

    document.getElementById("categoria").value =
        producto.categoria;

    document.getElementById("cantidad").value =
        producto.cantidad;

    indiceEditar = index;
}

function eliminarProducto(index) {

    productos.splice(index, 1);

    sincronizarStorage();

    listarProductos();
}

function aplicarPromocion(index) {

    productos[index].precio =
        productos[index].precio / 2;

    productos[index].promo = true;

    sincronizarStorage();

    listarProductos();
}

function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("categoria").value = "Bebida";
    document.getElementById("cantidad").value = "";
}

function buscarBaratos() {

    const baratos = productos.filter(
        producto => producto.precio <= 15
    );

    mostrar(baratos);
}

function buscarCaros() {

    const caros = productos.filter(
        producto => producto.precio >= 40
    );

    mostrar(caros);
}

function buscarBebidas() {

    const bebidas = productos.filter(
        producto => producto.categoria === "Bebida"
    );

    mostrar(bebidas);
}

function buscarPostres() {

    const postres = productos.filter(
        producto => producto.categoria === "Postre"
    );

    mostrar(postres);
}

window.addEventListener('DOMContentLoaded', () => {

    listarProductos();

    sincronizarStorage();
});