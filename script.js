// CARROSSEL
const container = document.querySelector('.banner-container');
const slides = document.querySelectorAll('.banner-slide');
const btnPrev = document.querySelector('.banner-btn.esquerda');
const btnNext = document.querySelector('.banner-btn.direita');

let index = 0;
const total = slides.length;

function atualizarSlide(i) {
  index = (i + total) % total;
  container.style.transform = `translateX(${-index * 100}%)`;
}

// Faz o slide inicial aparecer
atualizarSlide(0);

// Eventos nos botões
btnPrev.addEventListener('click', () => {
  atualizarSlide(index - 1);
  reiniciarAutoplay();
});
btnNext.addEventListener('click', () => {
  atualizarSlide(index + 1);
  reiniciarAutoplay();
});

// Autoplay a cada 5 segundos
let autoplay = setInterval(() => {
  atualizarSlide(index + 1);
}, 5000);

function reiniciarAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => {
    atualizarSlide(index + 1);
  }, 5000);
}

// CARDS DE ALUNOS (se você tiver esse código no script.js original, mantenha compatível)
const nomes = [
  "Ana Beatriz","Caio Henrique","Mariana Souza","Gabriel Lima","Rafaela Costa",
  "Lucas Pereira","Beatriz Oliveira","Matheus Rodrigues","Larissa Almeida","Felipe Santos"
];
const areaAlunos = document.querySelector('.estudantes_todos');

function gerarMedia() {
  const m = Math.random() * (10 - 5) + 5;
  return Math.round(m * 10) / 10;
}
function textoPorMedia(media) {
  if (media >= 9) return "Excelente desempenho";
  if (media >= 7.5) return "Bom desempenho";
  if (media >= 6) return "Desempenho regular";
  return "Precisa melhorar";
}

nomes.forEach((nome, i) => {
  const card = document.createElement('div');
  card.className = 'estudante-card';
  card.tabIndex = 0;

  const inner = document.createElement('div');
  inner.className = 'estudante-inner';

  const frente = document.createElement('div');
  frente.className = 'estudante-front';
  const img = (i % 2 === 0) ? 'estudante_menino.png' : 'estudante_menina.png';
  frente.innerHTML = `<img src="${img}" alt="${nome}"><h3>${nome}</h3>`;

  const verso = document.createElement('div');
  verso.className = 'estudante-back';
  const media = gerarMedia();
  const texto = textoPorMedia(media);
  verso.innerHTML = `<div class="media">Média: ${media.toFixed(1)}</div><div class="texto">${texto}</div>`;

  inner.appendChild(frente);
  inner.appendChild(verso);
  card.appendChild(inner);
  areaAlunos.appendChild(card);

  function virar() {
    card.classList.toggle('flipped');
  }
  card.addEventListener('click', virar);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      virar();
    }
  });
});
