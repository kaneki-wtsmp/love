// CÓDIGO JAVASCRIPT PARA INTERACTIVIDAD

// Función para el botón de confirmación
document.getElementById('confirmationButton').addEventListener('click', function() {
    // Solicitar información del invitado
    const nombre = prompt('Por favor, ingresa tu nombre completo:');
    const email = prompt('Por favor, ingresa tu correo electrónico:');
    const acompanantes = prompt('¿Cuántas personas te acompañarán? (incluyéndote)');

    // Validar que se ingresó información
    if (nombre && email && acompanantes) {
        // Mostrar mensaje de confirmación
        alert(`¡Gracias ${nombre}! Hemos registrado tu confirmación para ${acompanantes} personas. Te enviaremos un recordatorio a ${email}.`);

        // Cambiar el texto del botón
        this.textContent = '¡Confirmado!';
        this.style.backgroundColor = '#5cb85c';
        this.disabled = true;
    } else {
        alert('Por favor, completa toda la información solicitada.');
    }
});

// Efecto de desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación adicional para las imagenes al hacer scroll
window.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.couple-photo');
    const windowHeight = window.innerHeight;

    images.forEach(image => {
        const position = image.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            image.style.transform = 'scale(1.25)';
            image.style.transition = 'transform 0.6s ease';
        } else {
            image.style.transform = 'scale(1)';
        }
    });
});