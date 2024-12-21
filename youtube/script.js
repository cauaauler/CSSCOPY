document.addEventListener('DOMContentLoaded', () => {
    const botoes = [
        "Tudo", "Música", "Jogos", "Mixes", "Hip Hop Brasileiro", "Freestyle Rap", "Restaurantes",
        "Basquete", "Futebol", "Turma do Didi", "Pica-Pau", "Carlitos Tevez", "Moda", "Estilo", "Tênis", "Ao Vivo", "Novidades"
    ];
    let selectedButton = null;

    // Adiciona os botões dinamicamente no carousel
    botoes.forEach(element => {
        const novoElemento = document.createElement('button');
        novoElemento.textContent = element;
        novoElemento.setAttribute('title', element);
        novoElemento.addEventListener('click', () => {
            //preciso arrumar isso aqui 
            // window.location.href = "";
            selectedButton = novoElemento;
            updateButtonColor(novoElemento);
        })
        document.getElementById('carousel-header').appendChild(novoElemento);
    });

    // CAROUSEL
    // const carouselImages = document.getElementById('carousel-header');
    const images = document.querySelectorAll('#carousel-header button');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let index = 0;
    let visibleImages = 8; // Número inicial de imagens visíveis
    prevButton.style.display = "none";

    // Atualiza a visibilidade dos botões de navegação
    function updateButtonVisibility() {
        prevButton.style.display = index === 0 ? "none" : "block";
        nextButton.style.display = index >= images.length - visibleImages ? "none" : "block";
    }
    // Muda a cor do botão selecionado
    function updateButtonColor(thisButton) {
        images.forEach((button) => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
        thisButton.style.backgroundColor = 'white';
        thisButton.style.color = 'black';
    }

    // Evento para mover para a próxima imagem
    nextButton.addEventListener('click', () => {
        if (index < images.length - visibleImages) {
            //Isso aqui atualiza o carousel
            images[index].style.display = "none";
            index++;
        }
        updateButtonVisibility();
    });
    
    // Evento para mover para a imagem anterior
    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            //Isso aqui atualiza o carousel
            images[index].style.display = "block";
        }
        updateButtonVisibility();
    });

    // Atualiza o carousel ao redimensionar a janela
    window.addEventListener('resize', () => {
        // updateVisibleImages();
        updateCarousel();
    });

    // Inicializa o comportamento responsivo
    if(selectedButton){
        selectedButton.style.backgroundColor = 'white';
        selectedButton.style.color = 'black';
    }else{
        images[0].style.backgroundColor = 'white';
        images[0].style.color = 'black';
    }
    // updateVisibleImages();
    updateCarousel();

});
