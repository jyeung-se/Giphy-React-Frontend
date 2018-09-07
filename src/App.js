import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      data: []
    }
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=AqKfwVr9s1p2Dfo1k95y3w5N8P96eGoX&limit=25')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
      Hello there
      </div>
    );
  }
}

export default App;
