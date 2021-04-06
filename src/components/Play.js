import React, { Component } from 'react'
import Loading from './Loading'
import completeState from '../helpers/completeState'
import Pic from './Pic'

export class Play extends Component {
  state = {
    imgUrl: '',
    id: '',
    author: ''
  }

  componentDidMount(){
    // 200 specifies that the picture will be a square 200x200px
    fetch('https://picsum.photos/400/300')
      .then(resp => {
        this.setState({imgUrl: resp.url})
        return resp.url })
      .then(url => {
        // url will be in form "https://i.picsum.photos/id/73/200/200.jpg?hmac=IYjgRq-Ok9gn3_MVxJ4TlfhLPONQ97qWvp2Ir1Y1z6c"
        let id = url.split('/')[4];
        this.setState({id});
        fetch(`https://picsum.photos/id/${id}/info`)
          .then(resp => resp.json())
          .then(json => this.setState({author: json.author}))
      })
  }
  
  render() {
    if (!completeState(this.state)) {
      return (
        // Replace with loading wheel
        <Loading />
      )
    }
    return (
      <div>
        <Pic imgUrl={this.state.imgUrl} author={this.state.author} />
      </div>
    )
  }
}

export default Play
