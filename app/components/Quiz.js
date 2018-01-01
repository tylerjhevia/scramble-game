import React, { Component } from 'react';
import words from 'word-list-json';
import { selectRandomNumber } from '../helpers/random';

export default class Quiz extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="quiz-container">
        <button
          className="start-button"
          onClick={() => {
            let random = selectRandomNumber(words.length);
            console.log(words[random]);
          }}
        >
          Start
        </button>
      </div>
    );
  }
}
