
import { Component } from "react";
import "../src/App.css";
import { Userform } from "./components/Userform";
import React from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Userform />
      </div>
    );
  }
}

export default App;