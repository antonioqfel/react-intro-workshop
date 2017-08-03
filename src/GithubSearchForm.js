import React from 'react';

class GithubSearchForm extends React.Component {

    _handleSubmit(event) {
        // PREVENT the form from submitting
        event.preventDefault();
        //console.log(this.refs.userInput.value);

        // Pass it the value of the search form from your refs.
        this.props.onSearch(this.refs.userInput.value)
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <p>Enter a GitHub username:</p>
                <input type="text" ref="userInput"/>
                <button>Go!</button>
            </form>
        );
    }
};

export default GithubSearchForm;