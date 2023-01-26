import './mobilemenu.css';
import menuSvg from './assets/menu.svg';
import MenuItem from './menuItem';

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

        document.addEventListener('click', (e) => {
            if (!this.menuContainer.classList.contains('visible')) {
                return;
            }

            if (!this.menuButton.contains(e.target) && !this.menuContainer.contains(e.target)) {
                this.toggle();
            }
        })
    }

    toggle() {
        this.menuContainer.classList.toggle('visible');
    }

    addItem(title, url) {
        this.menuContainer.appendChild(new MenuItem(title, url));
    }
}