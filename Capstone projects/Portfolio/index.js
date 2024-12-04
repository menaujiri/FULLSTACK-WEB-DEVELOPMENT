
// Activate Menu Botton//

let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// lets remove menu-bar on scroll//
windows.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// Scroll Reveal //
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
    });

ScrollReveal().reveal('.home-bio h1, .about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.home-bio heading', { origin: 'top' });
ScrollReveal().reveal('.profile-pic, about-items, form', { origin: 'bottom' });

// <!-- Animation  -->//

const animText = new Typed ('.animated-text', {
    strings: ['Web Developer', 'Copy Writer', 'Footballer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
})

