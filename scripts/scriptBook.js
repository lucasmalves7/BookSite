
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

//ALERT via ONCLICK (UTILIZADO AO CLICAR PARA ACESSAR "MAPAS" E "SOBRE O AUTOR"):

function mostrarAlerta() {
  alert("Página em desenvolvimento.");
}

//PASSADOR DE SLIDES DA PÁGINA DE PERSONAGENS
    const slides = [
      {
        image: "images/Rudan.png",
        caption: "Rudan (Rudân) - É um caçador ousado e jovem, mas rejeitado pelo povo de sua aldeia por possuir a marca do demônio em sua testa desde o dia de seu nascimento. Devido a isso Rudan sempre esconde o símbolo com uma faixa de couro amarrada sobre a cabeça, tapando sua marca de nascença."
      },
      {
        image: "images/Nthale.jpeg",
        caption: "Nthale Mbakan (Nitále Imbakân) - Foi capturado pelos seus inimigos valenthianos. Nthale navega junto de seus captores até o novo continente descoberto pelo império, enquanto sofre nas mãos deles. Ele se apega a profecia de sua irmã, que dizia que na nova terra descoberta haverá alguém capaz de enfrentar os valenthianos e libertar os povos acometidos por eles."
      },
      {
        image: "images/Aruna.png",
        caption: "Aruna (Arúna) - É uma jovem mulher muito estimada pelos Nairus da Floresta por causa de sua sensibilidade apurada em relação a natureza e ao mundo espiritual. Filha do Kacik de Kandrak, ela sabe que tem a obrigação de se casar com um caçador da aldeia, mas não almeja isso para si. Aruna deseja obter os conhecimentos dos nairus e se tornar tão respeitável e sábia quanto eles."
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
        image: "images/Adnari.png",
        caption: "Adnari (Adnári) - Filha de Obaki, do Clã Garra de Gavião, Adnari atrai muitos olhares por onde passa. Diferente da maioria das mulheres da aldeia que são incumbidas de atividades domésticas, Adnari prefere caçar e quase sempre está acompanhada de Rudan em suas caçadas."
      },
      {
        image: "images/Cirane.png",
        caption: "Cirane (Cirâne) - Segunda esposa do Kacik Ziaran. É considerada a esposa favorida do kacik e, após 4 anos do Ritual de União, ela finalmente carrega um filho de Ziaran em seu ventre.",
      },
      {
        image: "images/Jabari.png",
        caption: "Jabari (Jabári) - Um dos nairus que de tempos em tempos visita a Grande Aldeia de Kandrak. Jabari considera Eruvar seu rival, alegando que Eruvar é uma farsa e não segue verdadeiramente os preceitos da deusa-mãe.",
      },
      {
        image: "images/Vanesha.png",
        caption: "Vanesha (Vanecha) - Primeira esposa do Kacik Ziarán. Vanesha tem 2 filhos com o kacik e é considerada a esposa mais experiente de Ziaran, porém ela se sente rejeitada pelo marido, que quase nunca a procura por preferir Cirane, sua segunda esposa.",
      },
      {
        image: "images/Ziaran.png",
        caption: "Ziaran (Ziarán) - Kacik da Grande Aldeia de Kandrak. Líder dos clãs do sul. Caçador que durante a Caçada Selvagem abateu um jaguar ancestral e por isso se tornou o líder dos clãs.",
      },
      {
        image: "images/Khaledar.png",
        caption: "Khaledar (Káledar) - Pertencente a Casa Luthorak, uma das 3 casas que regem o Império de Valenthar, Khaledar busca renome para ascender na política do império e se equiparar aos seus irmãos, por isso decidiu explorar as Terras Selvagens do Poente com o objetivo de colonizar o território e expandir o império valenthiano.",
      },
      {
        image: "images/Viorica.png",
        caption: "Viorica (Viórica) - Linguista, geógrafa e historiadora, Viorica Carmelin é uma mulher renomada no império, embora muitos a critiquem por ter práticas consideradas de cunho masculino. Ela foi escolhida por Khaledar Luthorak para ajudar na colonização dos nativos existentes nas Terras Selvagens do Poente.",
      },
      {
        image: "images/Loren.png",
        caption: "Loren (Lóren) - Líder dos Paladinos Vermelhos e Segundo Comandante da expedição valenthiana nas Terras Selvagens, Loren Dancart está junto de Khaledar na missão de colonizar o ocidente. O homem, um verdadeiro estrategista e hábil de batalha, é estimado pelos valenthianos e o líder deles na ausência de Khaledar.",
      },
      {
        image: "images/Sidgar.png",
        caption: "Sidgar (Sídgar) - Conhecido como Senhor das Correntes, ele é um dos subordinados de Khaledar Luthorak e responsável por parte dos escravos de Valenthar na expedição ao ocidente. Sidgar espera fazer parte da Corte de Khaledar quando eles voltarem para Valenthar e por isso vive tentando agradar o líder daquela expedição.",
      },
      {
        image: "images/Elandro.png",
        caption: "Feito de escravo pelos valenthianos, Elandro é um homem misterioso e quieto, mas que atrai a atenção dos demais escravos de pele pálida, que possuem uma certa admiração por ele, apesar das condições miseráveis em que o homem se encontra.",
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


