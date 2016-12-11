import React, { Component } from 'react'
import Word from './Word'

class Game extends Component {
	constructor(props) {
		super(props)
		this.state = {
			word: this.getRandomWord()
		}
		this.handleChange = this.handleChange.bind(this)
	}

	getRandomWord() {
		const { data } = this.props.game

		return data[Math.floor(Math.random() * data.length)];
	}

	handleChange(event) {
		this.setState({ word: this.getRandomWord() });
	}

	render() {
		const { game } = this.props
		const { word } = this.state
		return (
			<div>
				<h1>{game.title}</h1>

				<Word value={word}/>

				<a className="Reset" onClick={this.handleChange}>Andere Wort</a>
				<p className="Cheat" >
					<small>{word}</small>
				</p>
			</div>
		)
	}
}

export default Game