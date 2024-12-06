const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
