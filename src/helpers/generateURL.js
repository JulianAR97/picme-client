// We need to generate a picture with a 16:9 aspect ratio that fits user screen
const generateURL = () => {
  
  const [height, width] = [window.innerHeight, window.innerWidth];
  const ratio = width / height;
  let picHeight;
  let picWidth;

  // if the screen is very wide, we don't want generate a pic that won't fit vertically
  if (ratio > 1.8) {
    picHeight = Math.floor(.9 * height);
    picWidth = Math.floor((picHeight * 16) / 9)
  } else {
  // if the screen is tall and not very wide, we don't want to gernerate a pic that won't fit horizontally
    picWidth = Math.floor(.9 * width);
    picHeight = Math.floor((picWidth * 9) / 16)
  }
  return `https://picsum.photos/${picWidth}/${picHeight}`

}

export default generateURL