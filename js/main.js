document.addEventListener("DOMContentLoaded", function() {
    console.log("Sitio de Fotocopias y Más cargado correctamente");

    // Mensaje solo para Inicio
    if (document.title.includes("Inicio")) {
        alert("¡Bienvenido a Fotocopias y Más!");
    }

    // === Validación formulario de CONTACTO ===
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

    
    const cotizarForm = document.getElementById("formulario-cotizar");
    if (cotizarForm) {
        cotizarForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const servicio = document.getElementById("servicio").value;
            const detalles = document.getElementById("detalles").value.trim();

            const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonoRegex = /^[2389][0-9]{7}$/;

            if (nombre.length < 3) {
                alert("⚠️ El nombre debe tener al menos 3 caracteres.");
                return;
            }

            if (!correoRegex.test(correo)) {
                alert("⚠️ Ingresa un correo electrónico válido.");
                return;
            }

            if (!telefonoRegex.test(telefono)) {
                alert("⚠️ Ingresa un número de teléfono válido de Honduras.");
                return;
            }

            if (!servicio) {
                alert("⚠️ Selecciona un servicio.");
                return;
            }

            if (detalles.length < 5) {
                alert("⚠️ Describe con más detalle tu solicitud.");
                return;
            }

            alert("✅ ¡Cotización enviada correctamente! Nos comunicaremos contigo pronto.");
            cotizarForm.reset();
        });
    }
});