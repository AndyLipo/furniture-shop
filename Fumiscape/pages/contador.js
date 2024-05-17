// Obtener elementos del DOM
const contadorElemento = document.getElementById('contador');
const totalElemento = document.getElementById('total');
const botonSumar = document.getElementById('boton-sumar');
const botonRestar = document.getElementById('boton-restar');

// Valor inicial del contador y del precio
let contador = 0;
let precioUnitario = 7600000; // Precio unitario de Double Bed

// Función para actualizar el contador y el precio total
function actualizarContadorYTotal() {
    // Actualizar el contador
    contadorElemento.textContent = contador;

    // Calcular el precio total
    const precioTotal = contador * precioUnitario;

    // Mostrar el precio total
    totalElemento.textContent = precioTotal.toLocaleString(); // Formatear el precio con comas
}

// Event listener para el botón de sumar
botonSumar.addEventListener('click', () => {
    contador++;
    actualizarContadorYTotal();
});

// Event listener para el botón de restar
botonRestar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        actualizarContadorYTotal();
    }
});

// Actualizar el contador y el precio total al cargar la página
actualizarContadorYTotal();
