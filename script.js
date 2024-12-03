document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const projects = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 1;
    const projectWidth = projects[0].clientWidth;

    // Clone first and last elements
    const firstClone = projects[0].cloneNode(true);
    const lastClone = projects[projects.length - 1].cloneNode(true);

    // Add clones to the track
    track.appendChild(firstClone);
    track.insertBefore(lastClone, projects[0]);

    // Adjust the initial position
    track.style.transform = `translateX(${-projectWidth}px)`;

    function updateSlider() {
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${-(currentIndex * projectWidth)}px)`;
    }

    nextBtn.addEventListener('click', function() {
        if (currentIndex >= projects.length) {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(0px)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                currentIndex++;
                updateSlider();
            }, 20);
        } else {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex <= 0) {
            track.style.transition = 'none';
            currentIndex = projects.length;
            track.style.transform = `translateX(${-(projects.length + 1) * projectWidth}px)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                currentIndex--;
                updateSlider();
            }, 20);
        } else {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener('resize', function() {
        track.style.transition = 'none';
        track.style.transform = `translateX(${-(currentIndex * projects[0].clientWidth)}px)`;
    });
});