import storage from '../../components/storage';
import setFramesData from '../../components/set-frames-data';

let drawPen = false;
let x = null;
let y = null;

// eslint-disable-next-line no-unused-vars
function drawLine(h, v) {
  if (x !== null && y !== null && h !== x && v !== y) {
    const { canvasElement, sizeRect } = storage.canvas;
    const ctx = canvasElement.getContext('2d');
    const x1 = h / sizeRect;
    const y1 = v / sizeRect;
    const skew = (y1 - y) / (x1 - x);
    for (x; x < x1; x += 1) {
      for (y; y < y1; y += 1) {
        x += 1;
        y += skew;
        ctx.fillRect(x * sizeRect, Math.round(y) * sizeRect, sizeRect, sizeRect);
      }
    }
  }
}

function drawPixel(e) {
  const { canvasElement, sizeRect } = storage.canvas;
  const { currentFrame } = storage.frame;
  const ctx = canvasElement.getContext('2d');
  const ctxFrame = currentFrame.children[0].getContext('2d');
  if (storage.currentTool === 'pen') {
    if (drawPen) {
      for (let h = 0; h < canvasElement.width; h += sizeRect) {
        for (let v = 0; v < canvasElement.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
            ctx.fillStyle = storage.colors.primaryColor;
            // window.console.log('x:', h / 25, ', y:', v / 25);
            // drawLine(h, v);
            x = h / sizeRect;
            y = v / sizeRect;

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
//   window.console.log('1: ', e.offsetX, e.offsetY, ', 2: ', e.offsetX, e.offsetY);
}

function handleMouseUp() {
  drawPen = false;
  x = null;
  y = null;
}

function addPenTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
}

export default addPenTool;
