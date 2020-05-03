class SearchBar extends HTMLElement {
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
                #search-container {
                    background-color: white;
                    padding: 15px;
                    border-radius: 12px;
                    box-shadow: 0 0 10px rgba(51, 51, 51, 0.15);
                    display: flex;
                    margin-bottom: 30px;
                }
                
                input {
                    padding: 10px 15px;
                    border: 1px solid #cfcfcf;
                    border-radius: 12px 0 0 12px;
                    width: 80%;
                }
                
                button {
                    color: white;
                    background-color: #2196f3;
                    margin: 0 auto;
                    border: none;
                    border-radius: 0 12px 12px 0;
                    width: 20%;
                }
                
                img {
                    width: 18px;
                    height: auto;
                }
            </style>

            <div id="search-container">
                <input type="search" placeholder="Masukkan judul berita" />
                <button type="submit">
                    <img src="./image//search.svg" alt="seach icon" />
                </button>
            </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);
