import storage from '../../components/storage';
import setNewDataPixels from '../../components/set-new-data-pixels';
import drawFinalPixelsOnCanvas from '../../components/draw-final-line-on-canvas';

let drawRec = false;
let x0 = null;
let y0 = null;
let pixelData;

function setPixelData(x, y) {
  const { sizeRect } = storage.canvas;
  const indexPiksel = storage.canvas.sizeCanvas * y + x;
  pixelData[indexPiksel] = [x * sizeRect, y * sizeRect,
    storage.canvas.sizeRect, storage.colors.primaryColor];
}

function drawRect(x1, y1, x2, y2, ctx) {
  const { sizeRect, sizeCanvas } = storage.canvas;
  pixelData = new Array(sizeCanvas * sizeCanvas).fill(null);
  const dx = x2 - x1;
  const dy = y2 - y1;
  let startX;
  let startY;
  let endX;
  let endY;
  if (dx >= 0 && dy >= 0) {
    startX = x1;
    endX = x2;
    if (dy >= 0) {
      startY = y1;
      endY = y2;
    } else if (dx < 0) {
      startY = y2;
      endY = y1;
    }
  } else if (dx < 0 && dy < 0) {
    startX = x2;
    endX = x1;
    if (dy >= 0) {
      startY = y1;
      endY = y2;
    } else if (dy < 0) {
      startY = y2;
      endY = y1;
    }
  }
  for (let x = startX; x <= endX; x += 1) {
    ctx.fillRect(x * sizeRect, y1 * sizeRect, sizeRect, sizeRect);
    ctx.fillRect(x * sizeRect, y2 * sizeRect, sizeRect, sizeRect);
    setPixelData(x, y1);
    setPixelData(x, y2);
  }
  for (let y = startY; y <= endY; y += 1) {
    ctx.fillRect(x1 * sizeRect, y * sizeRect, sizeRect, sizeRect);
    ctx.fillRect(x2 * sizeRect, y * sizeRect, sizeRect, sizeRect);
    setPixelData(x1, y);
    setPixelData(x2, y);
  }
}

function getCoords(e) {
  if (drawRec) {
    if (x0 !== null && y0 !== null) {
      const { sizeRect } = storage.canvas;
      const x1 = x0;
      const y1 = y0;
      const x2 = Math.floor(e.offsetX / sizeRect);
      const y2 = Math.floor(e.offsetY / sizeRect);
      const { canvasSecondary } = storage.canvas;
      const ctx = canvasSecondary.getContext('2d');
      ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
      drawRect(x1, y1, x2, y2, ctx);
    }
  }
}

function drawPixel(e) {
  if (storage.currentTool === 'rectangle') {
    if (drawRec) {
      const { canvasSecondary, sizeRect } = storage.canvas;
      const ctx = canvasSecondary.getContext('2d');
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
  if (storage.currentTool === 'rectangle') {
    drawRec = true;
    drawPixel(e);
  }
}

function handleMouseMove(e) {
  getCoords(e);
}

function handleMouseUp() {
  if (storage.currentTool === 'rectangle') {
    const { canvasSecondary } = storage.canvas;
    const { currentFrame } = storage.frame;
    const ctx = canvasSecondary.getContext('2d');
    const ctxFrame = currentFrame.children[0].getContext('2d');
    ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
    canvasSecondary.style.zIndex = 5;
    drawRec = false;
    x0 = null;
    y0 = null;
    setNewDataPixels(pixelData);
    drawFinalPixelsOnCanvas(pixelData);
    ctxFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
  }
}

function addRectangleTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  storage.canvas.canvasSecondary.addEventListener('mousemove', handleMouseMove);
  storage.canvas.canvasSecondary.addEventListener('mouseup', handleMouseUp);
}

export default addRectangleTool;
