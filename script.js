new Splide( '#meuSplide', {
    autoplay: true,
    interval: 3000,
    perPage: 3,
} ).mount();


document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const div = document.querySelector('.containerInsertBlur')
    div.classList.toggle('blur');
    
    
});