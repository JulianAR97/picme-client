import React, { Component } from 'react'


export class Pic extends Component {
  
  
  
  render() {
    const {imgUrl, author} = this.props
    return (
      <div>
        <img src={imgUrl} alt="random"/>
        <p>Photo By: {author}</p>
      </div>
    )
  }
}

export default Pic

