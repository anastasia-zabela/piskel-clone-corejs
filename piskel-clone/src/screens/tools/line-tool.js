import storage from '../../components/storage';

let draw = false;
let x = null;
let y = null;

function drawLine(e) {
  if (x !== null && y !== null) {
    const { canvasElement, sizeRect } = storage.canvas;
    const ctx = canvasElement.getContext('2d');
    let x0 = x;
    let y0 = y;
    const x1 = Math.floor(e.offsetX / sizeRect);
    const y1 = Math.floor(e.offsetY / sizeRect);
    if (x1 !== x0 && y1 !== y0) {
      window.console.log('x1:', x1, ', y1:', y1);
      const skew = (y1 - y0) / (x1 - x0);
      let err = skew;
      if (x1 - x0 >= y1 - y0) {
        while (x0 !== x1 && y0 !== y1) {
          x0 += 1;
          if (err <= 0.5) {
            ctx.fillRect(x0 * sizeRect, y0 * sizeRect, sizeRect, sizeRect);
            err += skew;
          } else if (err > 0.5) {
            y0 += 1;
            ctx.fillRect(x0 * sizeRect, y0 * sizeRect, sizeRect, sizeRect);
            err -= skew / 2;
          }
        }
      } else if (y1 - y0 > x1 - x0) {
        while (x0 !== x1 && y0 !== y1) {
          y0 += 1;
          if (err <= 0.5) {
            x0 += 1;
            ctx.fillRect(x0 * sizeRect, y0 * sizeRect, sizeRect, sizeRect);
            err += skew;
          } else if (err > 0.5) {
            ctx.fillRect(x0 * sizeRect, y0 * sizeRect, sizeRect, sizeRect);
            err -= skew / 2;
          }
        }
      }
    }
  }
}

function drawPixel(e) {
  const { canvasElement, sizeRect } = storage.canvas;
  const ctx = canvasElement.getContext('2d');
  if (storage.currentTool === 'line') {
    if (draw) {
      for (let h = 0; h < canvasElement.width; h += sizeRect) {
        for (let v = 0; v < canvasElement.height; v += sizeRect) {
          if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
            ctx.fillStyle = storage.colors.primaryColor;
            window.console.log('x:', h / 25, ', y:', v / 25);
            x = h / sizeRect;
            y = v / sizeRect;

            ctx.fillRect(h, v, sizeRect, sizeRect);
          }
        }
      }
    }
  }
}

function handleMouseDown(e) {
  draw = true;
  drawPixel(e);
}

function handleMouseMove(e) {
  drawLine(e);
//   window.console.log('1: ', e.offsetX, e.offsetY, ', 2: ', e.offsetX, e.offsetY);
}

function handleMouseUp() {
  draw = false;
  x = null;
  y = null;
}

function addLineTool(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
}

export default addLineTool;
