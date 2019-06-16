import storage from './storage';

let pixelData;

function setPixelData(x, y) {
  const { sizeRect } = storage.canvas;
  const row = y;
  const col = x;
  const indexPiksel = storage.canvas.sizeCanvas * row + col;
  pixelData[indexPiksel] = [x * sizeRect, y * sizeRect,
    storage.canvas.sizeRect, storage.colors.primaryColor];
}

function drawLine(x1, y1, x2, y2, ctx) {
  const { sizeRect, sizeCanvas } = storage.canvas;
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
  return pixelData;
}

export default drawLine;
