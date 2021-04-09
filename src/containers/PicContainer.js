import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Pic from '../components/Pic'
import '../styles/picStyle.css'

const PicContainer = (props) => {
  return (
    <>
      <Container className="picStyle" style={{width: '70%', height: 'auto', padding: '0px'}}>
        <Pic url={props.url} alt="random" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
      </Container>
      <Typography variant="body2" align="center">
          Photo By: {props.author}
      </Typography>
    </>
  )
}

export default PicContainer