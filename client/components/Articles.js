import React from 'react'

class Articles extends React.Component {
  state = { articles: [] }

  componentWillMount() {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "840fa537906e446e85d0f308393e3385",
      'q': `\"${this.props.fullName}\"`,
      'sort': "newest",
      'fl': "web_url,pub_date,headline,lead_paragraph",
      'hl': 'true',
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(data => {
      let { docs } = data.response
      this.setState({ articles: docs })
    }).fail(err => {
      console.log(err);
    });
  }

  displayArticles = () => {
    return this.state.articles.map( (article, i) => {
      return(
        <li key={i} className="collection-item">
          <a href={`${article.web_url}`} target="_blank">{article.headline.main}</a>
          <p>{article.lead_paragraph}</p>
          <p>{article.snippet}</p>
          <p>{article.pub_date}</p>
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <h5>Articles</h5>
        <div className="row">
          <div className="col s12 m8">
            <ul className="collection">
              { this.displayArticles() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
