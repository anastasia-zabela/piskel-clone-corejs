import storage from '../../components/storage';
import Canvas from '../canvas/canvas';
import Frame from './frames';
import createPreviewAnimation from '../preview/preview-animation';
import drawCanvas from '../../components/draw-canvas';
import Background from '../../assets/background-canvas.jpg';

export default class FrameTools {
  constructor() {
    this.currentFrame = document.querySelector('.frames-contain__wrapper-frame');
    this.addFrameButton = document.querySelector('.frames-contain__frame-add');
    this.dragElem = null;
  }

  addBackgroundFrame() {
    this.currentFrame.children[0].style.background = `url(${Background})`;
  }

  static changeNum(e, i) {
    e.children[1].innerHTML = i + 1;
    e.setAttribute('data-num-frame', i);
  }

  static changeNumOfFrames() {
    let frames = document.getElementsByClassName('frames-contain__wrapper-frame');
    frames = Array.prototype.slice.call(frames);

    frames.map((elem, i) => FrameTools.changeNum(elem, i));
  }

  static getHoverTool() {
    const tools = [this.children[2], this.children[3], this.children[4]];
    tools.map(elem => elem.classList.add('visible'));
  }

  static stopHoverTool() {
    const tools = [this.children[2], this.children[3], this.children[4]];
    tools.map(elem => elem.classList.remove('visible'));
  }

  static hoverFrameTools(frame) {
    frame.addEventListener('mousemove', FrameTools.getHoverTool);
    frame.addEventListener('mouseleave', FrameTools.stopHoverTool);
  }

  handleFrameTool(frame) {
    frame.children[2].addEventListener('click', this.deleteFrame.bind(this));
    frame.children[4].addEventListener('click', this.copyFrame.bind(this));
    this.handleMoveFrameTool(frame);
    FrameTools.hoverFrameTools(frame);
    frame.addEventListener('click', this.selectFrame.bind(this));
  }

  createNewFrame(frame) {
    const newFrame = frame;
    newFrame.setAttribute('data-num-frame', storage.frame.countOfDataFrame);
    newFrame.children[1].innerHTML = storage.frame.countOfFrame;
    this.currentFrame = storage.frame.currentFrame;
    this.currentFrame.classList.remove('selected');
    storage.frame.currentFrame = newFrame;
    storage.frame.numCurrentFrame = storage.frame.countOfDataFrame;
    this.currentFrame = newFrame;
    this.currentFrame.classList.add('selected');
    this.handleFrameTool(newFrame);
    return newFrame;
  }

  addNewFrame() {
    storage.frame.countOfDataFrame += 1;
    storage.frame.countOfFrame += 1;
    let newFrame = new Frame(storage.frame.countOfDataFrame, storage.frame.countOfFrame);
    storage.framesData[storage.frame.countOfDataFrame] = new Array(storage.canvas.sizeCanvas
        * storage.canvas.sizeCanvas).fill(null);
    const newCanvas = new Canvas();
    newCanvas.createCanvas(storage.canvas.sizeCanvas);
    newFrame = this.createNewFrame(newFrame.frameContain);
    this.addFrameButton.insertAdjacentElement('beforebegin', newFrame);
    createPreviewAnimation(storage.currentFps);
    return newFrame;
  }

  deleteFrame(e) {
    let { target } = e;
    do {
      target = target.parentNode;
    } while (target.tagName !== 'DIV');

    let currentNum = target.getAttribute('data-num-frame');
    storage.framesData.splice(currentNum, 1);
    window.console.log(storage.framesData);

    if (target === storage.frame.currentFrame) {
      this.currentFrame = target.previousElementSibling;
      storage.frame.currentFrame = target.previousElementSibling;
      target.parentNode.removeChild(target);
      storage.frame.currentFrame.classList.add('selected');

      const newCanvas = new Canvas();
      newCanvas.createCanvas(storage.canvas.sizeCanvas);
      currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
      storage.frame.numCurrentFrame = currentNum;
      storage.framesData[currentNum].map(elem => drawCanvas(elem));
    } else {
      target.parentNode.removeChild(target);
    }

    storage.frame.countOfFrame -= 1;
    storage.frame.countOfDataFrame -= 1;
    FrameTools.changeNumOfFrames();
    createPreviewAnimation(storage.currentFps);
  }

