// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project card expand/collapse
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.project-card');
        card.classList.toggle('expanded');
        btn.textContent = card.classList.contains('expanded') ? 'Details ▲' : 'Details ▼';
    });
});

// Expand all project cards by default
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('expanded');
        const btn = card.querySelector('.expand-btn');
        if (btn) btn.textContent = 'Details ▲';
    });
});

// Dark/Light mode toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});