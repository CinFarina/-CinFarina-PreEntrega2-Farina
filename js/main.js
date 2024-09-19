 // Variables y Arrays
 const menu = [
    { nombre: "Pizza", precio: 10 },
    { nombre: "Hamburguesa", precio: 8 },
    { nombre: "Ensalada", precio: 6 },
    { nombre: "Pasta", precio: 12 }
];

let totalPedido = 0;

// Función para verificar disponibilidad
function verificarDisponibilidad() {
    const plato = prompt("¿Qué plato deseas verificar? (Pizza, Hamburguesa, Ensalada, Pasta)");
    const encontrado = menu.find(item => item.nombre.toLowerCase() === plato.toLowerCase());

    if (encontrado) {
        alert(`${encontrado.nombre} está disponible en el menú por $${encontrado.precio}.`);
    } else {
        alert(`${plato} no está disponible en el menú.`);
    }
}

// Función para mostrar el menú
function mostrarMenu() {
    let opciones = "Menú del Resto Bar:\n";
    for (let i = 0; i < menu.length; i++) {
        opciones += `${i + 1}. ${menu[i].nombre} - $${menu[i].precio}\n`;
    }
    return opciones;
}

// Función para seleccionar platos
function seleccionarPlato() {
    const opcionesMenu = mostrarMenu();
    let seleccion;

    do {
        seleccion = prompt(`Elige un plato:\n${opcionesMenu}`);
        const indiceSeleccionado = parseInt(seleccion) - 1;

        if (indiceSeleccionado >= 0 && indiceSeleccionado < menu.length) {
            totalPedido += menu[indiceSeleccionado].precio;
            alert(`Has seleccionado: ${menu[indiceSeleccionado].nombre}. Precio: $${menu[indiceSeleccionado].precio}`);
        } else {
            alert("Selección inválida. Por favor, elige un número del menú.");
        }

    } while (seleccion !== null && seleccion !== "");

    alert(`El total de tu pedido es: $${totalPedido}`);
}

// Llamar a las funciones
verificarDisponibilidad();
seleccionarPlato();