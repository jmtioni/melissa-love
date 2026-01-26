// Seleccionamos los elementos de la Galeria
const modal = document.getElementById("modal-galeria");
const imagenModal = document.getElementById("imagen-modal");
const botonCerrar = document.querySelector(".cerrar");
const imagenesGaleria = document.querySelectorAll(".item img");

// Al hacer clic en cualquier imagen de la galería
imagenesGaleria.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // Mostramos el modal
        imagenModal.src = img.src;    // Copiamos la ruta de la imagen
    });
});

// Al hacer clic en la (X), cerramos el modal
botonCerrar.onclick = function() {
    modal.style.display = "none";
}

// También cerramos si hacen clic fuera de la imagen (en el fondo negro)
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
