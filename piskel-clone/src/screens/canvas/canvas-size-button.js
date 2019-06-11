import createCanvas from './canvas';
import deleteFrame from '../frames/delete-frame-tool';
import storage from '../../components/storage';

const canvasSizeButton = document.querySelector('.canvas-size');

function deleteOldFrame(size) {
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
    deleteFrame(event);
    return elem;
  });
}

function changeCanvasSize(e) {
  const { target } = e;
  const size = +target.textContent;
  const oldSize = document.querySelector('.canvas-size .selected');
  oldSize.classList.remove('selected');
  target.classList.add('selected');
  deleteOldFrame(size);
  createCanvas(size);
  window.console.log(storage.framesData);
}

function handleCanvasSizeButton() {
  canvasSizeButton.addEventListener('click', changeCanvasSize);
}

export default handleCanvasSizeButton;
