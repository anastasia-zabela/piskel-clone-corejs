import storage from '../../components/storage';
import createCanvas from '../canvas/canvas';
import addNewFrame from '../../components/create-new-frame';
import drawCanvas from '../../components/draw-canvas';
import changeNumOfFrames from '../../components/change-num-of-frames';

function copyFrame(e) {
  let { target } = e;
  do {
    target = target.parentNode;
  } while (target.tagName !== 'DIV');

  storage.frame.countOfDataFrame += 1;
  storage.frame.countOfFrame += 1;

  createCanvas(storage.canvas.sizeCanvas);

  const currentNum = target.getAttribute('data-num-frame');
  storage.framesData[currentNum].map(elem => drawCanvas(elem));

  const newFrame = target.cloneNode(true);
  const ctxNewFrame = newFrame.children[0].getContext('2d');
  ctxNewFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
  newFrame.children[4].addEventListener('click', copyFrame);

  addNewFrame(newFrame);
  storage.framesData[storage.frame.countOfDataFrame] = new Array(storage.canvas.sizeCanvas
    * storage.canvas.sizeCanvas).fill(null).map((elem, i) => {
    const element = storage.framesData[currentNum][i];
    return element;
  });

  target.insertAdjacentElement('afterend', newFrame);
  changeNumOfFrames();
  // createPreviewAnimation(currentFps);
}

function handleCopyFrameTool() {
  storage.frame.currentFrame.children[4].addEventListener('click', copyFrame);
}

export default handleCopyFrameTool;
