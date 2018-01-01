import React, { Component } from 'react';
import Quiz from './Quiz';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Scramble time</h1>
        <Quiz />
      </div>
    );
  }
}
