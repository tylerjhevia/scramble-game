import React, { Component } from 'react';
import { ScrambledWord } from './ScrambledWord';
import words from 'word-list-json';
import { selectRandomNumber, scrambleWord } from '../helpers/random';
import { chooseWordLength } from '../helpers/length';

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      wordBank: words,
      currentWord: '',
      scrambledWord: '',
      currentGuess: '',
      score: 0,
      feedback: ''
    };
  }

  checkAnswer() {
    let currentScore = this.state.score;
    if (this.state.currentWord === this.state.currentGuess) {
      currentScore += 1;
      this.setState({ score: currentScore, feedback: 'Correct!' });
      this.pickRandomWord();
    } else {
      currentScore -= 1;
      this.setState({ score: currentScore, feedback: 'Wrong! Try again!' });
    }
    this.setState({ currentGuess: '' });
  }

  pickRandomWord() {
    let random = selectRandomNumber(this.state.wordBank.length);
    return this.setState({
      currentWord: this.state.wordBank[random],
      scrambledWord: scrambleWord(this.state.wordBank[random])
    });
  }

  render() {
    return (
      <div className="quiz-container">
        <button className="start-button" onClick={() => this.pickRandomWord()}>
          Start
        </button>

        <button
          className="4-letters"
          onClick={() =>
            this.setState({
              wordBank: chooseWordLength(4, words)
            })}
        >
          4 letter word
        </button>

        <button
          className="5-letters"
          onClick={() =>
            this.setState({ wordBank: chooseWordLength(5, words) })}
        >
          5 letter word
        </button>

        <ScrambledWord word={this.state.scrambledWord} />
        <input
          className="guess-input"
          placeholder="Enter your answer here"
          onChange={e => this.setState({ currentGuess: e.target.value })}
          value={this.state.currentGuess}
        />
        <button className="submit-button" onClick={() => this.checkAnswer()}>
          Submit Answer
        </button>
        <p className="feedback">
          {this.state.feedback}
        </p>
        <p className="score-display">
          {this.state.score}
        </p>
      </div>
    );
  }
}
