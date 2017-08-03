import React from 'react';

class GithubProfile extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    fetchData() {

        var API_KEY = '42ab4ee4226cbd840df1a0cded2db2d22137748c';
        var url = `https://api.github.com/users/${this.props.username}?access_token=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    user: data
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {

        if (prevProps.username !== this.props.username) {
            this.fetchData();
        }
    }

    render() {
        // Check if the state contains a user object
        if(!this.state.user) {
            return (
                <div>
                    <p>Loadin...</p>
                </div>
            );
        }
        else {

            //let user =this.state.user;

            return (
                <div className="github-user">
                    <img className="github-user__avatar" src={this.state.user.avatar_url} alt={`Profile of ${this.state.user}`}/>
                    <div className="github-user__info">
                        <p><span id="username">{this.state.user.login}</span> ({this.state.user.name})</p>
                        <p>{this.state.user.bio}</p>
                    </div>
                </div>
            );
        }
    }
}

export default GithubProfile;