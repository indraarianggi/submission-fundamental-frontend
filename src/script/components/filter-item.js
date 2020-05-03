class FilterItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    padding: 10px 20px;
                }

                :host.active {
                    color: #2196f3;
                    font-weight: 700;
                    border-bottom: 4px solid #2196f3;
                }

                @media screen and (min-width: 992px) {
                    :host {
                        display: block;
                        padding: 10px 20px;
                    }
                }
            </style>
            
            <span>${this._category.text}</span>
        `;
    }
}

customElements.define("filter-item", FilterItem);
