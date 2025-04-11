// Configuração do Firebase (substitua com seus dados)
const firebaseConfig = {
  apiKey: "Sua apiKe",
  authDomain: "Seu authDomain",
  projectId: "Seu projectId",
  storageBucket: "Seu storageBucket",
  messagingSenderId: "Seu messagingSenderId",
  appId: "Seu appId"
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
