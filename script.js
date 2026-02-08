// Obtener los elementos del HTML
const boton = document.getElementById("btnColor");
const caja = document.getElementById("caja");

// Evento que se ejecuta al hacer clic en el botón
boton.addEventListener("click", function () {

    // Generar valores aleatorios para RGB (0 - 255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Cambiar el color de fondo del div
    caja.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Mensaje en la consola
    console.log("Color cambiado correctamente");
});