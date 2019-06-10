import storage from '../../components/storage';
import createCanvas from '../canvas/canvas';
import drawCanvas from '../../components/draw-canvas';
import changeNumOfFrames from '../../components/change-num-of-frames';
import createPreviewAnimation from '../preview/preview-animation';

function deleteFrame(e) {
  let { target } = e;
  do {
    target = target.parentNode;
  } while (target.tagName !== 'DIV');

  let currentNum = target.getAttribute('data-num-frame');
  storage.framesData.splice(currentNum, currentNum);

  if (target === storage.frame.currentFrame) {
    storage.frame.currentFrame = target.previousElementSibling;
    target.parentNode.removeChild(target);
    storage.frame.currentFrame.classList.add('selected');

    createCanvas(storage.canvas.sizeCanvas);
    currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
    storage.framesData[currentNum].map(elem => drawCanvas(elem));
  } else {
    target.parentNode.removeChild(target);
  }
  storage.frame.countOfFrame -= 1;
  storage.frame.countOfDataFrame -= 1;
  changeNumOfFrames();
  createPreviewAnimation(storage.currentFps);
}

function handleDeleteFrameTool() {
  storage.frame.currentFrame.children[2].addEventListener('click', deleteFrame);
}

export default handleDeleteFrameTool;
