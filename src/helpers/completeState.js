const completeState = (state) => {
  // First we get the state values
  const values = Object.values(state);
  // Then we check if there are empty strings in the state
  // And reduces state values to a Boolean
  return values.reduce((a, b) => !!a ? !!b : !!a)
}

export default completeState
