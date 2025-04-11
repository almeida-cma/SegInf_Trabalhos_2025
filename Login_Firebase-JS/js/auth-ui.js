// Alternar entre login e registro
document.getElementById('show-register').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Formulário de login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const result = await loginUser(email, password);
    showMessage('login-message', result.message, result.success);
    
    if (result.success) {
        window.location.href = 'dashboard.html';
    }
});

// Formulário de registro
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    const result = await registerUser(email, password);
    showMessage('register-message', result.message, result.success);
});

// Função auxiliar para mostrar mensagens
function showMessage(elementId, message, isSuccess) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.color = isSuccess ? 'green' : 'red';
    }
}

// Verifica autenticação ao carregar
checkAuth().then(user => {
    if (user && user.emailVerified) {
        window.location.href = 'dashboard.html';
    }
});