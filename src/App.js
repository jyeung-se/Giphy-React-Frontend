import React, { Component } from 'react';
import './App.css';
import GifContainer from './Containers/GifContainer'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }

  render() {
    return (
      <div>
      This is from App.js
    <GifContainer />
      </div>
    )
  }
}

export default App;
