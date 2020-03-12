// header
const menu = document.querySelector('.navigation_menu');
let list = menu.querySelectorAll('.navigation_menu--link');

function changeSection() {
  list.forEach(item => item.classList.remove('active'));
  event.target.classList.add('active');
};
menu.addEventListener('click', changeSection);