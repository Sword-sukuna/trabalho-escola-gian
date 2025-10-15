const opcaoInicial = document.getElementById('opcao-inicial');
const formLogin = document.getElementById('form-login');
const formCadastro = document.getElementById('form-cadastro');
const erroLogin = document.getElementById('erro-login');
const erroCadastro = document.getElementById('erro-cadastro');

function mostrarLogin() {
  opcaoInicial.classList.add('oculto');
  formLogin.classList.remove('oculto');
}

function mostrarCadastro() {
  opcaoInicial.classList.add('oculto');
  formCadastro.classList.remove('oculto');
}

function cadastrar() {
  const nome = document.getElementById('cadastro-nome').value.trim();
  const senha = document.getElementById('cadastro-senha').value.trim();

  if (!nome || !senha) {
    erroCadastro.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

  if (usuarios[nome]) {
    erroCadastro.textContent = "Este nome já está em uso.";
    return;
  }

  usuarios[nome] = senha;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  window.location.href = "index.html";
}

function entrar() {
  const nome = document.getElementById('login-nome').value.trim();
  const senha = document.getElementById('login-senha').value.trim();

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

  if (!usuarios[nome]) {
    erroLogin.textContent = "Nome inexistente.";
    return;
  }

  if (usuarios[nome] !== senha) {
    erroLogin.textContent = "Senha incorreta.";
    return;
  }

  window.location.href = "index.html";
}
