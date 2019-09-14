import storage from '../../components/storage';
import setFramesData from '../../components/set-frames-data';

let drawDith = false;

function drawPixel(e) {
  if (storage.currentTool === 'dithering') {
    if (drawDith) {
      const { canvasElement, sizeRect } = storage.canvas;
      const { currentFrame } = storage.frame;
      const ctx = canvasElement.getContext('2d');
      const ctxFrame = currentFrame.children[0].getContext('2d');
      for (let h = 0; h < canvasElement.width; h += sizeRect) {
        for (let v = 0; v < canvasElement.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
            const xEven = ((h / sizeRect) % 2) === 0;
            const yEven = ((v / sizeRect) % 2) === 0;
            if ((xEven && !yEven) || (!xEven && yEven)) {
              ctx.fillStyle = storage.colors.primaryColor;

              ctx.fillRect(h, v, sizeRect, sizeRect);
              ctxFrame.drawImage(canvasElement, 0, 0, 150, 150);
              setFramesData(h, v);
            }
          }
        }
      }
    }
  }
}

function handleMouseDown(e) {
  if (storage.currentTool === 'dithering') {
    drawDith = true;
  }
  drawPixel(e);
}

function handleMouseMove(e) {
  drawPixel(e);
}

function handleMouseUp() {
  drawDith = false;
}


function addDitheringTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
}

export default addDitheringTool;
