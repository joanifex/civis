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
          <a className='btn-flat' href={webUrl} target="_blank">
            <i className='fa fa-newspaper-o' style={{marginRight: '10px'}}></i>
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
        <ul className="collection">
          { displayArticles(articles) }
        </ul>
    </div>
  );
}

export default Articles;
