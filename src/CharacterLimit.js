import React from 'react';

class CharacterLimit extends React.Component {

    constructor() {
        super();

        this.state = {
            currentInput: "",
        };
    }

    _handleInput(event) {
        var value = event.target.value;

        if (value.length <= this.props.limit) {

            this.setState({
                currentInput: value
            })
        }


    }

    render() {
        return (
            <div>
                <p>Character Limit</p>
                <input type="text" value={this.state.currentInput} onInput={this._handleInput.bind(this)}/>&nbsp;<span>{this.state.currentInput.length}</span>
            </div>
        );
    }
}

export default CharacterLimit;