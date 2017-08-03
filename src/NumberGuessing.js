import React from 'react';

class NumberGuessing extends React.Component {

    constructor() {
        super();

        this.state = {
            gameStatus: 'playing',
            numberToGuess: Math.floor((Math.random() * 100) + 1), // something between 1 and 100 generated when we start a game
            guesses: [], // initially guesses is an empty array
            message: '',
            remainingAttemps: 5
        }
    }

    restartGame() {
        this.setState({
            gameStatus: 'playing',
            numberToGuess: Math.floor((Math.random() * 100) + 1), // something between 1 and 100 generated when we start a game
            guesses: [], // initially guesses is an empty array
            message: '',
            remainingAttemps: 5
        })
    }


    _handleInput(event) {
        var inputNumber = parseInt(this.refs.userGuess.value);

        var attemps = this.state.remainingAttemps -1;

        if (attemps === 0) {
            this.setState({
                gameStatus: 'lose',
                message: 'YOU LOSE!',
                remainingAttemps: attemps
            })

        } else {

            //attemps--;

            //var attemps = this.state.remainingAttemps -1;
            var guesses= this.state.guesses;

            if (guesses.length > 0) {
                guesses.push(' , ');
                guesses.push(inputNumber);
            }
            else {
                guesses.push(inputNumber);
            }


            this.setState({
                gameStatus: 'playing',
                guesses: guesses,
                remainingAttemps: attemps
            })


            if (inputNumber === this.state.numberToGuess) {
                this.setState({
                    gameStatus: 'win',
                    message: 'YOU WON!'
                })
            }
            else if (inputNumber < this.state.numberToGuess) {

                this.setState({
                    message: 'Your number is lower than the random number!',
                })

            }
            else if (inputNumber > this.state.numberToGuess) {
                this.setState({
                    message: 'Your number is higher than the random number!',
                })


            }

        }
    }

    render() {
        return (
            <div>
                <p>Guess the number between 1 and 100</p>
                <input type="number" ref="userGuess"/>
                <button onClick={this._handleInput.bind(this)}>Guess</button>
                {this.state.gameStatus === 'lose' ||
                this.state.gameStatus === 'win' ? <button onClick={this.restartGame.bind(this)}>New Game</button> : null}
                <p>{this.state.message}</p>
                {this.state.message ? <p  ref="userAttemps">Remaining attemps: {this.state.remainingAttemps}</p> : null}
                {this.state.message ? <p ref="attemps">Your attemps: {this.state.guesses}</p> : null}
            </div>
        );
    }
}

export default NumberGuessing;