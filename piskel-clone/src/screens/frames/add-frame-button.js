import storage from '../../components/storage';
import Frame from './frames';
import createCanvas from '../canvas/canvas';
import addNewFrame from '../../components/create-new-frame';

const addFrameButton = document.querySelector('.frames-contain__frame-add');

function createFrame() {
  storage.frame.countOfDataFrame += 1;
  storage.frame.countOfFrame += 1;
  const newFrame = new Frame(storage.frame.countOfDataFrame, storage.frame.countOfFrame);
  createCanvas(storage.canvas.sizeCanvas);
  addNewFrame(newFrame.frameContain);
  addFrameButton.insertAdjacentElement('beforebegin', newFrame.frameContain);
  // createPreviewAnimation(currentFps);
}

function handleAddFrameButton() {
  addFrameButton.addEventListener('click', createFrame);
}

export default handleAddFrameButton;
