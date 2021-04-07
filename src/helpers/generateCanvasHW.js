// We need to generate a picture with a 16:9 aspect ratio that fits user screen
const generateCanvasHW = () => {
  
  const [height, width] = [window.innerHeight, window.innerWidth];
  const ratio = width / height;
  let canvasHeight;
  let canvasWidth;

  // if the screen is very wide, we don't want generate a pic that won't fit vertically
  if (ratio > 1.8) {
    canvasHeight = Math.floor(.9 * height);
    canvasWidth = Math.floor((canvasHeight * 16) / 9)
  } else {
  // if the screen is tall and not very wide, we don't want to gernerate a pic that won't fit horizontally
    canvasWidth = Math.floor(.9 * width);
    canvasHeight = Math.floor((canvasWidth * 9) / 16)
  }
  return {height: canvasHeight, width: canvasWidth};

}

export default generateCanvasHW