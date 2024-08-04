document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Seleciona todas as imagens e elementos na seção
    const images = document.querySelectorAll('.section-home img:not(.logo_capa):not(.cultura)');

    images.forEach(img => {
        img.classList.add('image-fall');
        
        // Adiciona um atraso aleatório para cada imagem
        const randomDelay = Math.floor(Math.random() * 3) + 2; // atraso entre 2s e 5s
        img.style.animationDelay = `${randomDelay}s`;

        // Define uma duração aleatória para a animação de queda
        const randomFallDuration = Math.floor(Math.random() * 4) + 2; // duração entre 2s e 5s
        img.style.animationDuration = `${randomFallDuration}s`;

        // Espera a animação de queda terminar antes de adicionar a animação de pular
        img.addEventListener('animationend', () => {
            img.classList.remove('image-fall');
            img.classList.add('image-jump');
        });
    });

    // Seleciona logo_capa e cultura para também animar a queda
    const specialElements = document.querySelectorAll('.logo_capa, .cultura');

    specialElements.forEach(element => {
        element.classList.add('no-jump');
        
        // Adiciona um atraso aleatório para cada elemento
        const randomDelay = Math.floor(Math.random() * 3) + 2; // atraso entre 2s e 5s
        element.style.animationDelay = `${randomDelay}s`;

        // Define uma duração aleatória para a animação de queda
        const randomFallDuration = Math.floor(Math.random() * 4) + 2; // duração entre 2s e 5s
        element.style.animationDuration = `${randomFallDuration}s`;
    });
});
