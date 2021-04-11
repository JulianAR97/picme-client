import React from 'react'
import Typography from '@material-ui/core/Typography';

const Footer = () => {

  return (
    <div style={{textAlign: 'center', marginTop: '80px'}}>
      <Typography variant="body2"  style={{align: 'center', display: 'inline-block'}}>
          <p>&copy;PicMe 2021</p>
          <p>Powered By Picsum</p>
      </Typography>
    </div>
  )

}

export default Footer
