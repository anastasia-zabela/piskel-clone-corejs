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
import InfoCoords from '../info-field/info';

class Canvas {
  constructor(pixels) {
    this.canvasCopy = document.querySelector('.canvas-contain__drawing-canvas');
    this.canvasSecondary = document.querySelector('.canvas-contain__secondary-canvas');
    this.canvasContain = document.querySelector('.canvas-contain');
    this.canvasSizeButtons = document.querySelector('.canvas-size');
    this.canvas = this.canvasCopy.cloneNode();
    this.sizeCanvas = pixels;
    this.sizeRect = Math.floor(800 / this.sizeCanvas);
    this.infoCoords = new InfoCoords();
  }

  addEventsOnCanvas(canvas) {
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
    this.infoCoords.showCoordsOfPixel(canvas);
  }

  createCanvas(sizeCanvas) {
    const oldCanvas = document.querySelector('.canvas-contain__drawing-canvas');
    const newCanvas = new Canvas(sizeCanvas);
    const { canvas, canvasSecondary } = newCanvas;
    canvas.width = newCanvas.sizeRect * newCanvas.sizeCanvas;
    canvas.height = canvas.width;
    canvasSecondary.width = canvas.width;
    canvasSecondary.height = canvas.width;
    storage.canvas.canvasSecondary = canvasSecondary;
    storage.canvas.canvasElement = canvas;
    storage.canvas.sizeRect = newCanvas.sizeRect;
    storage.canvas.sizeCanvas = sizeCanvas;
    this.addEventsOnCanvas(canvas);
    this.canvasContain.replaceChild(canvas, oldCanvas);
  }
}

export default Canvas;
