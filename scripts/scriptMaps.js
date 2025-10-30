
//EFEITO DO FOGO NA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    const fireBackground = document.querySelector('.fire-background');

    function createFireParticle() {
        const particle = document.createElement('div');
        particle.classList.add('fire-particle');
        fireBackground.appendChild(particle);

        // Posição inicial aleatória no topo
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `-${Math.random() * 50}px`; // Começa um pouco acima da tela

        // Tamanho aleatório
        const size = Math.random() * 10 + 5; // Entre 5px e 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Duração da animação aleatória para variar o efeito
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Entre 2s e 5s
        particle.style.animationDelay = `${Math.random() * 2}s`; // Começa com delay aleatório

        // Remove a partícula após a animação para não acumular elementos
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Gera partículas continuamente
    setInterval(createFireParticle, 100); // Cria uma partícula a cada 100ms
});

function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }

//PASSADOR DE SLIDES DA PÁGINA DE PERSONAGENS
    const slides = [
      {
        image: "images/Poente do Norte.jpg",
        caption: "Poente do Norte"
      },
      {
        image: "images/Poente do Sul.jpg",
        caption: "Poente do Sul"
      }
    ];

    let currentIndex = 0;

    function showSlide(index) {
      const slide = slides[index];
      document.getElementById("slide").src = slide.image;
      document.getElementById("caption").textContent = slide.caption;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    // Inicializa com o primeiro slide
    showSlide(currentIndex);


