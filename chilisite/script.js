document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.project-card'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    // Cloner les slides pour l'effet infini
    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    const secondLastClone = slides[slides.length - 2].cloneNode(true);
    
    // Ajouter les clones
    sliderTrack.appendChild(firstClone);
    sliderTrack.appendChild(secondClone);
    sliderTrack.insertBefore(lastClone, slides[0]);
    sliderTrack.insertBefore(secondLastClone, lastClone);

    let currentIndex = 2; // Commencer après les deux clones du début
    let slideWidth;
    
    // Calculer la largeur du slide incluant le gap
    function calculateSlideWidth() {
        const slide = slides[0];
        const style = window.getComputedStyle(slide);
        const marginRight = parseInt(style.marginRight) || 30; // Gap par défaut
        slideWidth = slide.offsetWidth + marginRight;
    }

    function updateSlider(transition = true) {
        calculateSlideWidth(); // Recalculer la largeur à chaque mise à jour
        sliderTrack.style.transition = transition ? 'transform 0.5s ease-in-out' : 'none';
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Position initiale
    calculateSlideWidth();
    updateSlider(false);

    function nextSlide() {
        if (!sliderTrack.style.transition) { // Éviter les clics rapides
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (!sliderTrack.style.transition) {
            currentIndex--;
            updateSlider();
        }
    }

    // Gérer la transition infinie
    sliderTrack.addEventListener('transitionend', () => {
        sliderTrack.style.transition = '';
    });

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Mettre à jour en cas de redimensionnement
    window.addEventListener('resize', () => {
        calculateSlideWidth();
        updateSlider(false);
    });
});