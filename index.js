import {topHeadLinesUrl} from './newsapi.js'

window.addEventListener('load', () => {
    fetchNews();
});

async function fetchNews() {
    const res = await fetch(topHeadLinesUrl);
    const json = await res.json();

    const main = document.querySelector('main');

    jsonarticles.array.forEach(article => {
        const el = document.createElement ('news-article');
        el.article = article;
        main.appendChild(el);
    });
}