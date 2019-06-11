import storage from './storage';
// eslint-disable-next-line import/no-cycle
import handleFrameTool from '../screens/frames/handle-frame-tool';

function addNewFrame(frame) {
  storage.framesData[storage.frame.countOfDataFrame] = new Array(storage.canvas.sizeCanvas
    * storage.canvas.sizeCanvas).fill(null);
  const newFrame = frame;
  newFrame.setAttribute('data-num-frame', storage.frame.countOfDataFrame);
  newFrame.children[1].innerHTML = storage.frame.countOfFrame;
  storage.frame.currentFrame.classList.remove('selected');
  storage.frame.currentFrame = newFrame;
  storage.frame.currentFrame.classList.add('selected');
  handleFrameTool(storage.frame.currentFrame);
}

export default addNewFrame;
