import React, { Component } from 'react';
import GifList from '../Components/GifList'
import InfiniteScroll from 'react-infinite-scroll-component';

class GifContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      trending: [],
      moreTrending: [],
      searchQuery: '',
      filteredGifs: []
    }
  }

  fetchMoreGifs = () => {
    fetch('http://localhost:3000/api/v1/more_trending')
    // fetch('http://localhost:3000/api/v1/gifs')
    .then(res => res.json())
    .then(json => {
      this.setState({
        moreTrending: json.data
      })
    })
  }


  componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=AqKfwVr9s1p2Dfo1k95y3w5N8P96eGoX&limit=25')
  //   // fetch('http://localhost:3000/api/v1/gifs')
  //   .then(res => res.json())
  //   .then(json => this.setState({
  //     trending: json.data
  //   })
  // )
    fetch('http://localhost:3000/api/v1/trending')
      .then(res => res.json())
      .then(json => {
        this.setState({
          trending: json.data
        })
      })
  }

  infiniteGifs = () => {
    return (
      <InfiniteScroll
        dataLength={this.state.trending} //This is important field to render the next data
        next={this.fetchMoreGifs}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
        {this.state.moreTrending.length === 0 ? <GifList trending={this.state.trending} /> : <GifList trending={this.state.moreTrending} />}
      </InfiniteScroll>
    )
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      searchQuery: event.target.value
    })
  }

  fetchSearchedGifs = event => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/gifs')
      .then(res => res.json())
      .then(json => {
        let filtered = json.filter(gif => gif.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
        this.setState({
          filteredGifs: filtered
        })
      })
  }

  render() {
    // let fetchTrending =
    //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=AqKfwVr9s1p2Dfo1k95y3w5N8P96eGoX&limit=50')
    //   // fetch('http://localhost:3000/api/v1/gifs')
    //   .then(res => res.json())
    //   .then(trending => this.setState({
    //     moreTrending: trending.data
    //   }))
  console.log("state is", this.state);
    return (
      <div>
        This is from GifContainer
        <form onSubmit={this.fetchSearchedGifs}>
          <input onChange={this.handleChange} type="text" />
          <input type="submit" value="submit" />
        </form>
        {this.state.filteredGifs.length === 0 ? this.infiniteGifs() : <GifList trending={this.state.filteredGifs} />}
      </div>
    );
  }
}

export default GifContainer;
