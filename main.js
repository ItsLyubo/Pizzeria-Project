// const selectElement = function(element) {
//     return document.querySelector(element);
// };


// const menuToggler = selectElement('.menu-toggle');
// const body = selectElement('body');

// menuToggler.addEventListener('click', function () {
//     body.classList.toggle('open');
// })



function slide() {
    const body = document.querySelector('body');
    body.classList.toggle('open');
}

// scrolllllllllllllllllllllllllllllllll

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration:1000,
    distance: '25rem',
    delay: 200
});


sr.reveal('.animate-right', {
    origin: 'right',
    duration:1000,
    distance: '25rem',
    delay: 400
});


sr.reveal('.animate-top', {
    origin: 'top',
    duration:1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration:1000,
    distance: '25rem',
    delay: 600
});