// script.js
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {

    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Sviesus';
    } else {
        themeToggle.textContent = 'Tamsus';
    }
});
