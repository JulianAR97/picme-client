const Button = (props) => {
  return (
    <button name={props.name} onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button