  copyFrame(e) {
    let { target } = e;
    do {
      target = target.parentNode;
    } while (target.tagName !== 'DIV');

    storage.frame.countOfDataFrame += 1;
    storage.frame.countOfFrame += 1;

    const newCanvas = new Canvas();
    newCanvas.createCanvas(storage.canvas.sizeCanvas);

    const currentNum = target.getAttribute('data-num-frame');
    storage.framesData[currentNum].map(elem => drawCanvas(elem));

    const newFrame = target.cloneNode(true);
    const ctxNewFrame = newFrame.children[0].getContext('2d');
    ctxNewFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
    newFrame.children[4].addEventListener('click', this.copyFrame);

    this.createNewFrame(newFrame);
    const newFramesData = new Array(storage.canvas.sizeCanvas
      * storage.canvas.sizeCanvas).fill(null).map((elem, i) => {
      const element = storage.framesData[currentNum][i];
      return element;
    });
    storage.framesData.splice(currentNum, 0, newFramesData);

    target.insertAdjacentElement('afterend', newFrame);
    FrameTools.changeNumOfFrames();
    createPreviewAnimation(storage.currentFps);
  }

  selectFrame(event) {
    if (event.target.tagName === 'CANVAS') {
      storage.frame.currentFrame.classList.remove('selected');
      event.target.parentNode.classList.add('selected');
      this.currentFrame = event.target.parentNode;
      storage.frame.currentFrame = event.target.parentNode;
      const newCanvas = new Canvas();
      newCanvas.createCanvas(storage.canvas.sizeCanvas);

      const currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
      storage.frame.numCurrentFrame = currentNum;
      storage.framesData[currentNum].map(elem => drawCanvas(elem));
    }
  }

  copyNode(element) {
    const elem = element.cloneNode(true);

    const newCanvas = new Canvas();
    newCanvas.createCanvas(storage.canvas.sizeCanvas);
    const currentNum = elem.getAttribute('data-num-frame');
    storage.framesData[currentNum].map(e => drawCanvas(e));

    const ctxNewFrame = elem.children[0].getContext('2d');
    ctxNewFrame.drawImage(storage.canvas.canvasElement, 0, 0, 150, 150);
    this.handleFrameTool(elem);
    return elem;
  }

  getDragElem(e) {
    let { target } = e;
    do {
      target = target.parentNode;
    } while (target.tagName !== 'DIV');

    this.dragElem = target;
  }

  handleDragStart(e) {
    if (this.dragElem !== null) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  }

  handleDragEnter(e) {
    let { target } = e;
    while (!target.children[0]) {
      while (target.tagName !== 'DIV') {
        target = target.parentNode;
      }
    }
    if (target.children[0].tagName === 'CANVAS') {
      if (this.dragElem !== target) {
        target.classList.add('over');
      }
    }
  }

  static handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  static handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  handleDragEnd() {
    const over = document.querySelector('.over');

    let frames = document.getElementsByClassName('frames-contain__wrapper-frame');
    frames = Array.prototype.slice.call(frames);

    frames.map((elem) => {
      if (this.dragElem === elem && over !== null) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');

        over.classList.remove('over');
        over.classList.add('selected');

        const elemCopy = this.copyNode(elem);
        const overCopy = this.copyNode(over);
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

        this.currentFrame = overCopy;
        storage.frame.currentFrame = overCopy;
        storage.frame.numCurrentFrame = storage.frame.currentFrame.getAttribute('data-num-frame');

        this.dragElem = null;
      }
      return elem;
    });
    FrameTools.changeNumOfFrames();
  }

  handleMoveFrameTool(frame) {
    frame.addEventListener('mousedown', this.getDragElem.bind(this));
    frame.addEventListener('dragstart', this.handleDragStart.bind(this));
    frame.addEventListener('dragenter', this.handleDragEnter.bind(this));
    frame.addEventListener('dragover', FrameTools.handleDragOver);
    frame.addEventListener('dragleave', FrameTools.handleDragLeave);
    frame.addEventListener('dragend', this.handleDragEnd.bind(this));
  }

  handleAddFrameButton() {
    this.addFrameButton.addEventListener('click', this.addNewFrame.bind(this));
  }
}
