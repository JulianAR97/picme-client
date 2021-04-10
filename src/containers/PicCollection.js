import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPic, updatePic } from '../actions/picActions'
import Pic from '../components/Pic';

const picStyle = {
  width: '80%',
  margin: '5% auto 0px auto',
  display: 'block'
}

class PicCollection extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // Add 1 div or 2 div properties
  //     height: 0,
  //     width: 0, 
  //     numDivs: 1
  //   }
  //   // Bind this class so that callback from event listener doesn't refer to event
  //   // this.getNumDivs.bind(this)
  // }

  // getNumDivs = () => {
  //   const [height, width] = [window.innerHeight, window.innerWidth]
  //   console.log(`Window Dimensions: ${height} x ${width}`)
  //   if (height < 200) {
  //     this.setState({ height, width, numDivs: 1})
  //   } else {

  //     const ratio = width / height 
  
  //     // for every increase of 1.5 in aspect ratio of current window,
  //     // We add another div 
  //     const numDivs = Math.ceil(ratio / 1.5)
  
  //     this.setState({ height, width, numDivs })
  //   }
  // }

  // componentDidMount() {
  //   // this.getNumDivs()
  //   // window.addEventListener('resize', this.getNumDivs)
  // }

  // All even number pics will be rendered to the left, and odds on the right
  renderPics = (divNum) => {
    return this.props.pics.map((pic, idx) => {
      if (idx % 2 === 0 && divNum === 1) {
        console.log('first case')
        return <Pic key={pic.id} url={pic.url} style={picStyle}/>
      } else if (idx % 2 !== 0 && divNum === 2) {
        console.log('second case')
        return <Pic key={pic.id} url={pic.url} style={picStyle}/>
      }
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div id="picCollection" style={{width: '100%', height: '100%'}}>
        <div style={{width: '50%', height: 'auto', float: 'left'}}>
          {this.renderPics(1)}
        </div>
        <div style={{width: '50%', height: 'auto', float: 'left'}} >
          {this.renderPics(2)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (window.location.pathname === '/hottest') {
    return({pics: state.pics})
  } else {
    return({pics: ['pic1', 'pic2']})
  }
}

export default connect(mapStateToProps)(PicCollection)

// Need to only render a limited number of pictures
// Need to make on scroll render more pictures
// Need to first sort pics by popularity
// Fix footer so that it is at the bottom of the page
