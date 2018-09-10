import React from 'react';
import { Card } from 'semantic-ui-react'
import '../App.css'

const GifCard = props => {
  console.log(props.trending)
    return (
      <div className="five wide column">
        <Card
          header={props.trending.title}
          image={props.trending.images.downsized_medium.url}
          description="hey"
          meta="how"
        />
      </div>
    )
  }
  // <div>
  //   <h1>{props.trending.title}</h1>
  //   <img src={props.trending.images.downsized_medium.url} alt="gif" />
  // </div>

export default GifCard;
