import storage from '../../components/storage';
import setNewDataPixels from '../../components/set-new-data-pixels';
import drawFinalPixelsOnCanvas from '../../components/draw-final-line-on-canvas';

let drawCir = false;
let x0 = null;
let y0 = null;
let pixelData;

function setPixelData(x, y) {
  const { sizeRect } = storage.canvas;
  const indexPiksel = storage.canvas.sizeCanvas * y + x;
  pixelData[indexPiksel] = [x * sizeRect, y * sizeRect,
    storage.canvas.sizeRect, storage.colors.primaryColor];
}

function putPixel(x, y) {
  const { canvasSecondary, sizeRect } = storage.canvas;
  const ctx = canvasSecondary.getContext('2d');
  ctx.fillRect(x * sizeRect, y * sizeRect, sizeRect, sizeRect);
  setPixelData(x, y);
}

function drawCircle(x1, y1) {
  const xC = Math.round((x0 + x1) / 2);
  const yC = Math.round((y0 + y1) / 2);
  const evenX = (x0 + x1) % 2;
  const evenY = (y0 + y1) % 2;
  const rX = x1 - xC;
  const rY = y1 - yC;

  for (let x = x0; x <= xC; x += 1) {
    const angle = Math.acos((x - xC) / rX);
    const y = Math.round(rY * Math.sin(angle) + yC);
    putPixel(x - evenX, y);
    putPixel(x - evenX, 2 * yC - y - evenY);
    putPixel(2 * xC - x, y);
    putPixel(2 * xC - x, 2 * yC - y - evenY);
  }
  for (let y = y0; y <= yC; y += 1) {
    const angle = Math.asin((y - yC) / rY);
    const x = Math.round(rX * Math.cos(angle) + xC);
    putPixel(x, y - evenY);
    putPixel(2 * xC - x - evenX, y - evenY);
    putPixel(x, 2 * yC - y);
    putPixel(2 * xC - x - evenX, 2 * yC - y);
  }
}

function getCoords(e) {
  if (x0 !== null && y0 !== null) {
    const { canvasSecondary, sizeRect, sizeCanvas } = storage.canvas;
    pixelData = new Array(sizeCanvas * sizeCanvas).fill(null);
    const x1 = Math.floor(e.offsetX / sizeRect);
    const y1 = Math.floor(e.offsetY / sizeRect);
    const ctx = canvasSecondary.getContext('2d');
    ctx.fillStyle = storage.colors.primaryColor;
    ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
    drawCircle(x1, y1);
  }
}

function getStartCoords(e) {
  const { canvasSecondary, sizeRect } = storage.canvas;
  canvasSecondary.style.zIndex = 15;
  for (let h = 0; h < canvasSecondary.width; h += sizeRect) {
    for (let v = 0; v < canvasSecondary.height; v += sizeRect) {
      if (h + sizeRect > e.offsetX && h <= e.offsetX
        && v + sizeRect > e.offsetY && v <= e.offsetY) {
        x0 = h / sizeRect;
        y0 = v / sizeRect;
      }
    }
  }
}

function handleMouseDown(e) {
  if (storage.currentTool === 'circle') {
    drawCir = true;
    getStartCoords(e);
  }
}

function handleMouseMove(e) {
  if (storage.currentTool === 'circle') {
    if (drawCir) {
      getCoords(e);
    }
  }
}

function handleMouseUp() {
  if (drawCir) {
    const { canvasSecondary } = storage.canvas;
    const { currentFrame } = storage.frame;
    const ctx = canvasSecondary.getContext('2d');
    const ctxFrame = currentFrame.children[0].getContext('2d');
    ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
    canvasSecondary.style.zIndex = 5;
    drawCir = false;
    x0 = null;
    y0 = null;
    window.console.log(pixelData);
    setNewDataPixels(pixelData);
    drawFinalPixelsOnCanvas(pixelData);
    ctxFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
  }
}

function addCircleTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  storage.canvas.canvasSecondary.addEventListener('mousemove', handleMouseMove);
  storage.canvas.canvasSecondary.addEventListener('mouseup', handleMouseUp);
}

export default addCircleTool;
