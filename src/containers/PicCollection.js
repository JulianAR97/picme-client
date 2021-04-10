import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPic, updatePic } from '../actions/picActions'
import Pic from '../components/Pic';

const picStyle = {
  width: '80%',
  margin: '10px auto 0px auto',
  display: 'block'
}

class PicCollection extends Component {
  
  renderPics = () => {
    return this.props.pics.map(pic => <Pic key={pic.id} url={pic.url} style={picStyle}/>)
  }
  
  render() {
    return (
      <div style={{width: '100%', height: '500px'}}>
        <div style={{width: '50%', height: 'auto', backgroundColor: 'green', float: 'left'}}>
          {this.renderPics()}
        </div>
        <div style={{width: '50%', height: 'auto', backgroundColor: 'yellow', float: 'left'}} >
          {this.renderPics()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pics: state.pics
})

export default connect(mapStateToProps)(PicCollection)
