import storage from '../../components/storage';
import setFramesData from '../../components/set-frames-data';
import drawLine from '../../components/draw-line';
import setNewDataPixels from '../../components/set-new-data-pixels';

let drawPen = false;
let x0 = null;
let y0 = null;

function fillSpaces(h, v) {
  if (x0 !== null && y0 !== null && h !== x0 && v !== y0) {
    const { canvasElement, sizeRect } = storage.canvas;
    const ctx = canvasElement.getContext('2d');
    const x1 = h / sizeRect;
    const y1 = v / sizeRect;
    const pixelData = drawLine(x0, y0, x1, y1, ctx);
    setNewDataPixels(pixelData);
  }
}

function drawPixel(e) {
  if (storage.currentTool === 'pen') {
    if (drawPen) {
      const { canvasElement, sizeRect } = storage.canvas;
      const { currentFrame } = storage.frame;
      const ctx = canvasElement.getContext('2d');
      const ctxFrame = currentFrame.children[0].getContext('2d');
      for (let h = 0; h < canvasElement.width; h += sizeRect) {
        for (let v = 0; v < canvasElement.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
            ctx.fillStyle = storage.colors.primaryColor;
            // window.console.log('x:', h / 25, ', y:', v / 25);
            fillSpaces(h, v);
            x0 = h / sizeRect;
            y0 = v / sizeRect;

            ctx.fillRect(h, v, sizeRect, sizeRect);
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
  if (storage.currentTool === 'pen') {
    drawPen = true;
  }
  drawPixel(e);
}

function handleMouseMove(e) {
  drawPixel(e);
}

function handleMouseUp() {
  drawPen = false;
  x0 = null;
  y0 = null;
}

function addPenTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
}

export default addPenTool;
