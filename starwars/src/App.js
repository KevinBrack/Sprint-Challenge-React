import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import FilmSelectForm from "./components/FilmSelectForm.js";
import CardContainer from "./components/CardContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentSelectedFilm: "All",
      currentSorted: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log("RoodDataSet: ", this.state.starwarsChars);
    return (
      <div className="App">
        <Header />
        <FilmSelectForm />
        <CardContainer characters={this.state.starwarsChars} />
        {/* change to this.state.currentSorted when functional */}
      </div>
    );
  }
}

export default App;
