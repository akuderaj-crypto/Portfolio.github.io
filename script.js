:root {
    --bg-color: #ffffff;
    --text-color: #333;
    --accent-color: #007bff;
}

[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #f4f4f4;
    --accent-color: #17a2b8;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: 0.3s;
    line-height: 1.6;
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background: #f8f9fa;
    position: sticky;
    top: 0;
}

.profile-img {
    width: 200px;
    border-radius: 50%;
    border: 5px solid var(--accent-color);
}

section { padding: 80px 20px; text-align: center; }

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
}

.gallery-container img {
    width: 200px;
    margin: 10px;
    transition: transform 0.3s;
}

.gallery-container img:hover { transform: scale(1.1); }
