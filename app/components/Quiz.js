import React, { Component } from 'react';

export default class Quiz extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="quiz-container">
        <button className="start-button">Start</button>
      </div>
    );
  }
}
