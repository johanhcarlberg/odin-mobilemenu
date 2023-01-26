import './menuItem.css';

export default class MenuItem {
    constructor(title, url) {
        this.title = title;
        this.url = url;

        this.item = document.createElement('div');
        this.item.classList.add('menu-item');
        const itemLink = document.createElement('a');
        itemLink.href = this.url;
        itemLink.text = this.title;
        this.item.appendChild(itemLink);

        return this.item;
    }
}