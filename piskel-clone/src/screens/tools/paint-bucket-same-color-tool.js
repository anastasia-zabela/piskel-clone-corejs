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

function getPixelsForFilling() {
  const { canvasElement, sizeCanvas, sizeRect } = storage.canvas;
  const ctx = canvasElement.getContext('2d');
  for (let x = 0; x < sizeCanvas; x += 1) {
    for (let y = 0; y < sizeCanvas; y += 1) {
      const pixelData = ctx.getImageData(x * sizeRect, y * sizeRect, 1, 1);
      if (matchStartColor(pixelData)) {
        colorPixel(x, y, ctx);
      }
    }
  }
}

function paintSameColor(e) {
  if (storage.currentTool === 'paintSameColor') {
    const { canvasElement, sizeRect } = storage.canvas;
    const { currentFrame } = storage.frame;
    const ctx = canvasElement.getContext('2d');
    const ctxFrame = currentFrame.children[0].getContext('2d');
    for (let h = 0; h < canvasElement.width; h += sizeRect) {
      for (let v = 0; v < canvasElement.height; v += sizeRect) {
        if (h + sizeRect > e.offsetX && h <= e.offsetX
          && v + sizeRect > e.offsetY && v <= e.offsetY) {
          ctx.fillStyle = storage.colors.primaryColor;
          const imgData = ctx.getImageData(h, v, 1, 1);
          [startR, startG, startB, startA] = imgData.data;
          getPixelsForFilling();
          ctxFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
        }
      }
    }
  }
}

function addPaintSameColor(canvas) {
  canvas.addEventListener('click', paintSameColor);
}

export default addPaintSameColor;
