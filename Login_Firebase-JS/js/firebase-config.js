// Configuração do Firebase (substitua com seus dados)
const firebaseConfig = {
  apiKey: "AIzaSyBocutEpzIj5wEjWBUDINoYxNkfQh65If4",
  authDomain: "fir-95151.firebaseapp.com",
  projectId: "fir-95151",
  storageBucket: "fir-95151.firebasestorage.app",
  messagingSenderId: "301817076013",
  appId: "1:301817076013:web:23f9961f2b837cdd9f5ba4"
};

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

// Função para verificar autenticação
function checkAuth() {
    return new Promise((resolve) => {
        auth.onAuthStateChanged(user => {
            resolve(user);
        });
    });
}

// Exporta apenas o necessário
window.auth = auth;
window.checkAuth = checkAuth;