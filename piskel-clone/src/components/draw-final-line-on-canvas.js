import storage from './storage';

function drawFinalLineOnCanvas(data) {
  const ctx = storage.canvas.canvasElement.getContext('2d');
  data.forEach((elem) => {
    if (elem !== null) {
      const color = elem[3];
      ctx.fillStyle = color;
      ctx.fillRect(elem[0], elem[1], elem[2], elem[2]);
    }
  });
}

export default drawFinalLineOnCanvas;
