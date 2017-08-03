import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from "./ImageCaption";
import Layout from "./Layout";
import GuessTheNumber from "./GuessTheNumber";
import YouClicked from "./YouClicked";
import CharacterCounter from "./CharacterCounter";
import CharacterLimit from "./CharacterLimit";
import NumberGuessing from "./NumberGuessing";
import GithubProfile from "./GithubProfile";
import GithubSearchForm from "./GithubSearchForm";
import GithubSearch from "./GithubSearch";

// Array of objects
var imageList = [
    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {

    renderImage(img) {
        return <ImageCaption source={img.source} text={img.text} key={img.id}/>
    }

  render() {
    return (
      <div className="App">

          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <hr/>

          <h2>testing ImageCaption</h2>
          <ImageCaption/>
          <hr/>

          <div>
              {imageList.map(this.renderImage)}
          </div>
          <hr/>

          <Layout>
              <h2>About us</h2>
              <p>We are React developers!</p>
          </Layout>
          <hr/>

          <GuessTheNumber/>
          <hr/>

          <YouClicked/>
          <hr/>

          <CharacterCounter/>
          <hr/>

          <CharacterLimit limit={10}/>
          <hr/>

          <NumberGuessing/>
          <hr />

          <GithubProfile username="nebulaUnicornis"/>
          <hr/>

          <GithubSearch/>
          <hr/>
      </div>
    );
  }
}

export default App;
