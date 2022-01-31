const menuBurger = document.getElementById('menuBurger');
const verticalNav = document.querySelector('.verticalNav');

menuBurger.addEventListener('click', () => {
    verticalNav.classList.toggle('verticalNavAction');
    menuBurger.classList.toggle('menuBurgerAction');
    content.classList.toggle('contentAction');
})

const content = document.querySelector('.content');

content.addEventListener('click', () => {
    verticalNav.classList.remove('verticalNavAction');
    menuBurger.classList.remove('menuBurgerAction');
    content.classList.remove('contentAction');
})