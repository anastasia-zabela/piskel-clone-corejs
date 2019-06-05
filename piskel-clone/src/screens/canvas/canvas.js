import storage from '../../components/storage';

class Canvas {
  constructor(pixels) {
    this.sizeCanvas = pixels;
    this.sizeRect = Math.floor(800 / this.sizeCanvas);
  }
}

function handleMouseDown(e) {
  const { canvasElement, sizeRect } = storage.canvas;
  const ctx = canvasElement.getContext('2d');
  if (storage.currentTool === 'pen') {
    for (let h = 0; h < canvasElement.width; h += sizeRect) {
      for (let v = 0; v < canvasElement.height; v += sizeRect) {
        if (h + sizeRect > e.offsetX && h <= e.offsetX
        && v + sizeRect > e.offsetY && v <= e.offsetY) {
          ctx.fillStyle = storage.colors.primaryColor;
          ctx.fillRect(h, v, sizeRect, sizeRect);
        }
      }
    }
  }
}

function addEventsOnCanvas(canvas) {
  canvas.addEventListener('mousedown', handleMouseDown);
//   canvas.addEventListener('mousemove', handleMouseMove);
//   canvas.addEventListener('mouseup', handleMouseUp);
}

function createCanvas(sizeCanvas) {
  const size = new Canvas(sizeCanvas);
  const canvas = document.querySelector('.canvas');
  canvas.width = size.sizeRect * size.sizeCanvas;
  canvas.height = canvas.width;
  storage.canvas.canvasElement = canvas;
  storage.canvas.sizeCanvas = sizeCanvas;
  storage.canvas.sizeRect = size.sizeRect;
  addEventsOnCanvas(canvas);
}

export default createCanvas;
