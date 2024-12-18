document.addEventListener('DOMContentLoaded', () => {
    const botoes = [
        "Tudo", "Música", "Jogos", "Mixes", "Hip Hop Brasileiro", "Freestyle Rap", "Restaurantes",
        "Basquete", "Futebol", "Turma do Didi", "Pica-Pau", "Carlitos Tevez", "Moda", "Estilo", "Tênis", "Ao Vivo", "Novidades"
    ];

    // Adiciona os botões dinamicamente no carousel
    botoes.forEach(element => {
        const novoElemento = document.createElement('button');
        novoElemento.textContent = element;
        document.getElementById('carousel-header').appendChild(novoElemento);
    });

    // Lógica do Carousel
    const carouselImages = document.getElementById('carousel-header'); // Correção aqui para usar getElementById
    const images = document.querySelectorAll('#carousel-header button'); // Correção aqui para pegar os botões
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let index = 0;
    const visibleImages = 5; // Número de imagens visíveis de uma vez

    // Função para atualizar o carousel
    function updateCarousel() {
        const width = images[0].offsetWidth; // Usa offsetWidth para garantir a largura do botão
        carouselImages.style.transform = `translateX(${-index * width}px)`; // Desloca o carousel
    }

    // Evento para mover para a próxima imagem
    nextButton.addEventListener('click', () => {
        if (index < images.length - visibleImages) {
            index++;
        } else {
            // index = 0; // Resetar para o início
        }
        updateCarousel();
    });

    // Evento para mover para a imagem anterior
    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            // index = images.length - visibleImages; // Vai para o final
        }
        updateCarousel();
    });

    // Atualiza o carousel ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
});
