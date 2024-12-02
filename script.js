// script.js

// Animar niebla
function animateFog() {
    const fog = document.querySelector('.fog');
    let opacity = 0.8;

    setInterval(() => {
        opacity += (Math.random() - 0.5) * 0.02;
        fog.style.background = `radial-gradient(circle, transparent, rgba(0, 0, 0, ${Math.max(0.6, Math.min(1, opacity))}))`;
    }, 1000);
}

// Movimiento de murciélagos
function animateBats() {
    const bats = document.querySelectorAll('.bat');
    bats.forEach((bat) => {
        setInterval(() => {
            const newX = Math.random() * window.innerWidth;
            const newY = Math.random() * window.innerHeight;

            bat.style.transform = `translate(${newX}px, ${newY}px)`;
        }, 5000);
    });
}

window.onload = () => {
    animateFog();
    animateBats();
};
