import categories from "../data/categories.js";
import "./category-item-card";

class CategoryList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        categories.forEach((category) => {
            const categoryItemCardElement = document.createElement(
                "category-item-card"
            );

            categoryItemCardElement.category = category;
            this.shadowDOM.appendChild(categoryItemCardElement);
        });
    }
}

customElements.define("category-list", CategoryList);
