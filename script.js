/**
 * EXTRA FEATURE 1: Custom Cursor Stalker
 * Creates a glowing aura that follows the mouse for a 'Cyber' feel.
 */
const cursor = document.createElement('div');
cursor.classList.add('cursor-stalker');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

/**
 * EXTRA FEATURE 2: Dark/Light Mode Engine
 * Includes 'Local Storage' so the theme persists after refreshing the page.
 */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const updateTheme = () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('portfolio-theme', 'dark');
    }
};

themeToggle.addEventListener('click', updateTheme);

// Initialize theme based on user's last visit
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';


/**
 * EXTRA FEATURE 3: Intersection Observer (Scroll Animations)
 * Detects when a section enters the screen and triggers the 'appear' CSS class.
 */
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: "0px 0px -50px 0px"
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Once it appears, we stop observing it for better performance
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply the observer to all sections with the 'fade-in' class
document.querySelectorAll('.fade-in').forEach(section => {
    sectionObserver.observe(section);
});


/**
 * TECHNICAL FEATURE: Smooth Scroll for Navigation
 */
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
