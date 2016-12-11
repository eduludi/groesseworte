import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

import Game from './Components/Game'
import { Games } from './Data/GameData'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			gameName: null
		}
		this.handleChooseGame = this.handleChooseGame.bind(this)
		this.handleBackToList = this.handleBackToList.bind(this)
	}

	handleChooseGame(event) {
		const gameName = event.target.dataset.id
		this.setState({ gameName: gameName });
	}


	handleBackToList(event) {
		this.setState({ gameName: null });
	}

	render() {

		const games = Object.keys(Games).map( (key) => {
			const game = Games[key]
			return (
				<div className="GameItem" 
					key={key}>
					<a 
						href="#"
						data-id={key}
						onClick={this.handleChooseGame}>
						{game.title}
					</a>
					<div>
						<em>{game.level}</em> <small>({game.data.length} Worte)</small>
					</div>
				</div>
			)
		})

		const { gameName } = this.state
		const game = gameName ? Games[gameName] : null

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>GrößeWorte</h2>
				</div>
				
				{ game 
					? (
						<div className="Playing">
							<Game game={game}/>

							<a className="Reset" onClick={this.handleBackToList}>Zuruck</a>
						</div>
					) 
					: (
						<div className="Games">
							{games}
						</div>
					)
				}
			</div>
		)
	}
}

export default App
