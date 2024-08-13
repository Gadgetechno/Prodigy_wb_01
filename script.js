window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    if (scrollY < window.innerHeight) {
        nav.style.backgroundColor = 'rgba(0, 0, 255, 0.7)'; // Blue
    } else if (scrollY < window.innerHeight * 2) {
        nav.style.backgroundColor = 'rgba(0, 128, 0, 0.7)'; // Green
    } else if (scrollY < window.innerHeight * 3) {
        nav.style.backgroundColor = 'rgba(255, 165, 0, 0.7)'; // Orange
    } else {
        nav.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'; // Red
    }
});
