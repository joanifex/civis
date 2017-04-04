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
          <a
            className='btn-flat'
            href={webUrl}
            target="_blank"
            style={{width: "100%", height: 'auto', textAlign: 'center'}}
          >
            <i className='fa fa-newspaper-o' style={{marginRight: '10px'}}></i>
            <strong>{headline}</strong>
          </a>
          <small style={{textAlign: "right"}}>{pubDate}</small>
          <p style={{margin: "1.6rem 0"}}>{leadParagraph}..</p>
          <p style={{margin: "1.6rem 0"}}><em>...{snippet}...</em></p>
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
