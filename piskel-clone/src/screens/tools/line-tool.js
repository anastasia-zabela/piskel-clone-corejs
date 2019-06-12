import storage from '../../components/storage';
import setNewDataPixels from '../../components/set-new-data-pixels';
import drawFinalLineOnCanvas from '../../components/draw-final-line-on-canvas';

let drawL = false;
let x0 = null;
let y0 = null;
let pixelData;

function setPixelData(x, y) {
  const { sizeRect } = storage.canvas;
  const row = y;
  const col = x;
  const indexPiksel = storage.canvas.sizeCanvas * row + col;
  pixelData[indexPiksel] = [x * sizeRect, y * sizeRect,
    storage.canvas.sizeRect, storage.colors.primaryColor];
}

function drawLine(x1, y1, x2, y2) {
  const { canvasSecondary, sizeRect, sizeCanvas } = storage.canvas;
  const ctx = canvasSecondary.getContext('2d');
  ctx.clearRect(0, 0, canvasSecondary.width, canvasSecondary.height);
  pixelData = new Array(sizeCanvas * sizeCanvas).fill(null);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dx1 = Math.abs(dx);
  const dy1 = Math.abs(dy);
  let px = 2 * dy1 - dx1;
  let py = 2 * dx1 - dy1;
  let x;
  let y;
  let xe;
  let ye;
  if (dy1 <= dx1) {
    if (dx >= 0) {
      x = x1; y = y1; xe = x2;
    } else {
      x = x2; y = y2; xe = x1;
    }
    ctx.fillRect(x * sizeRect, y * sizeRect, sizeRect, sizeRect);
    setPixelData(x, y);
    for (let i = 0; x < xe; i += 1) {
      x += 1;
      if (px < 0) {
        px += 2 * dy1;
      } else {
        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
          y += 1;
        } else {
          y -= 1;
        }
        px += 2 * (dy1 - dx1);
      }
      ctx.fillRect(x * sizeRect, y * sizeRect, sizeRect, sizeRect);
      setPixelData(x, y);
    }
  } else {
    if (dy >= 0) {
      x = x1; y = y1; ye = y2;
    } else {
      x = x2; y = y2; ye = y1;
    }
    ctx.fillRect(x * sizeRect, y * sizeRect, sizeRect, sizeRect);
    setPixelData(x, y);
    for (let i = 0; y < ye; i += 1) {
      y += 1;
      if (py <= 0) {
        py += 2 * dx1;
      } else {
        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
          x += 1;
        } else {
          x -= 1;
        }
        py += 2 * (dx1 - dy1);
      }
      ctx.fillRect(x * sizeRect, y * sizeRect, sizeRect, sizeRect);
      setPixelData(x, y);
    }
  }
}

function getCoords(e) {
  if (x0 !== null && y0 !== null) {
    const { sizeRect } = storage.canvas;
    const x1 = x0;
    const y1 = y0;
    const x2 = Math.floor(e.offsetX / sizeRect);
    const y2 = Math.floor(e.offsetY / sizeRect);
    window.console.log('x1:', x1, ', y1:', y1, ', x2:', x2, ', y2:', y2);
    drawLine(x1, y1, x2, y2);
  }
}

function drawPixel(e) {
  const { canvasSecondary, sizeRect } = storage.canvas;
  const ctx = canvasSecondary.getContext('2d');
  if (storage.currentTool === 'line') {
    if (drawL) {
      canvasSecondary.style.zIndex = 15;
      for (let h = 0; h < canvasSecondary.width; h += sizeRect) {
        for (let v = 0; v < canvasSecondary.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
            ctx.fillStyle = storage.colors.primaryColor;
            window.console.log('x:', h / 25, ', y:', v / 25);
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
