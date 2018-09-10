import React from 'react';
import { Card } from 'semantic-ui-react'
import '../App.css'

const GifCard = props => {
  const getSrc = () => {
    let imageSrc
    if (props.trending.images !== undefined) {
      imageSrc = props.trending.images.downsized_medium.url
    } else {
      imageSrc = props.trending.img_url
    }
    return imageSrc
  }
  // console.log(props.trending)

    return (
      <div className="five wide column">
        <Card
          header={props.trending.title}
          image={getSrc()}
        />
      </div>
    )
  }
  // <div>
  //   <h1>{props.trending.title}</h1>
  //   <img src={props.trending.images.downsized_medium.url} alt="gif" />
  // </div>

export default GifCard;
