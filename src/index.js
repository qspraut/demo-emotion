import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

class App extends Component {
  handleClick = () => {
    console.log('clicked on learn more');
  };

  render() {
    return <Card handleClick={this.handleClick} />;
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
