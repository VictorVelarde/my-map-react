import React, {Component} from 'react';

class NewsList extends Component {
  constructor(props) {
    super(props);

/*    this.state = {
      news: props.news
    };*/
  }

  render() {
    const news = this.props.news;
    const listNews = news.map((aNew) =>
      <li>{aNew}</li>
    );

    return (
      <div>
        <h3>Latest news</h3>
        <hr/>
        {listNews}
      </div>
    );
  }
}

export default NewsList;
