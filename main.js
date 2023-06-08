let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-bar');
let header = document.querySelector('#header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav-bar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav-bar.classList.remove('active');
}
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})
/* Scroll Reveal */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text',{delay: 200, origin: 'top'})
sr.reveal('.home-img', {delay: 400, origin: 'top'})
sr.reveal('.about-title, .about-text .heading, .box, input, textarea, .social a',{delay: 200, origin: 'top'})
