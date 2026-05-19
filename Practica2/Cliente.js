// Base de datos local para el módulo del cliente
let inventario = [
    { id: 1, nombre: "Café Americano", precio: 35, cantidad: 10 },
    { id: 2, nombre: "Capuccino", precio: 40, cantidad: 8 },
    { id: 3, nombre: "Chocolate Abuelita", precio: 40, cantidad: 15 },
    { id: 4, nombre: "Concha de Vainilla", precio: 10, cantidad: 20 },
    { id: 5, nombre: "Dona de Chocolate", precio: 12, cantidad: 10 }
];

let pedidos = [];

function mostrarCatalogo() {
    let pantalla = document.getElementById("pantalla");
    let contenido = "<h3>Menú Disponible</h3><ul>";

    for (let i = 0; i < inventario.length; i++) {
        let p = inventario[i];
        if (p.cantidad > 0) {
            contenido += "<li>ID: " + p.id + " | " + p.nombre + " - $" + p.precio.toFixed(2) + " (Disponibles: " + p.cantidad + ")</li>";
        }
    }

    contenido += "</ul>";
    pantalla.innerHTML = contenido;
}

function agregarAlCarrito() {
    let idIngresado = parseInt(document.getElementById("inputId").value);
    let cantidadIngresada = parseInt(document.getElementById("inputCantidad").value);
    let pantalla = document.getElementById("pantalla");

    let productoBuscado = null;
    let indexProducto = -1;

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].id === idIngresado) {
            productoBuscado = inventario[i];
            indexProducto = i;
        }
    }

    if (productoBuscado != null && cantidadIngresada > 0) {
        if (productoBuscado.cantidad >= cantidadIngresada) {
            let total = productoBuscado.precio * cantidadIngresada;

            pedidos.push({
                producto: productoBuscado.nombre,
                cantidad: cantidadIngresada,
                totalPagar: total
            });

            // Descontar del inventario local
            inventario[indexProducto].cantidad -= cantidadIngresada;

            pantalla.innerHTML = "<p>Se agregó a la cuenta: " + cantidadIngresada + "x " + productoBuscado.nombre + ".</p>";

            document.getElementById("inputId").value = "";
            document.getElementById("inputCantidad").value = "";
        } else {
            pantalla.innerHTML = "<p>Error: Stock insuficiente. Solo hay " + productoBuscado.cantidad + " unidades disponibles.</p>";
        }
    } else {
        pantalla.innerHTML = "<p>Error: Verifica que el ID exista y la cantidad sea válida.</p>";
    }
}

function verResumen() {
    let pantalla = document.getElementById("pantalla");
    let contenido = "<h3>Resumen de la Cuenta</h3>";
    let totalFinal = 0;

    if (pedidos.length === 0) {
        contenido += "<p>Aún no hay órdenes registradas.</p>";
    } else {
        contenido += "<ul>";
        for (let i = 0; i < pedidos.length; i++) {
            let ped = pedidos[i];
            contenido += "<li>" + ped.cantidad + "x " + ped.producto + " = $" + ped.totalPagar.toFixed(2) + "</li>";
            totalFinal += ped.totalPagar;
        }
        contenido += "</ul>";
        contenido += "<h4>Total a pagar: $" + totalFinal.toFixed(2) + "</h4>";
    }

    pantalla.innerHTML = contenido;
}