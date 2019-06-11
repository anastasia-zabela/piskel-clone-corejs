import storage from '../../components/storage';
import drawCanvas from '../../components/draw-canvas';
// eslint-disable-next-line import/no-cycle
import handleFrameTool from './handle-frame-tool';
import createCanvas from '../canvas/canvas';
import changeNumOfFrames from '../../components/change-num-of-frames';

let dragElem = null;

function copyNode(element) {
  const elem = element.cloneNode(true);

  createCanvas(storage.canvas.sizeCanvas);
  const currentNum = elem.getAttribute('data-num-frame');
  storage.framesData[currentNum].map(e => drawCanvas(e));

  const ctxNewFrame = elem.children[0].getContext('2d');
  ctxNewFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
  handleFrameTool(elem);
  return elem;
}

function getDragElem(e) {
  let { target } = e;
  do {
    target = target.parentNode;
  } while (target.tagName !== 'DIV');

  dragElem = target;
}

function handleDragStart(e) {
  window.console.log(dragElem);
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter() {
  window.console.log(dragElem);
  window.console.log(this);
  if (dragElem !== this) {
    this.classList.add('over');
  }
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragLeave(e) {
  e.target.classList.remove('over');
}

function handleDragEnd() {
  const over = document.querySelector('.over');

  let frames = document.getElementsByClassName('frames-contain__wrapper-frame');
  frames = Array.prototype.slice.call(frames);

  frames.map((elem) => {
    if (dragElem === elem && over !== null) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');

      over.classList.remove('over');
      over.classList.add('selected');

      const elemCopy = copyNode(elem);
      const overCopy = copyNode(over);
      elem.parentNode.replaceChild(overCopy, elem);
      over.parentNode.replaceChild(elemCopy, over);

      const currentNumElem = elemCopy.getAttribute('data-num-frame');
      const currentNumOver = overCopy.getAttribute('data-num-frame');

      const currentFrameDataElem = new Array(storage.canvas.sizeCanvas
        * storage.canvas.sizeCanvas).fill(null).map((e, i) => {
        const element = storage.framesData[currentNumOver][i];
        return element;
      });
      const currentFrameDataOver = new Array(storage.canvas.sizeCanvas
        * storage.canvas.sizeCanvas).fill(null).map((e, i) => {
        const element = storage.framesData[currentNumElem][i];
        return element;
      });

      storage.framesData[currentNumElem] = currentFrameDataElem;
      storage.framesData[currentNumOver] = currentFrameDataOver;

      storage.frame.currentFrame = overCopy;
    }
    return elem;
  });

  changeNumOfFrames();
}

function handleMoveFrameTool(frame) {
  frame.children[3].addEventListener('mousedown', getDragElem);
  frame.addEventListener('dragstart', handleDragStart);
  frame.addEventListener('dragenter', handleDragEnter);
  frame.addEventListener('dragover', handleDragOver);
  frame.addEventListener('dragleave', handleDragLeave);
  frame.addEventListener('dragend', handleDragEnd);
}

export default handleMoveFrameTool;
