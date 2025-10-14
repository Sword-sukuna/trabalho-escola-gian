// === CARROSSEL ===
const container = document.querySelector('.banner-container');
const slides = document.querySelectorAll('.banner-img');
const btnPrev = document.querySelector('.banner-btn.esquerda');
const btnNext = document.querySelector('.banner-btn.direita');

let index = 0;

function mostrarSlide(i) {
  index = (i + slides.length) % slides.length;
  container.style.transform = `translateX(${-index * 100}%)`;
}

btnPrev.addEventListener('click', () => mostrarSlide(index - 1));
btnNext.addEventListener('click', () => mostrarSlide(index + 1));

setInterval(() => {
  mostrarSlide(index + 1);
}, 5000);

// === ALUNOS ===
const alunos = [
  "Aluno 1","Aluno 2","Aluno 3","Aluno 4","Aluno 5",
  "Aluno 6","Aluno 7","Aluno 8","Aluno 9","Aluno 10"
];

const areaAlunos = document.querySelector('.estudantes_todos');

alunos.forEach(nome => {
  const card = document.createElement('div');
  card.classList.add('estudante-card');

  const inner = document.createElement('div');
  inner.classList.add('estudante-inner');

  const frente = document.createElement('div');
  frente.classList.add('estudante-front');
  frente.innerHTML = `<img src="estudante_menino.png" alt="${nome}"><h3>${nome}</h3>`;

  const verso = document.createElement('div');
  verso.classList.add('estudante-back');
  verso.textContent = Math.random() > 0.5 ? '✅ Aprovado' : '❌ Reprovado';

  inner.appendChild(frente);
  inner.appendChild(verso);
  card.appendChild(inner);

  card.addEventListener('click', () => {
    card.classList.toggle('virado');
  });

  areaAlunos.appendChild(card);
});
