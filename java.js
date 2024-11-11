// Espera a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function () {

    // Inicializa ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',         
        distance: '50px',         
        duration: 1000,           
        delay: 200,               
        reset: false               
    });

    // Aplicar animaciones a elementos específicos
    sr.reveal('.hero-description', {
        delay: 250,               
        duration: 2000,          
        distance: '100px'
    });

    sr.reveal('.hero-image', {
        delay: 250,               
        duration: 2000,          
        distance: '100px'
    });
    sr.reveal('.u-wrapper', {
        delay: 250,               
        duration: 2000,          
        distance: '100px'
    });
    sr.reveal('.project-list', {
        delay: 250,               
        duration: 2000,          
        distance: '100px'
    });
    sr.reveal('.testimony', {
        delay: 250,               
        duration: 2000,          
        distance: '100px'
    });

});

