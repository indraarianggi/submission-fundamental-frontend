class CategoryItemCard extends HTMLElement {
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
                    padding: 10px 10px;
                }

                .card {
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 140px;
                    height: 140px;
                    border-radius: 12px;
                    box-shadow: 0 0 10px rgba(51, 51, 51, 0.15);
                    transition: box-shadow 300ms, transform 300ms;
                }

                .card:hover {
                    cursor: pointer;
                    transform: translateY(-4px);
                    box-shadow: 0 4px 15px rgba(51, 51, 51, 0.30);
                }

                .card .icon {
                    width: 36px;
                    height: auto;
                    margin-bottom: 15px;
                }
            </style>

            <div class="card">
                <img
                    class="icon"
                    src="./image/${this._category.icon}"
                    alt="${this._category.text}"
                />
                <span>${this._category.text}</span>
            </div>
        `;
    }
}

customElements.define("category-item-card", CategoryItemCard);
