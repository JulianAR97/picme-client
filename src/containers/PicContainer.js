import React, { Component }from 'react'
import { connect } from 'react-redux'
import { getPic, addPic, updatePic } from '../actions/picActions'
import Typography from '@material-ui/core/Typography';
import Loading from '../components/Loading'
import VoteButton from '../components/VoteButton'
import { removeHighlight } from '../helpers/picHelpers'
import Pic from '../components/Pic'
import '../styles/picStyles.css'

class PicContainer extends Component {
  
  componentDidMount() {
    this.props.getPic()
  }
  
  handleClick = (event) => {
    // If pic exists, then we will update it, otherwise, we will create it
    // In the backend
    let pic = this.props.pics.find(p => p.id === Number(this.props.pic.id))
    // Class list one will be either right or left
    // Fix hard coding
    if (event.target.classList[1] === 'right') {
      // If user clicks on the right side of the pic, we want 'conditional highlighting'
      event.target.className += ' highlightGreen'
      if (pic) {
        this.props.updatePic({...pic, likes: pic.likes + 1})
      } else {
        this.props.addPic({...this.props.pic, likes: this.props.pic.likes + 1})
      }
    } else {
      event.target.className += ' highlightRed'
      if (pic) {
        this.props.updatePic({...pic, likes: pic.likes - 1})
      }
    }
    // Still lagging. Look into component lifecycle methods
    const updateVoteButton = () => {
      if (!this.props.picLoading) {
        removeHighlight()
      } else {
        setTimeout(updateVoteButton, 300)
      }
    }
    setTimeout(() => {
      this.props.getPic()
      updateVoteButton()
    }, 1000)
  }

  render() {
    
    if (this.props.picLoading) {
      
      return <Loading />
    
    } else {
      
      const {pic} = this.props
    
      return (
        <>
          
          <div className="container picContainer">
            <Pic url={pic.url} alt="random" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
            <VoteButton className="subContainer left" handleClick={this.handleClick} />
            <VoteButton className="subContainer right" handleClick={this.handleClick} />
          </div>
          
          <Typography variant="body2" align="center">
            Photo By: {pic.author}
          </Typography>

        </>
    
      )
      }
  }
}

const mapStateToProps = state => ({
  pic: state.pic,
  pics: state.pics,
  picLoading: state.picLoading
})

export default connect(mapStateToProps, {getPic, addPic, updatePic})(PicContainer)
     

