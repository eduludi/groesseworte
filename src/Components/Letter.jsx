import React, { Component } from 'react'
import './Letter.css';

class Letter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '', 
            right: false 
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentWillReceiveProps() {
        this.setState({ value: '', right: false })
    }

    handleChange(event) {
        const guess = event.target.value;
        const isRight = guess === this.props.value
        this.setState({ value: guess, right: isRight });
    }

    getSize(letter) {
        const sizes = {
            tall: { y1: '0', y2: '75%' },
            small: { y1: '25%', y2: '75%' },
            goesUnder: { y1: '25%', y2: '100%' },
            invalid: { y1: '0', y2: '0' }
        }

        const isSpace = letter === ' '
        if (isSpace) return sizes.invalid;

        const isUpercase = letter === letter.toUpperCase()
        if (isUpercase) return sizes.tall;

        const isSmall = ['a','ä','c','e','i','m','n','o','ö','r','s','u','ü','v','w','x','x','z'].includes(letter)
        if (isSmall) return  sizes.small;
        
        const isTall = ['b','d','f','h','k','l','t','ß'].includes(letter)
        if (isTall) return sizes.tall;

        const goesUnder = ['g','j','p','q','y'].includes(letter)
        if (goesUnder) return sizes.goesUnder;

        return sizes.invalid
    }

	render() {
		const { value } = this.props
        const size = this.getSize(value)
        const fontColor = this.state.right ? 'green' : 'red'
        const isSpace = value === ' '
        
		return (
            <div className="Letter">
                <svg width="100%" height="100%">
                    <line 
                        x1="50%" 
                        y1={size.y1}
                        x2="50%" 
                        y2={size.y2} 
                        stroke="gray" 
                        strokeWidth="3"/>

                    <line 
                        x1="0%" 
                        y1="75%"
                        x2="100%" 
                        y2="75%"
                        stroke="lightgray" 
                        strokeWidth="1"/>
                    <text 
                        x="50%" 
                        y="50%" 
                        width="100%" 
                        height="100%"
                        fill={fontColor} 
                        alignmentBaseline="middle" 
                        textAnchor="middle">
                        {this.state.value}
                    </text>
                </svg>
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    maxLength="1"
                    disabled={isSpace}/>
            </div>
		)
	} 
}

export default Letter