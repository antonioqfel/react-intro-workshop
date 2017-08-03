import React from 'react';

class CharacterCounter extends React.Component {

    constructor() {
        super();

        this.state = {
            currentInput: ""
        };
    }

    _handleInput(event) {
        var value = event.target.value;

        this.setState({
            currentInput: value.length
        })
    }

    render() {
        return (
            <div>
                <p>Character Counter</p>
                <input type="text" onInput={this._handleInput.bind(this)}/>&nbsp;<span>{this.state.currentInput}</span>
            </div>
        );
    }
}

export default CharacterCounter;