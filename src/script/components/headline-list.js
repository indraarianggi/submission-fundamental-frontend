import "./headline-item.js";

class HeadlineList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        for (let i = 0; i < 5; i++) {
            const headlineItemElement = document.createElement("headline-item");
            headlineItemElement.headline = "Lalala";
            this.shadowDOM.appendChild(headlineItemElement);
        }
    }
}

customElements.define("headline-list", HeadlineList);
