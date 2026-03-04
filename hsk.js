// Credenciales válidas
const validCredentials = {
    email: "krato@bha.hs",
    password: "hiroko"
};

// Referencias a elementos del DOM
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorAlert = document.getElementById('errorAlert');
const successAlert = document.getElementById('successAlert');
const errorMessage = document.getElementById('errorMessage');

// Función para mostrar alerta de error
function showError(message) {
    errorMessage.textContent = message;
    errorAlert.style.display = 'flex';
    successAlert.style.display = 'none';
    
    // Agregar clase de animación
    errorAlert.style.animation = 'none';
    setTimeout(() => {
        errorAlert.style.animation = 'slideIn 0.3s ease-out';
    }, 10);
}

// Función para mostrar alerta de éxito
function showSuccess() {
    errorAlert.style.display = 'none';
    successAlert.style.display = 'flex';
    
    // Agregar clase de animación
    successAlert.style.animation = 'none';
    setTimeout(() => {
        successAlert.style.animation = 'slideIn 0.3s ease-out';
    }, 10);
}

// Función para validar el formulario
function validateForm(email, password) {
    // Validación básica de campos vacíos
    if (!email || !password) {
        showError('Please fill in all fields.');
        return false;
    }
    
    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
        return false;
    }
    
    return true;
}

// Función para procesar el login
function processLogin(email, password) {
    // Simular una petición al servidor con un timeout
    const loginBtn = loginForm.querySelector('.login-btn');
    const originalText = loginBtn.innerHTML;
    
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Verificar credenciales
        if (email === validCredentials.email && password === validCredentials.password) {
            showSuccess();
            
            // Redirigir después de un breve retraso
            setTimeout(() => {
                // Guardar estado de login
                localStorage.setItem("loggedIn", "true");
                // 🚀 Redirigir al dashboard
                window.location.href = "p1.html";
                loginForm.reset();
            }, 1500);
        } else {
            showError('Invalid email or password. Please try again.');
        }
        
        // Restaurar el botón
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
    }, 1500);
}

// Event listener para el envío del formulario
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores de los campos
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validar formulario
    if (validateForm(email, password)) {
        processLogin(email, password);
    }
});

// Event listeners para ocultar alertas al escribir
emailInput.addEventListener('input', function() {
    errorAlert.style.display = 'none';
    successAlert.style.display = 'none';
});

passwordInput.addEventListener('input', function() {
    errorAlert.style.display = 'none';
    successAlert.style.display = 'none';
});

// Efecto de enfoque en los campos de entrada
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});