let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel .slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('center', 'hidden-left', 'hidden-right', 'active');
        if (index === currentSlide) {
            slide.classList.add('center', 'active');
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add('hidden-right', 'active');
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('hidden-left', 'active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel .slide').length;
    showSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.carousel .slide').length) % document.querySelectorAll('.carousel .slide').length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    document.querySelector('.carousel-container').classList.remove('move-up');
    document.body.style.overflow = 'hidden';

    document.getElementById('slide1').addEventListener('click', revealContent);
});

function revealContent() {
    document.querySelector('.carousel-container').classList.add('move-up');
    document.body.style.overflow = 'auto';
}
