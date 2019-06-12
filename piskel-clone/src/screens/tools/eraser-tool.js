import storage from '../../components/storage';
import setFramesData from '../../components/set-frames-data';

let drawEraser = false;

function deletePixel(e) {
  const { canvasElement, sizeRect } = storage.canvas;
  const { currentFrame } = storage.frame;
  const ctx = canvasElement.getContext('2d');
  const ctxFrame = currentFrame.children[0].getContext('2d');
  if (storage.currentTool === 'eraser') {
    if (drawEraser) {
      for (let h = 0; h < canvasElement.width; h += sizeRect) {
        for (let v = 0; v < canvasElement.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
            && v + sizeRect > e.offsetY && v <= e.offsetY) {
            ctx.clearRect(h, v, sizeRect, sizeRect);
            ctxFrame.clearRect(0, 0, 150, 150);
            ctxFrame.drawImage(canvasElement, 0, 0, 150, 150);
            setFramesData(h, v);

            localStorage.setItem('storage', JSON.stringify(storage));
          }
        }
      }
    }
  }
}

function handleMouseDown(e) {
  if (storage.currentTool === 'eraser') {
    drawEraser = true;
  }
  deletePixel(e);
}

function handleMouseMove(e) {
  deletePixel(e);
}

function handleMouseUp() {
  drawEraser = false;
}

function addEraserTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
}

export default addEraserTool;
