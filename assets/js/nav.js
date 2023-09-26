const menu = document.querySelector('#menu');
const links = document.querySelector('#nav-right');
const logo = document.querySelector('#nav-left');

logo.classList.toggle('active');

menu.addEventListener('click', () => {
    links.classList.toggle('active');
    logo.classList.toggle('hidden');
});