import storage from './storage';
import hoverFrameTools from './hover-frame-tools';
import handleDeleteFrameTool from '../screens/frames/delete-frame-tool';
import handleSelectFrame from './select-frames';

function addNewFrame(frame) {
  storage.framesData[storage.frame.countOfDataFrame] = new Array(storage.canvas.sizeCanvas
    * storage.canvas.sizeCanvas).fill(null);
  const newFrame = frame;
  newFrame.setAttribute('data-num-frame', storage.frame.countOfDataFrame);
  newFrame.children[1].innerHTML = storage.frame.countOfFrame;
  storage.frame.currentFrame.classList.remove('selected');
  storage.frame.currentFrame = newFrame;
  storage.frame.currentFrame.classList.add('selected');
  hoverFrameTools();
  handleDeleteFrameTool();
  handleSelectFrame();
}

export default addNewFrame;
