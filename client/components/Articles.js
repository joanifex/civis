import React from 'react'

const Articles = ({ articles }) => {

  const displayArticles = (articles) => {
    return articles.map( (article, i) => {
      const {
        headline,
        web_url: webUrl,
        lead_paragraph: leadParagraph,
        snippet,
        pub_date: pubDate
      } = article
      return (
        <li key={i} className="collection-item">
          <a href={webUrl} target="_blank">
            {headline}
          </a>
          <p>{leadParagraph}</p>
          <p>{snippet}</p>
          <p>{pubDate}</p>
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
