import React from 'react'

const Articles = ({ articles }) => {

  let displayArticles = (articles) => {
    return articles.map( (article, i) => {
      return(
        <li key={i} className="collection-item">
          <a href={article.web_url} target="_blank">
            {article.headline}
          </a>
          <p>{article.lead_paragraph}</p>
          <p>{article.snippet}</p>
          <p>{article.pub_date}</p>
        </li>
      );
    });
  }

  return(
    <div>
      <h5>Articles</h5>
      <div className="row">
        <div className="col s12 m8">
          <ul className="collection">
            { displayArticles(articles) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Articles;
