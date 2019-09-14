import Canvas from './canvas';
import storage from '../../components/storage';
import FrameTools from '../frames/frame-tools';

export default class CanvasSize {
  constructor() {
    this.canvasSizeButton = document.querySelector('.canvas-size');
  }

  static deleteOldFrame(size) {
    let frames = document.querySelectorAll('.frames-contain__wrapper-frame');
    frames = Array.prototype.slice.call(frames);

    frames.map((elem, i) => {
      if (i === 0) {
        const cvs = elem.children[0];
        const ctx = cvs.getContext('2d');
        ctx.clearRect(0, 0, 150, 150);
        storage.framesData[i] = new Array(size * size).fill(null);
        return elem;
      }
      const event = {
        target: elem.children[0],
      };
      const frameTools = new FrameTools();
      frameTools.deleteFrame(event);
      return elem;
    });
  }

  static changeCanvasSize(e) {
    if (e.target.tagName === 'BUTTON') {
      const { target } = e;
      const size = +target.textContent;
      const oldSize = document.querySelector('.canvas-size .selected');
      oldSize.classList.remove('selected');
      target.classList.add('selected');
      CanvasSize.deleteOldFrame(size);
      const newCanvas = new Canvas();
      newCanvas.createCanvas(size);
      storage.framesData = [
        new Array(storage.canvas.sizeCanvas * storage.canvas.sizeCanvas).fill(null),
      ];
    }
  }

  handleCanvasSizeButton() {
    this.canvasSizeButton.addEventListener('click', CanvasSize.changeCanvasSize);
  }
}
