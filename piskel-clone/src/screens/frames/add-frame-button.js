import storage from '../../components/storage';
import Frame from './frames';
import createCanvas from '../canvas/canvas';

const addFrameButton = document.querySelector('.frames-contain__frame-add');

function createFrame() {
  storage.frame.countOfDataFrame += 1;
  storage.frame.countOfFrame += 1;
  const newFrame = new Frame(storage.frame.countOfDataFrame, storage.frame.countOfFrame);
  createCanvas(storage.canvas.sizeCanvas);
  storage.frame.currentFrame.classList.remove('selected');
  storage.frame.currentFrame = newFrame;
  storage.frame.currentFrame.classList.add('selected');
  addFrameButton.insertAdjacentElement('beforebegin', newFrame.frameContain);
}

function handleAddFrameButton() {
  addFrameButton.addEventListener('click', createFrame);
}

export default handleAddFrameButton;
