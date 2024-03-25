document.body.innerHTML += 'funguju';

const navElement = document.querySelector('.nav-list');
const navButton = document.querySelector('.nav-mobile');

const showMenu = () => {
  navElement.classList.toggle('nav-list-hidden');
  navButton.classList.toggle('nav-hamburger');
  navButton.classList.toggle('nav-cross');
  console.log('kliknutí');
};

navButton.addEventListener('click', showMenu);
