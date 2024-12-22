document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        {
            thumbnail: 'https://via.placeholder.com/200x200/FF5733/FFFFFF?text=1',
            title: 'Aprendendo JavaScript',
            channel: 'Dev Iniciante',
        },
        {
            thumbnail: 'https://via.placeholder.com/200x200/33FF57/FFFFFF?text=2',
            title: 'Como criar sites incríveis',
            channel: 'Web Designer Pro',
        },
        {
            thumbnail: 'https://via.placeholder.com/200x200/3357FF/FFFFFF?text=3',
            title: 'Dicas para programadores',
            channel: 'Código Simples',
        },
        {
            thumbnail: 'https://via.placeholder.com/200x200/FF33FF/FFFFFF?text=4',
            title: 'Desvendando CSS',
            channel: 'FrontEnd Master',
        },
        {
            thumbnail: 'https://via.placeholder.com/200x200/57FFFF/FFFFFF?text=5',
            title: 'Aprendendo Python do zerooooo',
            channel: 'Python Fácil',
        },
        {
            thumbnail: 'https://via.placeholder.com/200x200/FFFF57/FFFFFF?text=6',
            title: 'Dominando React',
            channel: 'React Ninja',
        }
    ];

    videos.forEach(element => {
            const novoElemento = document.createElement('div');
            novoElemento.setAttribute('class', 'div-video');
            novoElemento.setAttribute('title', element.title);

            // Cria a imagem do vídeo
            const imgVideo = document.createElement('img');
            imgVideo.setAttribute('src', element.thumbnail);
            imgVideo.setAttribute('alt', '');
            imgVideo.setAttribute('class', 'img-video');
            novoElemento.appendChild(imgVideo);

            // Cria a div de informações do vídeo
            const infoVideo = document.createElement('div');
            infoVideo.setAttribute('class', 'info-video');

            // Cria a imagem do canal
            const imgChannel = document.createElement('img');
            imgChannel.setAttribute('src', element.thumbnail); // Supondo que a thumbnail do vídeo seja a imagem do canal também
            imgChannel.setAttribute('alt', '');
            imgChannel.setAttribute('class', 'img-channel');
            infoVideo.appendChild(imgChannel);

            // Cria o conteúdo com o título do vídeo e nome do canal
            const videoInfo = document.createElement('div');
            const videoTitle = document.createElement('h2');
            videoTitle.textContent = element.title;
            const channelName = document.createElement('p');
            channelName.setAttribute('class', 'video-channel-name');
            channelName.textContent = element.channel;

            videoInfo.appendChild(videoTitle);
            videoInfo.appendChild(channelName);
            infoVideo.appendChild(videoInfo);

            // Adiciona a div de informações ao novo elemento
            novoElemento.appendChild(infoVideo);

            // Adiciona o novo elemento ao DOM
            document.getElementById('main').appendChild(novoElemento);
        

    });

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
if (selectedButton) {
    selectedButton.style.backgroundColor = 'white';
    selectedButton.style.color = 'black';
} else {
    images[0].style.backgroundColor = 'white';
    images[0].style.color = 'black';
}
// updateVisibleImages();
updateCarousel();

});


