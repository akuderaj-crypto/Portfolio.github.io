// Add this inside your existing script.js theme toggle listener
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'light'); // Set explicit light theme
    themeToggle.textContent = '🌙 Dark Mode';
} else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
}
