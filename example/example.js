import MobileMenu from '../src/mobilemenu';
import './example.css';
const container = document.querySelector('.container');
const header = document.querySelector('header');
const main = document.querySelector('main');

const menu = new MobileMenu();
const menuButton = menu.menuButton;
const menuContainer = menu.menuContainer;

menu.addItem('Home', '');

header.appendChild(menuButton);
main.appendChild(menuContainer);
