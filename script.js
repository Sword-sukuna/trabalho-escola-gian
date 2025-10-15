// ---- LOGIN ----
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

function mostrarCadastro() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('cadastro-form').style.display = 'block';
}

function cadastrar() {
  const nome = document.getElementById('cadastro-nome').value;
  const senha = document.getElementById('cadastro-senha').value;
  if (nome && senha) {
    usuarios[nome] = senha;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    window.location.href = 'home.html';
  }
}

function entrar() {
  const nome = document.getElementById('login-nome').value;
  const senha = document.getElementById('login-senha').value;
  const erro = document.getElementById('erro-login');

  if (!(nome in usuarios)) {
    erro.textContent = 'Nome inexistente';
  } else if (usuarios[nome] !== senha) {
    erro.textContent = 'Senha incorreta';
  } else {
    window.location.href = 'home.html';
  }
}

function sair() {
  window.location.href = 'index.html';
}

// ---- ALUNOS ----
const alunos = [
  { nome: 'Lucas', aprovado: true },
  { nome: 'Maria', aprovado: false },
  { nome: 'João', aprovado: true },
  { nome: 'Ana', aprovado: true },
  { nome: 'Carlos', aprovado: false },
  { nome: 'Julia', aprovado: true },
  { nome: 'Pedro', aprovado: false },
  { nome: 'Mariana', aprovado: true },
  { nome: 'Fernando', aprovado: true },
  { nome: 'Beatriz', aprovado: false }
];

const container = document.querySelector('.estudantes_todos');
if (container) {
  alunos.forEach(a => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${a.aprovado ? 'estudante_menino.png' : 'estudante_menina.png'}" alt="${a.nome}">
          <h4>${a.nome}</h4>
        </div>
        <div class="card-back ${a.aprovado ? 'aprovado' : 'reprovado'}">
          <p>${a.aprovado ? 'Aprovado' : 'Reprovado'}</p>
        </div>
      </div>`;
    container.appendChild(card);
  });
}
