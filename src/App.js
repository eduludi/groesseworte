import React, { Component } from 'react'

import Word from './Components/Word'

import GermanCities from './Data/GermanCities'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { word: this.getRandomWord() }
    this.handleChange = this.handleChange.bind(this)
  }

  getRandomWord() {
    return GermanCities[Math.floor(Math.random() * GermanCities.length)];
  }

  handleChange(event) {
    this.setState({ word: this.getRandomWord() });
  }
  render() {

    const { word } = this.state

    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GrößeWorte</h2>
        </div>

        <h1>Die Großstädte in Deutschland</h1>

        <Word value={word}/>

        <a className="Reset" onClick={this.handleChange}>Andere Stadt</a>
        <p className="Cheat" >
          <small>{word}</small>
        </p>
      </div>
    )
  }
}

export default App
