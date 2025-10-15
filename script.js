// ====== CARROSSEL ======
const slides = document.querySelectorAll('.banner-slide');
const container = document.querySelector('.banner-container');
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  container.style.transform = `translateX(${-index * 100}%)`;
}

// autoplay a cada 5 segundos
setInterval(() => showSlide(index + 1), 5000);

// ====== CARDS DOS ALUNOS ======
document.querySelectorAll('.estudante-div').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('virado');
  });
});
