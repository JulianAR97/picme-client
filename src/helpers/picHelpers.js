export const picExists = (pics, pic) => {
  return !!pics.find(p => p.id === Number(pic.id))
}

// Removes highlighting from sides of picture frame
export const removeHighlight = () => {
  let subContainers = document.getElementsByClassName('subContainer');
  for (let sC of subContainers) {
    sC.classList.remove('highlightGreen', 'highlightRed')
  }
}