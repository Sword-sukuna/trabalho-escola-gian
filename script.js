// ====== CARROSSEL ======
const slides = document.querySelectorAll('.banner-slide');
const container = document.querySelector('.banner-container');
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  container.style.transform = `translateX(${-index * 100}%)`;
}

btnPrev.addEventListener('click', () => showSlide(index - 1));
btnNext.addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 5000); // Auto play

// ====== ALUNOS ======
const alunos = [
  { nome: "Ana Clara", imagem: "estudante_menina.png", status: "Aprovado" },
  { nome: "João Pedro", imagem: "estudante_menino.png", status: "Reprovado" },
  { nome: "Maria Souza", imagem: "estudante_menina.png", status: "Aprovado" },
  { nome: "Lucas Silva", imagem: "estudante_menino.png", status: "Aprovado" },
  { nome: "Julia Santos", imagem: "estudante_menina.png", status: "Reprovado" },
  { nome: "Mateus Lima", imagem: "estudante_menino.png", status: "Aprovado" },
  { nome: "Carla Mendes", imagem: "estudante_menina.png", status: "Aprovado" },
  { nome: "Gabriel Rocha", imagem: "estudante_menino.png", status: "Reprovado" },
  { nome: "Fernanda Costa", imagem: "estudante_menina.png", status: "Aprovado" },
  { nome: "Eduardo Oliveira", imagem: "estudante_menino.png", status: "Aprovado" }
];

const containerAlunos = document.querySelector('.estudantes_todos');

alunos.forEach(aluno => {
  const card = document.createElement('div');
  card.classList.add('card-aluno');
  
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${aluno.imagem}" alt="${aluno.nome}">
        <p>${aluno.nome}</p>
      </div>
      <div class="card-back ${aluno.status === 'Aprovado' ? 'aprovado' : 'reprovado'}">
        <p>${aluno.status}</p>
      </div>
    </div>
  `;
  
  containerAlunos.appendChild(card);
});
