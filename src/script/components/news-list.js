import "./news-item.js";

class NewsList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        for (let i = 0; i < 9; i++) {
            const newsItemElement = document.createElement("news-item");
            newsItemElement.news = "Lalala";
            this.shadowDOM.appendChild(newsItemElement);
        }
    }
}

customElements.define("news-list", NewsList);
