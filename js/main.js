document.addEventListener("DOMContentLoaded", function() {
    console.log("Sitio de Fotocopias y Más cargado correctamente");

   
    if (document.title.includes("Inicio")) {
        alert("¡Bienvenido a Fotocopias y Más!");
    }

    const contactoForm = document.getElementById("formulario-contacto");
    if (contactoForm) {
        contactoForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nombre.length < 3) {
                alert("⚠️ El nombre debe tener al menos 3 caracteres.");
                return;
            }

            if (!correoRegex.test(correo)) {
                alert("⚠️ Ingresa un correo válido.");
                return;
            }

            if (mensaje.length < 5) {
                alert("⚠️ El mensaje debe ser más largo.");
                return;
            }

            alert("✅ ¡Gracias por contactarnos!");
            contactoForm.reset();
        });
    }
});