import storage from './storage';

function drawCanvas(elem) {
  if (elem !== null) {
    const context = storage.canvas.canvasElement.getContext('2d');
    const color = elem[3];
    context.fillStyle = color;
    context.fillRect(elem[0], elem[1], elem[2], elem[2]);
  }
}

export default drawCanvas;
