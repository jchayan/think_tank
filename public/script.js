// script.js
// JavaScript para un efecto parallax más controlado en la imagen de fondo
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        // Ajusta el factor 0.5 para controlar la velocidad del parallax (valores menores = movimiento más lento)
        hero.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
    });
});

console.log('Template cargado');
