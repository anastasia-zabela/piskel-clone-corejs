import storage from './storage';
import createCanvas from '../screens/canvas/canvas';
import drawCanvas from './draw-canvas';

function selectFrame(e) {
  if (e.target.tagName === 'CANVAS') {
    storage.frame.currentFrame.classList.remove('selected');
    this.classList.add('selected');
    storage.frame.currentFrame = this;
    createCanvas(storage.canvas.sizeCanvas);
    const currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');

    storage.framesData[currentNum].map(elem => drawCanvas(elem));
  }
}

function handleSelectFrame() {
  storage.frame.currentFrame.addEventListener('click', selectFrame);
}

export default handleSelectFrame;
