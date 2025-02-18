document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre && email && mensaje) {
            alert(`¡Gracias por tu mensaje, ${nombre}! Te responderé pronto.`);
            form.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
