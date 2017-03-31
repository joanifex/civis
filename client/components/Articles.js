import React from 'react'

const Articles = ({ articles }) => {

  const displayArticles = (articles) => {
    // TODO: refactor into new component
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
            <strong>{headline}</strong>
          </a>
          <small className="right">{pubDate}</small>
          <p>{leadParagraph}..</p>
          <p><em>...{snippet}...</em></p>
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
