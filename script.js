// ====== CARROSSEL ======
const slides = document.querySelectorAll('.banner-slide');
const container = document.querySelector('.banner-container');
const btnPrev = document.querySelector('.banner-btn.esquerda');
const btnNext = document.querySelector('.banner-btn.direita');
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
  { nome: "Ana Clara", imagem: "aluno1.jpg", status: "Aprovado" },
  { nome: "João Pedro", imagem: "aluno2.jpg", status: "Reprovado" },
  { nome: "Maria Souza", imagem: "aluno3.jpg", status: "Aprovado" },
  { nome: "Lucas Silva", imagem: "aluno4.jpg", status: "Aprovado" },
  { nome: "Julia Santos", imagem: "aluno5.jpg", status: "Reprovado" },
  { nome: "Mateus Lima", imagem: "aluno6.jpg", status: "Aprovado" },
  { nome: "Carla Mendes", imagem: "aluno7.jpg", status: "Aprovado" },
  { nome: "Gabriel Rocha", imagem: "aluno8.jpg", status: "Reprovado" },
  { nome: "Fernanda Costa", imagem: "aluno9.jpg", status: "Aprovado" },
  { nome: "Eduardo Oliveira", imagem: "aluno10.jpg", status: "Aprovado" }
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
