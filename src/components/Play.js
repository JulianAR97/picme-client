import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPic, addPic, updatePic } from '../actions/picActions'
import Pic from './Pic'
import Button from './Button'
import Loading from './Loading'

export class Play extends Component {

  componentDidMount() {
    this.props.getPic()
    // if (this.props.pics.find(p => p.id === this.props.pic.id)) {
    //   this.setState({
    //     existingPic: true
    //   })
    // }
  }

  handleClick = (e) => {
    let pic = this.props.pics.find(p => p.id === Number(this.props.pic.id))
    
    if (e.target.name === 'upvote') {
      if (pic) {
        this.props.updatePic({...pic, likes: pic.likes + 1})
      } else {
        this.props.addPic({...this.props.pic, likes: this.props.pic.likes + 1})
      }
    } else {
      if (pic) {
        console.log('hit update:', pic)
        this.props.updatePic({...pic, likes: pic.likes - 1})
      }
    }
    this.props.getPic()
  }
  
  render() {
    if (this.props.picLoading) {
      return <Loading />
    } else {
      
      const {pic} = this.props
      
      return (
        
        <div>
          <Pic url={pic.url} author={pic.author} />
          <Button name="downvote" handleClick={this.handleClick} text="minus"/>
          <Button name="upvote" handleClick={this.handleClick} text="check"/>
        </div>
      
      )
    }
  }
}

const mapStateToProps = state => ({
  pic: state.pic,
  pics: state.pics,
  picLoading: state.picLoading,
})

export default connect(mapStateToProps, {getPic, addPic, updatePic})(Play)
