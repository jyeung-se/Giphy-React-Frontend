import React from 'react';

const GifCard = props => {
  console.log(props.trending)
    return (
      <div>

      <h1>{props.trending.title}</h1>
      <img src={props.trending.images.downsized_medium.url} alt="gif" />

      </div>
    )
  }

export default GifCard;
