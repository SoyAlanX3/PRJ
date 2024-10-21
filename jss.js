const messagesDiv = document.getElementById('messages');

// Respuestas predefinidas
const responses = {
    "¿cómo puedo hacer una reserva?": "Para hacer una reserva, visita nuestra página de reservas o llama al número de contacto.",
    "¿puedo modificar mi reserva?": "Sí, puedes modificar tu reserva llamando al restaurante o a través de la página de reservas.",
    "¿cuántas personas pueden asistir?": "Puedes hacer reservas para grupos de hasta 20 personas.",
    "¿cuál es el horario del restaurante?": "Estamos abiertos de lunes a domingo, de 12:00 PM a 10:00 PM.",
    "¿qué opciones de menú ofrecen?": "Ofrecemos una variedad de platos, desde entradas hasta postres. Consulta nuestro menú en línea.",
    "¿aceptan reservas para eventos especiales?": "Sí, aceptamos reservas para eventos especiales. Por favor contáctanos para más detalles.",
    "¿qué medidas de seguridad están en vigor?": "Seguimos todas las pautas de salud y seguridad para garantizar la seguridad de nuestros clientes.",
    "¿puedo reservar una mesa al aire libre?": "Sí, ofrecemos opciones de mesas al aire libre, sujeto a disponibilidad.",
    "¿cuánto tiempo antes debo hacer una reserva?": "Se recomienda hacer reservas al menos 24 horas antes.",
    "¿hay un cargo por reservar?": "No, no hay cargos por hacer una reserva.",
    "¿cómo puedo cancelar mi reserva?": "Puedes cancelar tu reserva llamando al restaurante o a través de nuestra página web.",
    "¿qué pasa si llego tarde a mi reserva?": "Si llegas tarde, te recomendamos que nos llames. Podemos mantener la mesa durante un tiempo limitado.",
    "¿tienen opciones vegetarianas o veganas?": "Sí, tenemos varias opciones vegetarianas y veganas en nuestro menú.",
    "¿ofrecen servicio a domicilio?": "Sí, ofrecemos servicio a domicilio. Puedes realizar tu pedido a través de nuestra página web.",
    "¿tienen menú para niños?": "Sí, contamos con un menú especial para niños.",
    "default": "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?"
};

// Función para manejar preguntas clicadas
const askQuestion = (question) => {
    const userMessage = document.createElement('div');
    userMessage.className = 'userMessage';
    userMessage.textContent = `Tú: ${question}`;
    messagesDiv.appendChild(userMessage);

    // Respuesta del chatbot
    const botResponse = responses[question.toLowerCase()] || responses["default"];
    const botMessage = document.createElement('div');
    botMessage.className = 'botMessage';
    botMessage.textContent = `Bot: ${botResponse}`;
    messagesDiv.appendChild(botMessage);

    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplazar hacia abajo
};
