document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item img'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImg = document.getElementById('fullscreenImg');
    const closeBtn = document.querySelector('.fullscreen .close');
    let currentIndex = 0;

    function updateImage(index) {
        fullscreenImg.src = galleryItems[index].src;
    }

    function openFullscreen(index) {
        currentIndex = index;
        updateImage(index);
        fullscreen.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when fullscreen is active
    }

    function closeFullscreen() {
        fullscreen.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateImage(currentIndex);
    }

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    closeBtn.addEventListener('click', closeFullscreen);

    fullscreen.addEventListener('click', (e) => {
        if (e.target === fullscreen) {
            closeFullscreen();
        }
    });

    // Add click event to gallery items to open fullscreen
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            openFullscreen(index);
        });
    });
});
