
//Efeito de Fogo na página
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
