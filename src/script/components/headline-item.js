class HeadlineItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set headline(headline) {
        this._headline = headline;
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
                    padding: 15px;
                    width: 15rem;
                    height: auto;
                    border-radius: 12px;
                    box-shadow: 0 0 10px rgba(51, 51, 51, 0.15);
                }

                .label {
                    color: white;
                    background-color: #2196f3;
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    padding: 0.25em 0.5em;
                    border-radius: 4px;
                }

                .title {
                    font-weight: 700;
                    line-height: 1.5rem;
                    margin: 15px 0;
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                }

                .info > span {
                    color: #cfcfcf;
                    font-size: 0.6rem;
                }
            </style>

            <div class="card">
                <span class="label">Bisnis</span>
                <p class="title">
                    Lorem Ipsum Dolor Sit Amet Consectetur
                    Adipiscing
                </p>
                <div class="info">
                    <span class="author">Thomas Wick</span>
                    <span class="published">March 12, 2020</span>
                </div>
            </div>
        `;
    }
}

customElements.define("headline-item", HeadlineItem);
