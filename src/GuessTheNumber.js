import React from 'react';

class GuessTheNumber extends React.Component {

    _handleButtonClick() {
        var numberToGuess = parseInt(this.refs.userGuess.value);
        var radomNumber = Math.floor((Math.random() * 10) + 1);

        if (radomNumber === numberToGuess) {
            return (alert('You are correct'));
        }
        else if (numberToGuess > radomNumber) {
            return (alert('Your number is higher'));
        }
        else {
            return (alert('Your number is lower'));
        }
    }

    render() {
        return (
            <div>
                <form>
                    <p>Enter a number between 1 and 10</p>
                    <input type="text" ref="userGuess"/>
                    <button onClick={this._handleButtonClick.bind(this)}>Guess</button>
                </form>
            </div>
        );
    }
}

export default GuessTheNumber;