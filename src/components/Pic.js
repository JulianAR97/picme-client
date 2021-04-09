import React from 'react'

const Pic = (props) => {
  
  return (
    <>
      <img src={props.url} alt="random" style={props.style}/>
    </>
  )
}

export default Pic

