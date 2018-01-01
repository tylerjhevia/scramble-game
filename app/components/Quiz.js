import React, { Component } from 'react';
import { ScrambledWord } from './ScrambledWord';
import words from 'word-list-json';
import { selectRandomNumber } from '../helpers/random';

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: ''
    };
  }

  render() {
    return (
      <div className="quiz-container">
        <button
          className="start-button"
          onClick={() => {
            let random = selectRandomNumber(words.length);
            return this.setState({ currentWord: words[random] });
          }}
        >
          Start
        </button>
        <ScrambledWord word={this.state.currentWord} />
      </div>
    );
  }
}
