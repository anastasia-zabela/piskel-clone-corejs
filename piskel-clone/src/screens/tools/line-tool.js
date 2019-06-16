import storage from '../../components/storage';
import setNewDataPixels from '../../components/set-new-data-pixels';
import drawFinalLineOnCanvas from '../../components/draw-final-line-on-canvas';
import drawLine from '../../components/draw-line';

let drawL = false;
let x0 = null;
let y0 = null;
let pixelData;

function getCoords(e) {
  if (x0 !== null && y0 !== null) {
    const { sizeRect } = storage.canvas;
    const x1 = x0;
    const y1 = y0;
    const x2 = Math.floor(e.offsetX / sizeRect);
    const y2 = Math.floor(e.offsetY / sizeRect);
    const { canvasSecondary } = storage.canvas;
    const ctx = canvasSecondary.getContext('2d');
    ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
    pixelData = drawLine(x1, y1, x2, y2, ctx);
  }
}

function drawPixel(e) {
  if (storage.currentTool === 'line') {
    const { canvasSecondary, sizeRect } = storage.canvas;
    const ctx = canvasSecondary.getContext('2d');
    if (drawL) {
      canvasSecondary.style.zIndex = 15;
      for (let h = 0; h < canvasSecondary.width; h += sizeRect) {
        for (let v = 0; v < canvasSecondary.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
            ctx.fillStyle = storage.colors.primaryColor;

            x0 = h / sizeRect;
            y0 = v / sizeRect;

            ctx.fillRect(h, v, sizeRect, sizeRect);
          }
        }
      }
    }
  }
}

function handleMouseDown(e) {
  drawL = true;
  drawPixel(e);
}

function handleMouseMove(e) {
  getCoords(e);
}

function handleMouseUp() {
  const { canvasSecondary } = storage.canvas;
  const { currentFrame } = storage.frame;
  const ctx = canvasSecondary.getContext('2d');
  const ctxFrame = currentFrame.children[0].getContext('2d');
  ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
  canvasSecondary.style.zIndex = 5;
  drawL = false;
  x0 = null;
  y0 = null;
  setNewDataPixels(pixelData);
  drawFinalLineOnCanvas(pixelData);
  ctxFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
  window.console.log(storage.framesData);
}

function addLineTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  storage.canvas.canvasSecondary.addEventListener('mousemove', handleMouseMove);
  storage.canvas.canvasSecondary.addEventListener('mouseup', handleMouseUp);
}

export default addLineTool;
