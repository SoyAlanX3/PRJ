let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active'); // Ocultar la diapositiva actual
    currentSlide = (n + slides.length) % slides.length; // Calcular la nueva diapositiva
    slides[currentSlide].classList.add('active'); // Mostrar la nueva diapositiva
}

function moveSlide(step) {
    showSlide(currentSlide + step); // Moverse a la siguiente o anterior diapositiva
}

// Inicializar el carrusel mostrando la primera diapositiva
showSlide(currentSlide);
