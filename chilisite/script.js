document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.project-card'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let currentIndex = 0;
    const slideHeight = slides[0].offsetHeight;

    function updateSlider() {
        sliderTrack.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});