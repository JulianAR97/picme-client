import React, { Component }from 'react'
import Typography from '@material-ui/core/Typography';

import Pic from '../components/Pic'
import '../styles/picStyle.css'

class PicContainer extends Component {
  
  handleClick = (event) => {
    if (event.target.classList[1] === 'right') {
      event.target.className += ' highlightGreen'
    } else {
      event.target.className += ' highlightRed'
    }
    console.log(event.target.className)
  }
  render() {

    return (
      <>
        <div className="container picContainer">
          <Pic url={this.props.url} alt="random" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
          <div className="subContainer left" onClick={this.handleClick}/>

          <div className="subContainer right" onClick={this.handleClick}/>

        </div>
        <Typography variant="body2" align="center">
          Photo By: {this.props.author}
        </Typography>

      </>
  
    )
  }
}

export default PicContainer
     

