
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
        image: "images/Rudan.png",
        caption: "Rudan (Rudân) - É um caçador ousado e jovem, mas rejeitado pelo povo de sua aldeia por possuir a marca do demônio em sua testa desde o dia de seu nascimento. Devido a isso Rudan sempre esconde o símbolo com uma faixa de couro amarrada sobre a cabeça, tapando sua marca de nascença."
      },
      {
        image: "images/Nthale.jpeg",
        caption: "Nthale Mbakan (Nitále Imbakân) - Foi capturado pelos valenthianos e feito de escravo por eles. Nthale navega junto de seus captores até o novo continente descoberto pelo império, enquanto sofre nas mãos de seus soberanos. Ele se apega a profecia de sua irmã, que dizia que na nova terra descoberta haverá alguém capaz de libertar ele e o seu povo da escravidão."
      },
      {
        image: "images/Aruna.png",
        caption: "Aruna (Arúna) - É uma jovem mulher muito estimada pelos Nairus da Floresta por causa de sua sensibilidade apurada em relação a natureza e ao mundo espiritual. Filha do Kacik de Kandrak, ela sabe que tem a obrigação de se casar com um caçador da aldeia, mas não almeja isso para si. Aruna deseja obter o conhecimentos dos nairus e se tornar tão respeitável e sábia quanto eles."
      },
      {
        image: "images/Rakaro.png",
        caption: "Rakaro (Rakáro) - Forte e bem visto na aldeia, ele é o primogênito do Kacik de Kandrak e também é o seu filho preferido. Rakaro almeja que na próxima Caçada Selvagem, que decidirá o novo kacik, ele consiga o Cocar Sagrado e a lança Kuakatan, que somente um kacik pode portar."
      },
      {
        image: "images/Eruvar Asa Branca.jpeg",
        caption: "Eruvar (Eruvár) - Sempre acompanhado de sua ave fiel, uma harpia chamada Pacurun, Eruvar é um dos mais respeitados nairus da floresta. Ele possui o conhecimento oculto da floresta e dos espíritos, além de habilidades como curandeiro. Eruvar é estimado em todas as aldeias do sul e aparece de tempos em tempos em Kandrak trazendo conhecimento, recursos e bençãos ao povo."
      },
            {
        image: "images/Cirane.png",
        caption: "Cirane (Cirâne) - Texto",
      },
      {
        image: "images/Jabari.png",
        caption: "Jabari (Jabári) - Texto",
      },
      {
        image: "images/Vanesha.png",
        caption: "Vanesha (Vanecha) - Texto",
      },
      {
        image: "images/Ziaran.png",
        caption: "Ziaran (Ziarán) - Texto",
      },
      {
        image: "images/Khaledar.png",
        caption: "Khaledar (Káledar) - Texto",
      },
      {
        image: "images/Viorica.png",
        caption: "Viorica (Viórica) - Texto",
      },
      {
        image: "images/Loren.png",
        caption: "Loren (Lóren) - Texto",
      },
      {
        image: "images/Sidgar.png",
        caption: "Sidgar (Sidgar) - Texto",
      },
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
