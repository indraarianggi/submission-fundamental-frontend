class PaginationElement extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    padding: 0;
                    border-radius: 12px;
                }

                span {
                    color: #cfcfcf;
                    flex-grow: 1;
                    text-align: center;
                }

                span.active {
                    color: #2196f3;
                    border-bottom: 2px solid #2196f3;
                }
            </style>
        `;
        for (let i = 0; i < 5; i++) {
            const paginationItemElement = document.createElement("span");

            paginationItemElement.innerHTML = `${i + 1}`;

            this.shadowDOM.appendChild(paginationItemElement);
        }
    }
}

customElements.define("pagination-element", PaginationElement);
