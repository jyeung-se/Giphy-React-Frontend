import React from 'react';
import GifCard from './GifCard'

const GifList = props => {
console.log("props are", props);

const mappedGifs = props.trending.map(gif => {
  return <GifCard key={gif.title} trending={gif} />
})

    return (
      <div className="ui grid container">
        {mappedGifs}
      </div>
    )
  }


export default GifList;
