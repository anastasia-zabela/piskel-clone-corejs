import storage from './storage';

function setFramesData(x, y) {
  const currentNum = storage.frame.currentFrame.getAttribute('data-num-frame');
  const row = y / storage.canvas.sizeRect;
  const col = x / storage.canvas.sizeRect;
  const indexPiksel = storage.canvas.sizeCanvas * row + col;
  storage.framesData[currentNum][indexPiksel] = [x, y,
    storage.canvas.sizeRect, storage.colors.primaryColor];
}

export default setFramesData;