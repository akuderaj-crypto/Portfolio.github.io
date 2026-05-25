/**
 * EXTRA FEATURE 2: Dark/Light Mode Engine (Fixed & Optimized)
 * Uses classList for better reliability and Local Storage for persistence.
 */
// Wrap in DOMContentLoaded to ensure the HTML elements exist before running
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Check for saved theme, otherwise default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) themeToggle.textContent = '🌙 Dark Mode';
    } else {
        body.classList.remove('light-mode');
        if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
    }

    // 2. Add click event listener with a safety check
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle the light-mode class
            const isLight = body.classList.toggle('light-mode');
            
            // Update button text and LocalStorage based on the class state
            if (isLight) {
                themeToggle.textContent = '🌙 Dark Mode';
                localStorage.setItem('portfolio-theme', 'light');
            } else {
                themeToggle.textContent = '☀️ Light Mode';
                localStorage.setItem('portfolio-theme', 'dark');
            }
        });
    }
});
