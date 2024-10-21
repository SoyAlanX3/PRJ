const form = document.getElementById('reservationForm');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const personas = document.getElementById('personas').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const preview = `Reserva para ${personas} persona(s) a nombre de ${nombre} el ${fecha} a las ${hora}.`;
    const confirmar = confirm(preview + "\n\n¿Confirmar reservación?");

    if (confirmar) {
        // Solo si el usuario confirma, se muestra el mensaje y se envía el formulario
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `
            <h3>¡Reserva confirmada!</h3>
            <p>Gracias, <strong>${nombre}</strong>. Has reservado una mesa para <strong>${personas}</strong> persona(s) el <strong>${fecha}</strong> a las <strong>${hora}</strong>.</p>
        `;

        // Limpiar el formulario después de la confirmación
        form.reset();
    } else {
        // Si el usuario cancela, no se hace nada (el formulario no se envía)
        alert("Reservación cancelada.");
    }
});

