import React, { Component } from 'react'


export class Pic extends Component {
  
  
  
  render() {
    const {url, author} = this.props
    return (
      <div>
        <img src={url} alt="random"/>
        <p>Photo By: {author}</p>
      </div>
    )
  }
}

export default Pic

