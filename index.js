import React, { Component } from 'react';
import { render } from 'react-dom';
import NameAndSurname from './NameAndSurname';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surname: ''
    };
  }

  render() {
    return (
      <div>
        <NameAndSurname name={this.state.name} surname={this.state.surname} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
