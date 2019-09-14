import storage from '../../components/storage';
import setFramesData from '../../components/set-frames-data';

let startR;
let startG;
let startB;
let startA;

function colorPixel(x, y, ctx) {
  const { sizeRect } = storage.canvas;
  ctx.fillStyle = storage.colors.primaryColor;
  ctx.fillRect(x * sizeRect, y * sizeRect, sizeRect, sizeRect);
  setFramesData(x * sizeRect, y * sizeRect);
}

function matchStartColor(pixelData) {
  const r = pixelData.data[0];
  const g = pixelData.data[1];
  const b = pixelData.data[2];
  const a = pixelData.data[3];

  return (r === +startR && g === +startG && b === +startB && a === +startA);
}

function getPixelsForFilling(x0, y0) {
  const { canvasElement, sizeRect } = storage.canvas;
  const ctx = canvasElement.getContext('2d');
  let x = x0;
  let y = y0;
  const pixelStack = [[x, y]];
  while (pixelStack.length) {
    const newPose = pixelStack.pop();
    [x, y] = newPose;
    let pixelData = ctx.getImageData(x * sizeRect, y * sizeRect, 1, 1);
    while (y >= 0 && matchStartColor(pixelData)) {
      y -= 1;
      pixelData = ctx.getImageData(x * sizeRect, y * sizeRect, 1, 1);
    }
    y += 1;
    pixelData = ctx.getImageData(x * sizeRect, y * sizeRect, 1, 1);
    let reachLeft = false;
    let reachRight = false;
    while (y < canvasElement.height / sizeRect && matchStartColor(pixelData)) {
      colorPixel(x, y, ctx);
      if (x > 0) {
        if (matchStartColor(ctx.getImageData((x - 1) * sizeRect, y * sizeRect, 1, 1))) {
          if (!reachLeft) {
            pixelStack.push([x - 1, y]);
            reachLeft = true;
          }
        } else if (reachLeft) {
          reachLeft = false;
        }
      }
      if (x < canvasElement.width / sizeRect - 1) {
        if (matchStartColor(ctx.getImageData((x + 1) * sizeRect, y * sizeRect, 1, 1))) {
          if (!reachRight) {
            pixelStack.push([x + 1, y]);
            reachRight = true;
          }
        } else if (reachRight) {
          reachRight = false;
        }
      }
      y += 1;
      pixelData = ctx.getImageData(x * sizeRect, y * sizeRect, 1, 1);
    }
  }
}

function paintBacket(e) {
  if (storage.currentTool === 'paintBucket') {
    const { canvasElement, sizeRect } = storage.canvas;
    const { currentFrame } = storage.frame;
    const ctx = canvasElement.getContext('2d');
    const ctxFrame = currentFrame.children[0].getContext('2d');
    for (let h = 0; h < canvasElement.width; h += sizeRect) {
      for (let v = 0; v < canvasElement.height; v += sizeRect) {
        if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
          ctx.fillStyle = storage.colors.primaryColor;
          const x0 = h / sizeRect;
          const y0 = v / sizeRect;
          const imgData = ctx.getImageData(h, v, 1, 1);
          [startR, startG, startB, startA] = imgData.data;
          getPixelsForFilling(x0, y0);
          ctxFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
        }
      }
    }
  }
}

function addPaintBacket(canvas) {
  canvas.addEventListener('click', paintBacket);
}

export default addPaintBacket;
