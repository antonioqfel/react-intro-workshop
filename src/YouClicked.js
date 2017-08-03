import React from 'react';

class YouClicked extends React.Component {

    constructor() {
        super();

        this.state = {
            numClicks: 0,
            clickMessage: 'You have not clicked the button',
            numResets: 0,
            resetMessage: ""
        };
    }

    startCountingClicks() {

        var nc = this.state.numClicks + 1;

        this.setState({
            numClicks: nc
        })

        if (nc === 1) {
            this.setState({
                clickMessage: 'You have clicked the button once'
            })
        }
        else if (nc === 2) {
            this.setState({
                clickMessage: 'You have clicked the button twice'
            })
        }
        else {
            this.setState({
                clickMessage: 'You have clicked the button ' + nc + ' times'
            })
        }
    }

    startCountingResets() {

        var nr = this.state.numResets + 1;

        this.setState({
            numResets: nr,
            numClicks: 0,
            clickMessage: 'You have not clicked the button'
        })

        if (nr === 1) {
            this.setState({
                resetMessage: 'You reset once'
            })
        }
        else if (nr === 2) {
            this.setState({
                resetMessage: 'You reset twice'
            })
        }
        else {
            this.setState({
                resetMessage: 'You reset ' + nr + ' times'
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.startCountingClicks.bind(this)}>Click</button>
                <button onClick={this.startCountingResets.bind(this)}>Reset</button>
                <p>{this.state.clickMessage}</p>
                <p>{this.state.resetMessage}</p>
            </div>
        );
    }
}

export default YouClicked;
