import './menuItem.css';

export default class MenuItem {
    constructor(title, url, openInNew) {
        this.title = title;
        this.url = url;
        this.openInNew = openInNew;

        this.item = document.createElement('div');
        this.item.classList.add('menu-item');
        const itemLink = document.createElement('a');
        itemLink.href = this.url;
        itemLink.text = this.title;
        if (this.openInNew) {
            itemLink.target = '_blank';
        }
        this.item.appendChild(itemLink);

        return this.item;
    }
}