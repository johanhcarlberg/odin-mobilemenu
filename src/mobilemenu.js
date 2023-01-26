import './mobilemenu.css';
import menuSvg from './assets/menu.svg';

export default class MobileMenu {
    /**
     * 
     * 
     */
    constructor() {
        this.menuButton = document.createElement('button');
        this.menuButton.classList.add('menu-button', 'menu-button-light');
        this.menuButton.addEventListener('click', (e) => this.toggle());
        this.menuButton.innerHTML = menuSvg;

        this.menuContainer = document.createElement('div');
        this.menuContainer.classList.add('menu-container');
    }

    toggle() {
        this.menuContainer.classList.toggle('visible');
    }
}