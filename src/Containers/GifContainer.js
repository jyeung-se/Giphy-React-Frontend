import React, { Component } from 'react';
import GifList from '../Components/GifList'

class GifContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      trending: [],
      // filteredGifs: []
    }
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=AqKfwVr9s1p2Dfo1k95y3w5N8P96eGoX&limit=25')
    // fetch('http://localhost:3000/api/v1/gifs')
    .then(res => res.json())
    .then(trending => this.setState({
      trending: trending.data
    }))
    // .then(trending => console.log(trending))
  }

  render() {
    console.log("trending 25 are", this.state.trending)
    return (
      <div>
      This is from GifContainer
    <GifList trending={this.state.trending} />
      </div>
    );
  }
}

export default GifContainer;
