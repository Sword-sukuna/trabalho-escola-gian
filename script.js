// ======================
// CARROSSEL AUTOMÁTICO
// ======================
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

setInterval(proximoBanner, 5000); // passa automaticamente a cada 5 segundos

// ======================
// CLIQUE NO ALUNO
// ======================
const alunos = document.querySelectorAll(".estudante-div");

alunos.forEach(aluno => {
  aluno.addEventListener("click", () => {
    const status = aluno.dataset.status;
    const imagem = aluno.querySelector(".estudante-imagem");

    // Adiciona animação de giro
    imagem.style.transform = "rotateY(180deg)";

    setTimeout(() => {
      // Altera a imagem para mostrar status
      if (status === "Aprovado") {
        imagem.src = "aprovado.png";
      } else {
        imagem.src = "reprovado.png";
      }
      imagem.style.transform = "rotateY(0deg)";
    }, 300);
  });
});
