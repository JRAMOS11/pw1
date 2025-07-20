
document.addEventListener("DOMContentLoaded", function() {
    console.log("Sitio de Fotocopias y Más cargado correctamente ");
    
    // Alerta solo en la página de inicio
    if (document.title.includes("Inicio")) {
        alert("¡Bienvenido a Fotocopias y Más!");
    }

    // Validación sencilla de formulario de contacto (si existe)
    const contactoForm = document.getElementById("formContacto");
    if (contactoForm) {
        contactoForm.addEventListener("submit", function(event) {
            const nombre = document.getElementById("nombre").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            if (nombre === "" || mensaje === "") {
                alert("Por favor, completa todos los campos del formulario.");
                event.preventDefault();
            } else {
                alert("¡Gracias por contactarnos!");
            }
        });
    }
});
