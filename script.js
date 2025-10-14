// ======== CARROSSEL ========
const banners = document.querySelectorAll(".banner-img");
let bannerIndex = 0;

function mostrarBanner(index) {
  banners.forEach((banner, i) => {
    banner.classList.toggle("ativo", i === index);
  });
}

function proximoBanner() {
  bannerIndex = (bannerIndex + 1) % banners.length;
  mostrarBanner(bannerIndex);
}

function anteriorBanner() {
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  mostrarBanner(bannerIndex);
}

document.querySelector(".direita").addEventListener("click", proximoBanner);
document.querySelector(".esquerda").addEventListener("click", anteriorBanner);
setInterval(proximoBanner, 5000);

// ======== FLIP DOS CARDS DE ALUNOS ========
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
