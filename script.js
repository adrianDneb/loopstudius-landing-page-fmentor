
const menu = document.querySelector('.mobile_menu');
const menuClose = document.querySelector('.mobile_close');

const nav = document.querySelector('.nav');

const navToggle = () => nav.classList.toggle('active');

menu.addEventListener('click', navToggle);
menuClose.addEventListener('click', navToggle);
