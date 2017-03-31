import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
          <ul className="Menu">
              {this.props.entries.map((result) => (
                  <li key={result.id}>
                      <a>{result.text}</a>
                  </li>
              ))}
          </ul>
        );
    }
}

export default Menu;
