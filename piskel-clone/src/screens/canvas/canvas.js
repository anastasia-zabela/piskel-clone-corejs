import storage from '../../components/storage';
import addPenTool from '../tools/pen-tool';
import addLineTool from '../tools/line-tool';

class Canvas {
  constructor(pixels) {
    this.canvasCopy = document.querySelector('.canvas-contain__drawing-canvas');
    this.canvasSecondary = document.querySelector('.canvas-contain__secondary-canvas');
    this.canvas = this.canvasCopy.cloneNode();
    this.sizeCanvas = pixels;
    this.sizeRect = Math.floor(800 / this.sizeCanvas);
  }
}

function addEventsOnCanvas(canvas) {
  addPenTool(canvas);
  addLineTool(canvas);
}

function createCanvas(sizeCanvas) {
  const oldCanvas = document.querySelector('.canvas-contain__drawing-canvas');
  const size = new Canvas(sizeCanvas);
  const { canvas, canvasSecondary } = size;
  canvas.width = size.sizeRect * size.sizeCanvas;
  canvas.height = canvas.width;
  canvasSecondary.width = canvas.width;
  canvasSecondary.height = canvas.width;
  storage.canvas.canvasSecondary = canvasSecondary;
  storage.canvas.canvasElement = canvas;
  storage.canvas.sizeRect = size.sizeRect;
  storage.canvas.sizeCanvas = sizeCanvas;
  addEventsOnCanvas(canvas);
  storage.canvas.canvasContain.replaceChild(canvas, oldCanvas);
}

export default createCanvas;
