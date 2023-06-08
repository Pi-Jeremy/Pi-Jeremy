let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-bar');
let header = document.querySelector('#header');

menu.onclick = () => {
    menu.classList.toggle('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-width="2"><path d="M5 5H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="24;0"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="24;0"/></path><path d="M5 19H19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="24;0"/></path></g></svg>');
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
