import "../components/category-list.js";
import "../components/category-item-card.js";
import "../components/news-list.js";

const main = () => {
    const newsListElement = document.querySelector("news-list");
    const searchElement = document.querySelector("search-bar");

    const getNews = async (search = null, category = null, page = 1) => {
        try {
            let paramString = "";

            if (category) {
                paramString += `&category=${category}`;
            }

            if (search) {
                paramString += `&q=${search}`;
            }

            const result = await fetch(
                `https://newsapi.org/v2/top-headlines?country=id&pageSize=8&page=${page}${paramString}`,
                {
                    method: "GET",
                    headers: {
                        "X-Api-Key": "58e8b3e236dd4ca583359ecb2bcf0159",
                    },
                }
            );

            const resultJson = await result.json();

            if (resultJson.status === "ok") {
                console.log("ARTICLE: ", resultJson.articles);
                renderResult(resultJson.articles);
            } else {
                fallbackResult(resultJson.message);
            }
        } catch (error) {
            fallbackResult(error.message);
        }
    };

    const renderResult = (results) => {
        newsListElement.articles = results;
    };

    const fallbackResult = (message) => {
        newsListElement.renderError(message);
    };

    const onButtonSearchClicked = () => {
        console.log("Search: ", searchElement.value);
        getNews(searchElement.value);
    };

    const onCategoryCardClicked = () => {};

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
