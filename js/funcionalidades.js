
function toggleServicio(elemento) {
    const detalle = elemento.nextElementSibling;
    const flecha = elemento.querySelector('.flecha');
    
    // Cerrar otros servicios abiertos
    const todosLosDetalles = document.querySelectorAll('.servicio-detalle');
    const todasLasFlechas = document.querySelectorAll('.flecha');
    const todosLosItems = document.querySelectorAll('.item-servicios');
    
    todosLosDetalles.forEach((det, index) => {
        if (det !== detalle) {
            det.classList.remove('activo');
            todasLasFlechas[index].style.transform = 'rotate(0deg)';
            todosLosItems[index].classList.remove('activo');
        }
    });
    
    // Toggle del servicio clickeado
    detalle.classList.toggle('activo');
    elemento.classList.toggle('activo');
    
    // Rotación de la flecha
    if (detalle.classList.contains('activo')) {
        flecha.style.transform = 'rotate(180deg)';
    } else {
        flecha.style.transform = 'rotate(0deg)';
    }
}
