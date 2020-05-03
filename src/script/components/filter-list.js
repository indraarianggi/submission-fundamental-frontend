import categories from "../data/categories.js";
import "./filter-item.js";

class FilterList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        categories.forEach((category) => {
            const filterItemElement = document.createElement("filter-item");

            filterItemElement.category = category;
            this.shadowDOM.appendChild(filterItemElement);
        });
    }
}

customElements.define("filter-list", FilterList);
