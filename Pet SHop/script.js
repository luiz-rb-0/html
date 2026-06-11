const images = [
    {
        img: 'IMG_BrinquedoGato.webp',
    },
    {
        img: 'IMG_ColeiraGato.png',
    },
    {
        img: 'IMG_RaçãoCachorro.webp',
    },
];

let currentIndex = 0;
const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const form = document.getElementById('signupForm');
const notification = document.getElementById('notification');

function updateCarousel() {
    const item = images[currentIndex];
    carouselImage.src = item.img;
    carouselImage.alt = item.img;
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

let carouselInterval = setInterval(showNext, 5000);

const carouselContainer = document.querySelector('.carousel');
carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
carouselContainer.addEventListener('mouseleave', () => {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(showNext, 5000);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const city = document.getElementById('city').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pets = document.getElementById('pets').value.trim();

    if (!name || !city || !phone || !pets) {
        notification.textContent = 'Por favor, preencha todos os campos antes de enviar.';
        notification.classList.add('error');
        notification.hidden = false;
        return;
    }

    notification.textContent = `Cadastro concluído com sucesso! Obrigado, ${name}. Em breve enviaremos novidades para ${city}.`;
    notification.classList.remove('error');
    notification.classList.add('success');
    notification.hidden = false;

    form.reset();
    setTimeout(() => {
        notification.hidden = true;
    }, 6000);
});

updateCarousel();
