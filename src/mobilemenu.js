import './mobilemenu.css';

export default class MobileMenu {
    /**
     * 
     * @param {string} position - Determines position of menu
     */
    constructor(position = 'top-left') {
        this.menuButton = document.createElement('button');
        this.menuButton.classList.add('menu-button');

        this.menuContainer = document.createElement('div');
        this.menuContainer.classList.add('menu-container');
    }
}