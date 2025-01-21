// Função para aplicar animação de fade-in
function fadeInElement(element, delay = 0) {
    setTimeout(() => {
        element.classList.add('fade-in');
    }, delay);
}

// Animar o header
const header = document.getElementById('header');
fadeInElement(header, 100);

// Animar as seções conforme o usuário rola a página
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    fadeInElement(section, index * 300); // Delays progressivos para as seções
});

// Animar o footer
const footer = document.getElementById('footer');
fadeInElement(footer, 2000);

// Função para detectar o evento de rolagem e animar seções visíveis
window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            fadeInElement(section);
        }
    });
});
