import "./news-article.js";
import {topHeadlinesUrl} from "./newsapi.js";

window.addEventListener('load', () => {
  //load listener helps prevent initial render being block by some js 
  // by delaying this and making sure everything is on the page it helps makes for a smoother experience for users
  fetchNews(); 
});

async function fetchNews() { //async function to get news articles
  const res = await fetch(topHeadlinesUrl); //results from fetching top headlines
  const json = await res.json(); //extract json response from news api
  const article = await json.article();

  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}
