
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

console.log(toggleMenu);

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu

// this.menuButton.addEventListener('click', () => this.toggleMenu());

// this.menuButton.addEventListener('click', this.toggleMenu.bind(this));


menuButton.addEventListener('click', () => toggleMenu());