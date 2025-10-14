// ====== CARROSSEL (autoplay + botões) ======
const container = document.querySelector('.banner-container');
const slides = Array.from(document.querySelectorAll('.banner-slide'));
const btnPrev = document.querySelector('.banner-btn.esquerda');
const btnNext = document.querySelector('.banner-btn.direita');

let index = 0;
const total = slides.length;

function atualizarSlide(i) {
  index = (i + total) % total;
  container.style.transform = `translateX(${-index * 100}%)`;
}

// botões
btnPrev.addEventListener('click', () => {
  atualizarSlide(index - 1);
  reiniciarAutoplay();
});
btnNext.addEventListener('click', () => {
  atualizarSlide(index + 1);
  reiniciarAutoplay();
});

// autoplay a cada 5s
let autoplay = setInterval(() => atualizarSlide(index + 1), 5000);
function reiniciarAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => atualizarSlide(index + 1), 5000);
}

// garante que o container inicial esteja no lugar (caso o CSS calc difira)
atualizarSlide(0);

// ====== CARDS DE ALUNOS (10 nomes aleatórios) ======
const nomes = [
  "Ana Beatriz","Caio Henrique","Mariana Souza","Gabriel Lima","Rafaela Costa",
  "Lucas Pereira","Beatriz Oliveira","Matheus Rodrigues","Larissa Almeida","Felipe Santos"
];

const areaAlunos = document.querySelector('.estudantes_todos');

// função para gerar média aleatória com 1 casa decimal entre 5.0 e 10.0
function gerarMedia() {
  const m = Math.random() * (10 - 5) + 5;
  return Math.round(m * 10) / 10; // uma casa decimal
}

// pequeno texto baseado na média
function textoPorMedia(media) {
  if (media >= 9) return "Excelente desempenho";
  if (media >= 7.5) return "Bom desempenho";
  if (media >= 6) return "Desempenho regular";
  return "Precisa melhorar";
}

// cria os cards
nomes.forEach((nome, i) => {
  const card = document.createElement('div');
  card.className = 'estudante-card';
  card.setAttribute('role', 'button');
  card.setAttribute('aria-pressed', 'false');
  card.tabIndex = 0;

  const inner = document.createElement('div');
  inner.className = 'estudante-inner';

  const frente = document.createElement('div');
  frente.className = 'estudante-front';
  // alterna imagem masculina/feminina apenas para variar
  const imagem = (i % 2 === 0) ? 'estudante_menino.png' : 'estudante_menina.png';
  frente.innerHTML = `<img src="${imagem}" alt="${nome}"><h3>${nome}</h3>`;

  const verso = document.createElement('div');
  verso.className = 'estudante-back';
  const media = gerarMedia();
  const texto = textoPorMedia(media);
  verso.innerHTML = `<div class="media">Média: ${media.toFixed(1)}</div><div class="texto">${texto}</div>`;

  inner.appendChild(frente);
  inner.appendChild(verso);
  card.appendChild(inner);
  areaAlunos.appendChild(card);

  // clique e teclado para virar
  function toggleFlip() {
    const flipped = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
  }

  card.addEventListener('click', toggleFlip);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  });
});
