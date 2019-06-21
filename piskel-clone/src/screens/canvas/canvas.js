import storage from '../../components/storage';
import addPenTool from '../tools/pen-tool';
import addLineTool from '../tools/line-tool';
import addEraserTool from '../tools/eraser-tool';
import addColorPickerTool from '../tools/choose-picker-tool';
import addPaintBacket from '../tools/paint-backet-tool';
import addPaintSameColor from '../tools/paint-bucket-same-color-tool';
import addRectangleTool from '../tools/rectangle-tool';
import addCircleTool from '../tools/circle-tool';
import addDitheringTool from '../tools/dithering-tool';
import addLightenTool from '../tools/lighten-tool';
import showCoordsOfPixel from '../info-field/info';

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
  addEraserTool(canvas);
  addColorPickerTool(canvas);
  addPaintBacket(canvas);
  addPaintSameColor(canvas);
  addRectangleTool(canvas);
  addCircleTool(canvas);
  addDitheringTool(canvas);
  addLightenTool(canvas);
  showCoordsOfPixel(canvas);
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
