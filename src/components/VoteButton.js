import React from 'react';

const VoteButton = (props) => {
  return (
    <div className={props.className} onClick={props.handleClick} />
  )
}

export default VoteButton