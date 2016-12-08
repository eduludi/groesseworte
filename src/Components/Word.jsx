import React, { Component } from 'react'
import Letter from './Letter'
import './Word.css';

class Word extends Component {

	render() {
		const { value } = this.props
		const letters = value.split('');

    const list = letters.map((letter,index) => <Letter key={index} value={letter}/>)

		return (
			<div className="Word">
        		{ list }
			</div>
		)
	} 
}

export default Word