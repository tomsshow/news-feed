class NewsArticle extends HTMLElement {

constructor(){
    super();
    this.root = this.attachShadow({mode: open});
}

    set article(article){
        this.root.HTML =`
        <style>
            h2 {
                font-family: Gerogia, 'Times New Roman', Times;
            }
            a,
            a:visited {
                text-decoration: none;
                color: inherit;
            }
            img {
                width: 100%;
            }
        </style>
        <a href ="${article.url}">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage || ''}">
            <p>${article.desctiption || ''}</p>
        </a>`;
    }

}

customElements.define('news-article', NewsArticle);
