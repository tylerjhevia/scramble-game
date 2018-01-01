import React, { Component } from 'react';
import { ScrambledWord } from './ScrambledWord';
import words from 'word-list-json';
import { selectRandomNumber } from '../helpers/random';

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: '',
      currentGuess: ''
    };
  }

  checkAnswer() {
    if (this.state.currentWord === this.state.currentGuess) {
      return alert('Correct!');
    } else {
      return alert('WRONG!');
    }
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
        <input
          className="guess-input"
          placeholder="Enter your answer here"
          onChange={e => this.setState({ currentGuess: e.target.value })}
        />
        <button className="submit-button" onClick={() => this.checkAnswer()}>
          Submit Answer
        </button>
      </div>
    );
  }
}
