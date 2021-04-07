import generateCanvasHW from '../helpers/generateCanvasHW'

const Canvas = () => {
  let {height, width} = generateCanvasHW()
  return (
    <canvas style={{backgroundColor: 'black', height: height, width: width}}></canvas>
  )
}

export default Canvas
