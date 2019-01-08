import 'news-article.js';
import {topHeadLinesUrl} from 'newsapi.js'

window.addEventListener('load', () => {
    fetchNews();
});

async function fetchNews() {
    const res = await fetch(topHeadLinesUrl);
    const json = await res.json();
    const article = await json.article();

    const main = document.querySelector('main');

    article.array.forEach(article => {
        const el = document.createElement ('news-article');
        el.article = article;
        main.appendChild(el);
    });
}
